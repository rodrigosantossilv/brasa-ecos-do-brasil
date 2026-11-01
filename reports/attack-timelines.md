# Timelines observadas — 60 Hz

Uma linha por ataque. S=timer de startup; A=envelope ativo; R=recovery. X=contato corpo a corpo elegível sem alvo; P=projétil já liberado; C=consulta contrafactual de cancel confirmado; I=invulnerável. Cada coluna é um tick desde a criação. Super usa fase global, sem timeline S/A/R. Ar aéreo medido a y=10000 para não truncar no pouso.

## bento / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bento / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## ramiro / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ramiro / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## jana / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14
STATE   S   S   S   A   A   A   A   A   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   X   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   C   C   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14
STATE   S   S   S   A   A   A   A   A   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   X   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   C   C   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14
STATE   S   S   S   A   A   A   A   A   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   X   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   C   C   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jana / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## caua / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13
STATE   S   S   S   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13
STATE   S   S   S   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13
STATE   S   S   S   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caua / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## nara / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nara / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## tiao / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12
STATE   S   S   S   A   A   A   R   R   R   R   R   R
BOX     .   .   .   X   X   X   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12
STATE   S   S   S   A   A   A   R   R   R   R   R   R
BOX     .   .   .   X   X   X   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12
STATE   S   S   S   A   A   A   R   R   R   R   R   R
BOX     .   .   .   X   X   X   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tiao / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## breu / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## breu / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## damiao / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## damiao / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## lia / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13
STATE   S   S   S   A   A   A   A   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   C   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13
STATE   S   S   S   A   A   A   A   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   C   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13
STATE   S   S   S   A   A   A   A   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   C   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   I   I   I   I   I   I   I   I   I   I   I   I   I   I   I   I   I   I   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lia / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## iris / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## iris / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## rosa / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rosa / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## augusto / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## augusto / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## valter / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## valter / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## serena / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## serena / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## caio / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## caio / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## davi / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14
STATE   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14
STATE   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14
STATE   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## davi / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## luz / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luz / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## ti / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ti / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## brick / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## brick / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## steele / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## steele / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## voltx / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## voltx / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## jack / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50
STATE   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   I   I   I   I   I   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## jack / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## homer / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## homer / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## gloria / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## gloria / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## dusty / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dusty / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## roxy / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## roxy / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## silas / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## silas / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## boris / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## boris / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## irina / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## irina / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## yuri / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yuri / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## vera / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vera / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## maksim / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## maksim / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## anya / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## anya / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## lev / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lev / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## nikolai / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nikolai / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## zoya / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## zoya / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## ren / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## ren / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## aya / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## aya / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## daigo / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## daigo / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## kitsune / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## kitsune / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## tetsu / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tetsu / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## akari / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## akari / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## goro / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## goro / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## mika / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mika / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## shiori / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shiori / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## liang / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## liang / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## mei / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## mei / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## barro / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## barro / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## lin / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   I   I   I   I   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## lin / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## bo / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bo / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## qiao / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## qiao / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## shen / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## shen / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## long / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## long / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## yan / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## yan / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## marco / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## marco / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## vittoria / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## vittoria / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## luca / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## luca / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## belladonna / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## belladonna / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## enzo / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## enzo / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## bianca / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bianca / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## rocco / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## rocco / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## tenor / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tenor / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## nonna / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## nonna / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## arthur / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## arthur / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## dex / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## dex / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## grey / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20
STATE   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## grey / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## eleanor / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   I   I   I   I   I   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## eleanor / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## tommy / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50
STATE   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## tommy / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## morgan / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21
STATE   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## morgan / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## alfie / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29
STATE   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34
STATE   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## alfie / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## clockwork / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## clockwork / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## bram / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18
STATE   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## bram / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## selene / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
STATE   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32
STATE   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38
STATE   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## selene / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## regolith / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23
STATE   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40
STATE   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64  65
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54  55  56  57  58  59  60  61  62  63  64
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## regolith / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## umbriel / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42
STATE   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33
STATE   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   I   I   I   I   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## umbriel / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

## apogeu / standing_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / standing_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / standing_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / crouching_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / crouching_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / crouching_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / air_light

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15
STATE   S   S   S   S   A   A   A   A   R   R   R   R   R   R   R
BOX     .   .   .   .   X   X   X   X   .   .   .   .   .   .   .
CANCEL   .   .   .   .   C   C   C   C   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / air_heavy

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / air_kick

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22
STATE   S   S   S   S   S   S   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   C   C   C   C   C   C   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / grab

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30
STATE   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / special0

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47  48  49  50  51  52  53  54
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / special1

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36  37  38  39  40  41  42  43  44  45  46  47
STATE   S   S   S   S   S   S   S   S   S   S   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   X   X   X   X   X   X   X   X   X   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / special2

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35
STATE   S   S   S   S   S   S   S   S   S   S   S   S   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P   P
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / defense

```text
FRAME   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17  18  19  20  21  22  23  24  25  26  27  28  29  30  31  32  33  34  35  36
STATE   S   S   A   A   A   A   A   A   A   A   A   A   A   A   A   A   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R   R
BOX     .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
CANCEL   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
INVULN   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .   .
```

## apogeu / super

```text
NÃO APLICÁVEL: super cinematic; 101 update ticks
```

