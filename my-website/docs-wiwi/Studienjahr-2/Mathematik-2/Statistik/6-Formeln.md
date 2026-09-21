# 6. Formelsammlung

:::info
Alle Formeln aus dem Statistik-Skript auf einen Blick. Die Abschnittsangabe in Klammern verweist auf die ausführliche Erklärung mit Beispiel.
:::

## Häufigkeitsverteilungen

**Relative Häufigkeit** (2.1.1)

$$
p_{i} = \frac{f_{i}}{N}
$$

- $f_i$ = absolute Häufigkeit, $N$ = Stichprobenumfang

**Empirische Verteilungsfunktion** (2.1.2)

$$
F_{i} = \sum_{j=1}^{i} p_{j}
$$

- Summe der relativen Häufigkeiten bis zur Ausprägung $i$ – nur ab Ordinalskala sinnvoll

**Formel von Sturges – optimale Klassenanzahl** (2.1.3)

$$
k = 1 + 3{,}3219 \cdot \log(N)
$$

**Normierte relative Häufigkeit** (2.1.3)

$$
p_{i}^{*} = \frac{p_{i}}{c_{i}}
$$

- $c_i$ = Klassenbreite – nötig bei unterschiedlich breiten Klassen

## Lageparameter

**Einfaches arithmetisches Mittel** (2.2.1)

$$
\bar{X} = \mu = \frac{1}{N} \cdot \sum_{i=1}^{N} x_{i}
$$

**Gewogenes arithmetisches Mittel** (2.2.2)

$$
\bar{X} = \mu = \frac{1}{N} \cdot \sum x_{i}^{*} \cdot f_{i} = \sum x_{i}^{*} \cdot p_{i}
$$

- $x_i^*$ = Klassenmitte – für klassierte Daten (Informationsverlust gegenüber Originaldaten)

**Geometrisches Mittel** (2.2.3)

$$
\bar{G} = \sqrt[N]{\prod_{i=1}^{N} x_i} \qquad \text{mit} \qquad x_i = 1 + \frac{\text{relative Änderung in \%}}{100}
$$

- Für durchschnittliche Veränderungsraten (z.B. Wachstum) – $N$ = Anzahl der Veränderungen, nicht der Werte

**Zentralwert (Median) – ungruppierte Daten** (2.2.4)

$$
Z = x_{\frac{N+1}{2}} \qquad \text{für } N \text{ ungerade}
$$

$$
Z = \frac{1}{2} \cdot \left[ x_{\frac{N}{2}} + x_{\frac{N+2}{2}} \right] \qquad \text{für } N \text{ gerade}
$$

**Zentralwert (Median) – gruppierte, quantitativ-stetige Daten** (2.2.4)

$$
Z = x_z^l + c_z \cdot \frac{0{,}5 - F_{Z-1}}{p_z}
$$

- $x_z^l$ = untere Grenze der Klasse, in der $F_i$ den Wert $0{,}5$ erreicht; $c_z$ = Breite dieser Klasse; $F_{Z-1}$ = kumulierte Häufigkeit der Vorklasse; $p_z$ = relative Häufigkeit der Klasse
- Bei quantitativ-diskreten Merkmalen: $Z$ = Klasse, in der $F_i$ den Wert $0{,}5$ erreicht
- **Quartile, Dezile, Perzentile:** dieselbe Formel, nur $0{,}5$ ersetzen durch $0{,}25 / 0{,}75$ (Quartile), $0{,}1 / 0{,}2 / \dots$ (Dezile) bzw. $0{,}01 / 0{,}02 / \dots$ (Perzentile)

**Modus – Feinberechnung bei quantitativ-stetigen Klassen** (2.2.5)

$$
M = x_M^l + c_M \cdot \frac{\Delta 1}{\Delta 1 + \Delta 2} \qquad (\Delta 1 = p_M - p_{M-1},\ \Delta 2 = p_M - p_{M+1})
$$

- $x_M^l$ = untere Grenze der Modusklasse (Klasse mit der größten relativen Häufigkeit), $c_M$ = ihre Breite
- Bei unterschiedlichen Klassenbreiten die relativen Häufigkeiten vorher **normieren**

**Fechnersche Lageregel** (2.2.6)

| Bedingung | Verteilungsform |
|-----------|-----------------|
| $\bar{X} = Z = M$ | symmetrisch |
| $\bar{X} \gt Z \gt M$ | linkssteil (= rechtsschief) |
| $\bar{X} \lt Z \lt M$ | rechtssteil (= linksschief) |

## Streuungsparameter

**Spannweite** (2.3.1)

$$
R = x_{i(max)} - x_{i(min)}
$$

- Bei klassierten Daten: obere Grenze der letzten Klasse minus untere Grenze der ersten Klasse

**Quartilabstand und Dezilabstand** (2.3.1)

$$
Q_3 - Q_1 \qquad \text{(mittlere 50 \%)} \qquad\qquad D_9 - D_1 \qquad \text{(mittlere 80 \%)}
$$

**Mittlere absolute Abweichung** (2.3.2)

$$
MAD = \frac{1}{N} \cdot \sum_{i=1}^{N} \lvert x_i - \bar{X} \rvert
$$

**Varianz – ungruppierte Daten** (2.3.3)

$$
S^2 = \sigma^2 = \frac{1}{N} \cdot \sum_{i=1}^{N} \left( x_i - \bar{X} \right)^2 = \frac{\sum x_i^2}{N} - \bar{X}^2
$$

- Links Definitionsformel, rechts Rechenformel (Verschiebungssatz) – beide liefern dasselbe Ergebnis

**Varianz – gruppierte Daten** (2.3.3)

$$
S^2 = \sigma^2 = \frac{1}{N} \cdot \sum_{i=1}^{k} f_i \cdot \left( x_i^* - \bar{X} \right)^2 = \frac{1}{N} \cdot \sum_{i=1}^{k} f_i \cdot x_i^{*2} - \bar{X}^2
$$

- $k$ = Anzahl der Klassen – Klassenmitten mit $f_i$ gewichten

**Standardabweichung** (2.3.3)

$$
S = \sigma = \sqrt{S^2}
$$

- Wieder in der Einheit der Daten (Varianz hat die quadrierte Einheit)

**Variationskoeffizient (relative Streuung)** (2.3.3)

$$
V = \frac{S}{\bar{X}} = \frac{\sigma}{\bar{X}}
$$

- Dimensionslos, meist in Prozent – macht Streuungen unterschiedlicher Niveaus vergleichbar

## Konzentrationsmaße

**Konzentrationsrate** (2.4.1)

$$
CR_n = \sum_{i=1}^{n} a_i
$$

- Summe der Anteile der $n$ größten Merkmalsträger – Anteile vorher absteigend sortieren

**Herfindahl-Index** (2.4.1)

$$
H = \sum_{i=1}^{N} a_i^2 \qquad \text{mit} \qquad 0 \lt H \leq 10.000
$$

- Anteile in Prozent einsetzen; Maximum $10.000$, wenn ein Träger alles besitzt (als Dezimalzahl: $0 \lt H \leq 1$)

**Gini-Koeffizient** (2.4.2)

$$
G = \sum_{i=1}^{n-1} F_i \cdot H_{i+1} - \sum_{i=1}^{n-1} F_{i+1} \cdot H_i \qquad \text{mit} \qquad 0 \leq G \lt 1
$$

- $F_i$ = kumulierte relative Häufigkeit der Merkmalsträger, $H_i$ = kumulierte relative Merkmalssumme, $n$ = Anzahl der Wertepaare inkl. Start- und Endpunkt
- Werte als Dezimalzahlen einsetzen; $G = 0$ bedeutet Gleichverteilung, $G$ nahe $1$ maximale Konzentration

## Verhältnis- und Indexzahlen

**Preisindex nach Laspeyres** (3.2.1)

$$
P_{0t}^{(L)} = \frac{\sum_{i=1}^{m} p_{ti} \cdot q_{0i}}{\sum_{i=1}^{m} p_{0i} \cdot q_{0i}} \cdot 100
$$

- Gewichtung mit den Mengen des **Basiszeitpunkts** ($q_{0i}$) – fester Warenkorb

**Preisindex nach Paasche** (3.2.1)

$$
P_{0t}^{(P)} = \frac{\sum_{i=1}^{m} p_{ti} \cdot q_{ti}}{\sum_{i=1}^{m} p_{0i} \cdot q_{ti}} \cdot 100
$$

- Gewichtung mit den Mengen des **Berichtszeitpunkts** ($q_{ti}$) – laufend angepasster Warenkorb
- Bei beiden: Zähler = neue Preise, Nenner = alte Preise, Mengen in Zähler und Nenner identisch

## Korrelation

**Empirischer Korrelationskoeffizient nach Bravais-Pearson** (3.2.1)

$$
\rho = \frac{\sum_{i=1}^{N} (x_i - \bar{X}) \cdot (y_i - \bar{Y})}{\sqrt{\sum_{i=1}^{N} (x_i - \bar{X})^2 \cdot \sum_{i=1}^{N} (y_i - \bar{Y})^2}}
$$

- Nur für **kardinal** skalierte Merkmale; misst ausschließlich den **linearen** Zusammenhang
- $-1 \leq \rho \leq +1$ – Vorzeichen = Richtung, Betrag = Stärke
- $\rho = 0$ heißt „kein **linearer** Zusammenhang“, nicht „kein Zusammenhang“

## Regression

**Regressionsgerade (lineare Einfachregression)** (3.2.2)

$$
\hat{y}_i = \beta_0 + \beta_1 \cdot x_i
$$

- $\beta_0$ = Achsenabschnitt, $\beta_1$ = Steigung
- $X$ = unabhängige (erklärende), $Y$ = abhängige Variable – **nicht** vertauschbar

**Methode der kleinsten Quadrate** (3.2.2)

$$
\sum_{i=1}^{N} \varepsilon_i^2 = \sum_{i=1}^{N} (y_i - \hat{y}_i)^2 = \sum_{i=1}^{N} (y_i - \beta_0 - \beta_1 \cdot x_i)^2 \;\longrightarrow\; \min!
$$

- Bestimmungsprinzip der Geraden; Quadrieren verhindert Aufheben von $+$ und $-$

**Steigung** (3.2.2)

$$
\beta_1 = \frac{\sum_{i=1}^{N} (x_i - \bar{X}) \cdot (y_i - \bar{Y})}{\sum_{i=1}^{N} (x_i - \bar{X})^2}
$$

- Zähler identisch mit dem Zähler von $\rho$; Nenner = Streuung nur von $X$

**Achsenabschnitt** (3.2.2)

$$
\beta_0 = \bar{Y} - \beta_1 \cdot \bar{X}
$$

- Reihenfolge zwingend: erst $\beta_1$, dann $\beta_0$

**Determinationskoeffizient (Bestimmtheitsmaß)** (3.2.2)

$$
R^2 = \frac{\beta_1^2 \cdot \sum_{i=1}^{N} (x_i - \bar{X})^2}{\sum_{i=1}^{N} (y_i - \bar{Y})^2}
$$

- $0 \leq R^2 \leq 1$ – Anteil der durch $X$ erklärten Streuung von $Y$
- Bei der Einfachregression gilt $R^2 = \rho^2$
- Niedriges $R^2$ ≠ kein Zusammenhang (evtl. nicht-linear oder überlagert)

## Zeitreihenanalyse

**Ungerader gleitender Durchschnitt** (3.3.2)

$$
\bar{Y}_t^{*} = \frac{1}{2k+1} \cdot \left( y_{t-k} + y_{t-k+1} + \dots + y_t + \dots + y_{t+k-1} + y_{t+k} \right)
$$

- $2k+1$ Werte, alle **gleich** gewichtet; $k = 1$ → 3er, $k = 2$ → 5er

**Gerader gleitender Durchschnitt** (3.3.2)

$$
\bar{Y}_t^{*} = \frac{1}{2k} \cdot \left( \frac{1}{2} \cdot y_{t-k} + y_{t-k+1} + \dots + y_t + \dots + y_{t+k-1} + \frac{1}{2} \cdot y_{t+k} \right)
$$

- $2k$ Werte, die beiden **Randwerte nur halb** gewichtet (zentriert das Fenster)
- Ordnung nach Frequenz wählen: Quartale → 4er, Monate → 12er
- Pro Rand gehen $k$ Werte verloren (insgesamt $2k$)

**Trendgerade (linearer Trend)** (3.3.3)

$$
\hat{y}_t = a + b \cdot t
$$

- $b$ = **absolute** Veränderung je Periode; Bestimmung nach kleinsten Quadraten

**Transformierter Zeitindex** (3.3.4)

- $t'$ so wählen, dass $\sum t' = 0$ (nur bei **äquidistanten** Zeitreihen)
- $T$ ungerade → Mitte $=0$, Schrittweite $1$ (z.B. $-2,-1,0,1,2$)
- $T$ gerade → kein Nullwert, Schrittweite $2$ (z.B. $-5,-3,-1,1,3,5$)

$$
\hat{y}_{t'} = a' + b \cdot t'
$$

**Achsenabschnitt bei transformiertem Index** (3.3.4)

$$
a' = \frac{\sum_{t=1}^{T} y_t}{T} = \bar{Y}
$$

- Entspricht dem **Mittelwert** der Zeitreihe; Rückrechnung: $a = a' - b \cdot \bar{t}$

**Steigung bei transformiertem Index** (3.3.4)

$$
b = \frac{\sum_{t=1}^{T} y_t \cdot t'}{\sum_{t=1}^{T} t'^2}
$$

- Steigung ist **unabhängig** von der Verschiebung, gilt also auch für den Originalindex

**Determinationskoeffizient des Trends** (3.3.4)

$$
R^2 = \frac{b^2 \cdot \sum t'^2}{\sum (y_t - \bar{Y})^2}
$$

- Gleiche Logik wie bei der Einfachregression; $0 \leq R^2 \leq 1$

## Symbolverzeichnis

| Symbol | Bedeutung |
|---|---|
| $N$ | Stichprobenumfang (Anzahl aller Beobachtungen) |
| $x_i$ | einzelner Beobachtungswert |
| $x_i^*$ | Klassenmitte der Klasse $i$ |
| $f_i$ | absolute Häufigkeit |
| $p_i$ | relative Häufigkeit |
| $p_i^*$ | normierte relative Häufigkeit |
| $F_i$ | empirische Verteilungsfunktion (kumulierte relative Häufigkeit) |
| $c_i$ | Klassenbreite |
| $x^l$ | untere Klassengrenze (*lower*) |
| $\bar{X}, \mu$ | arithmetisches Mittel |
| $\bar{G}$ | geometrisches Mittel |
| $Z$ | Zentralwert (Median) |
| $M$ | Modus |
| $R$ | Spannweite |
| $MAD$ | mittlere absolute Abweichung |
| $S^2, \sigma^2$ | Varianz |
| $S, \sigma$ | Standardabweichung |
| $V$ | Variationskoeffizient |
| $k$ | Anzahl der Klassen |
| $a_i$ | Anteil (z.B. Marktanteil) des $i$-größten Merkmalsträgers |
| $CR_n$ | Konzentrationsrate der $n$ größten Merkmalsträger |
| $H$ | Herfindahl-Index |
| $H_i$ | kumulierte relative Merkmalssumme (Lorenzkurve, y-Achse) |
| $G$ | Gini-Koeffizient |
| $m$ | Anzahl der Güter im Warenkorb |
| $p_{0i},\ p_{ti}$ | Preis des Gutes $i$ im Basis- bzw. Berichtszeitpunkt |
| $q_{0i},\ q_{ti}$ | Menge des Gutes $i$ im Basis- bzw. Berichtszeitpunkt |
| $P_{0t}^{(L)},\ P_{0t}^{(P)}$ | Preisindex nach Laspeyres bzw. Paasche |
| $\rho$ | empirischer Korrelationskoeffizient |
| $y_i$ | beobachteter Wert der abhängigen Variable |
| $\hat{y}_i$ | geschätzter Wert auf der Regressionsgerade |
| $\varepsilon_i$ | Residuum ($y_i - \hat{y}_i$) |
| $\beta_0$ | Achsenabschnitt der Regressionsgerade |
| $\beta_1$ | Steigung der Regressionsgerade |
| $R^2$ | Determinationskoeffizient (Bestimmtheitsmaß) |
| $t$ | Zeitindex (Periode) |
| $T$ | Anzahl der Perioden der Zeitreihe |
| $y_t$ | Wert der Zeitreihe in Periode $t$ |
| $\bar{Y}_t^{*}$ | geglätteter Wert (gleitender Durchschnitt) in Periode $t$ |
| $k$ | Anzahl der Werte je Seite beim gleitenden Durchschnitt |
| $a,\ b$ | Achsenabschnitt bzw. Steigung der Trendgerade |
| $t'$ | transformierter Zeitindex mit $\sum t' = 0$ |
| $a'$ | Achsenabschnitt bezogen auf $t'$ (= $\bar{Y}$) |
