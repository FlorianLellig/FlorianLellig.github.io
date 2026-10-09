# 3. Ganzzahlige Optimierung

## 3.1 - Einführung

Bei vielen Optimierungsproblemen muss **mindestens eine Variable ganzzahlig** sein – halbe Maschinen, 2,7 Mitarbeiter oder 0,4 LKW gibt es nicht.

:::warning Einfach runden reicht nicht
Die Lösung des „normalen" LOP und die ganzzahlige Lösung können **weit auseinanderliegen**. Beispiel aus der Vorlesung: Ohne Ganzzahligkeit ist das Optimum $(4;\ 4{,}5)$, mit Ganzzahligkeit $(1;\ 2)$. Deshalb braucht man eigene Verfahren.
:::

### Typische Problemstellungen

| Problem | Worum geht es? |
|---|---|
| **Travelling Salesman Problem (TSP)** | Eine Rundreise besucht alle Orte genau einmal und kehrt zum Start zurück – gesucht ist die **kürzeste** Route |
| **Rucksackproblem** | Gegenstände mit Gewicht und Nutzen werden in ganzen Einheiten eingepackt – gesucht ist der **größte Nutzen**, ohne das Höchstgewicht zu überschreiten |
| **Zuordnungsproblem** | Elemente zweier Mengen werden einander zugeordnet (z.B. Mitarbeiter ↔ Aufgaben), jede Zuordnung kostet etwas – gesucht sind die **minimalen Gesamtkosten** |

### Unsere zwei Verfahren

Für uns kommen **zwei Verfahren** in Frage:
1. **Branch & Bound** – den Lösungsraum geschickt aufteilen und uninteressante Bereiche früh verwerfen
2. **Dynamische Optimierung** – das Problem in aufeinander aufbauende **Stufen** zerlegen (siehe 3.2)

## 3.2 - Dynamische Optimierung

**Idee:** Man löst das Problem nicht auf einmal, sondern baut es **Stufe für Stufe** auf. Jede Stufe nimmt eine weitere Ware dazu und nutzt die Ergebnisse der vorherigen Stufe. Die letzte Stufe ist dann das komplette Problem.

:::info Beispiel: LKW beladen (Rucksackproblem)
Ein LKW darf **höchstens 5 t** laden. Es gibt drei Waren auf Paletten:

| Ware | Gewicht (t) | Wert (T€) |
|:---:|:---:|:---:|
| 1 | 2 | 65 |
| 2 | 3 | 80 |
| 3 | 1 | 30 |

$$
\begin{aligned}
\max \quad & z = 65x_1 + 80x_2 + 30x_3 \\
\text{u. d. N.} \quad & 2x_1 + 3x_2 + x_3 \leq 5 \\
& x_1, x_2, x_3 \in \{0, 1, 2, \dots\}
\end{aligned}
$$
:::

#### Schritt 1 – Wertebereiche der Variablen bestimmen
Wie oft passt jede Ware **maximal** auf den LKW? → Höchstgewicht durch Gewicht der Ware, abgerundet:

$$
x_1 \in \{0, 1, 2\} \quad (5/2) \qquad x_2 \in \{0, 1\} \quad (5/3) \qquad x_3 \in \{0, 1, \dots, 5\} \quad (5/1)
$$

#### Schritt 2 – Stufen bilden
Jede Stufe nimmt **eine Ware dazu**:
- **Stufe 1:** nur Ware 1
- **Stufe 2:** Ware 1 und 2
- **Stufe 3:** alle Waren

#### Schritt 3 – Mögliche Beladungszustände $y$ festlegen
$y$ = das **geladene Gewicht in Tonnen**, das mit den Waren der jeweiligen Stufe genau erreicht werden kann:

| Stufe | mögliche Beladungen $y$ | Begründung |
|---|---|---|
| 1 | $y_1 \in \{0, 2, 4\}$ | nur Vielfache von 2 t |
| 2 | $y_2 \in \{0, 2, 3, 4, 5\}$ | Kombinationen aus 2 t und 3 t |
| 3 | $y_3 \in \{0, 1, 2, 3, 4, 5\}$ | mit der 1-t-Ware ist jedes Gewicht erreichbar |

#### Schritt 4 – Stufen nacheinander optimieren
Für jede Stufe wird eine Tabelle aufgestellt:
- **Zeilen:** die Beladungszustände $y$
- **Spalten:** die möglichen Mengen der neuen Ware
- **$f(y)$:** der **beste Wert**, der mit genau $y$ Tonnen erreichbar ist
- **$x^{opt}$:** die **Menge der neuen Ware**, mit der dieser beste Wert erreicht wird
- **„–"** = diese Kombination ist nicht möglich (zu schwer oder das Restgewicht ist in der Vorstufe nicht erreichbar)

Ab Stufe 2 gilt immer: **Wert der neuen Ware + bester Wert der Vorstufe für das Restgewicht**

$$
f_k(y) = \max_{x_k} \Big( \text{Wert}_k \cdot x_k + f_{k-1}\big(y - \text{Gewicht}_k \cdot x_k\big) \Big)
$$

**Stufe 1:** $f_1(y_1) = \max(65 x_1)$

| $y_1$ | $x_1 = 0$ | $x_1 = 1$ | $x_1 = 2$ | $f_1(y_1)$ | $x_1^{opt}$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | – | – | 0 | 0 |
| 2 | – | 65 | – | 65 | 1 |
| 4 | – | – | 130 | 130 | 2 |

**Stufe 2:** $f_2(y_2) = \max\big(80 x_2 + f_1(y_2 - 3x_2)\big)$

| $y_2$ | $x_2 = 0$ | $x_2 = 1$ | $f_2(y_2)$ | $x_2^{opt}$ |
|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | – | 0 | 0 |
| 2 | 65 | – | 65 | 0 |
| 3 | – | 80 + $f_1(0)$ = 80 | 80 | 1 |
| 4 | 130 | – | 130 | 0 |
| 5 | – | 80 + $f_1(2)$ = 145 | 145 | 1 |

**Stufe 3:** $f_3(y_3) = \max\big(30 x_3 + f_2(y_3 - x_3)\big)$

| $y_3$ | $x_3 = 0$ | $x_3 = 1$ | $x_3 = 2$ | $x_3 = 3$ | $x_3 = 4$ | $x_3 = 5$ | $f_3(y_3)$ | $x_3^{opt}$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 0 | – | – | – | – | – | 0 | 0 |
| 1 | – | 30 | – | – | – | – | 30 | 1 |
| 2 | 65 | – | 60 | – | – | – | 65 | 0 |
| 3 | 80 | 95 | – | 90 | – | – | 95 | 1 |
| 4 | 130 | 110 | 125 | – | 120 | – | 130 | 0 |
| 5 | 145 | **160** | 140 | 155 | – | 150 | **160** | **1** |

Beispiel für eine Zelle: $y_3 = 5,\ x_3 = 1$ → $30 \cdot 1 + f_2(5 - 1) = 30 + f_2(4) = 30 + 130 = 160$

#### Schritt 5 – Optimum in der letzten Stufe ablesen
Der größte Wert in der letzten Tabelle ist $f_3(5) = \mathbf{160}$ T€ – mehr ist nicht möglich.

#### Schritt 6 – Rückwärts zurückverfolgen
Jetzt geht man die Tabellen **von hinten nach vorne** durch und gibt jeweils das **Restgewicht** an die Vorstufe weiter:

| Stufe | ablesen | Restgewicht für Vorstufe |
|---|---|---|
| 3 | $f_3(5) = 160$ → $x_3^{opt} = 1$ | $5 - 1 \cdot 1 = 4$ |
| 2 | $f_2(4) = 130$ → $x_2^{opt} = 0$ | $4 - 0 \cdot 3 = 4$ |
| 1 | $f_1(4) = 130$ → $x_1^{opt} = 2$ | – |

$$
\boxed{\ x_1 = 2, \quad x_2 = 0, \quad x_3 = 1, \quad z = 2 \cdot 65 + 1 \cdot 30 = 160 \text{ T€}\ }
$$

Probe Gewicht: $2 \cdot 2 + 1 \cdot 1 = 5$ t ✓

### Zusammenfassung

<svg viewBox="0 0 700 690" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"700px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-dyn" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2176AE"/>
    </marker>
  </defs>
  <rect x="110" y="15" width="180" height="36" rx="18" fill="#eef5fb" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="200" y="38" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">Rucksackproblem</text>
  <line x1="200" y1="51" x2="200" y2="83" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-dyn)"/>

  <rect x="40" y="85" width="320" height="56" rx="8" fill="#dbeeff" fillOpacity="0.5" stroke="#2176AE" strokeWidth="2"/>
  <circle cx="40" cy="113" r="14" fill="#2176AE"/>
  <text x="40" y="117" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">1</text>
  <text x="70" y="109" fontSize="13.5" fontWeight="bold" fill="#1a5c8c">Wertebereiche bestimmen</text>
  <text x="70" y="128" fontSize="11" fill="#555">wie oft passt jede Ware maximal?</text>
  <line x1="200" y1="141" x2="200" y2="173" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-dyn)"/>

  <rect x="40" y="175" width="320" height="56" rx="8" fill="#dbeeff" fillOpacity="0.5" stroke="#2176AE" strokeWidth="2"/>
  <circle cx="40" cy="203" r="14" fill="#2176AE"/>
  <text x="40" y="207" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">2</text>
  <text x="70" y="199" fontSize="13.5" fontWeight="bold" fill="#1a5c8c">Stufen bilden</text>
  <text x="70" y="218" fontSize="11" fill="#555">jede Stufe nimmt eine Ware dazu</text>
  <line x1="200" y1="231" x2="200" y2="263" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-dyn)"/>

  <rect x="40" y="265" width="320" height="56" rx="8" fill="#dbeeff" fillOpacity="0.5" stroke="#2176AE" strokeWidth="2"/>
  <circle cx="40" cy="293" r="14" fill="#2176AE"/>
  <text x="40" y="297" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">3</text>
  <text x="70" y="289" fontSize="13.5" fontWeight="bold" fill="#1a5c8c">Beladungszustände y festlegen</text>
  <text x="70" y="308" fontSize="11" fill="#555">y = geladenes Gewicht in t</text>
  <line x1="200" y1="321" x2="200" y2="353" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-dyn)"/>

  <rect x="40" y="355" width="320" height="56" rx="8" fill="#dbeeff" fillOpacity="0.5" stroke="#2176AE" strokeWidth="2"/>
  <circle cx="40" cy="383" r="14" fill="#2176AE"/>
  <text x="40" y="387" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">4</text>
  <text x="70" y="379" fontSize="13.5" fontWeight="bold" fill="#1a5c8c">Stufen vorwärts optimieren</text>
  <text x="70" y="398" fontSize="11" fill="#555">je Stufe eine Tabelle mit f(y) und x opt</text>
  <line x1="200" y1="411" x2="200" y2="443" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-dyn)"/>

  <rect x="40" y="445" width="320" height="56" rx="8" fill="#dbeeff" fillOpacity="0.5" stroke="#2176AE" strokeWidth="2"/>
  <circle cx="40" cy="473" r="14" fill="#2176AE"/>
  <text x="40" y="477" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">5</text>
  <text x="70" y="469" fontSize="13.5" fontWeight="bold" fill="#1a5c8c">Optimum in letzter Stufe ablesen</text>
  <text x="70" y="488" fontSize="11" fill="#555">größter Wert f(y) der letzten Tabelle</text>
  <line x1="200" y1="501" x2="200" y2="533" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-dyn)"/>

  <rect x="40" y="535" width="320" height="56" rx="8" fill="#dbeeff" fillOpacity="0.5" stroke="#2176AE" strokeWidth="2"/>
  <circle cx="40" cy="563" r="14" fill="#2176AE"/>
  <text x="40" y="567" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">6</text>
  <text x="70" y="559" fontSize="13.5" fontWeight="bold" fill="#1a5c8c">Rückwärts zurückverfolgen</text>
  <text x="70" y="578" fontSize="11" fill="#555">Restgewicht an die Vorstufe weitergeben</text>
  <line x1="200" y1="591" x2="200" y2="623" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-dyn)"/>

  <rect x="80" y="625" width="240" height="50" rx="25" fill="#2a9d6e" fillOpacity="0.15" stroke="#2a9d6e" strokeWidth="2"/>
  <text x="200" y="646" textAnchor="middle" fontSize="13.5" fontWeight="bold" fill="#1a6644">Optimale Lösung ✓</text>
  <text x="200" y="664" textAnchor="middle" fontSize="11" fill="#1a6644">x1 = 2, x2 = 0, x3 = 1 · z = 160 T€</text>

  <line x1="360" y1="113" x2="400" y2="113" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <rect x="400" y="85" width="290" height="56" rx="6" fill="white" stroke="#ccc" strokeWidth="1"/>
  <text x="412" y="108" fontSize="11.5" fill="#333">Höchstgewicht / Gewicht, abgerundet</text>
  <text x="412" y="128" fontSize="11.5" fill="#333">{"x1 ∈ {0,1,2} · x2 ∈ {0,1} · x3 ∈ {0,…,5}"}</text>

  <line x1="360" y1="203" x2="400" y2="203" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <rect x="400" y="175" width="290" height="56" rx="6" fill="white" stroke="#ccc" strokeWidth="1"/>
  <text x="412" y="198" fontSize="11.5" fill="#333">Stufe 1: Ware 1</text>
  <text x="412" y="218" fontSize="11.5" fill="#333">Stufe 2: Ware 1 + 2 · Stufe 3: alle</text>

  <line x1="360" y1="293" x2="400" y2="293" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <rect x="400" y="265" width="290" height="56" rx="6" fill="white" stroke="#ccc" strokeWidth="1"/>
  <text x="412" y="288" fontSize="11.5" fill="#333">{"y1 ∈ {0,2,4} · y2 ∈ {0,2,3,4,5}"}</text>
  <text x="412" y="308" fontSize="11.5" fill="#333">{"y3 ∈ {0,1,2,3,4,5}"}</text>

  <line x1="360" y1="383" x2="400" y2="383" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <rect x="400" y="355" width="290" height="56" rx="6" fill="white" stroke="#ccc" strokeWidth="1"/>
  <text x="412" y="378" fontSize="11.5" fill="#333">f(y) = max( Wert · x + f Vorstufe(Rest) )</text>
  <text x="412" y="398" fontSize="11.5" fill="#333">Rest = y − Gewicht · x</text>

  <line x1="360" y1="473" x2="400" y2="473" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <rect x="400" y="445" width="290" height="56" rx="6" fill="white" stroke="#ccc" strokeWidth="1"/>
  <text x="412" y="468" fontSize="11.5" fill="#333">f3(5) = 160</text>
  <text x="412" y="488" fontSize="11.5" fill="#333">→ maximaler Wert der Ladung</text>

  <line x1="360" y1="563" x2="400" y2="563" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <rect x="400" y="535" width="290" height="56" rx="6" fill="white" stroke="#ccc" strokeWidth="1"/>
  <text x="412" y="558" fontSize="11.5" fill="#333">x3 = 1 → Rest 4 → x2 = 0 → Rest 4</text>
  <text x="412" y="578" fontSize="11.5" fill="#333">→ x1 = 2</text>
</svg>

:::tip Minimierung statt Maximierung
Das Vorgehen bleibt gleich, nur drei Dinge ändern sich:
- In jeder Tabelle wird der **kleinste** statt des größten Werts gewählt: $f_k(y) = \min(\dots)$
- Nicht mögliche Kombinationen („–") dürfen **nicht als 0** gewertet werden – sonst wäre „nichts tun" immer das Minimum. Sie fallen einfach weg.
- In der letzten Stufe wird der **kleinste** Wert unter den **zulässigen** Endzuständen abgelesen (z.B. nur die Zustände, die eine geforderte Mindestmenge erfüllen).
:::


## 3.3 - Branch & Bound Verfahren

**Idee:** Statt alle ganzzahligen Kombinationen durchzuprobieren, wird der Lösungsraum schrittweise **aufgeteilt** (Branch) und Bereiche, die nachweislich keine bessere Lösung liefern können, werden **verworfen** (Bound).

:::info Beispiel
$$
\begin{aligned}
\max \quad & z = x_1 + 2x_2 \\
\text{u. d. N.} \quad & x_1 + 3x_2 \leq 7 \\
& 3x_1 + 2x_2 \leq 10 \\
& x_1, x_2 \geq 0 \text{ und ganzzahlig}
\end{aligned}
$$
:::

### Schritt 1 – Problem ohne Ganzzahligkeit lösen
Das Problem wird ganz normal mit dem Simplex (oder grafisch) gelöst – die Ganzzahligkeit wird dabei **ignoriert**:

$$
x_1 = \tfrac{16}{7} \approx 2{,}29 \qquad x_2 = \tfrac{11}{7} \approx 1{,}57 \qquad z = \tfrac{38}{7} \approx 5{,}43
$$

- Die Lösung ist **nicht ganzzahlig** → nicht zulässig
- Aber: $z = 5{,}43$ ist eine **obere Schranke** – besser als das kann keine ganzzahlige Lösung werden

:::tip Relaxation
Man spricht hier von einer **Relaxation** („Lockerung"), weil das Problem zunächst **ohne die eigentliche Ganzzahligkeitsbedingung** gelöst wird. Das relaxierte Problem ist einfach zu lösen und liefert eine Schranke für das echte Problem.
:::

### Schritt 2 – Separation: Lösungsraum aufspalten
Man wählt eine **nicht ganzzahlige Variable** – hier $x_1 = 2{,}29$. Eine ganzzahlige Lösung muss dann entweder
- **kleiner gleich der nächstkleineren** ganzen Zahl sein: $x_1 \leq 2$, oder
- **größer gleich der nächstgrößeren** ganzen Zahl sein: $x_1 \geq 3$

Der Bereich $2 < x_1 < 3$ wird herausgeschnitten – dort liegt sowieso keine ganzzahlige Lösung. Es entstehen **zwei neue Teilprobleme**, jeweils mit einer zusätzlichen Nebenbedingung:

<svg viewBox="0 0 700 270" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"700px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-bb1" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
  <line x1="315.2" y1="100.1" x2="234.8" y2="169.9" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb1)"/>
  <text x="255" y="128" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> ≤ 2</tspan></text>
  <line x1="384.8" y1="100.1" x2="465.2" y2="169.9" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb1)"/>
  <text x="445" y="128" textAnchor="start" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> ≥ 3</tspan></text>
  <circle cx="350" cy="70" r="46" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="350" y="60" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 2,29</tspan></text>
  <text x="350" y="76" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 1,57</tspan></text>
  <text x="350" y="95" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">z = 5,43</text>
  <circle cx="316" cy="36" r="12" fill="#2176AE"/>
  <text x="316" y="40" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">1</text>
  <circle cx="200" cy="200" r="46" fill="#f5f5f5" stroke="#999" strokeWidth="1.5" strokeDasharray="5,4"/>
  <text x="200" y="208" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#999">?</text>
  <text x="200" y="228" textAnchor="middle" fontSize="10" fill="#999">noch lösen</text>
  <circle cx="166" cy="166" r="12" fill="#999"/>
  <text x="166" y="170" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">2</text>
  <circle cx="500" cy="200" r="46" fill="#f5f5f5" stroke="#999" strokeWidth="1.5" strokeDasharray="5,4"/>
  <text x="500" y="208" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#999">?</text>
  <text x="500" y="228" textAnchor="middle" fontSize="10" fill="#999">noch lösen</text>
  <circle cx="466" cy="166" r="12" fill="#999"/>
  <text x="466" y="170" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">3</text>
</svg>

### Schritt 3 – Neue Teilprobleme lösen
Jedes Teilproblem wird wieder relaxiert gelöst (Schritt 1), nur eben **mit der zusätzlichen Nebenbedingung**. Ist das Ergebnis wieder nicht ganzzahlig, wird erneut aufgespalten (Schritt 2):

| Problem | Nebenbedingungen zusätzlich | Lösung $(x_1;\ x_2)$ | $z$ | Bewertung |
|:---:|---|---|:---:|---|
| 2 | $x_1 \leq 2$ | $(2;\ 1{,}67)$ | 5,33 | $x_2$ nicht ganzzahlig → aufspalten in **4** ($x_2 \leq 1$) und **5** ($x_2 \geq 2$) |
| 3 | $x_1 \geq 3$ | $(3;\ 0{,}5)$ | 4 | nicht ganzzahlig – aber siehe unten |
| 4 | $x_1 \leq 2,\ x_2 \leq 1$ | $(2;\ 1)$ | 4 | **ganzzahlig** ✓ |
| 5 | $x_1 \leq 2,\ x_2 \geq 2$ | $(1;\ 2)$ | 5 | **ganzzahlig** ✓ → beste bisher gefundene Lösung |

**Warum endet Problem 3?** Der relaxierte Wert $z = 4$ ist das Beste, was in diesem Zweig überhaupt möglich ist. Mit Problem 5 haben wir aber schon eine ganzzahlige Lösung mit $z = 5$ → weiteres Aufspalten von 3 kann nie etwas Besseres liefern.

<svg viewBox="0 0 700 410" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"700px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-bb2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
  <line x1="315.2" y1="100.1" x2="234.8" y2="169.9" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb2)"/>
  <text x="255" y="128" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> ≤ 2</tspan></text>
  <line x1="384.8" y1="100.1" x2="465.2" y2="169.9" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb2)"/>
  <text x="445" y="128" textAnchor="start" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> ≥ 3</tspan></text>
  <line x1="175.1" y1="238.7" x2="134.9" y2="301.3" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb2)"/>
  <text x="148" y="268" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> ≤ 1</tspan></text>
  <line x1="224.9" y1="238.7" x2="265.1" y2="301.3" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb2)"/>
  <text x="252" y="268" textAnchor="start" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> ≥ 2</tspan></text>
  <circle cx="350" cy="70" r="46" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="350" y="60" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 2,29</tspan></text>
  <text x="350" y="76" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 1,57</tspan></text>
  <text x="350" y="95" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">z = 5,43</text>
  <circle cx="316" cy="36" r="12" fill="#2176AE"/>
  <text x="316" y="40" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">1</text>
  <circle cx="200" cy="200" r="46" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="200" y="190" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 2</tspan></text>
  <text x="200" y="206" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 1,67</tspan></text>
  <text x="200" y="225" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">z = 5,33</text>
  <circle cx="166" cy="166" r="12" fill="#2176AE"/>
  <text x="166" y="170" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">2</text>
  <circle cx="500" cy="200" r="46" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="500" y="190" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 3</tspan></text>
  <text x="500" y="206" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 0,5</tspan></text>
  <text x="500" y="225" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">z = 4</text>
  <circle cx="466" cy="166" r="12" fill="#2176AE"/>
  <text x="466" y="170" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">3</text>
  <text x="500" y="264" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#777">kein weiteres Verzweigen</text>
  <circle cx="110" cy="340" r="46" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="110" y="330" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 2</tspan></text>
  <text x="110" y="346" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 1</tspan></text>
  <text x="110" y="365" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">z = 4</text>
  <circle cx="76" cy="306" r="12" fill="#2176AE"/>
  <text x="76" y="310" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">4</text>
  <circle cx="290" cy="340" r="46" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="290" y="330" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 1</tspan></text>
  <text x="290" y="346" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 2</tspan></text>
  <text x="290" y="365" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">z = 5</text>
  <circle cx="256" cy="306" r="12" fill="#2176AE"/>
  <text x="256" y="310" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">5</text>
</svg>

:::note Wann ist ein Zweig ausgelotet (fertig)?
1. Die Lösung ist **ganzzahlig** (Probleme 4 und 5)
2. Der relaxierte $z$-Wert ist **nicht besser** als die beste bisher gefundene ganzzahlige Lösung (Problem 3)
3. Das Teilproblem hat **keine zulässige Lösung**
:::

:::danger Erst fertig, wenn alles ausgelotet ist
Das Branch & Bound Verfahren ist erst beendet, wenn **wirklich alle Zweige vollständig ausgelotet** sind. Hört man nach der ersten ganzzahligen Lösung auf, können einem **bessere Werte in anderen Zweigen entgehen** – im Beispiel wäre Problem 4 ($z = 4$) gefunden worden, obwohl Problem 5 ($z = 5$) besser ist.
:::

### Schritt 4 – Optimum ablesen
Alle Zweige sind ausgelotet. Die beste ganzzahlige Lösung ist das Optimum:

<svg viewBox="0 0 700 470" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"700px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-bb3" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
  <line x1="315.2" y1="100.1" x2="234.8" y2="169.9" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb3)"/>
  <text x="255" y="128" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> ≤ 2</tspan></text>
  <line x1="384.8" y1="100.1" x2="465.2" y2="169.9" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb3)"/>
  <text x="445" y="128" textAnchor="start" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> ≥ 3</tspan></text>
  <line x1="175.1" y1="238.7" x2="134.9" y2="301.3" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb3)"/>
  <text x="148" y="268" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> ≤ 1</tspan></text>
  <line x1="224.9" y1="238.7" x2="265.1" y2="301.3" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-bb3)"/>
  <text x="252" y="268" textAnchor="start" fontSize="12" fontWeight="bold" fill="#333">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> ≥ 2</tspan></text>
  <circle cx="350" cy="70" r="46" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="350" y="60" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 2,29</tspan></text>
  <text x="350" y="76" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 1,57</tspan></text>
  <text x="350" y="95" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">z = 5,43</text>
  <circle cx="316" cy="36" r="12" fill="#2176AE"/>
  <text x="316" y="40" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">1</text>
  <circle cx="200" cy="200" r="46" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="200" y="190" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 2</tspan></text>
  <text x="200" y="206" textAnchor="middle" fontSize="11.5" fill="#1a5c8c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 1,67</tspan></text>
  <text x="200" y="225" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">z = 5,33</text>
  <circle cx="166" cy="166" r="12" fill="#2176AE"/>
  <text x="166" y="170" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">2</text>
  <circle cx="500" cy="200" r="46" fill="#f5f5f5" stroke="#999" strokeWidth="1.5" strokeDasharray="5,4"/>
  <text x="500" y="190" textAnchor="middle" fontSize="11.5" fill="#777">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 3</tspan></text>
  <text x="500" y="206" textAnchor="middle" fontSize="11.5" fill="#777">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 0,5</tspan></text>
  <text x="500" y="225" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#777">z = 4</text>
  <circle cx="466" cy="166" r="12" fill="#999"/>
  <text x="466" y="170" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">3</text>
  <text x="500" y="264" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#777">z = 4 ≤ 5 → Abbruch</text>
  <circle cx="110" cy="340" r="46" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.8"/>
  <text x="110" y="330" textAnchor="middle" fontSize="11.5" fill="#1a6b3c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 2</tspan></text>
  <text x="110" y="346" textAnchor="middle" fontSize="11.5" fill="#1a6b3c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 1</tspan></text>
  <text x="110" y="365" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a6b3c">z = 4</text>
  <circle cx="76" cy="306" r="12" fill="#27ae60"/>
  <text x="76" y="310" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">4</text>
  <text x="110" y="404" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1a6b3c">ganzzahlig, aber z = 4 < 5</text>
  <circle cx="290" cy="340" r="52" fill="none" stroke="#27ae60" strokeWidth="1.5" strokeOpacity="0.5"/>
  <circle cx="290" cy="340" r="46" fill="#e8f5e9" stroke="#1e8449" strokeWidth="3.5"/>
  <text x="290" y="330" textAnchor="middle" fontSize="11.5" fill="#1a6b3c">x<tspan dy="3" fontSize="8">1</tspan><tspan dy="-3"> = 1</tspan></text>
  <text x="290" y="346" textAnchor="middle" fontSize="11.5" fill="#1a6b3c">x<tspan dy="3" fontSize="8">2</tspan><tspan dy="-3"> = 2</tspan></text>
  <text x="290" y="365" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a6b3c">z = 5</text>
  <circle cx="256" cy="306" r="12" fill="#1e8449"/>
  <text x="256" y="310" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">5</text>
  <text x="290" y="404" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1e8449">★ Optimum</text>
  <line x1="30" y1="414" x2="670" y2="414" stroke="#ddd" strokeWidth="1"/>
  <circle cx="40" cy="428" r="7" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="54" y="432" fontSize="11" fill="#555">nicht ganzzahlig → weiter verzweigen</text>
  <circle cx="380" cy="428" r="7" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.5"/>
  <text x="394" y="432" fontSize="11" fill="#555">ganzzahlige Lösung</text>
  <circle cx="40" cy="452" r="7" fill="#f5f5f5" stroke="#999" strokeWidth="1.5" strokeDasharray="4,3"/>
  <text x="54" y="456" fontSize="11" fill="#555">abgebrochen (kann nicht besser werden)</text>
  <circle cx="380" cy="452" r="7" fill="#e8f5e9" stroke="#1e8449" strokeWidth="2.5"/>
  <text x="394" y="456" fontSize="11" fill="#555">Optimum</text>
</svg>

$$
\boxed{\ x_1 = 1, \quad x_2 = 2, \quad z = 5\ }
$$

- Hätte man die relaxierte Lösung $(2{,}29;\ 1{,}57)$ einfach gerundet, käme $(2;\ 2)$ heraus – das verletzt aber die erste Nebenbedingung ($2 + 6 = 8 > 7$)
