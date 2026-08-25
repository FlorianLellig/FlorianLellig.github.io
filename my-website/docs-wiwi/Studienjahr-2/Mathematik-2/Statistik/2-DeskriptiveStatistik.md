# 2. Deskriptive Statistik

## 2.1 - Häufigkeitsverteilungen
:::note
Häufigkeitsverteilungen betrachten, wie oft etwas prozentual vorkommt.
:::

### 2.1.1 - Relative Häufigkeit
Die relative Häufigkeit gibt an, welchen **Anteil eine Merkmalsausprägung an der Gesamtheit aller Beobachtungen** hat. Sie ist ein gängiges Tool zur Anwendung auf die Norminalskalierung, kann aber auch auf alle Skalenniveaus angewendet werden.

$$
p_{ i }=\frac{ f_{ i } }{ N }
$$

- $p_{ i }$ gibt dabei den Wert der relativen Häufigkeit an
    - Relative Häufigkeit = prozentuale (als Dezimalzahl) dargestellte Ausprägung
- $f_{ i }$ gibt dabei den Wert der absoluten Häufigkeit an
    - Absolute Häufigkeit = genaue Anzahl an Ausprägungen
- $N$ gibt dabei den Stichprobenumfang, sprich die genaue Anzahl aller durchgeführten Beobachtungen an

#### Beispiel:
| Tätigkeitsbereich | f<sub>i</sub> | p<sub>i</sub> |
|-------------------|---------------|---------------|
| Vertrieb          | 10            | 0,05          |
| Produktion        | 136           | 0,68          |
| Verwaltung        | 54            | 0,27          |

$p_{ i }$ ist dabei mittels Formel berechnet worden, $N$ ist hierbei $200$ (da $10+136+54=200$)

:::tip
Bei Grafischer Darstellung wählt man i.d.R. ein Säulen- bzw. Liniendiagramm zur Darstellung.
:::

### 2.1.2 - Emperische Verteilungsfunktion
Die emperische Verteilungsfunktion gibt die **Summe aller bis zu dem jeweiligen Punkt gelisteten Wahrscheinlichkeiten** an. Die Anwendung ist nur bei **mindestens einem ordinalen Skalenniveau sinnvoll**.

$$
F_{i} = \sum_{j=1}^{i} p_{j}
$$

- $F_{i}$ ist der Wert der emperischen Verteilungsfunktion

#### Beispiel:
| Bewertung      | f<sub>i</sub> | p<sub>i</sub> | F<sub>i</sub> | Nebenrechnung                   |
|----------------|---------------|---------------|---------------|---------------------------------|
| sehr gut       | 30            | 0,15          | 0,15          | 0,15
| gut            | 90            | 0,45          | 0,60          | 0,15 + 0,45
| befriedigend   | 60            | 0,30          | 0,90          | 0,15 + 0,45 + 0,30
| ausreichend    | 20            | 0,10          | 1,00          | 0,15 + 0,45 + 0,30 + 0,10
| schlecht       | 0             | 0,00          | 1,00          | 0,15 + 0,45 + 0,30 + 0,10 + 0,00

> 0,9 sprich 90% haben eine befriedigende oder bessere Note.

:::tip
Bei Grafischer Darstellung wählt man i.d.R. ein Stufendiagramm zur Darstellung.
:::

### 2.1.3 - Klassenbildung
Das Bilden von Klassen ermöglicht eine übersichtlicherere Darstellung von Bereichen.

| Verdienst        | f<sub>i</sub> | p<sub>i</sub> | F<sub>i</sub> | Klassenmitte |
|------------------|---------------|---------------|---------------|--------------|
| 7,5 b.u. 12,5    | 10            | 0,05          | 0,05          | 10           |
| 12,5 b.u. 17,5   | 20            | 0,10          | 0,15          | 15           |
| 17,5 b.u. 22,5   | 24            | 0,12          | 0,27          | 20           |
| 22,5 b.u. 27,5   | 36            | 0,18          | 0,45          | 25           |
| 27,5 b.u. 32,5   | 40            | 0,20          | 0,65          | 30           |
| 32,5 b.u. 37,5   | 60            | 0,30          | 0,95          | 35           |
| 37,5 b.u. 42,5   | 10            | 0,05          | 1,00          | 40           |

:::tip
Es empfiehlt sich alle Klassen zu schließen. Dies ermöglicht trotz fehlender Originaldaten mittels Klassenmittenwert eine Art Durchschnittsberechnung durchzuführen.
:::

#### Formel von Sturges:
Die Formel von Sturges stellt ein Hifsmittel zur Bestimmung einer optimalen Anzahl von Klassen dar. 

$$
k=1+3,3219 * \log(N)
$$

#### Normierte relative Häufigkeit
:::info
Normiert kommt von _Normalisieren_ und bedeutet in diesem Kontext, dass man mittels Teilen durch den Bezugswert versucht, eine Größe unabhängig und vergleichbar zu machen.
:::

- Normierte relative Häufigkeit macht zur Berechnung dann Sinn, wenn man mit unterschiedlichen Klassenbreiten arbeitet, dann gilt:

$$
p_{i}^{*} =\frac{p_{i}}{c_{i}}
$$ 

- $p_{i}^{*}$ stellt die **normierte relative Häufigkeit** dar, d.h. eine unabhängige und vergleichbare Größe
- $p_{i}$ stellt die **relative (nicht normierte) Häufigkeit** dar
- $c_{i}$ stellt die **Klassenbreite** dar

:::note
**Beispiel:**

_Im folgenden ist eine modifizierte Tabelle der Nettostundenlöhne aufgeführt, diese Tabelle ist **nur für dieses Beispiel relevant.**_

| Verdienst | f<sub>i</sub> | p<sub>i</sub> | c<sub>i</sub> | F<sub>i</sub> | p<sub>i</sub>* | Erläuterung |
|-----------|---------------|---------------|---------------|---------------|----------------|-------------|
| 7,5 b.u. 17,5  | 30 | 0,15 | 10 | 0,15 | 0,015 | _Auf jeder Längeneinheit dieser Klasse liegen im Schnitt 1,5% der Personen_ |
| 17,5 b.u. 22,5 | 24 | 0,12 |  5 | 0,27 | 0,024 | _Auf jeder Längeneinheit dieser Klasse liegen im Schnitt 2,4% der Personen_ |
| 22,5 b.u. 27,5 | 36 | 0,18 |  5 | 0,45 | 0,036 | _Auf jeder Längeneinheit dieser Klasse liegen im Schnitt 3,6% der Personen_ |
| 27,5 b.u. 32,5 | 40 | 0,20 |  5 | 0,65 | 0,040 | _Auf jeder Längeneinheit dieser Klasse liegen im Schnitt 4,0% der Personen_ |
| 32,5 b.u. 42,5 | 70 | 0,35 | 10 | 1,00 | 0,035 | _Auf jeder Längeneinheit dieser Klasse liegen im Schnitt 3,5% der Personen_ |

> Multipliziert und addiert man all diese Werte (10 x 0,015 + 5 x 0,024 + ...) so erhält man den Wert 1. 
:::

## 2.2 - Lageparameter
Lageparameter dienen zur Beschreibung von Beobachtungswerten einer statistischen Masse. 
:::info
Welcher Lageparameter genutzt wird, hängt vom **Skalenniveau** und der **Fragestellung** ab. Zudem reagieren die Parameter unterschiedlich stark auf **Ausreißer**.
:::

### 2.2.1 - (Einfaches) Arithmetisches Mittel

$$ 
\bar{X} = \mu = \frac{ 1 }{ N } * \sum_{i=1}^{N} x_{i}
$$

:::note
**Beispiel:**

- Gegeben ist ein Unternehmensgewinn von 1Mio, 2Mio, 2Mio und 3Mio für insg. 4 Jahre
Lösung:

$$ 
\bar{X} = \mu = \frac{ 1 }{ N } * \sum_{i=1}^{N} x_{i} = \frac{ 1 }{ 4 } * 8 Mio = 2 Mio
$$
:::

### 2.2.2 - (Gewogenes) Arithmetisches Mittel
> Hierbei bietet es sich an, mit den Klassenwerten ($x_{i}^{*}$) zu arbeiten.

$$
\bar{X} = \mu = \frac{1}{N} \cdot \sum x_{i}^{*} \cdot f_{i} = \sum x_{i}^{*} \cdot p_{i}
$$

:::note
**Beispiel:**
| Verdienst        | f<sub>i</sub> | p<sub>i</sub> | F<sub>i</sub> | Klassenmitte |
|------------------|---------------|---------------|---------------|--------------|
| 7,5 b.u. 12,5    | 10            | 0,05          | 0,05          | 10           |
| 12,5 b.u. 17,5   | 20            | 0,10          | 0,15          | 15           |
| 17,5 b.u. 22,5   | 24            | 0,12          | 0,27          | 20           |
| 22,5 b.u. 27,5   | 36            | 0,18          | 0,45          | 25           |
| 27,5 b.u. 32,5   | 40            | 0,20          | 0,65          | 30           |
| 32,5 b.u. 37,5   | 60            | 0,30          | 0,95          | 35           |
| 37,5 b.u. 42,5   | 10            | 0,05          | 1,00          | 40           |

**Lösung:**
$$
\bar{X} = \mu = \frac{1}{200} \cdot (10 \cdot 10 + 15 \cdot 20 + 20 \cdot 24 + 25 \cdot 36 + 30 \cdot 40 + 35 \cdot 60 + 40 \cdot 10) = 27,40€
$$

oder
$$
\bar{X} = \mu = 10 \cdot 0,05 + 15 \cdot 0,1 + 20 \cdot 0,12 + [...] = 27,4€
$$
:::

:::danger
Im Vergleich zur Durchführung des einfachen arithmetischen Mittels mit Originaldaten hat man beim gewogenen arithmetischen Mittel durch die Klassen immer einen Informationsverlust.
:::

### 2.2.3 - Geometrisches Mittel

$$
\bar{G} = \sqrt[N]{\prod_{i=1}^{N} x_i} \qquad \text{mit} \qquad x_i = 1 + \frac{\text{relative Änderung in \%}}{100}
$$
:::warning
Bei Veränderungsraten wie z.B. Umsatzwachstum fürt das arithmetische Mittel zu falschen Ergebnissen. Daher sollte hierbei auf das geobetrische Mittel zurückgegriffen werden.
:::

:::note
**Beispiel: Gewinn eines Unternehmens über 4 Jahre**

|      | Gewinn | %-Veränderung | x<sub>i</sub> |
|------|--------|---------------|---------------|
| 2022 | 1 Mio  | /             | /             |
| 2023 | 2 Mio  | + 100%        | 2             |
| 2024 | 2 Mio  | + 0%          | 1             |
| 2025 | 3 Mio  | + 50%         | 1,5           |

Durchschnittliches Gewinnwachstum Prozentual muss mittels geometrischem Mittel bestimmt werden.

$$
\bar{G} = \sqrt[3]{2 \cdot 1 \cdot 1,5} = \sqrt[3]{3} = 1,442
$$
Das prozentuale Gewinnwachstum ist also 44,2 %.

Hinweis, die _3_ unter der Wurzel lässt sich auch mittels $\frac{Anfangswert}{Endwert}$ bestimmen.

Probe: $1 Mio \cdot 1,442 \cdot 1,442 \cdot 1,442 = 3 Mio$
:::

### 2.2.4 - Zentralwert (Median)

Es gilt: mindestens Ordinalität, da eine Sortierung vorausgesetzt wird.

**Zentralwert bei ungruppiertem Datenmaterial:**

$$
Z = x_{\frac{N+1}{2}} \qquad \text{für N ungerade}
$$

$$
Z = \frac{1}{2} \cdot \left[ x_{\frac{N}{2}} + x_{\frac{N+2}{2}} \right] \qquad \text{für N gerade}
$$

**Zentralwert bei gruppiertem Datenmaterial:**

- Bei quantitativ-diskreten Merkmalen: $Z$ = Klasse, in der $F_i$ den Wert $0{,}5$ erreicht
- Bei quantitativ-stetigen Merkmalen:

$$
Z = x_z^l + c_z \cdot \frac{0{,}5 - F_{Z-1}}{p_z}
$$

:::tip
Der Wert 0,5 gilt für den Median und kann beim Arbeiten mit anderen Unterteilungen ersetzt werden:
- Quartil: teilen in 4 Bereiche -> Einsetzen von 0,25; 0,5; ...
- Dezil:   teilen in 10 Bereiche -> Einsetzen von 0,1; 0,2; ...
- Perzentil: teilen in 100 Bereiche -> Einsetzen von 0,01; 0,02; ...
:::

:::note
**Beispiel: Monatsgehälter in einem Unternehmen**
> 2000€, 2000€, 2000€, 2500€, 2500€, 3000€, 3000€, 3000€, **970000€**

Bei diesen Werten sagt das arithmetische Mittel aus, das man in dem Unternehmen in Durchschnitt 110.000 Euro verdienen kann. **Dies ist keine gute Aussage.**

**Lösung:**
$$
Z = x_{\frac{N+1}{2}} = 2500 €
$$
:::

:::note
**Beispiel: Nettostundenlöhne**
$$
Z = x_z^l + c_z \cdot \frac{0{,}5 - F_{Z-1}}{p_z} = 27,5 + 5 \cdot \frac{0{,}5 - 0{,}45}{0{,}2} = 28,75€
$$
:::

### 2.2.5 - Modus

Bei jedem Skalenniveau ist der **Modus** ermittelbar. Dies ist derjenige Wert, der am häufigsten auftritt.

Bei Klassen mit quantitativ-stetigen Merkmalen erfolgt eine Feinberechnung des Modus:

$$
M = x_M^l + c_M \cdot \frac{\Delta 1}{\Delta 1 + \Delta 2} \qquad (\Delta 1 = p_M - p_{M-1},\ \Delta 2 = p_M - p_{M+1})
$$

$x_M^l$ steht für _lower_ und stellt die untere Grenze 

:::tip
Bei unterschiedlichen Klassenbreiten sind die relativen Häufigkeiten zu **normieren**.
:::

:::note
**Beispiel: Geschlechterverteilung im WWI25SEA Kurs**
>Welches Geschlecht kommt am Häufigsten vor?
Lösung: Männlich
:::

:::note
**Beispiel: Nettostundenverdienste**
| Verdienst        | f<sub>i</sub> | p<sub>i</sub> | F<sub>i</sub> | Klassenmitte |
|------------------|---------------|---------------|---------------|--------------|
| 7,5 b.u. 12,5    | 10            | 0,05          | 0,05          | 10           |
| 12,5 b.u. 17,5   | 20            | 0,10          | 0,15          | 15           |
| 17,5 b.u. 22,5   | 24            | 0,12          | 0,27          | 20           |
| 22,5 b.u. 27,5   | 36            | 0,18          | 0,45          | 25           |
| 27,5 b.u. 32,5   | 40            | 0,20          | 0,65          | 30           |
| 32,5 b.u. 37,5   | 60            | 0,30          | 0,95          | 35           |
| 37,5 b.u. 42,5   | 10            | 0,05          | 1,00          | 40           |

**Lösung für die Klasse 32,5 b.u. 37,5:**
$$
M = x_M^l + c_M \cdot \frac{\Delta 1}{\Delta 1 + \Delta 2} = 32,5 + 5 \cdot \frac{0,3-0,2}{(0,3-0,2) + (0,3-0,05)} = 33,93€
$$
:::

## 2.2.6 - Fechnersche Lageregel

Die Fechnersche Lageregel beschreibt, wie die drei Lageparameter Mittelwert ($\bar{X}$), Median ($Z$) und Modus ($M$) zueinander liegen — und lässt damit Rückschlüsse auf die **Form der Verteilung** zu:

| Bedingung | Verteilungsform |
|-----------|-----------------|
| $\bar{X} = Z = M$ | symmetrische Verteilung |
| $\bar{X} > Z > M$ | linkssteil (= rechtsschiefe Verteilung) |
| $\bar{X} < Z < M$ | rechtssteil (= linksschiefe Verteilung) |

:::tip
Faustregel: Zieht der Ausreißer den Mittelwert nach rechts ($\bar{X}$ am größten), ist die Verteilung **rechtsschief** — der „Schweif" zeigt nach rechts.
:::
