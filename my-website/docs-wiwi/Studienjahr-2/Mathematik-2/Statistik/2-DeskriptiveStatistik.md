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

### 2.2.6 - Fechnersche Lageregel

Die Fechnersche Lageregel beschreibt, wie die drei Lageparameter Mittelwert ($\bar{X}$), Median ($Z$) und Modus ($M$) zueinander liegen — und lässt damit Rückschlüsse auf die **Form der Verteilung** zu:

| Bedingung | Verteilungsform |
|-----------|-----------------|
| $\bar{X} = Z = M$ | symmetrische Verteilung |
| $\bar{X} > Z > M$ | linkssteil (= rechtsschiefe Verteilung) |
| $\bar{X} < Z < M$ | rechtssteil (= linksschiefe Verteilung) |

:::tip
Faustregel: Zieht der Ausreißer den Mittelwert nach rechts ($\bar{X}$ am größten), ist die Verteilung **rechtsschief** — der „Schweif" zeigt nach rechts.
:::

## 2.3 - Streuungsparameter

Lageparameter beschreiben, **wo** die Beobachtungswerte liegen (ihr Zentrum). Streuungsparameter beschreiben, **wie weit** die Beobachtungswerte um dieses Zentrum bzw. voneinander **streuen**. Erst beide zusammen geben ein vollständiges Bild einer Verteilung.

:::info
Zwei Datensätze können denselben Lageparameter haben und trotzdem völlig unterschiedlich aussehen. Welcher Streuungsparameter genutzt wird, hängt – wie bei den Lageparametern – vom **Skalenniveau** ab.
:::

### 2.3.1 - Spannweite

Die **Spannweite** (engl. *Range*) ist der einfachste Streuungsparameter. Sie gibt an, **wie weit der größte und der kleinste Beobachtungswert auseinanderliegen**.

- Anwendbar ab **Ordinalskala** (eine Sortierung muss möglich sein) sowie bei **Kardinalskala**
- Es gehen nur **zwei Werte** in die Berechnung ein – die Spannweite reagiert daher sehr empfindlich auf **Ausreißer**

$$
R = x_{i(max)} - x_{i(min)}
$$

- $R$ ist die Spannweite
- $x_{i(max)}$ ist der größte, $x_{i(min)}$ der kleinste Beobachtungswert

:::tip Warum reicht der Lageparameter allein nicht?
- Die Werte $1,\ 1,\ 2,\ 2,\ 2,\ 3,\ 3$ haben das arithmetische Mittel $\bar{X} = 2$ und die Spannweite $R = 3 - 1 = 2$
- Die Werte $2,\ 2,\ 2,\ 2,\ 2,\ 2,\ 2$ haben **ebenfalls** das arithmetische Mittel $\bar{X} = 2$, aber die Spannweite $R = 2 - 2 = 0$

Beide Datensätze haben denselben Mittelwert – im zweiten Fall streuen die Werte aber **gar nicht**. Genau diesen Unterschied macht erst der Streuungsparameter sichtbar.
:::

:::note
**Beispiel: Nettostundenverdienste**

Bei klassierten Daten wird die Spannweite aus der **oberen Grenze der letzten Klasse** und der **unteren Grenze der ersten Klasse** gebildet:

$$
R = x_{i(max)} - x_{i(min)} = 42{,}5 - 7{,}5 = 35€
$$
:::

:::info Quartilabstand und Dezilabstand
Da die Spannweite so stark von Ausreißern abhängt, gibt es robustere Varianten, bei denen die Ränder der Verteilung abgeschnitten werden:
- **Quartilabstand:** Abstand zwischen dem 1. und dem 3. Quartil ($Q_3 - Q_1$). Die untersten 25 % und die obersten 25 % der Werte werden ignoriert – übrig bleibt die Spannweite der **mittleren 50 %**
- **Dezilabstand:** Abstand zwischen dem 1. und dem 9. Dezil ($D_9 - D_1$). Die untersten 10 % und die obersten 10 % werden ignoriert – übrig bleibt die Spannweite der **mittleren 80 %**

Die Quartile bzw. Dezile werden dabei wie der Median berechnet (vgl. Abschnitt 2.2.4), nur mit $0{,}25$ und $0{,}75$ bzw. $0{,}1$ und $0{,}9$ statt $0{,}5$.
:::

### 2.3.2 - Mittlere absolute Abweichung (MAD)

Die **mittlere absolute Abweichung** (engl. *Mean Absolute Deviation*) gibt an, **wie weit die Beobachtungswerte im Durchschnitt vom arithmetischen Mittel entfernt liegen**. Der Grundgedanke: *Streuung ist Abweichung von der Mitte.*

- Anwendbar bei **Kardinalskala**, da Differenzen zum Mittelwert gebildet werden
- In der Praxis **wenig gebräuchlich**, aber **gut interpretierbar**, weil das Ergebnis in derselben Einheit wie die Daten vorliegt (z.B. „im Schnitt 1 Mio € Abweichung“)

$$
MAD = \frac{1}{N} \cdot \sum_{i=1}^{N} \lvert x_i - \bar{X} \rvert
$$

- $x_i - \bar{X}$ ist die Abweichung des einzelnen Wertes vom arithmetischen Mittel
- Der **Betrag** ist nötig, weil sich positive und negative Abweichungen sonst gegenseitig aufheben – die Summe aller Abweichungen $\sum (x_i - \bar{X})$ ist **immer 0**

:::note
**Beispiel: Gewinne von 4 Unternehmen in Mio €**

|               | $x_i$ | $x_i - \bar{X}$ | $\lvert x_i - \bar{X} \rvert$ | $(x_i - \bar{X})^2$ |
|---------------|-------|-----------------|-------------------------------|---------------------|
| Unternehmen 1 | 1     | −2              | 2                             | 4                   |
| Unternehmen 2 | 3     | 0               | 0                             | 0                   |
| Unternehmen 3 | 3     | 0               | 0                             | 0                   |
| Unternehmen 4 | 5     | 2               | 2                             | 4                   |
| $\sum$        | 12    | 0               | 4                             | 8                   |

**Nebenrechnung – arithmetisches Mittel:**

$$
\bar{X} = \frac{1}{N} \cdot \sum_{i=1}^{N} x_i = \frac{1}{4} \cdot 12 = 3 \text{ Mio €}
$$

**Berechnung:**

$$
MAD = \frac{1}{N} \cdot \sum_{i=1}^{N} \lvert x_i - \bar{X} \rvert = \frac{1}{4} \cdot 4 = 1 \text{ Mio €}
$$

Die Gewinne weichen also im Durchschnitt um **1 Mio €** vom mittleren Gewinn von 3 Mio € ab.

Die Spalte $\sum (x_i - \bar{X}) = 0$ zeigt, warum der Betrag gebildet werden muss. Die letzte Spalte mit den **quadrierten** Abweichungen wird später für die Varianz benötigt.
:::

### 2.3.3 - Varianz und Standardabweichung

Die **Varianz** ist der wichtigste Streuungsparameter. Wie die MAD misst sie die Abweichung der Beobachtungswerte vom arithmetischen Mittel – allerdings werden die Abweichungen nicht als Betrag genommen, sondern **quadriert**.

- Anwendbar bei **Kardinalskala**
- Durch das Quadrieren fallen die Vorzeichen weg (wie beim Betrag), **große Abweichungen werden aber stärker gewichtet** als kleine
- Die Varianz ist mathematisch deutlich besser handhabbar als der Betrag und daher die Grundlage für viele weitere statistische Verfahren

**Varianz für ungruppierte Daten:**

$$
S^2 = \sigma^2 = \frac{1}{N} \cdot \sum_{i=1}^{N} \left( x_i - \bar{X} \right)^2 = \frac{\sum x_i^2}{N} - \bar{X}^2
$$

- Links steht die **Definitionsformel**: durchschnittliche quadrierte Abweichung vom Mittelwert
- Rechts steht die **Rechenformel** (Verschiebungssatz): Mittelwert der quadrierten Werte minus Quadrat des Mittelwerts. Sie spart die Abweichungsspalte und führt zum selben Ergebnis

**Varianz für gruppierte Daten:**

$$
S^2 = \sigma^2 = \frac{1}{N} \cdot \sum_{i=1}^{k} f_i \cdot \left( x_i^* - \bar{X} \right)^2 = \frac{1}{N} \cdot \sum_{i=1}^{k} f_i \cdot x_i^{*2} - \bar{X}^2
$$

- $k$ ist die Anzahl der Klassen, $x_i^*$ die Klassenmitte
- **Wichtig:** an $f_i$ denken – jede Klassenmitte wird mit ihrer absoluten Häufigkeit **gewichtet**

:::warning Problem mit der Einheit
Durch das Quadrieren hat die Varianz die **quadrierte Einheit** der Daten – bei Gewinnen in € also €². Das ist kaum interpretierbar. Deshalb zieht man die Wurzel und erhält die **Standardabweichung**, die wieder in der **Einheit der Daten** vorliegt.
:::

**Standardabweichung:**

$$
S = \sigma = \sqrt{S^2}
$$

:::note
**Beispiel: Gewinne von 4 Unternehmen (aus 2.3.2)**

Aus der Tabelle in 2.3.2 ist bekannt: $\bar{X} = 3$ Mio € und $\sum (x_i - \bar{X})^2 = 8$.

**Definitionsformel:**

$$
S^2 = \sigma^2 = \frac{1}{4} \cdot 8 = 2 \text{ (Mio €)}^2
$$

**Rechenformel** – führt zum selben Ergebnis:

$$
S^2 = \frac{1 + 9 + 9 + 25}{4} - 3^2 = 11 - 9 = 2 \text{ (Mio €)}^2
$$

**Standardabweichung:**

$$
S = \sigma = \sqrt{2} = 1{,}414 \text{ Mio €}
$$
:::

:::note
**Beispiel: Nettostundenverdienste (gruppierte Daten)**

| Verdienst        | f<sub>i</sub> | Klassenmitte x<sub>i</sub>* |
|------------------|---------------|-----------------------------|
| 7,5 b.u. 12,5    | 10            | 10                          |
| 12,5 b.u. 17,5   | 20            | 15                          |
| 17,5 b.u. 22,5   | 24            | 20                          |
| 22,5 b.u. 27,5   | 36            | 25                          |
| 27,5 b.u. 32,5   | 40            | 30                          |
| 32,5 b.u. 37,5   | 60            | 35                          |
| 37,5 b.u. 42,5   | 10            | 40                          |

Aus 2.2.2 ist bekannt: $N = 200$ und $\bar{X} = 27{,}4€$.

**Ansatz 1 – Definitionsformel:**

$$
S^2 = \sigma^2 = \frac{1}{200} \cdot \left( 10 \cdot (10 - 27{,}4)^2 + 20 \cdot (15 - 27{,}4)^2 + 24 \cdot (20 - 27{,}4)^2 + [...] \right) = 64{,}74 \text{ €}^2
$$

**Ansatz 2 – Rechenformel:**

$$
S^2 = \sigma^2 = \frac{1}{200} \cdot \left( 10 \cdot 10^2 + 20 \cdot 15^2 + 24 \cdot 20^2 + [...] \right) - 27{,}4^2 = 815{,}5 - 750{,}76 = 64{,}74 \text{ €}^2
$$

**Standardabweichung:**

$$
S = \sigma = \sqrt{64{,}74} = 8{,}05€
$$

Die Nettostundenverdienste streuen also im Schnitt um etwa **8,05 €** um den Mittelwert von 27,40 €.
:::

#### Add-on: Variationskoeffizient (relative Streuung)

Die Standardabweichung allein sagt nichts darüber aus, ob eine Streuung **groß oder klein im Verhältnis zum Niveau** der Daten ist. Der **Variationskoeffizient** setzt die Standardabweichung ins Verhältnis zum arithmetischen Mittel:

$$
V = \frac{S}{\bar{X}} = \frac{\sigma}{\bar{X}}
$$

- $V$ ist **dimensionslos** (die Einheit kürzt sich heraus) und wird meist in **Prozent** angegeben
- Damit lassen sich Streuungen von Datensätzen mit **unterschiedlichem Niveau** oder **unterschiedlichen Einheiten** vergleichen

:::note
**Beispiel: Gewinne von 4 Unternehmen**

- Die Gewinne $1,\ 3,\ 3,\ 5$ haben die Standardabweichung $S = 1{,}414$
- Die Gewinne $1001,\ 1003,\ 1003,\ 1005$ haben **dieselbe** Standardabweichung $S = 1{,}414$ – die Werte liegen genauso weit auseinander, nur auf einem viel höheren Niveau

Erst der Variationskoeffizient macht den Unterschied sichtbar:

$$
V = \frac{S}{\bar{X}} = \frac{1{,}414}{3} = 0{,}4713 \quad \hat{=}\ 47{,}13\ \%
$$

$$
V = \frac{S}{\bar{X}} = \frac{1{,}414}{1003} = 0{,}0014 \quad \hat{=}\ 0{,}14\ \%
$$

Im ersten Fall ist die Streuung im Verhältnis zum Mittelwert **sehr groß**, im zweiten Fall **vernachlässigbar**.
:::

## 2.4 - Konzentrationsmaße

Konzentrationsmaße beschreiben, **wie stark sich eine Merkmalssumme auf wenige Merkmalsträger konzentriert** – z.B. wie viel des gesamten Umsatzes eines Marktes auf die größten Unternehmen entfällt.

- Während Lage- und Streuungsparameter beschreiben, *wo* und *wie breit* die Werte liegen, geht es hier um die Frage: **Verteilt sich das Ganze gleichmäßig oder ballt es sich bei wenigen?**
- Relevant vor allem für **ökonomische Fragestellungen**, z.B. bei der **Einkommens- und Vermögensverteilung** oder bei der Beurteilung von **Marktmacht** (Wettbewerbs- und Kartellrecht)

:::info
Man unterscheidet **absolute** Konzentrationsmaße (2.4.1), bei denen die Anzahl der Merkmalsträger eine Rolle spielt („Wie viel entfällt auf die $n$ größten?“), und **relative** Konzentrationsmaße (2.4.2), die den Anteil der Merkmalsträger dem Anteil an der Merkmalssumme gegenüberstellen.
:::

### 2.4.1 - Absolute Konzentrationsmaße

Absolute Konzentrationsmaße betrachten, **wie viel der Merkmalssumme auf eine bestimmte Anzahl der größten Merkmalsträger entfällt**. Voraussetzung ist, dass die Werte **absteigend sortiert** vorliegen (größter Anteil zuerst).

**Konzentrationsrate $CR_n$** (engl. *Concentration Ratio*)

Die Konzentrationsrate ist die **Summe der Anteile der $n$ größten Merkmalsträger**:

$$
CR_n = \sum_{i=1}^{n} a_i
$$

- $a_i$ ist der Anteil (z.B. Marktanteil) des $i$-größten Merkmalsträgers
- $n$ gibt an, wie viele der größten Träger zusammengefasst werden ($CR_1$ = der Größte, $CR_3$ = die drei Größten, …)
- Die Anteile können in Prozent oder als Dezimalzahl angegeben werden – das Prozentzeichen kann man mit angeben, muss man aber nicht

**Herfindahl-Index $H$**

Der Herfindahl-Index berücksichtigt **alle** Merkmalsträger, indem er die **quadrierten** Anteile aufsummiert:

$$
H = \sum_{i=1}^{N} a_i^2 \qquad \text{mit} \qquad 0 \lt H \leq 10.000
$$

- Die Anteile $a_i$ werden dabei **in Prozent** eingesetzt
- Der Maximalwert $10.000$ wird erreicht, wenn **ein einziger** Merkmalsträger alles besitzt ($100^2 = 10.000$)
- Durch das Quadrieren fallen **große Anteile stärker ins Gewicht** als kleine – je ungleicher die Verteilung, desto höher $H$
- Werden die Anteile stattdessen als Dezimalzahl eingesetzt, gilt entsprechend $0 \lt H \leq 1$

:::note
**Beispiel: Markt mit 6 Unternehmen**

| Unternehmen | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Marktanteil | 30 % | 25 % | 20 % | 15 % | 8 % | 2 % |

**Konzentrationsraten:**

| Maß | Bedeutung | Rechnung | Ergebnis |
|---|---|---|---|
| $CR_1$ | Marktanteil des größten Anbieters | $30$ | 30 (%) |
| $CR_3$ | Marktanteil der 3 größten Anbieter | $30 + 25 + 20$ | 75 (%) |
| $CR_5$ | Marktanteil der 5 größten Anbieter | $30 + 25 + 20 + 15 + 8$ | 98 (%) |

**Herfindahl-Index:**

$$
H = 30^2 + 25^2 + 20^2 + 15^2 + 8^2 + 2^2 = 900 + 625 + 400 + 225 + 64 + 4 = 2.218
$$
:::

:::tip Konzentrationsrate vs. Herfindahl-Index
- $CR_n$ ist einfach zu berechnen und anschaulich, sagt aber nichts darüber aus, wie sich die Anteile **innerhalb** der $n$ Größten oder unter den restlichen Trägern verteilen
- $H$ bezieht **alle** Träger ein und reagiert durch das Quadrieren empfindlich auf einzelne sehr große Anteile – er eignet sich daher besser, um Marktmacht zu beurteilen
:::

### 2.4.2 - Relative Konzentrationsmaße

Bei relativen Konzentrationsmaßen wird nun die Frage beantwortet, **wie viel Prozent der Merkmalsträger wie viel Prozent der Merkmalssumme halten**.
- Ziel ist der **Vergleich zwischen zwei unterschiedlichen Anteilen**
- Typische Aussagen die mithilfe der relativen Konzentrationsmaße getätigt werden können:
  - _"20% der Haushalte besitzen 80% des Vermögens."_
- Die relative Häufigkeit kann Grafisch mittels Lorenzkurve dargestellt, und mittels Gini-Koeffizient berechnet werden:

#### Lorenzkurve
- Beispiel:
  - **30%** der Haushalte besitzen **5%** des Einkommens
  - **60%**  der Haushalte besitzen  **20%**  des Einkommens
  - **90%**  der Haushalte besitzen  **40%**  des Einkommens

Für die Darstellung werden die Merkmalsträger **aufsteigend nach ihrem Anteil sortiert** und beide Größen **kumuliert** abgetragen. Zusätzlich zu den gegebenen Wertepaaren lassen sich immer zwei weitere Punkte eintragen:

<svg viewBox="0 0 560 470" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"560px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-lk" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
  </defs>

  {/* Gitternetz */}
  <line x1="152" y1="380" x2="152" y2="20" stroke="#eee" strokeWidth="1"/>
  <line x1="224" y1="380" x2="224" y2="20" stroke="#eee" strokeWidth="1"/>
  <line x1="296" y1="380" x2="296" y2="20" stroke="#eee" strokeWidth="1"/>
  <line x1="368" y1="380" x2="368" y2="20" stroke="#eee" strokeWidth="1"/>
  <line x1="440" y1="380" x2="440" y2="20" stroke="#eee" strokeWidth="1"/>
  <line x1="80" y1="308" x2="440" y2="308" stroke="#eee" strokeWidth="1"/>
  <line x1="80" y1="236" x2="440" y2="236" stroke="#eee" strokeWidth="1"/>
  <line x1="80" y1="164" x2="440" y2="164" stroke="#eee" strokeWidth="1"/>
  <line x1="80" y1="92" x2="440" y2="92" stroke="#eee" strokeWidth="1"/>
  <line x1="80" y1="20" x2="440" y2="20" stroke="#eee" strokeWidth="1"/>

  {/* Konzentrationsfläche zwischen Winkelhalbierender und Lorenzkurve */}
  <path d="M 80 380 L 440 20 C 428 92, 416 224, 404 236 C 368 272, 332 287, 296 308 C 260 329, 224 353, 188 362 C 152 371, 116 380, 80 380 Z" fill="#fdebd0" fillOpacity="0.75"/>
  <text x="300" y="250" textAnchor="middle" fontSize="10.5" fontStyle="italic" fill="#b9770e">Konzentrationsfläche</text>

  {/* Fläche zwischen Lorenzkurve und x-Achse */}
  <path d="M 80 380 C 116 380, 152 371, 188 362 C 224 353, 260 329, 296 308 C 332 287, 368 272, 404 236 C 416 224, 428 92, 440 20 L 440 380 Z" fill="#dbeeff" fillOpacity="0.75"/>
  <text x="355" y="352" textAnchor="middle" fontSize="10.5" fontStyle="italic" fill="#1a5c8c">Fläche unter der Lorenzkurve</text>

  {/* Winkelhalbierende */}
  <line x1="80" y1="380" x2="440" y2="20" stroke="#e67e22" strokeWidth="2" strokeDasharray="6 4"/>
  <text x="330" y="96" textAnchor="middle" fontSize="10.5" fill="#e67e22" transform="rotate(-45, 330, 96)">Gleichverteilung</text>

  {/* Achsen */}
  <line x1="80" y1="380" x2="480" y2="380" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>
  <line x1="80" y1="380" x2="80" y2="10" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-lk)"/>

  {/* Achsenbeschriftung */}
  <text x="74" y="396" textAnchor="end" fontSize="10.5" fill="#555">0</text>
  <text x="152" y="398" textAnchor="middle" fontSize="10.5" fill="#555">20</text>
  <text x="224" y="398" textAnchor="middle" fontSize="10.5" fill="#555">40</text>
  <text x="296" y="398" textAnchor="middle" fontSize="10.5" fill="#555">60</text>
  <text x="368" y="398" textAnchor="middle" fontSize="10.5" fill="#555">80</text>
  <text x="440" y="398" textAnchor="middle" fontSize="10.5" fill="#555">100</text>
  <text x="70" y="312" textAnchor="end" fontSize="10.5" fill="#555">20</text>
  <text x="70" y="240" textAnchor="end" fontSize="10.5" fill="#555">40</text>
  <text x="70" y="168" textAnchor="end" fontSize="10.5" fill="#555">60</text>
  <text x="70" y="96" textAnchor="end" fontSize="10.5" fill="#555">80</text>
  <text x="70" y="24" textAnchor="end" fontSize="10.5" fill="#555">100</text>
  <text x="260" y="420" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#333">Haushalte kumuliert in %</text>
  <text x="32" y="200" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#333" transform="rotate(-90, 32, 200)">Einkommen kumuliert in %</text>

  {/* Lorenzkurve */}
  <path d="M 80 380 C 116 380, 152 371, 188 362 C 224 353, 260 329, 296 308 C 332 287, 368 272, 404 236 C 416 224, 428 92, 440 20" fill="none" stroke="#2176AE" strokeWidth="2.4"/>

  {/* Punkte */}
  <circle cx="80" cy="380" r="4.5" fill="#2176AE"/>
  <circle cx="188" cy="362" r="4.5" fill="#2176AE"/>
  <circle cx="296" cy="308" r="4.5" fill="#2176AE"/>
  <circle cx="404" cy="236" r="4.5" fill="#2176AE"/>
  <circle cx="440" cy="20" r="4.5" fill="#2176AE"/>

  {/* Punktbeschriftung */}
  <text x="92" y="374" fontSize="10.5" fontWeight="bold" fill="#1a5c8c">(0 | 0)</text>
  <text x="196" y="377" fontSize="10.5" fontWeight="bold" fill="#1a5c8c">(30 | 5)</text>
  <text x="304" y="323" fontSize="10.5" fontWeight="bold" fill="#1a5c8c">(60 | 20)</text>
  <text x="412" y="251" fontSize="10.5" fontWeight="bold" fill="#1a5c8c">(90 | 40)</text>
  <text x="450" y="24" fontSize="10.5" fontWeight="bold" fill="#1a5c8c">(100 | 100)</text>

  {/* Legende */}
  <line x1="20" y1="436" x2="540" y2="436" stroke="#ddd" strokeWidth="1"/>
  <line x1="70" y1="452" x2="96" y2="452" stroke="#2176AE" strokeWidth="2.4"/>
  <text x="102" y="456" fontSize="10.5" fill="#555">Lorenzkurve</text>
  <line x1="210" y1="452" x2="236" y2="452" stroke="#e67e22" strokeWidth="2" strokeDasharray="6 4"/>
  <text x="242" y="456" fontSize="10.5" fill="#555">Winkelhalbierende = Gleichverteilung</text>
</svg>

- Die **Winkelhalbierende** stellt die **Gleichverteilung** dar: 
  - 20 % der Haushalte besitzen genau 20 % des Einkommens, 60 % genau 60 % usw. 
  - Es gäbe **keine Konzentration**
- **Lorenzkurve** liegt immer **auf oder unterhalb** der Winkelhalbierenden, da die Merkmalsträger aufsteigend sortiert werden
  - Je **weiter** sie durchhängt, desto **ungleicher** ist die Verteilung
- Die Fläche zwischen Winkelhalbierender und Lorenzkurve ist die **Konzentrationsfläche** (im Schaubild **orange**).
  - Grundlage für den **Gini-Koeffizienten**
- Die Fläche zwischen Lorenzkurve und x-Achse (im Schaubild **blau**) ist das Gegenstück dazu.
  - Beide Flächen zusammen ergeben immer das **gesamte Dreieck** unter der Winkelhalbierenden
  - Je größer der **orange** Anteil, desto **ungleicher** die Verteilung
- Start- und Endpunkt sind **immer** $(0 \mid 0)$ und $(100 \mid 100)$ – unabhängig von den Daten

#### Gini Koeffizient
- Der Gini-Koeffizient vergleicht die zwei Flächen unterhalb der Winkelhalbierenden:
  - Konzentrationsfläche (in Orange)
  - Fläche unter der Lorenzkurve (in Blau)

$$
G = \sum_{i=1}^{n-1} F_i \cdot H_{i+1} - \sum_{i=1}^{n-1} F_{i+1} \cdot H_i \qquad \text{mit} \qquad 0 \leq G \lt 1
$$

- $F_i$ ist die **kumulierte relative Häufigkeit der Merkmalsträger** (x-Achse der Lorenzkurve)
- $H_i$ ist die **kumulierte relative Merkmalssumme** (y-Achse der Lorenzkurve)
- $n$ ist die Anzahl der Wertepaare **inklusive** Start- und Endpunkt
- **Wichtig:** Die Werte werden als **Dezimalzahlen** eingesetzt (also $0{,}3$ statt $30\ \%$)

:::tip Interpretation
| $G$ | Bedeutung |
|---|---|
| $0$ | **Gleichverteilung** – die Lorenzkurve liegt genau auf der Winkelhalbierenden, es gibt keine Konzentrationsfläche |
| nahe $1$ | **maximale Konzentration** – ein einziger Merkmalsträger hält (fast) alles |

Der Wert 1 wird nie exakt erreicht, da immer mindestens ein Merkmalsträger existiert – daher $G \lt 1$.
:::

:::note
**Beispiel: Einkommensverteilung der Haushalte (Werte aus der Lorenzkurve)**

| $i$ | $F_i$ (Haushalte) | $H_i$ (Einkommen) |
|---|---|---|
| 1 | 0,0 | 0,00 |
| 2 | 0,3 | 0,05 |
| 3 | 0,6 | 0,20 |
| 4 | 0,9 | 0,40 |
| 5 | 1,0 | 1,00 |

Mit $n = 5$ laufen beide Summen von $i = 1$ bis $4$.

**Erste Summe:**

$$
\sum_{i=1}^{4} F_i \cdot H_{i+1} = 0 \cdot 0{,}05 + 0{,}3 \cdot 0{,}20 + 0{,}6 \cdot 0{,}40 + 0{,}9 \cdot 1{,}00 = 1{,}20
$$

**Zweite Summe:**

$$
\sum_{i=1}^{4} F_{i+1} \cdot H_i = 0{,}3 \cdot 0 + 0{,}6 \cdot 0{,}05 + 0{,}9 \cdot 0{,}20 + 1{,}0 \cdot 0{,}40 = 0{,}61
$$

**Ergebnis:**

$$
G = 1{,}20 - 0{,}61 = 0{,}59
$$

Der Gini-Koeffizient liegt mit **0,59** deutlich über der Mitte des Wertebereichs – die Einkommen sind also **stark ungleich** verteilt.
:::

### 2.4.3 - Vergleich Absolute/Relative Konzentrationsmaße

Beide Arten beschreiben dieselbe Verteilung, beantworten aber **unterschiedliche Fragen**:

| | Absolute Konzentrationsmaße | Relative Konzentrationsmaße |
|---|---|---|
| **Fragestellung** | Wie viel entfällt auf eine **bestimmte Anzahl** der Größten? | Wie viel **Prozent** der Merkmalsträger halten wie viel **Prozent** der Merkmalssumme? |
| **Verglichen wird** | Anzahl ↔ Anteil | Anteil ↔ Anteil |
| **Anzahl der Merkmalsträger** | entscheidend | spielt keine Rolle |
| **Maße** | $CR_n$, Herfindahl-Index $H$ | Lorenzkurve, Gini-Koeffizient |
| **Typische Anwendung** | Marktmacht, Wettbewerbs- und Kartellrecht | Verteilungsgerechtigkeit, Einkommens- und Vermögensverteilung |

:::note
**Beispiel: Dieselbe Merkmalssumme, unterschiedliche Bewertung**

An den folgenden Extremfällen wird deutlich, dass die beiden Konzentrationsarten **unabhängig voneinander** hoch oder niedrig sein können:

| Fall | Absolute Konzentration | Relative Konzentration |
|---|---|---|
| **2 Unternehmen** mit je 50 % | **hoch** – nur zwei Anbieter teilen den gesamten Markt unter sich | **null** – beide halten exakt gleich viel |
| **1000 Unternehmen** mit je 0,1 % | **niedrig** – jeder Einzelne ist unbedeutend | **null** – alle halten exakt gleich viel |
| **1000 Unternehmen**, davon halten 50 zusammen 90 % | **niedrig** – der Größte allein fällt kaum ins Gewicht ($CR_1$ winzig) | **hoch** – 5 % der Anbieter halten 90 % |
| **10 Unternehmen**, davon eines mit 91 % | **hoch** – $CR_1 = 91$ % | **hoch** – 10 % der Anbieter halten 91 % |

Besonders aufschlussreich ist der erste Fall: Ein Duopol mit exakt gleichen Anteilen ist aus Sicht der **relativen** Konzentration völlig gleichverteilt, aus Sicht der **absoluten** Konzentration aber ein hochkonzentrierter Markt.
:::

:::tip Merksatz
Absolute Maße interessiert die **Anzahl** der Großen, relative Maße interessiert die **Ungleichheit** der Verteilung.
:::

