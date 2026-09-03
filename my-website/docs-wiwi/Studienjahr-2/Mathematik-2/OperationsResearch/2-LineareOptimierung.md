# 2. Lineare Optimierung

## 2.1 - Definition

Ein Optimierungsproblem heißt **linear**, wenn sowohl die Zielfunktion als auch **alle** Nebenbedingungen durch lineare Funktionen beschrieben werden können.

### Was ist eine lineare Funktion?

Eine Funktion ist linear, wenn die Variablen **nur mit der Potenz 1 (also „hoch 1")** vorkommen — sie werden lediglich mit Konstanten multipliziert und aufsummiert:

$$
f(\vec{x}) = c_1 x_1 + c_2 x_2 + \dots + c_n x_n
$$

Anschaulich: Es gibt keine „krummen" Terme. Verboten sind Potenzen, Wurzeln, Produkte von Variablen oder Funktionen wie Sinus.

| Linear ✅ | Nicht linear ❌ | Grund |
|---|---|---|
| $3x_1 + 2x_2$ | $x_1^2$ | Potenz (Quadrat) |
| $x_1 - 5x_2 + 7$ | $x_1 \cdot x_2$ | Produkt zweier Variablen |
| $\tfrac{1}{2}x_1$ | $\sqrt{x_1}$ | Wurzel |
| $c_1 x_1 + \dots + c_n x_n$ | $\sin(x_1)$, $\tfrac{1}{x_1}$ | nichtlineare Funktion |

:::note Merkhilfe
Trägt man eine lineare Funktion auf, ergibt sich immer eine **Gerade** (bzw. bei mehreren Variablen eine Ebene). Sobald die Kurve „biegt", ist die Funktion nicht mehr linear.
:::

### Allgemeine Form

Die allgemeine Form linearer Optimierungsprobleme (**LOP**) lautet in kompakter Matrixschreibweise:

$$
\begin{aligned}
\text{Zielfunktion:} \quad & z(\vec{x}) = \vec{c}^{\,T}\vec{x} \;\rightarrow\; \max \text{ (bzw. } \min) \\[4pt]
\text{Nebenbedingungen:} \quad & \underline{A}\,\vec{x} \leq \vec{b} \\[4pt]
& \vec{x} \geq \vec{0}
\end{aligned}
$$

Ausgeschrieben mit **$n$ Variablen** und **$m$ Nebenbedingungen** sieht das so aus:

$$
\begin{aligned}
z = c_1 x_1 + c_2 x_2 + \dots + c_n x_n \;&\rightarrow\; \max \\[6pt]
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n \;&\leq\; b_1 \\
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n \;&\leq\; b_2 \\
&\;\;\vdots \\
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n \;&\leq\; b_m \\[6pt]
x_1, x_2, \dots, x_n \;&\geq\; 0
\end{aligned}
$$

Dabei ist $\vec{c}$ der Vektor der **Zielfunktionskoeffizienten** (z. B. Preise), $\underline{A}$ die **Koeffizientenmatrix** (z. B. Verbrauchsmengen) und $\vec{b}$ der Vektor der **Kapazitätsgrenzen** (z. B. verfügbare Rohstoffe).

---

## 2.2 - Exemplarische Problemstellung

> **Aufgabe:** Ein Farbenhersteller produziert **Außenfarbe** und **Innenfarbe**. Beide Produkte werden aus den Rohstoffen **A** und **B** hergestellt. Verbrauch und maximale Tagesverfügbarkeit:

| Rohstoff | Außenfarbe | Innenfarbe | Max. Verfügbarkeit |
|---|:---:|:---:|:---:|
| **A** | 1 | 2 | 6 |
| **B** | 2 | 1 | 8 |

> **Weitere Angaben:**
> - Verkaufspreise je Mengeneinheit (ME): Außenfarbe **3 T€**, Innenfarbe **2 T€**.
> - Der maximale Bedarf an Innenfarbe beträgt **2 ME pro Tag**.
> - Der Tagesbedarf an Innenfarbe kann den der Außenfarbe um **höchstens 1 ME** übersteigen.
> - Ein Lager ist nicht vorgesehen (es wird nur produziert, was auch verkauft wird).
>
> **Ziel:** Wie viel Außen- und Innenfarbe sollte pro Tag produziert werden, um den **Umsatz zu maximieren**?

Wir übersetzen die Aufgabe Schritt für Schritt in ein LOP.

### Schritt 1 — Variablen definieren

Gesucht sind die zu produzierenden Mengen. Das sind unsere Entscheidungsgrößen:

$$
x_A = \text{Menge an Außenfarbe} \qquad x_I = \text{Menge an Innenfarbe}
$$

### Schritt 2 — Zielfunktion aufstellen

Der Umsatz ist Preis $\times$ Menge, summiert über beide Produkte. Er soll **maximiert** werden:

$$
z(\vec{x}) = \underbrace{3}_{\text{Preis Außen}} \cdot x_A + \underbrace{2}_{\text{Preis Innen}} \cdot x_I \;\rightarrow\; \max
$$

### Schritt 3 — Nebenbedingungen aufstellen

Jede Einschränkung aus der Aufgabe wird zu einer Ungleichung. Wir gehen sie einzeln durch:

**① Rohstoff A ist begrenzt.** Eine ME Außenfarbe braucht 1 Einheit A, eine ME Innenfarbe braucht 2 Einheiten A. Insgesamt stehen nur 6 Einheiten zur Verfügung:
$$
x_A + 2x_I \leq 6
$$

**② Rohstoff B ist begrenzt.** Analog: 2 Einheiten B je Außenfarbe, 1 Einheit B je Innenfarbe, maximal 8 Einheiten:
$$
2x_A + x_I \leq 8
$$

**③ Bedarfskopplung.** Der Bedarf an Innenfarbe darf den der Außenfarbe um höchstens 1 ME übersteigen — also $x_I \leq x_A + 1$. Umgestellt:
$$
x_I - x_A \leq 1
$$

**④ Höchstbedarf Innenfarbe.** Mehr als 2 ME Innenfarbe lassen sich nicht verkaufen (kein Lager):
$$
x_I \leq 2
$$

**⑤ Nicht-Negativität.** Negative Produktionsmengen sind unmöglich:
$$
x_A,\ x_I \geq 0
$$

:::info Das vollständige Modell
$$
\begin{aligned}
\max \quad & z = 3x_A + 2x_I \\
\text{u. d. N.} \quad & x_A + 2x_I \leq 6 \\
& 2x_A + x_I \leq 8 \\
& x_I - x_A \leq 1 \\
& x_I \leq 2 \\
& x_A,\ x_I \geq 0
\end{aligned}
$$
(„u. d. N." = *unter den Nebenbedingungen*)
:::

### Schritt 4 — Grafische Lösung

Da es nur **zwei Variablen** gibt, lässt sich das Problem in einem Koordinatensystem lösen.

:::note Was ist eine Halbebene?
Eine **Gleichung** wie $x_A + 2x_I = 6$ beschreibt eine **Gerade** — sie teilt die Ebene in zwei Hälften. Eine **Ungleichung** wie $x_A + 2x_I \leq 6$ meint dann die Gerade *plus* alles auf **einer** Seite davon. Genau diese „eine Seite inklusive Randgerade" nennt man **Halbebene**.

Jede unserer Nebenbedingungen ① – ⑤ ist also eine Halbebene. Alle gemeinsam einzuhalten heißt: im **Schnitt (Durchschnitt) aller Halbebenen** zu liegen. Dieser Schnitt ist der **zulässige Bereich** (blau) — das Vieleck, in dem *jede* Bedingung erfüllt ist.
:::

Gesucht ist nun der Punkt innerhalb des zulässigen Bereichs mit dem höchsten $z$-Wert.

<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"640px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-lop" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
  </defs>
  <line x1="134" y1="340" x2="134" y2="40" stroke="#eee" strokeWidth="1"/>
  <line x1="208" y1="340" x2="208" y2="40" stroke="#eee" strokeWidth="1"/>
  <line x1="282" y1="340" x2="282" y2="40" stroke="#eee" strokeWidth="1"/>
  <line x1="356" y1="340" x2="356" y2="40" stroke="#eee" strokeWidth="1"/>
  <line x1="430" y1="340" x2="430" y2="40" stroke="#eee" strokeWidth="1"/>
  <line x1="60" y1="240" x2="430" y2="240" stroke="#eee" strokeWidth="1"/>
  <line x1="60" y1="140" x2="430" y2="140" stroke="#eee" strokeWidth="1"/>
  <polygon points="60,340 356,340 306.7,206.7 208,140 134,140 60,240" fill="#dbeeff" fillOpacity="0.7" stroke="#2176AE" strokeWidth="1.5"/>
  <line x1="60" y1="40" x2="430" y2="290" stroke="#e67e22" strokeWidth="1.6"/>
  <line x1="245" y1="40" x2="356" y2="340" stroke="#8e44ad" strokeWidth="1.6"/>
  <line x1="60" y1="240" x2="208" y2="40" stroke="#c0392b" strokeWidth="1.6"/>
  <line x1="60" y1="140" x2="430" y2="140" stroke="#16a085" strokeWidth="1.6"/>
  <line x1="60" y1="340" x2="445" y2="340" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-lop)"/>
  <line x1="60" y1="340" x2="60" y2="30" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-lop)"/>
  <text x="134" y="356" textAnchor="middle" fontSize="11" fill="#555">1</text>
  <text x="208" y="356" textAnchor="middle" fontSize="11" fill="#555">2</text>
  <text x="282" y="356" textAnchor="middle" fontSize="11" fill="#555">3</text>
  <text x="356" y="356" textAnchor="middle" fontSize="11" fill="#555">4</text>
  <text x="430" y="356" textAnchor="middle" fontSize="11" fill="#555">5</text>
  <text x="52" y="244" textAnchor="end" fontSize="11" fill="#555">1</text>
  <text x="52" y="144" textAnchor="end" fontSize="11" fill="#555">2</text>
  <text x="52" y="44" textAnchor="end" fontSize="11" fill="#555">3</text>
  <text x="448" y="360" fontSize="12" fontStyle="italic" fill="#333">xA</text>
  <text x="40" y="26" fontSize="12" fontStyle="italic" fill="#333">xI</text>
  <circle cx="306.7" cy="206.7" r="5" fill="#c0392b"/>
  <text x="316" y="200" fontSize="11" fontWeight="bold" fill="#c0392b">Optimum (10/3, 4/3)</text>
  <text x="315" y="215" fontSize="10" fill="#c0392b">z = 38/3 ≈ 12,67</text>
  <rect x="460" y="55" width="172" height="150" rx="4" fill="white" stroke="#ccc" strokeWidth="1"/>
  <line x1="470" y1="72" x2="492" y2="72" stroke="#e67e22" strokeWidth="1.6"/>
  <text x="498" y="76" fontSize="10.5" fill="#333">① Rohstoff A: xA+2xI≤6</text>
  <line x1="470" y1="94" x2="492" y2="94" stroke="#8e44ad" strokeWidth="1.6"/>
  <text x="498" y="98" fontSize="10.5" fill="#333">② Rohstoff B: 2xA+xI≤8</text>
  <line x1="470" y1="116" x2="492" y2="116" stroke="#c0392b" strokeWidth="1.6"/>
  <text x="498" y="120" fontSize="10.5" fill="#333">③ xI−xA≤1</text>
  <line x1="470" y1="138" x2="492" y2="138" stroke="#16a085" strokeWidth="1.6"/>
  <text x="498" y="142" fontSize="10.5" fill="#333">④ xI≤2</text>
  <rect x="470" y="156" width="22" height="10" fill="#dbeeff" fillOpacity="0.7" stroke="#2176AE" strokeWidth="1"/>
  <text x="498" y="165" fontSize="10.5" fill="#333">zulässiger Bereich</text>
  <circle cx="481" cy="184" r="4" fill="#c0392b"/>
  <text x="498" y="188" fontSize="10.5" fill="#333">optimale Lösung</text>
</svg>

**Warum genau in einer Ecke?** Die Zielfunktion $z = 3x_A + 2x_I$ bildet parallele Geraden („Isogewinnlinien"). Schiebt man sie in Richtung wachsendem $z$ (nach rechts oben), verlässt der letzte berührte Punkt den zulässigen Bereich immer an einer **Ecke**. Es genügt daher, alle Eckpunkte zu prüfen:

| Eckpunkt $(x_A, x_I)$ | $z = 3x_A + 2x_I$ |
|---|---|
| $(0,\ 0)$ | $0$ |
| $(4,\ 0)$ | $12$ |
| $(2,\ 2)$ | $10$ |
| $(1,\ 2)$ | $7$ |
| $(0,\ 1)$ | $2$ |
| $\left(\tfrac{10}{3},\ \tfrac{4}{3}\right)$ | $\tfrac{38}{3} \approx \mathbf{12{,}67}$ ✅ |

Der beste Eckpunkt ist der **Schnittpunkt der beiden Rohstoff-Restriktionen** ① und ②. Wir berechnen ihn exakt, indem wir das Gleichungssystem der beiden bindenden Nebenbedingungen lösen:

$$
\begin{aligned}
x_A + 2x_I &= 6 \\
2x_A + x_I &= 8
\end{aligned}
$$

Aus der ersten Gleichung: $x_A = 6 - 2x_I$. Eingesetzt in die zweite:

$$
2(6 - 2x_I) + x_I = 8 \;\Rightarrow\; 12 - 3x_I = 8 \;\Rightarrow\; x_I = \tfrac{4}{3}, \quad x_A = 6 - \tfrac{8}{3} = \tfrac{10}{3}
$$

### Ergebnis

$$
\boxed{\ x_A = \tfrac{10}{3} \approx 3{,}33 \text{ ME}, \quad x_I = \tfrac{4}{3} \approx 1{,}33 \text{ ME}, \quad z = \tfrac{38}{3} \approx 12{,}67 \text{ T€}\ }
$$

Der Farbenhersteller sollte also täglich rund **3,33 ME Außenfarbe** und **1,33 ME Innenfarbe** produzieren und erzielt damit den maximalen Umsatz von etwa **12,67 T€**. Beide Rohstoffe sind dabei **vollständig ausgelastet** (① und ② sind mit Gleichheit erfüllt).

:::tip Ausblick: Standardform für das Simplex-Verfahren
Bei mehr als zwei Variablen versagt die grafische Methode. Man überführt die Ungleichungen dann durch **Schlupfvariablen** $s_i \geq 0$ in Gleichungen — aus $\leq$ wird $=$:

$$
x_A + 2x_I \leq 6 \quad\Longleftrightarrow\quad x_A + 2x_I + s_1 = 6, \quad s_1 \geq 0
$$

Die Schlupfvariable $s_1$ misst dabei, wie viel von Rohstoff A **noch übrig** ist. Auf diese Gleichungsform wendet man dann das **Pivot-/Simplex-Verfahren** an (siehe [Kapitel 1.1 – Pivot-Verfahren](./1-Einführung.md)).
:::

