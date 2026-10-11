# 6. Nichtlineare Optimierung

## 6.1 - Einstieg
:::info
Bis jetzt haben wir immer Optimierungsprobleme linearer Natur gelöst - diese lassen sich meist relativ elegant mithilfe des Simplexes lösen, da unser Maximum immer ein Randpunkt sein muss. **Diese Annahme gilt bei nichtlinearer Optimierung nicht.**

<svg viewBox="0 0 760 340" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"760px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-nlo" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <marker id="arr-nlo-g" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#1a6b3c"/>
    </marker>
  </defs>

  {/* ===== Links: lineare Optimierung ===== */}
  <text x="190" y="20" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">Lineare Optimierung</text>
  <polygon points="50,270 280,270 250,170 170,100 50,100" fill="#dbeeff" fillOpacity="0.7" stroke="#2176AE" strokeWidth="1.8"/>
  <line x1="40" y1="95" x2="150" y2="260" stroke="#888" strokeWidth="1.3" strokeDasharray="5,4"/>
  <line x1="120" y1="95" x2="230" y2="260" stroke="#888" strokeWidth="1.3" strokeDasharray="5,4"/>
  <line x1="190" y1="80" x2="300" y2="245" stroke="#c0392b" strokeWidth="1.8" strokeDasharray="5,4"/>
  <line x1="50" y1="270" x2="335" y2="270" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-nlo)"/>
  <line x1="50" y1="270" x2="50" y2="40" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-nlo)"/>
  <text x="338" y="286" textAnchor="end" fontSize="11" fill="#555">x₁</text>
  <text x="42" y="50" textAnchor="end" fontSize="11" fill="#555">x₂</text>
  <line x1="120" y1="215" x2="158" y2="190" stroke="#1a6b3c" strokeWidth="1.6" markerEnd="url(#arr-nlo-g)"/>
  <text x="96" y="232" fontSize="10.5" fontStyle="italic" fill="#1a6b3c">z steigt</text>
  <circle cx="250" cy="170" r="6" fill="#c0392b"/>
  <text x="262" y="160" fontSize="11" fontWeight="bold" fill="#c0392b">Maximum</text>
  <text x="262" y="174" fontSize="10.5" fill="#c0392b">= Eckpunkt</text>
  <text x="80" y="140" fontSize="10.5" fill="#1a5c8c">zulässiger Bereich</text>
  <text x="190" y="305" textAnchor="middle" fontSize="11" fill="#1a6b3c">✓ Optimum liegt immer auf dem Rand</text>
  <text x="190" y="321" textAnchor="middle" fontSize="11" fill="#1a6b3c">→ Simplex prüft nur die Ecken</text>

  {/* Trenner */}
  <line x1="380" y1="30" x2="380" y2="320" stroke="#ddd" strokeWidth="1"/>

  {/* ===== Rechts: nichtlineare Optimierung ===== */}
  <text x="580" y="20" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">Nichtlineare Optimierung</text>
  <rect x="460" y="45" width="250" height="225" fill="#dbeeff" fillOpacity="0.5"/>
  <line x1="460" y1="45" x2="460" y2="270" stroke="#2176AE" strokeWidth="1.5" strokeDasharray="4,3"/>
  <line x1="710" y1="45" x2="710" y2="270" stroke="#2176AE" strokeWidth="1.5" strokeDasharray="4,3"/>
  <text x="585" y="262" textAnchor="middle" fontSize="10.5" fill="#1a5c8c">zulässiger Bereich</text>
  <path d="M 440 245 C 470 230, 485 165, 510 165 C 535 165, 545 215, 565 215 C 590 215, 605 95, 630 95 C 655 95, 690 200, 720 232" fill="none" stroke="#2176AE" strokeWidth="2.4"/>
  <line x1="430" y1="270" x2="735" y2="270" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-nlo)"/>
  <line x1="430" y1="270" x2="430" y2="40" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-nlo)"/>
  <text x="738" y="286" textAnchor="end" fontSize="11" fill="#555">x</text>
  <text x="422" y="50" textAnchor="end" fontSize="11" fill="#555">z</text>
  <circle cx="460" cy="226.7" r="5" fill="#999"/>
  <circle cx="710" cy="218.8" r="5" fill="#999"/>
  <text x="716" y="208" fontSize="10" fill="#777">Randpunkt</text>
  <text x="466" y="244" fontSize="10" fill="#777">Randpunkt</text>
  <circle cx="510" cy="165" r="5" fill="#e67e22"/>
  <text x="510" y="152" textAnchor="middle" fontSize="10.5" fill="#a0521a">lokales Max.</text>
  <circle cx="630" cy="95" r="6" fill="#c0392b"/>
  <text x="630" y="72" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#c0392b">globales Maximum</text>
  <text x="630" y="86" textAnchor="middle" fontSize="10.5" fill="#c0392b">im Inneren!</text>
  <text x="580" y="305" textAnchor="middle" fontSize="11" fill="#a5281b">✗ Optimum kann mitten im Bereich liegen</text>
  <text x="580" y="321" textAnchor="middle" fontSize="11" fill="#a5281b">→ Ecken / Rand prüfen reicht nicht</text>
</svg>
:::

Um nun im Folgenden das Optimum bestimmen zu können benötigen wir also die Kurvendiskussion wieder - sie hilft uns die nötigen Extrempunkte (Maximum oder Minimum) zu finden.

### 6.1.1 - Wiederholung Kurvendiskussion
Für eine Variable ($n = 1$) findet man Extrempunkte in drei Schritten:

| Schritt | Bedingung | Bedeutung |
|---|---|---|
| 1. **Notwendige** Bedingung | $f'(x) = 0$ | Steigung ist null → Kandidat für ein Extremum |
| 2. **Hinreichende** Bedingung | $f''(x) < 0$ → **Maximum**<br/>$f''(x) > 0$ → **Minimum** | Krümmung entscheidet: Hügel oder Tal |
| 3. **Globale** Extrema | Randwerte betrachten | Funktionswerte am Rand mit den lokalen Extrema vergleichen |

:::info Beispiel
$f(x) = -x^2 + 4x$ auf dem Bereich $0 \leq x \leq 5$

1. $f'(x) = -2x + 4 = 0 \;\Rightarrow\; x = 2$
2. $f''(x) = -2 < 0 \;\Rightarrow\;$ **Maximum** mit $f(2) = 4$
3. Rand: $f(0) = 0$, $f(5) = -5$ → beide kleiner, also ist $x = 2$ das **globale Maximum**
:::

### 6.1.2 - Kurvendiskussion bei mehreren Variablen

#### Schritt 1 - Mögliche Kandidaten für einen Extrempunkt finden
- Bei Optimierungsproblemen wird i.d.R. mit mehreren Variablen gearbeitet
- Trotzdem müssen Extrempunkte identifiziert werden
  - Es gilt: Ein Extrempunkt ist ein **Punkt, von dem aus in alle Richtungen die Steigung gleich 0 ist**
  - Um diese Steigung darzustellen leitet man zu jeder Variable ab (Partielles Ableiten)
    - Die Werte werden in einen Vektor geschrieben, den sog. **Gradientenvektor**. Es gilt also:

$$
\operatorname{grad} f(x_1, x_2, \dots, x_n) =
\begin{pmatrix}
\dfrac{\partial f}{\partial x_1} \\[8pt]
\dfrac{\partial f}{\partial x_2} \\[8pt]
\vdots \\[4pt]
\dfrac{\partial f}{\partial x_n}
\end{pmatrix}
$$

- Wenn **jeder einzelne Wert des Vektors gleich 0** ist, dann ist ein **möglichen Extrempunkt gefunden**
  - Noch unklar ob Sattelpunkt, Minimum oder Maximum
- Wenn **mindestens ein Wert des Vektors ungleich 0** ist, dann **zeigt der Vektor in Richtung des stärksten Anstiegs**

#### Schritt 2 - Identifizieren ob Minimum, Maximum oder Sattelpunkt

- Um zu identifizieren was genau am möglichen Kandidatenpunkt vorliegt benötigen wir die **Hesse-Matrix** als weiteres Werkzeug
  - Die Hesse-Matrix ist **die zweite Ableitung der Funktion zu allen Variablen**

$$
H = \begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2} & \dfrac{\partial^2 f}{\partial x_1 \, \partial x_2} \\[12pt]
\dfrac{\partial^2 f}{\partial x_2 \, \partial x_1} & \dfrac{\partial^2 f}{\partial x_2^2}
\end{pmatrix}
$$

| Feld | Was wird abgeleitet? |
|---|---|
| oben links $\frac{\partial^2 f}{\partial x_1^2}$ | erst nach $x_1$ ableiten, das Ergebnis **nochmal nach $x_1$** |
| oben rechts $\frac{\partial^2 f}{\partial x_1 \partial x_2}$ | erst nach $x_1$ ableiten, das Ergebnis dann **nach $x_2$** |
| unten links $\frac{\partial^2 f}{\partial x_2 \partial x_1}$ | erst nach $x_2$ ableiten, das Ergebnis dann **nach $x_1$** |
| unten rechts $\frac{\partial^2 f}{\partial x_2^2}$ | erst nach $x_2$ ableiten, das Ergebnis **nochmal nach $x_2$** |

- Auf der **Diagonalen** wird zweimal nach **derselben** Variable abgeleitet
- Außerhalb der Diagonalen wird **gemischt** abgeleitet – beide gemischten Felder sind (bei „normalen" Funktionen) **gleich**, die Matrix ist also symmetrisch

:::info Beispiel
$f(x_1, x_2) = x_1^2 + 3x_1x_2 + 2x_2^2$

- Erste Ableitungen (Gradient): $\frac{\partial f}{\partial x_1} = 2x_1 + 3x_2$ und $\frac{\partial f}{\partial x_2} = 3x_1 + 4x_2$
- Zweite Ableitungen:
  - $2x_1 + 3x_2$ nach $x_1$ → $2$ (oben links)
  - $2x_1 + 3x_2$ nach $x_2$ → $3$ (oben rechts)
  - $3x_1 + 4x_2$ nach $x_1$ → $3$ (unten links)
  - $3x_1 + 4x_2$ nach $x_2$ → $4$ (unten rechts)

$$
H = \begin{pmatrix} 2 & 3 \\ 3 & 4 \end{pmatrix}
$$
:::

#### Schritt 3 - Krümmung interpretieren (Aus Hesse-Matrix)
- **Eigenwerte** helfen uns zu interpretieren, wie um den Kandidaten gekrümmt ist:
  - Um Eigenwerte zu bestimmen muss die **Determinante der _modifizierten_ Matrix gleich 0 gesetzt werden**

$$
H = \begin{pmatrix} h_{11} & h_{12} \\ h_{21} & h_{22} \end{pmatrix}
\quad\Longrightarrow\quad
H - \lambda E = \begin{pmatrix} h_{11} - \lambda & h_{12} \\ h_{21} & h_{22} - \lambda \end{pmatrix}
$$

$$
\det(H - \lambda E) = (h_{11} - \lambda) \cdot (h_{22} - \lambda) - h_{12} \cdot h_{21} = 0
$$

mit: $h_{11}, h_{12}, h_{21}, h_{22}$ = die vier Felder der Hesse-Matrix (siehe Schritt 2), $\lambda$ = gesuchter Eigenwert, $E$ = Einheitsmatrix

- Nur auf der **Diagonalen** (oben links, unten rechts) wird $\lambda$ abgezogen
- Determinante einer 2×2-Matrix: **Hauptdiagonale multiplizieren minus Nebendiagonale multiplizieren**
- Es entsteht eine quadratische Gleichung → mit der **pq-Formel** nach $\lambda$ auflösen

:::tip Interpretation
- Sind alle **Eigenwerte positiv**, so gibt es ein **Minimum**
- Sind alle **Eigenwerte negativ**, so gibt es ein **Maximum**
- Sind die **Eigenwerte gemischt**, so gibt es einen **Sattelpunkt**
:::

:::info Beispiel (Fortsetzung)
$f(x_1, x_2) = x_1^2 + 3x_1x_2 + 2x_2^2$ mit $H = \begin{pmatrix} 2 & 3 \\ 3 & 4 \end{pmatrix}$

**Kandidat (Schritt 1):** $2x_1 + 3x_2 = 0$ und $3x_1 + 4x_2 = 0$ → einzige Lösung $(x_1, x_2) = (0, 0)$

**Modifizierte Matrix:**
$$
H - \lambda E = \begin{pmatrix} 2 - \lambda & 3 \\ 3 & 4 - \lambda \end{pmatrix}
$$

**Determinante = 0:**
$$
\begin{aligned}
(2 - \lambda)(4 - \lambda) - 3 \cdot 3 &= 0 \\
8 - 6\lambda + \lambda^2 - 9 &= 0 \\
\lambda^2 - 6\lambda - 1 &= 0
\end{aligned}
$$

**pq-Formel** ($p = -6$, $q = -1$):
$$
\lambda_{1,2} = 3 \pm \sqrt{9 + 1} = 3 \pm \sqrt{10}
\qquad\Rightarrow\qquad
\lambda_1 \approx 6{,}16 \qquad \lambda_2 \approx -0{,}16
$$

**Ergebnis:** Ein Eigenwert ist positiv, einer negativ → in eine Richtung geht es bergauf, in die andere bergab → bei $(0, 0)$ liegt ein **Sattelpunkt** (kein Extremum).
:::

<details>
  <summary>Eigenvektoren (nur zum Erklären, falls gefragt)</summary>

Eigenvektoren sagen dir, **in welche Richtung** die Fläche so gekrümmt ist. Zum Lösen brauchst du sie nicht, nur zum Erklären.

**Vorgehen:** Einen Eigenwert in die modifizierte Matrix $H - \lambda E$ einsetzen und eine Zeile gleich 0 setzen.

Beispiel mit $H = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ und den Eigenwerten $\lambda = 3$ und $\lambda = 1$:

$$
\lambda = 3: \quad \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \;\rightarrow\; -x + y = 0 \;\rightarrow\; y = x \;\rightarrow\; \vec{v} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}
$$

$$
\lambda = 1: \quad \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \;\rightarrow\; x + y = 0 \;\rightarrow\; y = -x \;\rightarrow\; \vec{v} = \begin{pmatrix} 1 \\ -1 \end{pmatrix}
$$

</details>



