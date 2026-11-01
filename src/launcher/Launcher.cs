using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Reflection;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Windows.Forms;

[assembly: AssemblyTitle("BRASA — Ecos do Brasil")]
[assembly: AssemblyDescription("BRASA: jogo de luta brasileiro para computador. Aplicativo portátil e offline.")]
[assembly: AssemblyCompany("Projeto BRASA")]
[assembly: AssemblyProduct("BRASA — Ecos do Brasil")]
[assembly: AssemblyVersion("0.16.0.0")]
[assembly: AssemblyFileVersion("0.16.0.0")]
[assembly: AssemblyInformationalVersion("0.16 PC")]
[assembly: AssemblyCopyright("Projeto BRASA. Personagens e conteúdo originais.")]

internal static class Launcher
{
    private const string ResourceName = "BRASA.Game.zip";
    private const string ManifestName = "BRASA.Resources.sha256";

    [STAThread]
    private static int Main(string[] args)
    {
        if (args.Length == 2 && args[0] == "--verify")
        {
            try { ExtractGame(Path.GetFullPath(args[1])); return 0; }
            catch (Exception error) { Console.Error.WriteLine("Falha ao verificar BRASA: " + error.Message); return 1; }
        }
        if (args.Length == 1 && args[0] == "--version") { Console.WriteLine("BRASA 0.16 PC"); return 0; }
        if (args.Length != 0) { Console.Error.WriteLine("Uso: BRASA.exe [--verify <pasta> | --version]"); return 2; }

        string gameFile = null;
        try
        {
            string appDirectory = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData), "BRASA");
            gameFile = ExtractGame(appDirectory);
            string browser = FindBrowser();
            if (browser == null)
            {
                ShowError("Não encontrei o Microsoft Edge nem o Google Chrome neste computador.\r\n\r\n" +
                    "Você pode abrir este arquivo em um navegador moderno com suporte a controles:\r\n" + gameFile +
                    "\r\n\r\nO jogo já foi extraído e funciona sem conexão com a internet.");
                return 3;
            }
            // A dedicated profile preserves controller settings without changing the user's normal profile.
            string profileDirectory = Path.Combine(appDirectory, "BrowserData");
            string gameUri = new Uri(gameFile).AbsoluteUri;
            ProcessStartInfo start = new ProcessStartInfo();
            start.FileName = browser;
            start.UseShellExecute = false;
            start.WorkingDirectory = appDirectory;
            start.Arguments = "--app=" + QuoteArgument(gameUri) +
                " --start-fullscreen --no-first-run --no-default-browser-check" +
                " --disable-background-networking --user-data-dir=" + QuoteArgument(profileDirectory);
            HashSet<IntPtr> existingWindows = SnapshotWindows();
            Process browserProcess = Process.Start(start);
            if (browserProcess == null) throw new InvalidOperationException("O navegador não iniciou.");
            browserProcess.Dispose();
            TryStartupFullscreen(existingWindows, browser);
            return 0;
        }
        catch (Exception error)
        {
            string alternative = gameFile == null ?
                "Extraia novamente o pacote para uma pasta do seu usuário e tente abrir BRASA.exe." :
                "Você também pode abrir o jogo diretamente em um navegador moderno:\r\n" + gameFile;
            ShowError("Não foi possível iniciar o BRASA.\r\n\r\n" + error.Message + "\r\n\r\n" + alternative);
            return 1;
        }
    }

    private sealed class ResourceInfo
    {
        public string Hash;
        public long Length;
    }

    private static Dictionary<string, ResourceInfo> ReadResourceManifest()
    {
        Dictionary<string, ResourceInfo> result = new Dictionary<string, ResourceInfo>(StringComparer.Ordinal);
        using (Stream stream = Assembly.GetExecutingAssembly().GetManifestResourceStream(ManifestName))
        {
            if (stream == null) throw new InvalidDataException("Manifesto do jogo não encontrado.");
            using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    if (String.IsNullOrWhiteSpace(line)) continue;
                    string[] fields = line.Split('\t');
                    long length;
                    if (fields.Length != 3 || !Regex.IsMatch(fields[0], "^[a-f0-9]{64}$") ||
                        !Int64.TryParse(fields[1], out length) || length < 0 ||
                        !Regex.IsMatch(fields[2], @"^(BRASA\.html|assets/[a-z0-9][a-z0-9_-]*\.png)$"))
                        throw new InvalidDataException("Manifesto do jogo inválido.");
                    result.Add(fields[2], new ResourceInfo { Hash = fields[0], Length = length });
                }
            }
        }
        if (!result.ContainsKey("BRASA.html") || result.Count < 2) throw new InvalidDataException("Manifesto incompleto.");
        return result;
    }

    private static string FileHash(string file)
    {
        using (SHA256 hash = SHA256.Create())
        using (FileStream input = new FileStream(file, FileMode.Open, FileAccess.Read, FileShare.Read))
            return BitConverter.ToString(hash.ComputeHash(input)).Replace("-", "").ToLowerInvariant();
    }

    private static string ExtractGame(string directory)
    {
        string root = Path.GetFullPath(directory);
        string prefix = root.TrimEnd(Path.DirectorySeparatorChar, Path.AltDirectorySeparatorChar) + Path.DirectorySeparatorChar;
        Directory.CreateDirectory(root);
        Dictionary<string, ResourceInfo> manifest = ReadResourceManifest();
        HashSet<string> extracted = new HashSet<string>(StringComparer.Ordinal);
        using (Stream resource = Assembly.GetExecutingAssembly().GetManifestResourceStream(ResourceName))
        {
            if (resource == null) throw new InvalidDataException("Os arquivos do jogo não foram encontrados. Baixe o pacote BRASA novamente.");
            using (ZipArchive archive = new ZipArchive(resource, ZipArchiveMode.Read, false))
            {
                foreach (ZipArchiveEntry entry in archive.Entries)
                {
                    ResourceInfo info;
                    string name = entry.FullName;
                    if (!manifest.TryGetValue(name, out info) || !extracted.Add(name) || entry.Length != info.Length ||
                        Path.IsPathRooted(name) || name.IndexOf('\\') >= 0 || name.IndexOf(':') >= 0)
                        throw new InvalidDataException("Arquivo inesperado no pacote BRASA.");
                    string destination = Path.GetFullPath(Path.Combine(root, name.Replace('/', Path.DirectorySeparatorChar)));
                    if (!destination.StartsWith(prefix, StringComparison.OrdinalIgnoreCase))
                        throw new InvalidDataException("Caminho de extração inválido.");
                    Directory.CreateDirectory(Path.GetDirectoryName(destination));
                    // Keep the user's profile and unchanged assets intact. Only manifest-listed files are replaced.
                    if (File.Exists(destination) && new FileInfo(destination).Length == info.Length && FileHash(destination) == info.Hash) continue;
                    string temporary = destination + "." + Guid.NewGuid().ToString("N") + ".tmp";
                    try
                    {
                        using (Stream input = entry.Open())
                        using (SHA256 hash = SHA256.Create())
                        using (FileStream output = new FileStream(temporary, FileMode.CreateNew, FileAccess.Write, FileShare.None, 65536, FileOptions.WriteThrough))
                        {
                            byte[] buffer = new byte[65536];
                            int read;
                            long total = 0;
                            while ((read = input.Read(buffer, 0, buffer.Length)) > 0)
                            {
                                total += read;
                                if (total > info.Length) throw new InvalidDataException("Arquivo maior que o esperado.");
                                hash.TransformBlock(buffer, 0, read, buffer, 0);
                                output.Write(buffer, 0, read);
                            }
                            hash.TransformFinalBlock(new byte[0], 0, 0);
                            string actual = BitConverter.ToString(hash.Hash).Replace("-", "").ToLowerInvariant();
                            if (total != info.Length || actual != info.Hash) throw new InvalidDataException("Arquivo do jogo corrompido: " + name);
                            output.Flush(true);
                        }
                        // A same-directory temporary file makes each replacement atomic.
                        if (File.Exists(destination)) File.Replace(temporary, destination, null);
                        else File.Move(temporary, destination);
                    }
                    finally
                    {
                        try { if (File.Exists(temporary)) File.Delete(temporary); }
                        catch (IOException) { }
                        catch (UnauthorizedAccessException) { }
                    }
                }
            }
        }
        if (extracted.Count != manifest.Count) throw new InvalidDataException("Arquivos ausentes no pacote BRASA.");
        return Path.Combine(root, "BRASA.html");
    }

    private static string FindBrowser()
    {
        string[] locations = new string[] {
            Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86),
            Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles),
            Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData)
        };
        string[] browserPaths = new string[] { @"Microsoft\Edge\Application\msedge.exe", @"Google\Chrome\Application\chrome.exe" };
        foreach (string browserPath in browserPaths)
            foreach (string location in locations)
            {
                if (String.IsNullOrEmpty(location)) continue;
                string candidate = Path.Combine(location, browserPath);
                if (File.Exists(candidate)) return candidate;
            }
        return null;
    }

    private static string QuoteArgument(string value)
    {
        StringBuilder result = new StringBuilder("\"");
        int slashes = 0;
        foreach (char character in value)
        {
            if (character == '\\') { slashes++; continue; }
            if (character == '"')
            {
                result.Append('\\', slashes * 2 + 1); result.Append('"'); slashes = 0; continue;
            }
            result.Append('\\', slashes); slashes = 0; result.Append(character);
        }
        result.Append('\\', slashes * 2); result.Append('"');
        return result.ToString();
    }

    private static HashSet<IntPtr> SnapshotWindows()
    {
        HashSet<IntPtr> handles = new HashSet<IntPtr>();
        try
        {
            if (!EnumWindows(delegate(IntPtr handle, IntPtr parameter) { handles.Add(handle); return true; }, IntPtr.Zero)) return null;
        }
        catch (Exception) { return null; }
        return handles;
    }

    private static void TryStartupFullscreen(HashSet<IntPtr> existingWindows, string browser)
    {
        // A running Chromium profile can ignore a later --start-fullscreen switch.
        // Touch only a newly created, exactly identified BRASA app window.
        if (existingWindows == null) return;
        IntPtr oldDpiContext = IntPtr.Zero;
        try
        {
            try
            {
                oldDpiContext = SetThreadDpiAwarenessContext(new IntPtr(-4));
                if (oldDpiContext == IntPtr.Zero) oldDpiContext = SetThreadDpiAwarenessContext(new IntPtr(-3));
                if (oldDpiContext == IntPtr.Zero) SetProcessDPIAware();
            }
            catch (EntryPointNotFoundException) { SetProcessDPIAware(); }
            Stopwatch timer = Stopwatch.StartNew();
            IntPtr candidate = IntPtr.Zero;
            long candidateSince = 0;
            while (timer.ElapsedMilliseconds < 8000)
            {
                IntPtr found = IntPtr.Zero;
                EnumWindows(delegate(IntPtr handle, IntPtr parameter)
                {
                    if (IsNewBrasaWindow(handle, existingWindows, browser)) { found = handle; return false; }
                    return true;
                }, IntPtr.Zero);
                if (found != IntPtr.Zero)
                {
                    if (found != candidate) { candidate = found; candidateSince = timer.ElapsedMilliseconds; }
                    // Let Chromium finish its normal fullscreen transition first.
                    if (timer.ElapsedMilliseconds - candidateSince >= 400)
                    {
                        if (IsNewBrasaWindow(found, existingWindows, browser)) SetBorderlessBounds(found);
                        return;
                    }
                }
                else candidate = IntPtr.Zero;
                Thread.Sleep(100);
            }
        }
        catch (Exception) { /* Optional fallback must not prevent the already launched game from opening. */ }
        finally
        {
            if (oldDpiContext != IntPtr.Zero)
                try { SetThreadDpiAwarenessContext(oldDpiContext); } catch (EntryPointNotFoundException) { }
        }
    }

    private static bool IsNewBrasaWindow(IntPtr handle, HashSet<IntPtr> existingWindows, string browser)
    {
        if (existingWindows.Contains(handle) || !IsWindowVisible(handle)) return false;
        StringBuilder title = new StringBuilder(256);
        StringBuilder className = new StringBuilder(128);
        GetWindowText(handle, title, title.Capacity);
        GetClassName(handle, className, className.Capacity);
        if (title.ToString() != "BRASA — Ecos do Brasil" || className.ToString() != "Chrome_WidgetWin_1") return false;
        uint processId;
        if (GetWindowThreadProcessId(handle, out processId) == 0) return false;
        IntPtr process = OpenProcess(0x1000, false, processId);
        if (process == IntPtr.Zero) return false;
        try
        {
            StringBuilder image = new StringBuilder(32768);
            int length = image.Capacity;
            if (!QueryFullProcessImageName(process, 0, image, ref length)) return false;
            return String.Equals(Path.GetFullPath(image.ToString()), Path.GetFullPath(browser), StringComparison.OrdinalIgnoreCase);
        }
        finally { CloseHandle(process); }
    }

    private static void SetBorderlessBounds(IntPtr handle)
    {
        IntPtr monitor = MonitorFromWindow(handle, 2);
        MonitorInfo monitorInfo = new MonitorInfo();
        monitorInfo.Size = Marshal.SizeOf(typeof(MonitorInfo));
        if (monitor == IntPtr.Zero || !GetMonitorInfo(monitor, ref monitorInfo)) return;
        NativeRect bounds = monitorInfo.Monitor;
        NativeRect outer;
        NativeRect client;
        if (GetWindowRect(handle, out outer) && GetClientRect(handle, out client) &&
            outer.Left == bounds.Left && outer.Top == bounds.Top && outer.Right == bounds.Right && outer.Bottom == bounds.Bottom &&
            client.Right - client.Left == bounds.Right - bounds.Left && client.Bottom - client.Top == bounds.Bottom - bounds.Top) return;
        const long frameStyles = 0x00C00000L | 0x00040000L;
        const long extendedFrames = 0x00000001L | 0x00000100L | 0x00000200L;
        long style = GetWindowValue(handle, -16).ToInt64();
        long extended = GetWindowValue(handle, -20).ToInt64();
        SetWindowValue(handle, -16, new IntPtr(style & ~frameStyles));
        SetWindowValue(handle, -20, new IntPtr(extended & ~extendedFrames));
        // No permanent topmost state, focus stealing, global keys or OS preference changes.
        SetWindowPos(handle, IntPtr.Zero, bounds.Left, bounds.Top, bounds.Right - bounds.Left, bounds.Bottom - bounds.Top,
            0x0020 | 0x0010 | 0x0004 | 0x0200); // FRAMECHANGED | NOACTIVATE | NOZORDER | NOOWNERZORDER
    }

    private static IntPtr GetWindowValue(IntPtr handle, int index)
    { return IntPtr.Size == 8 ? GetWindowLongPtr(handle, index) : new IntPtr(GetWindowLong(handle, index)); }
    private static void SetWindowValue(IntPtr handle, int index, IntPtr value)
    { if (IntPtr.Size == 8) SetWindowLongPtr(handle, index, value); else SetWindowLong(handle, index, value.ToInt32()); }

    [StructLayout(LayoutKind.Sequential)] private struct NativeRect { public int Left, Top, Right, Bottom; }
    [StructLayout(LayoutKind.Sequential)] private struct MonitorInfo { public int Size; public NativeRect Monitor, Work; public uint Flags; }
    private delegate bool EnumWindowCallback(IntPtr handle, IntPtr parameter);
    [DllImport("user32.dll")] private static extern bool EnumWindows(EnumWindowCallback callback, IntPtr parameter);
    [DllImport("user32.dll")] private static extern bool IsWindowVisible(IntPtr handle);
    [DllImport("user32.dll", CharSet = CharSet.Unicode)] private static extern int GetWindowText(IntPtr handle, StringBuilder text, int count);
    [DllImport("user32.dll", CharSet = CharSet.Unicode)] private static extern int GetClassName(IntPtr handle, StringBuilder text, int count);
    [DllImport("user32.dll")] private static extern uint GetWindowThreadProcessId(IntPtr handle, out uint processId);
    [DllImport("kernel32.dll")] private static extern IntPtr OpenProcess(uint access, bool inheritHandle, uint processId);
    [DllImport("kernel32.dll", CharSet = CharSet.Unicode)] private static extern bool QueryFullProcessImageName(IntPtr process, uint flags, StringBuilder image, ref int length);
    [DllImport("kernel32.dll")] private static extern bool CloseHandle(IntPtr handle);
    [DllImport("user32.dll")] private static extern IntPtr MonitorFromWindow(IntPtr handle, uint flags);
    [DllImport("user32.dll", CharSet = CharSet.Unicode)] private static extern bool GetMonitorInfo(IntPtr monitor, ref MonitorInfo info);
    [DllImport("user32.dll")] private static extern bool GetWindowRect(IntPtr handle, out NativeRect rect);
    [DllImport("user32.dll")] private static extern bool GetClientRect(IntPtr handle, out NativeRect rect);
    [DllImport("user32.dll", EntryPoint = "GetWindowLongPtrW")] private static extern IntPtr GetWindowLongPtr(IntPtr handle, int index);
    [DllImport("user32.dll", EntryPoint = "GetWindowLongW")] private static extern int GetWindowLong(IntPtr handle, int index);
    [DllImport("user32.dll", EntryPoint = "SetWindowLongPtrW")] private static extern IntPtr SetWindowLongPtr(IntPtr handle, int index, IntPtr value);
    [DllImport("user32.dll", EntryPoint = "SetWindowLongW")] private static extern int SetWindowLong(IntPtr handle, int index, int value);
    [DllImport("user32.dll")] private static extern bool SetWindowPos(IntPtr handle, IntPtr after, int x, int y, int width, int height, uint flags);
    [DllImport("user32.dll")] private static extern IntPtr SetThreadDpiAwarenessContext(IntPtr context);
    [DllImport("user32.dll")] private static extern bool SetProcessDPIAware();
    private static void ShowError(string message)
    { MessageBox.Show(message, "BRASA — Ecos do Brasil", MessageBoxButtons.OK, MessageBoxIcon.Information); }
}
