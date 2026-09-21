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

### 3.2.2 - Lineare Einfachregression

**Wofür wird sie verwendet?**

- Korrelationskoeffizient (3.2.1) → nur **Stärke** und **Richtung** des Zusammenhangs
- Regression → konkrete **Gerade**, um $Y$ aus $X$ zu **schätzen** bzw. zu **prognostizieren**
- „Einfach" = genau **eine** erklärende Variable
- Rollen hier **nicht** vertauschbar (anders als beim Korrelationskoeffizienten):
  - $X$ = unabhängige Variable (erklärend, „Ursache")
  - $Y$ = abhängige Variable (zu erklären, „Wirkung")

**Die Regressionsgerade**

$$
\hat{y}_i = \beta_0 + \beta_1 \cdot x_i
$$

- $\hat{y}_i$ = **geschätzter** Wert (liegt auf der Geraden)
- $y_i$ = **tatsächlich beobachteter** Wert (liegt meist daneben)
- $\beta_0$ = Achsenabschnitt → Wert von $Y$ bei $X = 0$
- $\beta_1$ = Steigung → Änderung von $Y$ je **eine** zusätzliche Einheit $X$
- $\varepsilon_i = y_i - \hat{y}_i$ = **Residuum** → senkrechter Abstand Punkt ↔ Gerade

**Methode der kleinsten Quadrate**

$$
\sum_{i=1}^{N} \varepsilon_i^2 = \sum_{i=1}^{N} (y_i - \hat{y}_i)^2 = \sum_{i=1}^{N} (y_i - \beta_0 - \beta_1 \cdot x_i)^2 \;\longrightarrow\; \min!
$$

- Ziel: Gerade so legen, dass Summe der **quadrierten** Residuen minimal wird
- Warum quadrieren:
  - positive und negative Abweichungen würden sich sonst gegenseitig aufheben
  - große Abweichungen werden **stärker bestraft** als kleine
- Minimierung (partielle Ableitungen nach $\beta_0$ und $\beta_1$, null setzen) liefert die beiden Formeln unten

**Berechnung der Koeffizienten**

$$
\beta_1 = \frac{\sum_{i=1}^{N} (x_i - \bar{X}) \cdot (y_i - \bar{Y})}{\sum_{i=1}^{N} (x_i - \bar{X})^2}
\qquad\qquad
\beta_0 = \bar{Y} - \beta_1 \cdot \bar{X}
$$

- Zähler von $\beta_1$ = **identisch** mit dem Zähler des Korrelationskoeffizienten
- Nenner von $\beta_1$ = Streuung **nur** von $X$ ⇒ Vorzeichen von $\beta_1$ = Vorzeichen von $\rho$
- Reihenfolge zwingend: **erst** $\beta_1$, **dann** $\beta_0$
- Gerade verläuft immer durch den Schwerpunkt $(\bar{X}, \bar{Y})$

**Determinationskoeffizient (Bestimmtheitsmaß)**

$$
R^2 = \frac{\beta_1^2 \cdot \sum_{i=1}^{N} (x_i - \bar{X})^2}{\sum_{i=1}^{N} (y_i - \bar{Y})^2}
$$

- Misst die **Qualität/Güte** der Regression
- Zähler = durch die Gerade **erklärte** Streuung, Nenner = **gesamte** Streuung von $Y$
- Immer $0 \leq R^2 \leq 1$
- Bei der Einfachregression gilt: $R^2 = \rho^2$

| $R^2$ | Bedeutung |
|---|---|
| $1$ | alle Punkte liegen **exakt** auf der Geraden |
| nahe $1$ | Gerade erklärt Daten **gut** |
| nahe $0$ | Gerade erklärt Daten **schlecht** |
| $0$ | kein linearer Erklärungsgehalt |

:::warning Niedriges $R^2$ heißt nicht „kein Zusammenhang"
- Zusammenhang ist evtl. **nicht-linear** (z.B. Parabel, exponentiell)
- Zusammenhang wird evtl. von **anderen Variablen** überlagert
:::

**Beispiel**

- $X$ = Werbeausgaben (in 1.000 €), $Y$ = Umsatz (in 1.000 €)
- $N = 5$, $\bar{X} = \frac{15}{5} = 3$, $\bar{Y} = \frac{50}{5} = 10$

| $i$ | $x_i$ | $y_i$ | $x_i - \bar{X}$ | $y_i - \bar{Y}$ | $(x_i - \bar{X})(y_i - \bar{Y})$ | $(x_i - \bar{X})^2$ | $(y_i - \bar{Y})^2$ |
|---|---|---|---|---|---|---|---|
| 1 | 1 | 7 | $-2$ | $-3$ | $6$ | $4$ | $9$ |
| 2 | 2 | 6 | $-1$ | $-4$ | $4$ | $1$ | $16$ |
| 3 | 3 | 11 | $0$ | $1$ | $0$ | $0$ | $1$ |
| 4 | 4 | 12 | $1$ | $2$ | $2$ | $1$ | $4$ |
| 5 | 5 | 14 | $2$ | $4$ | $8$ | $4$ | $16$ |
| **Σ** | **15** | **50** | $0$ | $0$ | **20** | **10** | **46** |

Schritt 1 – Steigung:

$$
\beta_1 = \frac{20}{10} = 2
$$

Schritt 2 – Achsenabschnitt:

$$
\beta_0 = 10 - 2 \cdot 3 = 4
$$

Schritt 3 – Regressionsgerade:

$$
\hat{y}_i = 4 + 2 \cdot x_i
$$

Schritt 4 – Güte:

$$
R^2 = \frac{2^2 \cdot 10}{46} = \frac{40}{46} \approx 0{,}87
$$

**Interpretation:**

- $\beta_1 = 2$ → je 1.000 € mehr Werbung steigt der Umsatz um **2.000 €**
- $\beta_0 = 4$ → ohne Werbung rechnerisch **4.000 €** Umsatz
- $R^2 \approx 0{,}87$ → rund **87 %** der Umsatzstreuung werden durch die Werbeausgaben erklärt
- Prognose für $x = 6$: $\hat{y} = 4 + 2 \cdot 6 = 16$ → **16.000 €** Umsatz

:::tip Vorsicht bei der Prognose
- Nur im **beobachteten Wertebereich** sinnvoll (hier $x = 1$ bis $5$)
- Weit außerhalb (z.B. $x = 50$) ist die Gerade **nicht** belegt
:::

## 3.3 - Zeitreihenanalyse

- Untersucht, wie sich ein Merkmal im **Zeitablauf** entwickelt
- Unterschied zu 3.2: die unabhängige Variable ist immer die **Zeit** $t$
- Datenbasis ist eine **Zeitreihe** $y_1, y_2, \dots, y_T$ mit fester Frequenz (jährlich, quartalsweise, monatlich)

### 3.3.1 - Komponenten einer Zeitreihe

Eine langfristige ökonomische Zeitreihe besitzt bis zu **vier Komponenten**:

| Komponente | Beschreibung |
|---|---|
| **Trend** | langfristige Grundrichtung über den gesamten Zeitraum (steigend, fallend, konstant) |
| **Zyklische Komponente** | mittelfristige Schwankung um den Trend, **unregelmäßige** Länge (z.B. Konjunkturzyklus über mehrere Jahre) |
| **Saisonkomponente** | **regelmäßige** Schwankung mit fester Periodenlänge (z.B. Weihnachtsgeschäft jedes 4. Quartal) |
| **Zufallskomponente** | Rest, der sich durch keine der drei anderen erklären lässt (Restgröße, „Rauschen") |

- Ziel der Analyse: Komponenten **trennen**, um den Trend sichtbar zu machen
- Saison- und Zufallskomponente überlagern den Trend → müssen **geglättet** werden

### 3.3.2 - Methode der gleitenden Durchschnitte

**Grundidee**

- Jeder Zeitpunkt wird durch den **Durchschnitt seiner Nachbarwerte** ersetzt
- Ausschläge nach oben und unten heben sich gegenseitig auf → Zeitreihe wird **geglättet**
- Der geglättete Wert $\bar{Y}_t^{*}$ ersetzt den Originalwert $y_t$
- $k$ = Anzahl der Werte, die **auf jeder Seite** von $t$ einbezogen werden

#### Ungerader gleitender Durchschnitt

$$
\bar{Y}_t^{*} = \frac{1}{2k+1} \cdot \left( y_{t-k} + y_{t-k+1} + \dots + y_t + \dots + y_{t+k-1} + y_{t+k} \right)
$$

- Anzahl der einbezogenen Werte = $2k+1$ → immer **ungerade**
- z.B. $k = 1$ → 3er-Durchschnitt, $k = 2$ → 5er-Durchschnitt
- Alle Werte werden **gleich** gewichtet
- $t$ liegt genau in der **Mitte** des Fensters → keine Korrektur nötig

:::note Beispiel: 3er-Durchschnitt ($k = 1$)

Absatzzahlen über 6 Perioden:

| $t$ | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| $y_t$ | 10 | 12 | 20 | 16 | 24 | 26 |
| $\bar{Y}_t^{*}$ | – | **14** | **16** | **20** | **22** | – |

Rechenweg:

$$
\bar{Y}_2^{*} = \frac{10 + 12 + 20}{3} = \frac{42}{3} = 14
\qquad
\bar{Y}_3^{*} = \frac{12 + 20 + 16}{3} = \frac{48}{3} = 16
$$

$$
\bar{Y}_4^{*} = \frac{20 + 16 + 24}{3} = \frac{60}{3} = 20
\qquad
\bar{Y}_5^{*} = \frac{16 + 24 + 26}{3} = \frac{66}{3} = 22
$$

- Original springt unruhig hin und her, geglättete Reihe steigt **gleichmäßig**
- $t = 1$ und $t = 6$ entfallen → pro Rand gehen $k = 1$ Werte verloren
:::

#### Gerader gleitender Durchschnitt

$$
\bar{Y}_t^{*} = \frac{1}{2k} \cdot \left( \frac{1}{2} \cdot y_{t-k} + y_{t-k+1} + \dots + y_t + \dots + y_{t+k-1} + \frac{1}{2} \cdot y_{t+k} \right)
$$

- Anzahl der einbezogenen Werte = $2k$ → **gerade** (z.B. $k = 2$ → 4er-Durchschnitt)
- **Problem**: Bei gerader Anzahl gibt es keinen mittleren Wert, das Fenster liegt „zwischen" zwei Zeitpunkten
- **Lösung**: Die beiden **Randwerte** werden nur **halb** gewichtet
  - dadurch wird das Fenster wieder symmetrisch um $t$ zentriert
  - die Gewichte summieren sich trotzdem zu $2k$ → Division durch $2k$ bleibt korrekt

:::note Beispiel: 4er-Durchschnitt ($k = 2$) bei Quartalsdaten

Umsatz in Mio. € über zwei Jahre mit klarem Saisonmuster:

| $t$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Quartal | Q1 | Q2 | Q3 | Q4 | Q1 | Q2 | Q3 | Q4 |
| $y_t$ | 20 | 30 | 40 | 30 | 24 | 34 | 44 | 34 |
| $\bar{Y}_t^{*}$ | – | – | **30,5** | **31,5** | **32,5** | **33,5** | – | – |

Rechenweg:

$$
\bar{Y}_3^{*} = \frac{1}{4} \cdot \left( \tfrac{1}{2} \cdot 20 + 30 + 40 + 30 + \tfrac{1}{2} \cdot 24 \right) = \frac{10 + 30 + 40 + 30 + 12}{4} = \frac{122}{4} = 30{,}5
$$

$$
\bar{Y}_4^{*} = \frac{1}{4} \cdot \left( \tfrac{1}{2} \cdot 30 + 40 + 30 + 24 + \tfrac{1}{2} \cdot 34 \right) = \frac{126}{4} = 31{,}5
$$

$$
\bar{Y}_5^{*} = \frac{1}{4} \cdot \left( \tfrac{1}{2} \cdot 40 + 30 + 24 + 34 + \tfrac{1}{2} \cdot 44 \right) = \frac{130}{4} = 32{,}5
$$

$$
\bar{Y}_6^{*} = \frac{1}{4} \cdot \left( \tfrac{1}{2} \cdot 30 + 24 + 34 + 44 + \tfrac{1}{2} \cdot 34 \right) = \frac{134}{4} = 33{,}5
$$

- Saisonmuster (Q3 hoch, Q1 tief) ist **vollständig verschwunden**
- Übrig bleibt der reine Trend: gleichmäßig $+1$ pro Quartal
- $t = 1, 2, 7, 8$ entfallen → pro Rand gehen $k = 2$ Werte verloren
:::

**Wahl der Ordnung**

- Ergibt sich meist aus **Plausibilität** bzw. der **Frequenz der Werte**
  - Quartalsdaten → **4er**-Durchschnitt
  - Monatsdaten → **12er**-Durchschnitt
  - Wochentagsdaten → **7er**-Durchschnitt
- Grund: Die Ordnung muss der **Periodenlänge der Saison** entsprechen, damit sich die Saisoneffekte exakt herausmitteln

:::warning Zielkonflikt
- **Größerer** Durchschnitt → **stärkere** Glättung
- Aber: **mehr Werte gehen verloren** (pro Rand jeweils $k$ Stück, insgesamt $2k$)
- Bei sehr kurzen Zeitreihen bleibt sonst kaum etwas übrig
:::

### 3.3.3 - Trendverläufe

Wichtige Trendverläufe von Zeitreihen:

| Trendverlauf | Typischer Verlauf |
|---|---|
| **Linearer Trend** | konstante **absolute** Zunahme je Periode (gerade Linie) |
| **Exponentialtrend** | konstante **prozentuale** Zunahme je Periode (immer steiler) |
| **Logistischer Trend** | erst exponentiell, dann abflachend gegen eine **Sättigungsgrenze** (S-Kurve) |

- Bei **linearem** Trend lassen sich die Überlegungen der linearen Einfachregression (3.2.2) direkt übertragen
- Methode bleibt die **Methode der kleinsten Quadrate**, nur heißt die unabhängige Variable jetzt $t$ statt $x$

$$
\hat{y}_t = a + b \cdot t
$$

- $a$ = Achsenabschnitt → Niveau zum Zeitpunkt $t = 0$
- $b$ = Steigung → **absolute** Veränderung je Periode

### 3.3.4 - Trendgerade über den transformierten Zeitindex

**Rechenvereinfachung**

- Bei **äquidistanten** Zeitreihen (gleiche Abstände zwischen den Zeitpunkten) lässt sich der Zeitindex verschieben
- Neuer Index $t'$ wird so gewählt, dass gilt: $\sum t' = 0$
- Dadurch fallen in den Formeln alle Mittelwert-Korrekturen weg → deutlich weniger Rechenaufwand

| Anzahl $T$ | Wahl von $t'$ | Beispiel |
|---|---|---|
| **ungerade** | Mitte $= 0$, Schrittweite $1$ | $T = 5$ → $-2, -1, 0, 1, 2$ |
| **gerade** | kein Nullwert, Schrittweite $2$ | $T = 6$ → $-5, -3, -1, 1, 3, 5$ |

Es gilt dann:

$$
\hat{y}_{t'} = a' + b \cdot t'
$$

mit

$$
a' = \frac{\sum_{t=1}^{T} y_t}{T} = \bar{Y}
\qquad\qquad
b = \frac{\sum_{t=1}^{T} y_t \cdot t'}{\sum_{t=1}^{T} t'^2}
$$

- $a'$ ist einfach der **Mittelwert** der Zeitreihe – kein Bruch mehr nötig
- $b$ bleibt **unverändert** gegenüber der Originalskala (nur die Verschiebung ändert sich, nicht die Steigung)
- Achtung: $a' \neq a$. $a'$ gilt für $t'$, $a$ für den Originalindex $t$

**Güte des Trends**

$$
R^2 = \frac{b^2 \cdot \sum t'^2}{\sum (y_t - \bar{Y})^2}
$$

- Gleiche Logik wie in 3.2.2: Anteil der Streuung, den der Trend **erklärt**
- $0 \leq R^2 \leq 1$, Werte nahe $1$ sprechen für einen gut passenden linearen Trend

:::note Beispiel: Linearer Trend bei 5 Perioden

Umsatz in Mio. € über 5 Jahre:

| $t$ | $t'$ | $y_t$ | $y_t \cdot t'$ | $t'^2$ | $y_t - \bar{Y}$ | $(y_t - \bar{Y})^2$ |
|---|---|---|---|---|---|---|
| 1 | $-2$ | 13 | $-26$ | 4 | $-7$ | 49 |
| 2 | $-1$ | 15 | $-15$ | 1 | $-5$ | 25 |
| 3 | $0$ | 19 | $0$ | 0 | $-1$ | 1 |
| 4 | $1$ | 25 | $25$ | 1 | $5$ | 25 |
| 5 | $2$ | 28 | $56$ | 4 | $8$ | 64 |
| **Σ** | $0$ | **100** | **40** | **10** | $0$ | **164** |

Schritt 1 – Achsenabschnitt (= Mittelwert):

$$
a' = \frac{100}{5} = 20
$$

Schritt 2 – Steigung:

$$
b = \frac{40}{10} = 4
$$

Schritt 3 – Trendgerade:

$$
\hat{y}_{t'} = 20 + 4 \cdot t'
$$

Schritt 4 – Güte:

$$
R^2 = \frac{4^2 \cdot 10}{164} = \frac{160}{164} \approx 0{,}98
$$

**Interpretation:**

- $b = 4$ → Umsatz wächst im Schnitt um **4 Mio. € pro Jahr**
- $a' = 20$ → Trendwert in der **Mitte** der Zeitreihe ($t = 3$) liegt bei 20 Mio. €
- $R^2 \approx 0{,}98$ → rund **98 %** der Streuung werden durch den linearen Trend erklärt
- Prognose für $t = 6$ (also $t' = 3$): $\hat{y} = 20 + 4 \cdot 3 = 32$ → **32 Mio. €**

**Rückrechnung auf den Originalindex** (falls gefordert):

$$
a = a' - b \cdot \bar{t} = 20 - 4 \cdot 3 = 8 \quad\Rightarrow\quad \hat{y}_t = 8 + 4 \cdot t
$$

Probe für $t = 1$: $8 + 4 = 12$, identisch zu $\hat{y}_{t'=-2} = 20 - 8 = 12$ ✓
:::

:::warning Trendprognose ist kein Automatismus
- Gerade wird nur **fortgeschrieben** – es wird unterstellt, dass der Trend anhält
- Strukturbrüche, Sättigung oder Konjunktureinbrüche sind darin **nicht** enthalten
- Je weiter in die Zukunft, desto unsicherer die Prognose
:::

