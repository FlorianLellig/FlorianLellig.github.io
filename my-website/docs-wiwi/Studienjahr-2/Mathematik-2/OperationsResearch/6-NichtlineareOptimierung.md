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


## 6.2 - Nichlineare Optimierungsprobleme lösen

- Wie man ein nichtlineares Optimierungsproblem löst, hängt von zwei Fragen ab:
  1. Gibt es **Nebenbedingungen (NB)** oder nur eine Zielfunktion?
  2. Hängt die Zielfunktion von **einer** oder von **mehreren Variablen** ab?
- Daraus ergeben sich vier Fälle:

<svg viewBox="0 0 900 410" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"900px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-nlb" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#999"/>
    </marker>
  </defs>
  {/* Pfeile */}
  <g stroke="#999" strokeWidth="1.4" fill="none" markerEnd="url(#arr-nlb)">
    <line x1="420" y1="50" x2="228" y2="78"/>
    <line x1="480" y1="50" x2="672" y2="78"/>
    <line x1="225" y1="118" x2="117" y2="148"/>
    <line x1="225" y1="118" x2="333" y2="148"/>
    <line x1="675" y1="118" x2="567" y2="148"/>
    <line x1="675" y1="118" x2="783" y2="148"/>
  </g>
  {/* Wurzel */}
  <rect x="340" y="12" width="220" height="38" rx="8" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.8"/>
  <text x="450" y="36" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a6b3c">Nichtlineare Optimierung</text>
  {/* Ebene 2 */}
  <rect x="125" y="80" width="200" height="38" rx="7" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.6"/>
  <text x="225" y="104" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">Keine Nebenbedingungen</text>
  <rect x="565" y="80" width="220" height="38" rx="7" fill="#fff3e0" stroke="#e67e22" strokeWidth="1.6"/>
  <text x="675" y="104" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#a0521a">Nebenbedingungen vorhanden</text>

  {/* Blatt 1: keine NB, eine Variable */}
  <rect x="10" y="150" width="215" height="190" rx="6" fill="#f4f9ff" stroke="#2176AE" strokeWidth="1.2"/>
  <text x="117" y="171" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">Eine Variable</text>
  <text x="117" y="187" textAnchor="middle" fontSize="10.5" fontStyle="italic" fill="#777">Schulmathematik (Kurve in 2D)</text>
  <g fontSize="11" fill="#333">
    <text x="22" y="212" fontWeight="bold">① Notwendige Bedingung</text>
    <text x="36" y="228">f′(x) = 0 → Kandidaten</text>
    <text x="22" y="254" fontWeight="bold">② Hinreichende Bedingung</text>
    <text x="36" y="270">{"f″(x) > 0 → Minimum"}</text>
    <text x="36" y="286">{"f″(x) < 0 → Maximum"}</text>
    <text x="22" y="312" fontWeight="bold" fill="#777">③ Verhalten bei ±∞ prüfen</text>
  </g>

  {/* Blatt 2: keine NB, mehrere Variablen */}
  <rect x="230" y="150" width="215" height="190" rx="6" fill="#f4f9ff" stroke="#2176AE" strokeWidth="1.2"/>
  <text x="337" y="171" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">Mehrere Variablen</text>
  <g fontSize="11" fill="#333">
    <text x="242" y="198" fontWeight="bold">① Notwendige Bedingung</text>
    <text x="256" y="214">grad f(x) = 0 → Kandidaten</text>
    <text x="256" y="230" fill="#777">(HP, TP oder SP)</text>
    <text x="242" y="256" fontWeight="bold">② Hinreichende Bedingung</text>
    <text x="256" y="272">Hesse-Matrix → H − λE</text>
    <text x="256" y="288">det(H − λE) = 0 → λ-Werte</text>
    <text x="256" y="304">= Eigenwerte</text>
    <text x="256" y="320">→ Eigenwerte interpretieren</text>
  </g>

  {/* Blatt 3: NB, eine Variable */}
  <rect x="455" y="150" width="215" height="190" rx="6" fill="#fffaf3" stroke="#e67e22" strokeWidth="1.2"/>
  <text x="562" y="171" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#a0521a">Eine Variable</text>
  <g fontSize="11" fill="#333">
    <text x="467" y="198" fontWeight="bold">① + ② wie ohne NB</text>
    <text x="481" y="214" fill="#777">(identisch zu links)</text>
    <rect x="463" y="230" width="199" height="94" rx="5" fill="#fff3e0" stroke="#e67e22" strokeWidth="1" strokeDasharray="4,3"/>
    <text x="471" y="250" fontWeight="bold" fill="#a0521a">③ Randwerte in f(x) einsetzen</text>
    <text x="485" y="266">mit größtem / kleinstem</text>
    <text x="485" y="282">Wert vergleichen</text>
    <text x="485" y="298">→ globales Min. / Max.</text>
    <text x="485" y="314">keine Grenzen? → ±∞</text>
  </g>

  {/* Blatt 4: NB, mehrere Variablen */}
  <rect x="675" y="150" width="215" height="190" rx="6" fill="#fffaf3" stroke="#e67e22" strokeWidth="1.2"/>
  <text x="782" y="171" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#a0521a">Mehrere Variablen</text>
  <g fontSize="11" fill="#333">
    <text x="687" y="198" fontWeight="bold">① Lagrange-Funktion</text>
    <text x="701" y="214">eine Funktion inkl. aller NB</text>
    <text x="701" y="230">L(x, u) = f(x) − Σ uᵢ · gᵢ</text>
    <text x="687" y="256" fontWeight="bold">② Kuhn-Tucker-Bedingungen</text>
    <text x="701" y="272">Gleichungs- bzw.</text>
    <text x="701" y="288">Ungleichungssystem</text>
    <text x="701" y="304">→ jeder Punkt, der sie</text>
    <text x="701" y="320">erfüllt, ist ein Kandidat</text>
  </g>

  {/* Verbindung Blatt 3 → Blatt 1 */}
  <path d="M 562 340 L 562 366 L 117 366 L 117 346" fill="none" stroke="#999" strokeWidth="1.3" strokeDasharray="5,4" markerEnd="url(#arr-nlb)"/>
  <text x="340" y="360" textAnchor="middle" fontSize="10.5" fontStyle="italic" fill="#777">identisch, nur Schritt ③ zusätzlich relevant</text>

  {/* Legende */}
  <line x1="10" y1="382" x2="890" y2="382" stroke="#ddd" strokeWidth="1"/>
  <text x="450" y="400" textAnchor="middle" fontSize="10.5" fill="#555">NB = Nebenbedingung · HP / TP / SP = Hoch- / Tief- / Sattelpunkt · E = Einheitsmatrix</text>
</svg>


### 6.2.1 - Keine Nebenbedingung + Eine Variable
- Einfachster Fall, mit _Basis_-Schulmathematik lösbar
- Ziel ist es, das Optimum, sprich den entsprechenden **Extrempunkt der Zielfunktion** zu finden

:::tip Ausgangslage
- Es ist **ausschließlich eine Zielfunktion mit einer Variable gegeben**
:::

#### Schritt 1: Notwendige Bedingung erfüllen
- Mithilfe der Notwendigen Bedingung werden mögliche (nicht unbedingt richtige) Kandidaten gefunden
- Es gilt: **Erste Ableitung gleich 0 setzen**

$$
f'(x) = 0
$$

#### Schritt 2: Hinreichende Bedingung
- Die Kandidaten werden selektiert
  - Nur gültige Kandidaten die auf den Sachverhalt passen bleiben (Bei Maximierung nur Höhepunkte, bei minimierung nur Tiefpunkte)
- Es gilt:

| Zweite Ableitung | Ergebnis |
|---|---|
| $f''(x) < 0$ | **Hochpunkt** (Maximum) |
| $f''(x) > 0$ | **Tiefpunkt** (Minimum) |
| $f''(x) = 0$ | keine Aussage möglich (z. B. Sattelpunkt) |

#### Schritt 3: Verhalten im Unendlichen
- Da wir ohne Nebenbedingungen und damit auch ohne Begrenzung im Unendlichen arbeiten
  - Wert wenn Funktion gegen $+\infty$ und $-\infty$ geht berechnen und ggf. mitaufnehmen
  - Achtung: $-\infty$ macht zwar mathematisch Sinn, ist aber in BWL-Fragestellungen oft nicht sinngemäß (z. B. negative Mengen)

#### Schritt 4: Finalen Wert wählen
- Unter den Extrempunkten und Randwerten den X-Wert wählen, der am meisten ausschlägt bzw. am maximalsten/minimalsten ist

<details>
  <summary>Beispiel: Gewinnmaximierung</summary>

Maximiere die Gewinnfunktion $G(x) = -x^3 + 3x^2 + 9x$

**Schritt 1 – Notwendige Bedingung:**

$$
G'(x) = -3x^2 + 6x + 9 = 0 \;\;\Big|\; :(-3) \quad\Rightarrow\quad x^2 - 2x - 3 = 0 \quad\Rightarrow\quad x_1 = 3, \;\; x_2 = -1
$$

**Schritt 2 – Hinreichende Bedingung:** $G''(x) = -6x + 6$

| Kandidat | $G''(x)$ | Ergebnis | $G(x)$ |
|---|---|---|---|
| $x_1 = 3$ | $-12 < 0$ | Hochpunkt ✓ | $G(3) = 27$ |
| $x_2 = -1$ | $12 > 0$ | Tiefpunkt ✗ (wir maximieren) | $G(-1) = -5$ |

**Schritt 3 – Verhalten im Unendlichen:**
- $x \to +\infty$: $G(x) \to -\infty$ (der Term $-x^3$ dominiert)
- $x \to -\infty$: $G(x) \to +\infty$ → mathematisch unbegrenzt, aber **negative Mengen sind in BWL nicht sinnvoll** → ignorieren

**Schritt 4 – Finaler Wert:** Das Gewinnmaximum liegt bei $x = 3$ mit $G(3) = 27$.

</details>

### 6.2.2 - Keine Nebenbedingung + Mehrere Variablen
- Ziel ist es, das Optimum, sprich den entsprechenden **Extrempunkt der Zielfunktion** zu finden

:::tip Ausgangslage
- Es ist **ausschließlich eine Zielfunktion, jedoch mit mehreren Variablen, gegeben**
:::

#### Schritt 1: Notwendige Bedingung erfüllen
- Hier gilt ebenfalls: erste Ableitung gleich null
  - **Problem:** Da mehrere Variablen vorkommen muss zu jeder abgeleitet werden
    - **Lösung: Gradient bzw. Gradientenverfahren**
      - Gradientenverfahren zur Gleichsetzung mit 0 verwenden, als Resultat entstehen sog. Kandidaten
        - Die Kandidaten können Hochpunkt, Tiefpunkt oder Sattelpunkt sein

$$
\operatorname{grad} f(x_1, x_2, \dots, x_n) =
\begin{pmatrix}
\dfrac{\partial f}{\partial x_1} \\[8pt]
\dfrac{\partial f}{\partial x_2} \\[8pt]
\vdots \\[4pt]
\dfrac{\partial f}{\partial x_n}
\end{pmatrix}
\overset{!}{=}
\begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix}
$$

<details>
  <summary>Gradientenverfahren – wie funktioniert das?</summary>

**Idee:** Wie Bergsteigen im Nebel. Man sieht nur, in welche Richtung es **am steilsten bergauf** geht (= Gradient), läuft ein Stück in diese Richtung und schaut sich dann neu um. Das wiederholt man, bis es (fast) nicht mehr bergauf geht → Gipfel = Maximum.

<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"420px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-grad" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2176AE"/>
    </marker>
  </defs>
  {/* Höhenlinien */}
  <g fill="none" stroke="#bbb" strokeWidth="1.2">
    <ellipse cx="290" cy="110" rx="160" ry="95"/>
    <ellipse cx="290" cy="110" rx="115" ry="68"/>
    <ellipse cx="290" cy="110" rx="70" ry="42"/>
    <ellipse cx="290" cy="110" rx="28" ry="17"/>
  </g>
  {/* Schritte */}
  <g stroke="#2176AE" strokeWidth="2" markerEnd="url(#arr-grad)">
    <line x1="80" y1="190" x2="196" y2="70"/>
    <line x1="200" y1="72" x2="252" y2="140"/>
    <line x1="254" y1="138" x2="278" y2="103"/>
  </g>
  {/* Punkte */}
  <g fill="#2176AE">
    <circle cx="80" cy="190" r="4"/>
    <circle cx="200" cy="72" r="4"/>
    <circle cx="254" cy="138" r="4"/>
  </g>
  <circle cx="290" cy="110" r="5" fill="#c0392b"/>
  <g fontSize="12" fill="#1a5c8c">
    <text x="60" y="208">x<tspan fontSize="8.5" dy="-6">(0)</tspan></text>
    <text x="178" y="62">x<tspan fontSize="8.5" dy="-6">(1)</tspan></text>
    <text x="232" y="158">x<tspan fontSize="8.5" dy="-6">(2)</tspan></text>
  </g>
  <text x="300" y="104" fontSize="11" fontWeight="bold" fill="#c0392b">Maximum</text>
  <text x="140" y="158" fontSize="10.5" fontStyle="italic" fill="#1a5c8c">μ · grad f</text>
  {/* Legende */}
  <line x1="10" y1="222" x2="410" y2="222" stroke="#ddd" strokeWidth="1"/>
  <text x="210" y="240" textAnchor="middle" fontSize="10.5" fill="#555">graue Ellipsen = Höhenlinien von f · blaue Pfeile = ein Schritt</text>
</svg>

**Ablauf:**
1. **Start:** Einen beliebigen Startpunkt $\vec{x}^{(0)}$ wählen und eine Abbruchschranke $\varepsilon$ festlegen (z. B. $0{,}01$)
2. **Prüfen:** Gradient am aktuellen Punkt berechnen
   - Ist $|\operatorname{grad} f(\vec{x}^{(k)})| < \varepsilon$ → es ist (fast) flach → **fertig**
   - Sonst weiter mit 3.
3. **Schrittweite bestimmen:** Wie weit laufe ich in Richtung des Gradienten?
   - $g(\mu) = f\big(\vec{x}^{(k)} + \mu \cdot \operatorname{grad} f(\vec{x}^{(k)})\big)$ aufstellen
   - $\vec{x}^{(k)}$ = wo ich gerade bin, $\operatorname{grad} f$ = Richtung, $\mu$ = wie weit ich gehe
   - $g$ hängt nur noch von $\mu$ ab → $g'(\mu) = 0$ setzen → $\mu_{opt}$
4. **Neuer Punkt:** Mit $\mu_{opt}$ einen Schritt gehen und zurück zu 2.

$$
\vec{x}^{(k+1)} = \vec{x}^{(k)} + \mu_{opt}^{(k)} \cdot \operatorname{grad} f(\vec{x}^{(k)})
$$

:::note
Beim **Minimieren** läuft man genau andersherum, also in Richtung $-\operatorname{grad} f$ (steilster Abstieg).
:::

</details>

#### Schritt 2: Hinreichende Bedingung erfüllen
_fehlt_

#### Schritt 3: Verhalten im unendlichen
_fehlt_

### 6.2.3 - Nebenbedingung vorhanden + Eine Variable
- Wie 6.2.1, nur dass die Nebenbedingung den **zulässigen Bereich** für $x$ einschränkt (z. B. $a \leq x \leq b$)
- Schritt 1 und 2 sind **identisch** zu 6.2.1, nur Schritt 3 kommt hinzu

:::tip Ausgangslage
- Es ist **eine Zielfunktion mit einer Variable** und **eine Nebenbedingung** gegeben, die $x$ begrenzt
:::

#### Schritt 1: Notwendige Bedingung erfüllen
- Mithilfe der Notwendigen Bedingung werden mögliche (nicht unbedingt richtige) Kandidaten gefunden
- Es gilt: **Erste Ableitung gleich 0 setzen**

$$
f'(x) = 0
$$

#### Schritt 2: Hinreichende Bedingung
- Die Kandidaten werden selektiert
  - Nur gültige Kandidaten die auf den Sachverhalt passen bleiben (Bei Maximierung nur Höhepunkte, bei minimierung nur Tiefpunkte)
- Es gilt:

| Zweite Ableitung | Ergebnis |
|---|---|
| $f''(x) < 0$ | **Hochpunkt** (Maximum) |
| $f''(x) > 0$ | **Tiefpunkt** (Minimum) |
| $f''(x) = 0$ | keine Aussage möglich (z. B. Sattelpunkt) |

#### Schritt 3: Randwerte prüfen
- **Kandidaten außerhalb** des zulässigen Bereichs **streichen**, sie verletzen die Nebenbedingung
- **Randwerte** $a$ und $b$ in $f(x)$ einsetzen
  - Ist eine Seite nicht begrenzt (z. B. nur $x \geq 0$), wie in 6.2.1 das Verhalten bei $\pm\infty$ betrachten
- Alle Funktionswerte (verbleibende Extrempunkte + Randwerte) vergleichen → größter Wert = **globales Maximum**, kleinster Wert = **globales Minimum**

:::warning
Das Optimum kann auch **direkt auf dem Rand** liegen, obwohl dort $f'(x) \neq 0$ ist. Deshalb reichen Schritt 1 und 2 allein nicht aus.
:::

<details>
  <summary>Beispiel: Gewinnmaximierung mit Kapazitätsgrenze</summary>

Maximiere $G(x) = -x^3 + 3x^2 + 9x$ (wie in 6.2.1), jetzt aber mit der **Nebenbedingung** $0 \leq x \leq 2$ (Kapazität: max. 2 Einheiten)

**Schritt 1 + 2:** wie in 6.2.1 → Hochpunkt bei $x = 3$, Tiefpunkt bei $x = -1$

**Schritt 3 – Randwerte prüfen:**
- $x = 3$ und $x = -1$ liegen **außerhalb** von $0 \leq x \leq 2$ → gestrichen
- Randwerte: $G(0) = 0$ und $G(2) = -8 + 12 + 18 = 22$

**Ergebnis:** Das Gewinnmaximum liegt **auf dem Rand** bei $x = 2$ mit $G(2) = 22$.

</details>

### 6.2.4 - Nebenbedingung vorhanden + mehrere Variablen
:::tip
- Das folgende Verfahren unterscheidet sich grundlegend von den anderen Verfahren. Man arbeitet hier mit neuen Mechanismen!
- Um das Verständnis einfacher zu machen wird hier **anhand eines Beispiels erklärt.**
:::

:::info Beispielszenario
- Im Beispielszenario ist folgendes gegeben:
  - Zielfunktion: $f(x_1, x_2) = 6x_1 + 4x_2 - x_1^2 - x_2^2 \;\rightarrow\; \max$
  - Nebenbedingungen:
    - $x_1 + x_2 \leq 3 \;\Rightarrow\; \underbrace{x_1 + x_2 - 3}_{g_1} \leq 0$
    - $2x_1 + x_2 \leq 6 \;\Rightarrow\; \underbrace{2x_1 + x_2 - 6}_{g_2} \leq 0$
:::

#### Schritt 1: Voraussetzungen prüfen
- Um das Verfahren anwenden zu dürfen muss auf Folgendes geprüft werden:
  1. Sind die Zielfunktion $f$, die Nebenbedingungen $g_1$ und $g_2$ stetig differenzierbar?
  2. Greift die Slater-Bedingung?
     - Gibt es einen Punkt innerhalb der Nebenbedingungen (nicht nur auf den Nebenbedingungen)

:::info Beispiel
- Für das Beispiel gilt beides
  - $f$ und die Nebenbedingungen $g_1$ und $g_2$ sind **stetig differenzierbar**
  - Slater-Bedingung **erfüllt**, z. B. liegt $(0, 0)$ echt innerhalb: $g_1 = -3 < 0$ und $g_2 = -6 < 0$
:::

#### Schritt 2: Lagrange-Funktion aufstellen

$$
L(\vec{x}, \vec{u}) = f(\vec{x}) - \sum_{i=1}^{m} u_i \cdot g_i(\vec{x})
$$

mit: $f$ = Zielfunktion, $g_i$ = Nebenbedingungen in der Form $g_i \leq 0$, $u_i$ = Lagrange-Multiplikator je Nebenbedingung, $m$ = Anzahl der Nebenbedingungen

:::info Beispiel
Für unser Beispiel gilt:

$$
L(x_1, x_2, u_1, u_2) = \underbrace{6x_1 + 4x_2 - x_1^2 - x_2^2}_{f} \;-\; u_1 \cdot \underbrace{(x_1 + x_2 - 3)}_{g_1} \;-\; u_2 \cdot \underbrace{(2x_1 + x_2 - 6)}_{g_2}
$$
:::

#### Schritt 3: Alle Ableitungen aufstellen
- Im folgenden müssen einmal **alle Ableitungen zu allen vorhandenen Variablen durchgeführt werden**
  - Bei Zwei Nebenbedingungen bedeutet das folgende Ableitungen:
    - $\dfrac{\partial L}{\partial x_1}$ (L nach $x_1$ ableiten)
    - $\dfrac{\partial L}{\partial x_2}$ (L nach $x_2$ ableiten)
    - $\dfrac{\partial L}{\partial u_1}$ (L nach $u_1$ ableiten)
    - $\dfrac{\partial L}{\partial u_2}$ (L nach $u_2$ ableiten)

:::info Beispiel
Ausgehend von $L = 6x_1 + 4x_2 - x_1^2 - x_2^2 - u_1(x_1 + x_2 - 3) - u_2(2x_1 + x_2 - 6)$:

$$
\begin{aligned}
\frac{\partial L}{\partial x_1} &= 6 - 2x_1 - u_1 - 2u_2 \\[6pt]
\frac{\partial L}{\partial x_2} &= 4 - 2x_2 - u_1 - u_2 \\[6pt]
\frac{\partial L}{\partial u_1} &= -(x_1 + x_2 - 3) = 3 - x_1 - x_2 \\[6pt]
\frac{\partial L}{\partial u_2} &= -(2x_1 + x_2 - 6) = 6 - 2x_1 - x_2
\end{aligned}
$$

- Beim Ableiten nach $u_i$ bleibt immer nur $-g_i$ übrig
:::

#### Schritt 4: Kuhn-Tucker-Bedingungen aufstellen
- Die Kuhn-Tucker-Bedingungen sind die **notwendigen Bedingungen** für ein Optimum **mit** Nebenbedingungen (quasi das „$\operatorname{grad} f = 0$“ für Probleme mit NB)
- **Jeder Punkt, der alle 6 Bedingungen erfüllt, ist ein Kandidat** (Sattelpunkt der Lagrange-Funktion)
  - Ist die Zielfunktion konkav, ist der Kandidat direkt das **globale Maximum**
- Grob gesagt:
  - **1 + 2** betreffen die Variablen $x_j$ → „in keine zulässige Richtung geht es noch bergauf“
  - **3 + 4** betreffen die Nebenbedingungen → „alle NB sind eingehalten“
  - **5 + 6** sind die Vorzeichenbedingungen
- Bedingungen 2 und 4 sind **Entweder-oder-Bedingungen** (ein Produkt $= 0$) → daraus entsteht die Fallunterscheidung beim Lösen

| Nr. | Formel | Aussage in Worten |
|---|---|---|
| 1 | $\dfrac{\partial L}{\partial x_j} \leq 0, \quad \text{für } j = 1, 2, \dots, n$ | Ableitung von $L$ nach jedem $x_j$ ist höchstens 0 → durch Erhöhen von $x_j$ wird es nicht mehr besser |
| 2 | $\vec{x} \cdot \begin{pmatrix} \frac{\partial L}{\partial x_1} \\ \frac{\partial L}{\partial x_2} \\ \vdots \\ \frac{\partial L}{\partial x_n} \end{pmatrix} = 0$ | Entweder ist $x_j = 0$ **oder** die Ableitung nach $x_j$ ist genau 0 |
| 3 | $\begin{pmatrix} \frac{\partial L}{\partial u_1} \\ \frac{\partial L}{\partial u_2} \\ \vdots \\ \frac{\partial L}{\partial u_m} \end{pmatrix} \geq \vec{0}$ | Ableitung nach $u_i$ liefert $-g_i$ → genau die **Nebenbedingungen** $g_i(\vec{x}) \leq 0$ müssen eingehalten sein |
| 4 | $\vec{u} \cdot \begin{pmatrix} \frac{\partial L}{\partial u_1} \\ \frac{\partial L}{\partial u_2} \\ \vdots \\ \frac{\partial L}{\partial u_m} \end{pmatrix} = 0$ | Entweder ist die NB **bindend** ($g_i = 0$, voll ausgeschöpft) **oder** $u_i = 0$ (NB spielt keine Rolle) |
| 5 | $\vec{x} \geq \vec{0}$ | Alle Variablen sind nicht negativ |
| 6 | $\vec{u} \geq \vec{0}$ | Alle Lagrange-Multiplikatoren sind nicht negativ |

:::info Beispiel
Die Ableitungen aus Schritt 3 werden in die 6 Bedingungen eingesetzt:

| Nr. | Bedingung |
|---|---|
| 1 | $6 - 2x_1 - u_1 - 2u_2 \leq 0, \qquad 4 - 2x_2 - u_1 - u_2 \leq 0$ |
| 2 | $\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} \cdot \begin{pmatrix} 6 - 2x_1 - u_1 - 2u_2 \\ 4 - 2x_2 - u_1 - u_2 \end{pmatrix} = 0$ |
| 3 | $\begin{pmatrix} 3 - x_1 - x_2 \\ 6 - 2x_1 - x_2 \end{pmatrix} \geq \vec{0}$ |
| 4 | $\begin{pmatrix} u_1 \\ u_2 \end{pmatrix} \cdot \begin{pmatrix} 3 - x_1 - x_2 \\ 6 - 2x_1 - x_2 \end{pmatrix} = 0$ |
| 5 | $\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} \geq \vec{0}$ |
| 6 | $\begin{pmatrix} u_1 \\ u_2 \end{pmatrix} \geq \vec{0}$ |
:::

#### Schritt 5: Fälle durchgehen
- Im allgemeinen gilt: 
    - **Bedingung 2 und 4 geben mögliche Fälle vor**
      - Bedingung 2 und 4 sind Gleichungen, d.h. ein Faktor MUSS null sein 
      - Erkenntnis ist Grundlage zum identifizieren eines Falls
- Bedingung 2:

$$
\underbrace{\vec{x}}_{\text{Fall A: } = \, 0} \cdot \underbrace{\begin{pmatrix} \frac{\partial L}{\partial x_1} \\ \frac{\partial L}{\partial x_2} \\ \vdots \\ \frac{\partial L}{\partial x_n} \end{pmatrix}}_{\text{Fall B: } = \, 0} = 0
\qquad\Rightarrow\qquad \text{je Zeile: } x_j = 0 \;\;\text{oder}\;\; \frac{\partial L}{\partial x_j} = 0
$$

- Bedingung 4:

$$
\underbrace{\vec{u}}_{\text{Fall A: } = \, 0} \cdot \underbrace{\begin{pmatrix} \frac{\partial L}{\partial u_1} \\ \frac{\partial L}{\partial u_2} \\ \vdots \\ \frac{\partial L}{\partial u_m} \end{pmatrix}}_{\text{Fall B: } = \, 0} = 0
\qquad\Rightarrow\qquad \text{je Zeile: } u_i = 0 \;\;\text{oder}\;\; \frac{\partial L}{\partial u_i} = 0
$$

:::tip Was bedeutet das?
- Um als Produkt der jeweiligen Faktoren den Wert Null zu erreichen **muss ein Faktor Null** sein, konkret bedeutet das:
  - Wenn $x_1 > 0$, dann MUSS $\dfrac{\partial L}{\partial x_1} = 0$ sein (siehe Bedingung 2)
  - Wenn $x_2 > 0$, dann MUSS $\dfrac{\partial L}{\partial x_2} = 0$ sein (siehe Bedingung 2)
  - Wenn $u_1 > 0$, dann MUSS $\dfrac{\partial L}{\partial u_1} = 0$ sein (siehe Bedingung 4)
  - Wenn $u_2 > 0$, dann MUSS $\dfrac{\partial L}{\partial u_2} = 0$ sein (siehe Bedingung 4)
:::

- Aus dieser Erkenntnis lassen sich die anderen Variablenwerte herleiten
  - Um zu prüfen, ob der Fall valide ist muss dieser mit den übrigen Bedingungen 1, 3, 5 und 6 abgeglichen und überprüft werden

:::info Beispiel
Es werden nacheinander die möglichen Fälle durchprobiert, bis einer **alle** Bedingungen erfüllt.

<details>
  <summary>**Fall 1:** $u_1 = 0,\; u_2 = 0,\; x_1 > 0,\; x_2 > 0$ ❌</summary>

**Aus Bedingung 2 folgt** (da $x_1, x_2 > 0$ müssen beide Ableitungen $= 0$ sein, $u_1 = u_2 = 0$ eingesetzt):

$$
\begin{aligned}
6 - 2x_1 &= 0 \quad\Rightarrow\quad x_1 = 3 \\
4 - 2x_2 &= 0 \quad\Rightarrow\quad x_2 = 2
\end{aligned}
$$

**Validieren mit den übrigen Bedingungen:**
- Bedingung 3: $3 - x_1 - x_2 = 3 - 3 - 2 = -2 \;\not\geq\; 0$ ✗

→ Die Nebenbedingung $g_1$ ist verletzt, **kein Kandidat**.

</details>

<details>
  <summary>**Fall 2:** $u_1 = 0,\; u_2 > 0,\; x_1 > 0,\; x_2 > 0$ ❌</summary>

**Aus Bedingung 2 und 4 folgt** ($u_1 = 0$ eingesetzt):

$$
\begin{aligned}
\text{Bed. 2:} \quad 6 - 2x_1 - 2u_2 &= 0 \quad\Rightarrow\quad -2x_1 - 2u_2 = -6 \\
\text{Bed. 2:} \quad 4 - 2x_2 - u_2 &= 0 \quad\Rightarrow\quad -2x_2 - u_2 = -4 \\
\text{Bed. 4:} \quad 6 - 2x_1 - x_2 &= 0 \quad\Rightarrow\quad -2x_1 - x_2 = -6
\end{aligned}
$$

**LGS lösen:**

$$
x_1 = 2{,}2 \qquad x_2 = 1{,}6 \qquad u_2 = 0{,}8
$$

**Validieren mit den übrigen Bedingungen:**
- Bedingung 3: $3 - x_1 - x_2 = 3 - 2{,}2 - 1{,}6 = -0{,}8 \;\not\geq\; 0$ ✗

→ Die Nebenbedingung $g_1$ ist verletzt, **kein Kandidat**.

</details>

<details>
  <summary>**Fall 3:** $u_1 > 0,\; u_2 = 0,\; x_1 > 0,\; x_2 > 0$ ✅</summary>

**Aus Bedingung 2 und 4 folgt** ($u_2 = 0$ eingesetzt):

$$
\begin{aligned}
\text{Bed. 2:} \quad 6 - 2x_1 - u_1 &= 0 \quad\Rightarrow\quad -2x_1 - u_1 = -6 \\
\text{Bed. 2:} \quad 4 - 2x_2 - u_1 &= 0 \quad\Rightarrow\quad -2x_2 - u_1 = -4 \\
\text{Bed. 4:} \quad 3 - x_1 - x_2 &= 0 \quad\Rightarrow\quad -x_1 - x_2 = -3
\end{aligned}
$$

**LGS lösen:**

$$
x_1 = 2 \qquad x_2 = 1 \qquad u_1 = 2
$$

**Validieren mit allen Bedingungen:**

| Nr. | Prüfung | |
|---|---|---|
| 1 | $6 - 4 - 2 - 0 = 0 \leq 0$ und $4 - 2 - 2 - 0 = 0 \leq 0$ | ✓ |
| 2 | $2 \cdot 0 + 1 \cdot 0 = 0$ | ✓ |
| 3 | $3 - 2 - 1 = 0 \geq 0$ und $6 - 4 - 1 = 1 \geq 0$ | ✓ |
| 4 | $2 \cdot 0 + 0 \cdot 1 = 0$ | ✓ |
| 5 | $x_1 = 2 \geq 0$, $x_2 = 1 \geq 0$ | ✓ |
| 6 | $u_1 = 2 \geq 0$, $u_2 = 0 \geq 0$ | ✓ |

→ Alle Bedingungen gelten, **Kandidat gefunden:** $(x_1, x_2) = (2, 1)$ mit $f(2, 1) = 12 + 4 - 4 - 1 = 11$

Dieser Kandidat muss nun im nächsten Schritt geprüft werden: Handelt es sich um ein Maximum? Ist es global? → siehe Schritt 6

</details>
:::

#### Schritt 6: Kandidaten prüfen
- Im folgenden wird geprüft ob es sich bei den Kandidaten jeweils um ein **Maximum, Minimum oder Sattelpunkt** handelt
- Hierfür wird die modifizierte Hesse-Matrix benötigt

$$
H - \lambda E =
\begin{pmatrix}
\dfrac{\partial^2 L}{\partial x_1^2} - \lambda & \dfrac{\partial^2 L}{\partial x_1 \, \partial x_2} \\[12pt]
\dfrac{\partial^2 L}{\partial x_2 \, \partial x_1} & \dfrac{\partial^2 L}{\partial x_2^2} - \lambda
\end{pmatrix}
$$

_Aufstellen und Berechnen der Eigenwerte siehe Kapitel 6.1.2 (Schritt 2 und 3)._

- **Erkenntnis 1**
  - Wenn die modifizierte Hesse-Matrix **keine der Variablen** $x_1, x_2$ mehr enthält (nur Zahlen), ist die zweite Ableitung **überall gleich**
    - Die Krümmung ist überall gleich → Funktion ist durchgehend **konkav** (Hügel) bzw. **konvex** (Tal)
    - Der Kandidat ist damit **global**
- **Erkenntnis 2**
  - Gleichsetzen von $\det(H - \lambda E) = 0$ liefert die Eigenwerte $\lambda$
    - Alle $\lambda < 0$: Es liegt ein **Maximum** vor
    - Alle $\lambda > 0$: Es liegt ein **Minimum** vor
    - $\lambda$ gemischt: Es liegt ein **Sattelpunkt** vor

:::info Beispiel
Kandidat aus Schritt 5: $(x_1, x_2) = (2, 1)$

**Zweite Ableitungen** (aus den ersten Ableitungen in Schritt 3):

| Feld | Ableitung | Wert |
|---|---|---|
| oben links | $6 - 2x_1 - u_1 - 2u_2$ nach $x_1$ | $-2$ |
| oben rechts | $6 - 2x_1 - u_1 - 2u_2$ nach $x_2$ | $0$ |
| unten links | $4 - 2x_2 - u_1 - u_2$ nach $x_1$ | $0$ |
| unten rechts | $4 - 2x_2 - u_1 - u_2$ nach $x_2$ | $-2$ |

**Modifizierte Hesse-Matrix:**

$$
H - \lambda E = \begin{pmatrix} -2 - \lambda & 0 \\ 0 & -2 - \lambda \end{pmatrix}
$$

**Erkenntnis 1:** Die Matrix enthält kein $x_1$ oder $x_2$ mehr → Krümmung überall gleich → der Kandidat ist **global**

**Erkenntnis 2:**

$$
\det(H - \lambda E) = (-2 - \lambda) \cdot (-2 - \lambda) - 0 \cdot 0 = (-2 - \lambda)^2 = 0 \quad\Rightarrow\quad \lambda_{1,2} = -2
$$

Alle Eigenwerte sind negativ → **Maximum**

**Ergebnis:** Bei $(x_1, x_2) = (2, 1)$ liegt das **globale Maximum** mit $f(2, 1) = 6 \cdot 2 + 4 \cdot 1 - 2^2 - 1^2 = 11$
:::