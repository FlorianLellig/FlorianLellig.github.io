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

:::tip Und bei mehr als zwei Variablen?
Die grafische Methode funktioniert nur bei **zwei** Variablen. Für den allgemeinen Fall braucht man ein rechnerisches Verfahren — das **Simplex-Verfahren**. Damit es funktioniert, bringt man das LOP zuerst in die **Standardform** (Abschnitt 2.4).
:::

---

## 2.4 - Standardform linearer Optimierungsprobleme

Das Simplex-Verfahren rechnet nicht mit Ungleichungen, sondern mit **Gleichungen**. Ein LOP liegt in **Standardform** vor, wenn zwei Bedingungen erfüllt sind:

1. **Alle Nebenbedingungen sind Gleichungen** (statt Ungleichungen).
2. **Alle Variablen sind nicht-negativ** ($\geq 0$).

Die erste Bedingung erreicht man durch das Einführen zusätzlicher Variablen — der **Schlupfvariablen**.

### Schlupfvariablen — die Idee

Betrachten wir eine typische Ungleichung:

$$
ax + by \leq c
$$

Sie sagt: „die linke Seite ist **höchstens** $c$". Es bleibt also i. d. R. ein Rest bis zur Grenze $c$. Diesen Rest gibt man einer neuen Variablen $s$ und macht daraus eine **Gleichung**:

$$
ax + by + s = c \qquad (\text{mit } s \geq 0)
$$

:::info Was bedeutet die Schlupfvariable anschaulich?
$s$ ist der **nicht verbrauchte Anteil** der Ressource, die durch die Ungleichung beschrieben wird.

- $s = 0$ → die Ressource ist **komplett aufgebraucht** (die Nebenbedingung ist „bindend", man sitzt auf der Grenze).
- $s > 0$ → es ist noch etwas **übrig** (die Grenze ist noch nicht erreicht).

Schlupfvariablen werden **immer als $\geq 0$** eingeführt — sonst würde man ja die Grenze überschreiten.
:::

### Der Farbenhersteller in Standardform

Wir wandeln die vier „echten" Nebenbedingungen aus Abschnitt 2.2 um, indem wir je eine Schlupfvariable $s_1, \dots, s_4$ ergänzen:

$$
\begin{aligned}
x_A + 2x_I + s_1 \phantom{{}+{}} \phantom{{}+{}} \phantom{{}+{}} &= 6 \\
2x_A + x_I \phantom{{}+{}} + s_2 \phantom{{}+{}} \phantom{{}+{}} &= 8 \\
-x_A + x_I \phantom{{}+{}} \phantom{{}+{}} + s_3 \phantom{{}+{}} &= 1 \\
x_I \phantom{{}+{}} \phantom{{}+{}} \phantom{{}+{}} + s_4 &= 2 \\[4pt]
x_A,\ x_I,\ s_1,\ s_2,\ s_3,\ s_4 &\geq 0
\end{aligned}
$$

Die Zielfunktion bleibt (die Schlupfvariablen bringen keinen Umsatz, zählen also mit dem Faktor $0$):

$$
z = 3x_A + 2x_I + 0\cdot s_1 + 0\cdot s_2 + 0\cdot s_3 + 0\cdot s_4 \;\rightarrow\; \max
$$

Aus $2$ Variablen sind nun $6$ geworden, und aus $4$ Ungleichungen $4$ Gleichungen. Wir haben also ein **lineares Gleichungssystem** mit $n = 6$ Variablen und $m = 4$ Gleichungen.

### Erinnerung: Lösungsverhalten linearer Gleichungssysteme

Warum ist $n > m$ hier genau richtig? Ein kurzer Rückblick auf LGS mit $n$ Variablen und $m$ Gleichungen:

| Fall | Bedeutung |
|---|---|
| $n = m$ | Bei linear unabhängigen Gleichungen gibt es **genau eine** Lösung — kein Spielraum. |
| $n < m$ | System ist **überbestimmt** und **unlösbar**. |
| $n > m$ | Es existiert eine **$(n-m)$-parametrige Lösungsschar**. Die freie Wahl der Parameter ist der **Optimierungsspielraum**. |

Beim Farbenhersteller ist $n - m = 6 - 4 = 2$ — es gibt also einen 2-parametrigen Spielraum, innerhalb dessen wir das beste $z$ suchen. Genau darin optimiert das Simplex-Verfahren.

### Eigenschaften von LOP in Standardform

Zwei geometrische Eigenschaften (hier ohne Beweis) machen das Simplex-Verfahren überhaupt erst möglich:

**① Die Menge der zulässigen Lösungen ist konvex.**

<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"500px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <polygon points="45,70 150,45 175,155 70,180" fill="#dbeeff" fillOpacity="0.7" stroke="#2176AE" strokeWidth="1.6"/>
  <line x1="85" y1="95" x2="140" y2="120" stroke="#16a085" strokeWidth="1.8" strokeDasharray="5,4"/>
  <circle cx="85" cy="95" r="4" fill="#333"/>
  <circle cx="140" cy="120" r="4" fill="#333"/>
  <text x="110" y="212" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a6b3c">Konvex ✅</text>
  <text x="110" y="230" textAnchor="middle" fontSize="10.5" fill="#555">Verbindungslinie bleibt komplett innen</text>
  <path d="M 375 112 L 431 73 A 68 68 0 1 0 431 151 Z" fill="#dbeeff" fillOpacity="0.7" stroke="#2176AE" strokeWidth="1.6"/>
  <line x1="400" y1="88" x2="400" y2="136" stroke="#c0392b" strokeWidth="1.8" strokeDasharray="5,4"/>
  <circle cx="400" cy="88" r="4" fill="#333"/>
  <circle cx="400" cy="136" r="4" fill="#333"/>
  <text x="375" y="212" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#922b21">Konkav ❌</text>
  <text x="375" y="230" textAnchor="middle" fontSize="10.5" fill="#555">Linie verlässt die Menge</text>
</svg>

Eine Menge ist **konvex**, wenn die **Verbindungslinie zwischen zwei beliebigen Punkten** der Menge vollständig **innerhalb** der Menge liegt. Da jeder zulässige Bereich der Durchschnitt von Halbebenen ist (siehe 2.2), ist er automatisch konvex — er hat keine "Delle" oder Einbuchtungen.

**② Das Optimum wird immer an einem Eckpunkt angenommen.**

Man muss also nie das Innere absuchen, sondern nur die **Ecken** — das ist die zentrale Vereinfachung. Ein Eckpunkt ist dabei ein Punkt, in dem **$(n-m)$ Variablen gleich Null** sind.

:::note Am Beispiel des Farbenherstellers veranschaulicht
Hier ist $n - m = 2$, an jeder Ecke sind also **genau 2 der 6 Variablen Null**. Prüfen wir das optimale Ergebnis $\left(x_A, x_I\right) = \left(\tfrac{10}{3}, \tfrac{4}{3}\right)$:

$$
\begin{aligned}
s_1 &= 6 - x_A - 2x_I = 6 - \tfrac{10}{3} - \tfrac{8}{3} = 0 \\
s_2 &= 8 - 2x_A - x_I = 8 - \tfrac{20}{3} - \tfrac{4}{3} = 0 \\
s_3 &= 1 + x_A - x_I = 1 + \tfrac{10}{3} - \tfrac{4}{3} = 3 \;(>0) \\
s_4 &= 2 - x_I = 2 - \tfrac{4}{3} = \tfrac{2}{3} \;(>0)
\end{aligned}
$$

Tatsächlich sind **genau zwei** Variablen Null: $s_1 = s_2 = 0$. Das passt zur Grafik — im Optimum liegen wir auf den Grenzen von ① und ②, beide Rohstoffe sind **voll ausgelastet** (kein Schlupf).
:::

---

## 2.5 - Der Simplexalgorithmus

Aus den beiden Eigenschaften folgt ein vergleichsweise einfaches Vorgehen: Weil das Optimum in einer Ecke liegt und die Menge konvex ist, muss man nur **von Ecke zu Ecke „wandern"**, immer bergauf.

:::info Der Algorithmus in drei Schritten
1. **Start:** Beginne in einem beliebigen Eckpunkt des zulässigen Bereichs.
2. **Verbessern:** Gehe zu einer benachbarten Ecke, die einen **besseren** Zielfunktionswert liefert.
3. **Abbruch:** Gibt es **keine** Nachbarecke mehr mit besserem Wert, ist das **Optimum gefunden**.
:::

Man tastet sich also entlang der Kanten des zulässigen Bereichs immer in Richtung wachsendem $z$ — bis kein Nachbar mehr besser ist.

:::note Warum reicht der Blick auf die Nachbarecken? (Abbruchkriterium)
Es wirkt riskant, bei „kein besserer Nachbar" aufzuhören — könnte nicht eine **weiter entfernte** Ecke doch besser sein?

**Nein** — und der Grund ist die **Konvexität** aus Abschnitt 2.4:

- Die Zielfunktion ist **linear**, der zulässige Bereich **konvex**.
- Auf einem konvexen Bereich mit linearer Zielfunktion ist jedes **lokale Optimum automatisch ein globales Optimum**.
- Anschaulich: Der $z$-Wert steigt entlang der Kanten stets „gleichmäßig" (monoton) an. Sitzt man in einer Ecke, von der aus es in **keine** Richtung mehr bergauf geht, kann es nirgends im Bereich noch höher hinausgehen — es gibt kein zweites, verstecktes „Bergtal".

Bei einem **konkaven** (nicht-konvexen) Bereich wäre das anders: Dort könnte man in einer Ecke „gefangen" sein, während hinter einer Einbuchtung ein besserer Wert läge. Genau deshalb ist Eigenschaft ① so wichtig.
:::


