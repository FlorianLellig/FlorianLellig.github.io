# 1. Einführung

## 1.1 - Lineare Gleichungssysteme - Pivot Verfahren
:::info
Das **Pivotverfahren** stellt eine Möglichkeit dar, lineare Gleichungssystem zu lösen - genauso wie der Gauß-Algorithmus. 
Im späteren Verlauf von Operations Research werden wir allerdings immer wieder das Pivot-Verfahren benötigen. 
:::

Im Folgenden wird das Pivot-Verfahren an einem Beispiel erklärt:

### Grundidee

Das Pivot-Verfahren arbeitet auf dem **Tableau** (der erweiterten Koeffizientenmatrix). In jedem Schritt wählt man ein **Pivotelement** — einen Eintrag $\neq 0$ — und formt das gesamte Tableau so um, dass in der **Pivotspalte** eine $1$ (an der Pivotposition) und sonst überall $0$ entsteht.

Nach $n$ solchen Schritten (bei $n$ Variablen) steht links die Einheitsmatrix und die Lösung lässt sich direkt rechts ablesen.

### Begriffe

Bevor wir zur Regel kommen, die wichtigsten Begriffe im Überblick:

| Begriff | Kürzel | Bedeutung |
|---|---|---|
| **Pivotelement** | $p$ | Der ausgewählte Eintrag $\neq 0$, um den herum umgeformt wird |
| **Pivotzeile** | $Z_r$ | Die Zeile $r$, in der das Pivotelement steht |
| **Pivotspalte** | $S_k$ | Die Spalte $k$, in der das Pivotelement steht — sie wird zum Einheitsvektor umgeformt |
| **Pivotspaltenkoeffizient** | **PSK** | Der Eintrag einer Zeile, der in der Pivotspalte steht (jede Zeile hat ihren eigenen PSK) |
| **Tableau** | — | Die erweiterte Koeffizientenmatrix $(A \mid b)$, auf der gerechnet wird |

:::tip Die Pivot-Regel (zwei Teilschritte)
Ist $p$ das gewählte Pivotelement in Zeile $r$ und Spalte $k$:

1. **Pivotzeile normieren** — durch das Pivotelement teilen:
$$\text{neue Pivotzeile} = \frac{\text{alte Pivotzeile}}{p}$$

2. **Alle anderen Zeilen bereinigen** — so, dass in der Pivotspalte $0$ entsteht:
$$\text{neue Zeile} = \text{alte Zeile} - \text{PSK} \cdot \text{neue Pivotzeile}$$

wobei **PSK** der Pivotspaltenkoeffizient der jeweiligen Zeile ist (ihr Eintrag in der Pivotspalte).
:::

### Beispiel: 3 Gleichungen, 3 Variablen

Gegeben sei das lineare Gleichungssystem:

$$
\begin{aligned}
x_1 + x_2 + x_3 &= 6 \\
2x_1 + 3x_2 + x_3 &= 11 \\
x_1 - x_2 + 2x_3 &= 5
\end{aligned}
$$

Als Tableau geschrieben (der Strich trennt Koeffizienten von der rechten Seite):

$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
2 & 3 & 1 & 11 \\
1 & -1 & 2 & 5
\end{array}\right)
$$

---

#### Schritt 1 — Pivot in Spalte 1

Wir wählen das Pivotelement $\boxed{1}$ (Zeile 1, Spalte 1). Es ist bereits $1$, also entfällt das Normieren. Nun die anderen Zeilen bereinigen:

$$
\begin{aligned}
Z_2 &\rightarrow Z_2 - 2\cdot Z_1 \\
Z_3 &\rightarrow Z_3 - 1\cdot Z_1
\end{aligned}
$$

$$
\left(\begin{array}{ccc|c}
\boxed{1} & 1 & 1 & 6 \\
0 & 1 & -1 & -1 \\
0 & -2 & 1 & -1
\end{array}\right)
$$

Die erste Spalte ist jetzt ein **Einheitsvektor** $(1,0,0)$. ✅

---

#### Schritt 2 — Pivot in Spalte 2

Pivotelement $\boxed{1}$ (Zeile 2, Spalte 2), wieder bereits normiert. Bereinigen:

$$
\begin{aligned}
Z_1 &\rightarrow Z_1 - 1\cdot Z_2 \\
Z_3 &\rightarrow Z_3 - (-2)\cdot Z_2 = Z_3 + 2\cdot Z_2
\end{aligned}
$$

$$
\left(\begin{array}{ccc|c}
1 & 0 & 2 & 7 \\
0 & \boxed{1} & -1 & -1 \\
0 & 0 & -1 & -3
\end{array}\right)
$$

Auch die zweite Spalte ist nun ein Einheitsvektor $(0,1,0)$. ✅

---

#### Schritt 3 — Pivot in Spalte 3

Pivotelement ist $-1$ (Zeile 3, Spalte 3). Diesmal müssen wir **normieren** — Zeile 3 durch $-1$ teilen:

$$
Z_3 \rightarrow \frac{Z_3}{-1} \quad\Rightarrow\quad (0,\ 0,\ 1 \mid 3)
$$

Dann bereinigen:

$$
\begin{aligned}
Z_1 &\rightarrow Z_1 - 2\cdot Z_3 \\
Z_2 &\rightarrow Z_2 - (-1)\cdot Z_3 = Z_2 + Z_3
\end{aligned}
$$

$$
\left(\begin{array}{ccc|c}
1 & 0 & 0 & 1 \\
0 & 1 & 0 & 2 \\
0 & 0 & \boxed{1} & 3
\end{array}\right)
$$

---

### Ergebnis ablesen

Links steht jetzt die **Einheitsmatrix**, rechts steht direkt die Lösung — kein Rückwärtseinsetzen mehr nötig:

$$
\boxed{\ x_1 = 1, \quad x_2 = 2, \quad x_3 = 3\ }
$$

:::note Probe
Einsetzen in die zweite Gleichung: $2\cdot 1 + 3\cdot 2 + 1\cdot 3 = 2 + 6 + 3 = 11$ ✓
:::

:::info Merke
- Ein **Pivotelement** muss immer $\neq 0$ sein. Ist der Kandidat $0$, tauscht man mit einer darunterliegenden Zeile.
- Anders als beim Gauß-Algorithmus wird **oberhalb und unterhalb** des Pivots eliminiert (Gauß-Jordan-Prinzip) — dadurch entsteht die Einheitsmatrix und die Lösung ist direkt ablesbar.
- Genau dieses Umformen einzelner Spalten zu Einheitsvektoren ist der Kern des späteren **Simplex-Verfahrens**.
:::

## 1.2 - Mathematische Formulierung

Jedes Optimierungsproblem im Operations Research besteht aus **drei Bausteinen**. Sie legen fest, *was* entschieden wird, *was* optimiert werden soll und *welche* Einschränkungen dabei gelten.

| Baustein | Bedeutung |
|---|---|
| **Variable** | Entscheidungsgrößen, die zur quantitativen Beschreibung ins Modell eingeführt werden — die „Stellschrauben", deren Werte gesucht sind |
| **Zielfunktion** | Funktionaler Zusammenhang über den Variablen, der die zu optimierende Größe darstellt (z. B. Gewinn maximieren, Kosten minimieren) |
| **Nebenbedingungen** | Einschränkende Zusatzbedingungen, die den zulässigen Bereich der Variablen festlegen (z. B. begrenzte Ressourcen) |

### Formale Darstellung

$$
\begin{aligned}
\textbf{Variablen:} \quad & \vec{x} = (x_1, x_2, \dots, x_n) \\[4pt]
\textbf{Zielfunktion:} \quad & z = f(\vec{x}) \;\rightarrow\; \max \text{ (bzw. } \min) \\[4pt]
\textbf{Nebenbedingungen:} \quad & g_i(\vec{x}) \leq 0 \qquad \text{mit } i = 1, 2, \dots, m
\end{aligned}
$$

Dabei ist:
- $n$ die Anzahl der **Entscheidungsvariablen**,
- $m$ die Anzahl der **Nebenbedingungen**,
- $z$ der zu optimierende **Zielfunktionswert**.

:::tip Beispiel — Optimierung eines Vorlesungsplans
Wie sieht so eine Formulierung konkret aus? Am Beispiel der Planung eines Vorlesungsplans:

- **Variablen** $x_{r,z}$: Wird Raum $r$ zum Zeitfenster $z$ für eine Vorlesung belegt? ($x_{r,z} \in \{0, 1\}$)
- **Zielfunktion**: z. B. die Anzahl an Terminüberschneidungen **minimieren** — oder die Auslastung der Räume **maximieren**.
- **Nebenbedingungen**:
    - Ein Raum kann pro Zeitfenster nur **eine** Vorlesung aufnehmen.
    - Ein Dozent kann nicht **gleichzeitig** in zwei Räumen sein.
    - Jede Vorlesung muss **genau einmal** stattfinden.

Man übersetzt also eine reale Planungsaufgabe in Variablen, eine Zielfunktion und Nebenbedingungen — genau das ist der Kern des Modellierens im Operations Research.
:::


