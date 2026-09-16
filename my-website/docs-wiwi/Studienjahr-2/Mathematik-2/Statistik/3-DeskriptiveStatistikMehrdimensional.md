# 3. Deskriptive Statistik (Mehrdimensional)
**Deskriptive Statistik mit mehrdimensionalem Datenmaterial**

## 3.1 - Grundlagen

- Deskriptive Statistik mit mehrdimensionalem Datenmaterial greift bei vorliegen von **zwei Merkmalen X und Y** mit
  - Gemeinsamen absoluten $f_{ij}$ **oder**
  - Gemeinsamen relativen Häufigkeiten $p_{ij}$

$$
p_{ij} = \frac{f_{ij}}{N}
$$

### 3.1.1 - Allgemeine Tabelle (2-Dimensional)
Für zwei Merkmale $X$ und $Y$ gilt allgemein:

| X ╲ Y | $Y_1$ | $Y_2$ | … | $Y_c$ | $\sum$ |
|---|---|---|---|---|---|
| $X_1$ | $f_{11}$ | $f_{12}$ | … | $f_{1c}$ | $f_{1\cdot}$ |
| $X_2$ | $f_{21}$ | $f_{22}$ | … | $f_{2c}$ | $f_{2\cdot}$ |
| … | … | … | … | … | … |
| $X_r$ | $f_{r1}$ | $f_{r2}$ | … | $f_{rc}$ | $f_{r\cdot}$ |
| $\sum$ | $f_{\cdot 1}$ | $f_{\cdot 2}$ | … | $f_{\cdot c}$ | $N$ |

- $r$ ist die Anzahl der **Zeilen** (Ausprägungen von $X$), $c$ die Anzahl der **Spalten** (Ausprägungen von $Y$)
- $f_{ij}$ ist die **gemeinsame absolute Häufigkeit**, also die Anzahl der Fälle mit $X = X_i$ **und** $Y = Y_j$
- Die Randfelder sind die **Randhäufigkeiten**. Der **Punkt** in der Schreibweise markiert den Index, über den summiert wurde:
  - $f_{i\cdot}$ = Zeilensumme (über alle $j$ summiert)
  - $f_{\cdot j}$ = Spaltensumme (über alle $i$ summiert)
- Unten rechts steht der **Stichprobenumfang** $N$ – er ist gleichzeitig die Summe aller Zeilen- und aller Spaltensummen

:::note **Beispiel: Studierende nach Studienfach (Merkmal X) und Geschlecht (Merkmal Y)**

| X ╲ Y | männlich | weiblich | $\sum$ |
|---|---|---|---|
| WI | 700 | 300 | 1.000 |
| BWL | 1.400 | 1.600 | 3.000 |
| Technik | 1.500 | 500 | 2.000 |
| $\sum$ | 3.600 | 2.400 | 6.000 |

- Die **inneren** Felder sind die gemeinsamen Häufigkeiten, z.B. 1.600 weibliche BWL-Studierende
- Die **rechte** Randspalte zeigt die Verteilung des Studienfachs allein, die **untere** Randzeile die Verteilung des Geschlechts allein
- Die Probe geht in beide Richtungen auf: $1.000 + 3.000 + 2.000 = 6.000$ und $3.600 + 2.400 = 6.000$

**_Die Tabelle lässt sich ebenfalls mittels relativen Häufigkeiten und Randverteilungen realisieren:_**

| X ╲ Y | männlich | weiblich | $\text{RV v. }X(p_i)$ |
|---|---|---|---|
| WI | 0,117 | 0,050 | 0,167 |
| BWL | 0,233 | 0,267 | 0,500 |
| Technik | 0,250 | 0,083 | 0,333 |
| $\text{RV v. }Y(p_i)$ | 0,600 | 0,400 | 1 |

>Wie die Randverteilungen, Einzelwahrscheinlichkeiten, etc. berechnet werden wird im Folgenden erklärt:
:::


### 3.1.2 - Berechnung der einzelnen Werte

#### Randverteilungen

Die **Randverteilung** betrachtet jeweils **ein Merkmal allein** – das andere wird durch Aufsummieren „weggerechnet“. Sie steht in der Tabelle in der Randspalte bzw. der Randzeile.

$$
p_{i\cdot} = \sum_{j=1}^{c} p_{ij} = \frac{f_{i\cdot}}{N} \qquad \text{für } i = 1, \dots, r
$$

$$
p_{\cdot j} = \sum_{i=1}^{r} p_{ij} = \frac{f_{\cdot j}}{N} \qquad \text{für } j = 1, \dots, c
$$

- $p_{i\cdot}$ ist die Randverteilung von **$X$**: Über alle Spalten $j$ wird aufsummiert, das Merkmal $Y$ spielt keine Rolle mehr
- $p_{\cdot j}$ ist die Randverteilung von **$Y$**: Über alle Zeilen $i$ wird aufsummiert
- Beide Randverteilungen summieren sich jeweils zu **1**

:::note **Beispiel: Studierende nach Studienfach (Merkmal X) und Geschlecht (Merkmal Y)**

| Randverteilung | Ausprägung | Berechnung |
|---|---|---|
| **von $X$ ($p_{i\cdot}$)** | Wirtschaftsinformatik | $p_{(\text{WI})} = \frac{f_{i\cdot}}{N} = \frac{1.000}{6.000} = 0{,}167$ |
| | BWL | $p_{(\text{BWL})} = \frac{f_{i\cdot}}{N} = \frac{3.000}{6.000} = 0{,}500$ |
| | Technik | $p_{(\text{Technik})} = \frac{f_{i\cdot}}{N} = \frac{2.000}{6.000} = 0{,}333$ |
| | **Summe** | $0{,}167 + 0{,}500 + 0{,}333 = 1$ |
| **von $Y$ ($p_{\cdot j}$)** | männlich | $p_{(\text{männlich})} = \frac{f_{\cdot j}}{N} = \frac{3.600}{6.000} = 0{,}600$ |
| | weiblich | $p_{(\text{weiblich})} = \frac{f_{\cdot j}}{N} = \frac{2.400}{6.000} = 0{,}400$ |
| | **Summe** | $0{,}600 + 0{,}400 = 1$ |
:::

#### Bedingte Häufigkeitsverteilungen

Die **bedingte Häufigkeitsverteilung** betrachtet nur einen **Ausschnitt** der Tabelle: Ein Merkmal wird auf eine feste Ausprägung eingeschränkt, und innerhalb dieser Gruppe wird die Verteilung des anderen Merkmals berechnet.

$$
P(X_i / Y_j) = \frac{f_{ij}}{f_{\cdot j}} = \frac{p_{ij}}{p_{\cdot j}}
$$

$$
P(Y_j / X_i) = \frac{f_{ij}}{f_{i\cdot}} = \frac{p_{ij}}{p_{i\cdot}}
$$

- Gelesen wird $P(X_i / Y_j)$ als „**$X_i$ unter der Bedingung $Y_j$**“
- Es wird also **nicht** durch $N$ geteilt, sondern durch die **Randhäufigkeit der Bedingung** – diese Gruppe ist die neue Bezugsgröße
- Man kann wahlweise mit den absoluten ($f$) oder den relativen ($p$) Häufigkeiten rechnen, das Ergebnis ist identisch

:::warning
Die beiden bedingten Verteilungen sind **nicht** dasselbe. $P(X_i / Y_j)$ und $P(Y_j / X_i)$ haben unterschiedliche Bezugsgruppen und damit in der Regel unterschiedliche Werte.
:::

:::note **Beispiel: Studierende nach Studienfach (Merkmal X) und Geschlecht (Merkmal Y)**

**Wie wahrscheinlich ist es, dass ich eine Frau treffe die aus der BWL ist?**

Für Absolute Wahrscheinlichkeiten:
$$
p(x_2|y_2) = p(\text{BWL|Weiblich}) = \frac{f_{22}}{f_{2\cdot}}=\frac{1600}{2400}=0,6675 \hat{=} 66,75\%
$$
Für Relative Wahrscheinlichkeiten:
$$
p(x_2|y_2) = p(\text{BWL|Weiblich}) = \frac{p_{22}}{p_{2\cdot}}=\frac{0,267}{0,4}=0,6675 \hat{=} 66,75\%
$$
**Wie wahrscheinlich ist es, unter allen BWLern eine Männliche Person zu treffen?**

Für Absolute Wahrscheinlichkeiten:
$$
p(y_1|x_2) = p(\text{Männlich|BWL}) = \frac{1400}{3000} = 0,466 \hat{=}46,6\%  
$$

Für Relative Wahrscheinlichkeiten:
$$
p(y_1|x_2) = p(\text{Männlich|BWL}) = \frac{0,233}{0,5} = 0,466 \hat{=}46,6\%  
$$
:::


#### Statistische Unabhängigkeit

**Statistische Unabhängigkeit** der beiden Merkmale liegt vor, wenn gilt:

$$
p_{ij} = p_{i\cdot} \cdot p_{\cdot j} \qquad \text{für alle } i,\ j
$$

- Jede gemeinsame Häufigkeit muss sich also als **Produkt der beiden Randverteilungen** ergeben
- Anschaulich: Die Ausprägung von $Y$ ändert nichts an der Verteilung von $X$ (und umgekehrt)
- Die Bedingung muss für **alle** Felder erfüllt sein – ein einziges abweichendes Feld genügt, um Unabhängigkeit auszuschließen

:::note **Beispiel: Studierende nach Studienfach (Merkmal X) und Geschlecht (Merkmal Y)**

$$
p_{1\cdot} \cdot p_{\cdot 1} = 0{,}167 \cdot 0{,}600 = 0{,}100 \qquad \text{aber} \qquad p_{11} = \frac{700}{6.000} = 0{,}117
$$

Wegen $0{,}117 \neq 0{,}100$ sind die Merkmale **nicht unabhängig** – Studienfach und Geschlecht hängen in diesem Beispiel zusammen.
:::



### 3.1.3 - Preisindizes (Indexzahlen)

Ein Preisindex misst, wie sich die Preise eines **Warenkorbs** zwischen einem **Basiszeitpunkt** $t_0$ und einem **Berichtszeitpunkt** $t$ entwickelt haben. Der Basiszeitpunkt wird dabei immer auf **100** normiert.

| Symbol | Bedeutung |
|---|---|
| $m$ | Anzahl der Güter im Warenkorb |
| $p_{0i}$ | Preis des Gutes $i$ im **Basiszeitpunkt** $t_0$ |
| $p_{ti}$ | Preis des Gutes $i$ im **Berichtszeitpunkt** $t$ |
| $q_{0i}$ | Menge des Gutes $i$ im **Basiszeitpunkt** $t_0$ |
| $q_{ti}$ | Menge des Gutes $i$ im **Berichtszeitpunkt** $t$ |

:::info Der Unterschied steckt in den Mengen
Bei **beiden** Indizes stehen im Zähler die **neuen** Preise und im Nenner die **alten** Preise. Unterschiedlich ist nur, mit welchen **Mengen** gewichtet wird – und diese Mengen sind in Zähler und Nenner jeweils **dieselben**. Dadurch misst der Index tatsächlich nur die Preisänderung und nicht die Mengenänderung.
:::

#### Preisindex nach Laspeyres

$$
P_{0t}^{(L)} = \frac{\sum_{i=1}^{m} p_{ti} \cdot q_{0i}}{\sum_{i=1}^{m} p_{0i} \cdot q_{0i}} \cdot 100
$$

- Gewichtet wird mit den Mengen des **Basiszeitpunkts** ($q_{0i}$)
- Der Warenkorb bleibt also **fest** – man fragt: *Was kostet der alte Warenkorb heute im Vergleich zu damals?*
- **Vorteil:** Die Mengen müssen nur einmal erhoben werden, der Index ist dadurch schnell und günstig verfügbar

#### Preisindex nach Paasche

$$
P_{0t}^{(P)} = \frac{\sum_{i=1}^{m} p_{ti} \cdot q_{ti}}{\sum_{i=1}^{m} p_{0i} \cdot q_{ti}} \cdot 100
$$

- Gewichtet wird mit den Mengen des **Berichtszeitpunkts** ($q_{ti}$)
- Der Warenkorb wird also **laufend angepasst** – man fragt: *Was hätte der heutige Warenkorb damals gekostet?*
- **Nachteil:** Die Mengen müssen für **jeden** Berichtszeitpunkt neu erhoben werden, was aufwendig ist

:::note
**Beispielwarenkorb zur Inflationsberechnung**

| Gut | Preis in $t_0$ ($p_{0i}$) | Preis in $t_1$ ($p_{ti}$) | Menge in $t_0$ ($q_{0i}$) | Menge in $t_1$ ($q_{ti}$) |
|---|---|---|---|---|
| A | 4 | 6 | 5 | 4 |
| B | 6 | 8 | 10 | 15 |
| C | 10 | 12 | 8 | 16 |

**Preisindex nach Laspeyres** – gewichtet mit den alten Mengen $q_{0i}$:

$$
P_{01}^{(L)} = \frac{6 \cdot 5 + 8 \cdot 10 + 12 \cdot 8}{4 \cdot 5 + 6 \cdot 10 + 10 \cdot 8} \cdot 100 = \frac{206}{160} \cdot 100 = 128{,}75
$$

**Preisindex nach Paasche** – gewichtet mit den neuen Mengen $q_{ti}$:

$$
P_{01}^{(P)} = \frac{6 \cdot 4 + 8 \cdot 15 + 12 \cdot 16}{4 \cdot 4 + 6 \cdot 15 + 10 \cdot 16} \cdot 100 = \frac{336}{266} \cdot 100 = 126{,}32
$$

**Interpretation:** Da der Basiszeitpunkt bei 100 liegt, bedeutet ein Wert von 128,75 einen Preisanstieg von **28,75 %**. Nach Paasche sind es nur **26,32 %**.
:::

:::tip Warum liegt Laspeyres meist höher?
Werden einzelne Güter besonders teuer, weichen die Haushalte auf günstigere Alternativen aus – die Mengen verschieben sich. Im Beispiel wird Gut A am stärksten teurer (von 4 auf 6, also +50 %) und gleichzeitig weniger nachgefragt (von 5 auf 4).

- **Laspeyres** rechnet weiterhin mit den **alten** Mengen und gewichtet das teuer gewordene Gut deshalb zu hoch ⇒ die Inflation wird tendenziell **überschätzt**
- **Paasche** rechnet mit den **neuen** Mengen und gewichtet es zu niedrig ⇒ die Inflation wird tendenziell **unterschätzt**

In der Praxis wird meist **Laspeyres** verwendet (so auch beim deutschen Verbraucherpreisindex), da der Warenkorb nicht laufend neu erhoben werden muss. Um die Überschätzung zu begrenzen, wird der Warenkorb in regelmäßigen Abständen aktualisiert.
:::

## 3.2 - Korrelations- und Regressionsanalyse

### 3.2.1 - Empirischer Korrelationskoeffizient 
- Im folgenden wird der **Empirische Korrelationskoeffizient für kardinal skalierte Merkmale** erläutert
  - Berechnung erfolgt nach _Bravais-Pearson_

**Wofür wird er verwendet?**

- Er misst, **wie stark** und **in welche Richtung** zwei Merkmale $X$ und $Y$ **linear** zusammenhängen
- Voraussetzung ist bei **beiden** Merkmalen die **Kardinalskala**, da mit Abweichungen vom Mittelwert gerechnet wird
- Während die statistische Unabhängigkeit (Abschnitt 3.1.2) nur ein **Ja oder Nein** liefert, gibt der Korrelationskoeffizient den Zusammenhang als **Zahl** an und macht ihn damit vergleichbar

$$
\rho = \frac{\sum_{i=1}^{N} (x_i - \bar{X}) \cdot (y_i - \bar{Y})}{\sqrt{\sum_{i=1}^{N} (x_i - \bar{X})^2 \cdot \sum_{i=1}^{N} (y_i - \bar{Y})^2}}
$$

**Aufbau der Formel:**

- Im **Zähler** werden für jeden Datenpunkt die beiden Abweichungen vom jeweiligen Mittelwert **multipliziert**
  - Liegen $x_i$ und $y_i$ meist **gemeinsam** über oder gemeinsam unter ihrem Mittelwert, sind die Produkte positiv ⇒ der Zähler wird **positiv**
  - Verhalten sie sich **gegenläufig**, überwiegen negative Produkte ⇒ der Zähler wird **negativ**
- Der **Nenner** enthält die Streuungen beider Merkmale und dient der **Normierung**. Nur dadurch liegt das Ergebnis garantiert zwischen $-1$ und $+1$ und ist unabhängig von den Einheiten

**Interpretation des Ergebnisses:**

Der Wert liegt immer im Bereich $-1 \leq \rho \leq +1$. Dabei gilt:

| $\rho$ | Bedeutung |
|---|---|
| $+1$ | **perfekter positiver** linearer Zusammenhang – alle Punkte liegen exakt auf einer **steigenden** Geraden |
| nahe $+1$ | **starker positiver** Zusammenhang – je größer $X$, desto größer $Y$ |
| $0$ | **kein linearer** Zusammenhang |
| nahe $-1$ | **starker negativer** Zusammenhang – je größer $X$, desto kleiner $Y$ |
| $-1$ | **perfekter negativer** linearer Zusammenhang – alle Punkte liegen exakt auf einer **fallenden** Geraden |


:::warning Zwei wichtige Hinweise
**1. Es wird nur der _lineare_ Zusammenhang gemessen.**
$\rho = 0$ bedeutet **nicht**, dass kein Zusammenhang besteht – sondern nur, dass kein **linearer** besteht. Liegen die Punkte z.B. exakt auf einer Parabel, kann $\rho$ trotzdem 0 sein, obwohl ein perfekter (nichtlinearer) Zusammenhang vorliegt.

**2. Korrelation ist keine Kausalität.**
Ein hoher Wert sagt nur, dass sich zwei Merkmale **gemeinsam** verändern – nicht, dass eines das andere **verursacht**. Oft steckt eine dritte Größe dahinter (**Scheinkorrelation**), etwa wenn Speiseeisverkäufe und Sonnenbrände stark korrelieren, tatsächlich aber beide von der Temperatur abhängen.
:::