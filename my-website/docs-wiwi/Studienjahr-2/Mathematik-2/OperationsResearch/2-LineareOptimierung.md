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
| $n < m$ | System ist **überbestimmt** und im Allgemeinen **unlösbar**. |
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

### Basis- und Nichtbasisvariablen

Wie „sitzt" man rechnerisch in einer Ecke? Aus Abschnitt 2.4 wissen wir: An jeder Ecke sind **$(n-m)$ Variablen gleich Null**. Danach teilt man die Variablen in zwei Gruppen:

| Gruppe | Anzahl | Bedeutung |
|---|:---:|---|
| **Nichtbasisvariablen (NBV)** | $n - m$ | werden **gleich Null** gesetzt (die freien Parameter) |
| **Basisvariablen (BV)** | $m$ | ergeben sich dann **eindeutig** aus dem Gleichungssystem |

Diese Begrifflichkeiten werden im Folgenden wichtig, um das Verfahren richtig anwenden zu können.

## 2.5 - Simplexalgorithmus tabellarisch anwenden
### Schritt 1 - Normalform aufstellen
:::note
Bevor wir mit dem eigentlichen Verfahren des Simplexalgorithmus anfangen können müssen wir die **gegebenen Nebenbedingungen (und Zielfunktion) auf die Voraussetzungen angleichen.**
:::

#### Voraussetzung 1 - Keine Negativen Variablen
Die Normalform darf keine negativen Variablen beinhalten. Ausschließlich die Form
$$
x_1 \geq 0
$$
ist erlaubt.

| Ausgangslage | Ersetzt durch | Erläuterung |
|---|---|---|
| $x_1 \leq 0$ | $x_1' \geq 0$ | $x_1' = -1 \cdot x_1$ <br/>Achtung: Damit man die Variable problemlos in die (Un-)Gleichungen einsetzen kann, müssen diese negiert eingesetzt werden (siehe Bsp.) |
| $x_1$ ist beliebig | $x_1' - x_1''$ mit $x_1',\ x_1'' \geq 0$ | $x_1 = x_1' - x_1''$ <br/>Jede beliebige Zahl kann durch die Differenz zweier positiver(!) Zahlen beschrieben werden. |

:::info Beispiel
$x_1 \geq 0$ ist bereits in Ordnung. Interessant sind $x_2 \leq 0$ und $x_3$ beliebig.

Ersetzt wird $x_2 = -x_2'$ und $x_3 = x_3' - x_3''$:

$$
\underbrace{
\begin{aligned}
\max \quad & z = 4x_1 - 2x_2 + 5x_3 \\
\text{u. d. N.} \quad & -x_1 + 2x_2 - x_3 = -2 \\
& x_1 + 3x_2 - x_3 \leq 14 \\
& 3x_1 - x_2 + 2x_3 \geq 2 \\
& x_1 \geq 0;\ x_2 \leq 0;\ x_3 \text{ beliebig}
\end{aligned}
}_{\text{Ausgangslage}}
\qquad\Longrightarrow\qquad
\underbrace{
\begin{aligned}
\max \quad & z = 4x_1 + 2x_2' + 5x_3' - 5x_3'' \\
\text{u. d. N.} \quad & -x_1 - 2x_2' - x_3' + x_3'' = -2 \\
& x_1 - 3x_2' - x_3' + x_3'' \leq 14 \\
& 3x_1 + x_2' + 2x_3' - 2x_3'' \geq 2 \\
& x_1,\ x_2',\ x_3',\ x_3'' \geq 0
\end{aligned}
}_{\text{Ziel: keine negativen Variablen}}
$$
:::

:::tip Anzahl der Variablen
Aufgrund unserer Umformung hat sich die **Anzahl der Variablen verändert** - Dies ist jedoch nicht weiter schlimm, da der Simplex keine Begrenzung bzgl. Variablen hat.
:::

#### Voraussetzung 2 - Nur Gleichungen, keine Ungleichungen
Die Normalform erfordert **ausschließlich Gleichungen** - Ungleichungen sind nicht erlaubt. Um dies zu erreichen kann man folgendermaßen vorgehen:
1. **Alle Nebenbedingungen, die _noch_ Ungleichungen sind, in einhetliche Form bringen**
   - Die Seite der Variablen **muss** kleinergleich der Zahl sein!
   - ✅ $x_1 + 5 x_2 \leq 12$
2. **Alle verbleibenden Ungleichungen mit Schlupfvariable ausstatten und Gleichheitszeichen einsetzen.**
   - aus $x_1 + 5 x_2 \leq 12$ wird $x_1 + 5 x_2 + s_1 = 12$

:::info Beispiel (Fortsetzung)
Wir starten mit dem Ergebnis aus Voraussetzung 1.

**1. Einheitliche Form:** Die erste Nebenbedingung ist bereits eine Gleichung und bleibt unverändert. Die zweite hat schon die Form $\leq$. Nur die dritte ($\geq$) muss umgedreht werden — dazu wird sie mit $-1$ multipliziert, wodurch sich das Ungleichheitszeichen umkehrt:

$$
3x_1 + x_2' + 2x_3' - 2x_3'' \geq 2
\quad\big|\cdot(-1)\quad\Longrightarrow\quad
-3x_1 - x_2' - 2x_3' + 2x_3'' \leq -2
$$

**2. Schlupfvariablen einführen:** Die beiden Ungleichungen erhalten je eine Schlupfvariable $s_1, s_2 \geq 0$:

$$
\underbrace{
\begin{aligned}
\max \quad & z = 4x_1 + 2x_2' + 5x_3' - 5x_3'' \\
\text{u. d. N.} \quad & -x_1 - 2x_2' - x_3' + x_3'' = -2 \\
& x_1 - 3x_2' - x_3' + x_3'' \leq 14 \\
& -3x_1 - x_2' - 2x_3' + 2x_3'' \leq -2 \\
& x_1,\ x_2',\ x_3',\ x_3'' \geq 0
\end{aligned}
}_{\text{Ausgangslage}}
\qquad\Longrightarrow\qquad
\underbrace{
\begin{aligned}
\max \quad & z = 4x_1 + 2x_2' + 5x_3' - 5x_3'' \\
\text{u. d. N.} \quad & -x_1 - 2x_2' - x_3' + x_3'' = -2 \\
& x_1 - 3x_2' - x_3' + x_3'' + s_1 = 14 \\
& -3x_1 - x_2' - 2x_3' + 2x_3'' + s_2 = -2 \\
& x_1,\ x_2',\ x_3',\ x_3'',\ s_1,\ s_2 \geq 0
\end{aligned}
}_{\text{Ziel: nur Gleichungen}}
$$
:::

Zusammengefasst läuft das Aufstellen der Normalform also immer in derselben Reihenfolge ab:

<svg viewBox="0 0 700 430" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"700px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-nf" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2176AE"/>
    </marker>
  </defs>
  <rect x="110" y="15" width="180" height="36" rx="18" fill="#eef5fb" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="200" y="38" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">Ausgangs-LOP</text>
  <line x1="200" y1="51" x2="200" y2="83" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-nf)"/>
  <rect x="40" y="85" width="320" height="60" rx="8" fill="#dbeeff" fillOpacity="0.5" stroke="#2176AE" strokeWidth="2"/>
  <circle cx="40" cy="115" r="14" fill="#2176AE"/>
  <text x="40" y="119" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">1</text>
  <text x="70" y="110" fontSize="13.5" fontWeight="bold" fill="#1a5c8c">Vorzeichen prüfen</text>
  <text x="70" y="130" fontSize="11" fill="#555">Voraussetzung 1 – keine negativen Variablen</text>
  <line x1="200" y1="145" x2="200" y2="178" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-nf)"/>
  <rect x="40" y="180" width="320" height="60" rx="8" fill="#dbeeff" fillOpacity="0.5" stroke="#2176AE" strokeWidth="2"/>
  <circle cx="40" cy="210" r="14" fill="#2176AE"/>
  <text x="40" y="214" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">2</text>
  <text x="70" y="205" fontSize="13.5" fontWeight="bold" fill="#1a5c8c">Ungleichungen vereinheitlichen</text>
  <text x="70" y="225" fontSize="11" fill="#555">Voraussetzung 2 – Schritt 1</text>
  <line x1="200" y1="240" x2="200" y2="273" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-nf)"/>
  <rect x="40" y="275" width="320" height="60" rx="8" fill="#dbeeff" fillOpacity="0.5" stroke="#2176AE" strokeWidth="2"/>
  <circle cx="40" cy="305" r="14" fill="#2176AE"/>
  <text x="40" y="309" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">3</text>
  <text x="70" y="300" fontSize="13.5" fontWeight="bold" fill="#1a5c8c">Schlupfvariablen einführen</text>
  <text x="70" y="320" fontSize="11" fill="#555">Voraussetzung 2 – Schritt 2</text>
  <line x1="200" y1="335" x2="200" y2="368" stroke="#2176AE" strokeWidth="1.8" markerEnd="url(#arr-nf)"/>
  <rect x="90" y="370" width="220" height="46" rx="23" fill="#2a9d6e" fillOpacity="0.15" stroke="#2a9d6e" strokeWidth="2"/>
  <text x="200" y="390" textAnchor="middle" fontSize="13.5" fontWeight="bold" fill="#1a6644">Normalform ✓</text>
  <text x="200" y="406" textAnchor="middle" fontSize="10.5" fill="#1a6644">nur Gleichungen, alle Variablen ≥ 0</text>
  <line x1="360" y1="115" x2="400" y2="115" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <rect x="400" y="85" width="290" height="60" rx="6" fill="white" stroke="#ccc" strokeWidth="1"/>
  <text x="412" y="110" fontSize="11.5" fill="#333">x ≤ 0  →  x = −x′</text>
  <text x="412" y="130" fontSize="11.5" fill="#333">x beliebig  →  x = x′ − x″</text>
  <line x1="360" y1="210" x2="400" y2="210" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <rect x="400" y="180" width="290" height="60" rx="6" fill="white" stroke="#ccc" strokeWidth="1"/>
  <text x="412" y="205" fontSize="11.5" fill="#333">≥-Bedingung  →  mit (−1) multiplizieren</text>
  <text x="412" y="225" fontSize="11.5" fill="#333">Gleichungen und ≤ bleiben unverändert</text>
  <line x1="360" y1="305" x2="400" y2="305" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <rect x="400" y="275" width="290" height="60" rx="6" fill="white" stroke="#ccc" strokeWidth="1"/>
  <text x="412" y="300" fontSize="11.5" fill="#333">… ≤ b  →  … + s = b</text>
  <text x="412" y="320" fontSize="11.5" fill="#333">je Ungleichung eine neue Variable s ≥ 0</text>
</svg>


### Schritt 2 - Tabellarisch lösen
:::tip Unterschiedliche Lösungsverfahren
Neben dem tabellarischen Ansatz gibt es ebenfalls die Möglichkeit, lineare Optimierungsprobleme mittels allgebraischer Umformung zu lösen (siehe _2.6 - Simplexalgorithmus algebraisch lösen_)
:::

#### Tabelle aufstellen

Als Beispiel dient der Farbenhersteller in Normalform (siehe 2.4).

- Jede **Nebenbedingung** wird eine Zeile, links steht ihre **Basisvariable** (zu Beginn die Schlupfvariablen).
- Jede **Variable** wird eine Spalte, ganz rechts die rechte Seite **$b$**.
- Die **Zielfunktion** kommt als letzte Zeile dazu — umgestellt auf $z - 3x_A - 2x_I = 0$. Dadurch **drehen sich die Vorzeichen** um.

<svg viewBox="0 0 680 236" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"680px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <rect x="10" y="10" width="470" height="36" fill="#d5d5d5"/>
  <rect x="10" y="46" width="60" height="180" fill="#ececec"/>
  <rect x="10" y="10" width="470" height="216" fill="none" stroke="#333" strokeWidth="2"/>
  <line x1="420" y1="10" x2="420" y2="226" stroke="#333" strokeWidth="2"/>
  <line x1="10" y1="190" x2="480" y2="190" stroke="#333" strokeWidth="2"/>
  <line x1="10" y1="46" x2="480" y2="46" stroke="#333" strokeWidth="1"/>
  <g fontSize="13" fill="#333" textAnchor="middle" fontWeight="bold">
    <text x="40" y="33">BV</text>
    <text x="95" y="33">z</text>
    <text x="145" y="33">xA</text>
    <text x="195" y="33">xI</text>
    <text x="245" y="33">s1</text>
    <text x="295" y="33">s2</text>
    <text x="345" y="33">s3</text>
    <text x="395" y="33">s4</text>
    <text x="450" y="33">b</text>
    <text x="40" y="69">s1</text>
    <text x="40" y="105">s2</text>
    <text x="40" y="141">s3</text>
    <text x="40" y="177">s4</text>
    <text x="40" y="213">z</text>
  </g>
  <g fontSize="13" fill="#333" textAnchor="middle">
    <text x="95" y="69">0</text><text x="145" y="69">1</text><text x="195" y="69">2</text><text x="245" y="69">1</text><text x="295" y="69">0</text><text x="345" y="69">0</text><text x="395" y="69">0</text><text x="450" y="69">6</text>
    <text x="95" y="105">0</text><text x="145" y="105">2</text><text x="195" y="105">1</text><text x="245" y="105">0</text><text x="295" y="105">1</text><text x="345" y="105">0</text><text x="395" y="105">0</text><text x="450" y="105">8</text>
    <text x="95" y="141">0</text><text x="145" y="141">−1</text><text x="195" y="141">1</text><text x="245" y="141">0</text><text x="295" y="141">0</text><text x="345" y="141">1</text><text x="395" y="141">0</text><text x="450" y="141">1</text>
    <text x="95" y="177">0</text><text x="145" y="177">0</text><text x="195" y="177">1</text><text x="245" y="177">0</text><text x="295" y="177">0</text><text x="345" y="177">0</text><text x="395" y="177">1</text><text x="450" y="177">2</text>
    <text x="95" y="213">1</text><text x="145" y="213">−3</text><text x="195" y="213">−2</text><text x="245" y="213">0</text><text x="295" y="213">0</text><text x="345" y="213">0</text><text x="395" y="213">0</text><text x="450" y="213">0</text>
  </g>
  <path d="M 490 50 L 498 50 L 498 186 L 490 186" fill="none" stroke="#555" strokeWidth="1.4"/>
  <text x="508" y="114" fontSize="12" fontWeight="bold" fill="#1a5c8c">Nebenbedingungen</text>
  <text x="508" y="130" fontSize="10.5" fill="#555">BV zu Beginn: s1 … s4</text>
  <text x="508" y="204" fontSize="12" fontWeight="bold" fill="#1a5c8c">Zielfunktion</text>
  <text x="508" y="220" fontSize="10.5" fill="#555">z − 3xA − 2xI = 0</text>
</svg>

#### Negativsten Wert der Zielfunktions-Zeile als Pivotspalte übernehmen

Ein negativer Wert in der $z$-Zeile bedeutet: Diese Variable kann $z$ noch **erhöhen**. Man nimmt den **negativsten** — hier $-3$ bei $x_A$ (jede ME Außenfarbe bringt 3 T€). Also wird **$x_A$ die Pivotspalte**.

:::warning
Kein Negativer Wert -> Abbruchkriterium -> Optimum gefunden
:::

#### Q berechnen um Pivotzeile zu bestimmen

Für jede Zeile mit positivem Eintrag in der Pivotspalte (**PSK** $> 0$) wird $Q = \dfrac{b}{\text{PSK}}$ gebildet. Das **kleinste $Q$** bestimmt die **Pivotzeile** — es ist der Engpass, der das Wachstum von $x_A$ zuerst stoppt.

- $s_1$: $6 / 1 = 6$
- $s_2$: $8 / 2 = \mathbf{4}$ ← kleinstes $Q$
- $s_3$, $s_4$: PSK $\leq 0$ → kein $Q$

<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"680px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-tab" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#c0392b"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="550" height="36" fill="#d5d5d5"/>
  <rect x="10" y="46" width="60" height="180" fill="#ececec"/>
  <rect x="120" y="46" width="50" height="144" fill="#c0392b" fillOpacity="0.08" stroke="#c0392b" strokeWidth="1.8"/>
  <rect x="70" y="82" width="410" height="36" fill="#c0392b" fillOpacity="0.08" stroke="#c0392b" strokeWidth="1.8"/>
  <rect x="120" y="190" width="50" height="36" fill="#2176AE" fillOpacity="0.12" stroke="#2176AE" strokeWidth="1.8"/>
  <rect x="10" y="10" width="550" height="216" fill="none" stroke="#333" strokeWidth="2"/>
  <line x1="420" y1="10" x2="420" y2="226" stroke="#333" strokeWidth="2"/>
  <line x1="480" y1="10" x2="480" y2="226" stroke="#333" strokeWidth="2"/>
  <line x1="10" y1="190" x2="560" y2="190" stroke="#333" strokeWidth="2"/>
  <line x1="10" y1="46" x2="560" y2="46" stroke="#333" strokeWidth="1"/>
  <g fontSize="13" fill="#333" textAnchor="middle" fontWeight="bold">
    <text x="40" y="33">BV</text>
    <text x="95" y="33">z</text>
    <text x="145" y="33">xA</text>
    <text x="195" y="33">xI</text>
    <text x="245" y="33">s1</text>
    <text x="295" y="33">s2</text>
    <text x="345" y="33">s3</text>
    <text x="395" y="33">s4</text>
    <text x="450" y="33">b</text>
    <text x="520" y="33">Q = b/PSK</text>
    <text x="40" y="69">s1</text>
    <text x="40" y="105">s2</text>
    <text x="40" y="141">s3</text>
    <text x="40" y="177">s4</text>
    <text x="40" y="213">z</text>
  </g>
  <g fontSize="13" fill="#333" textAnchor="middle">
    <text x="95" y="69">0</text><text x="145" y="69">1</text><text x="195" y="69">2</text><text x="245" y="69">1</text><text x="295" y="69">0</text><text x="345" y="69">0</text><text x="395" y="69">0</text><text x="450" y="69">6</text><text x="520" y="69">6</text>
    <text x="95" y="105">0</text><text x="195" y="105">1</text><text x="245" y="105">0</text><text x="295" y="105">1</text><text x="345" y="105">0</text><text x="395" y="105">0</text><text x="450" y="105">8</text>
    <text x="95" y="141">0</text><text x="145" y="141">−1</text><text x="195" y="141">1</text><text x="245" y="141">0</text><text x="295" y="141">0</text><text x="345" y="141">1</text><text x="395" y="141">0</text><text x="450" y="141">1</text><text x="520" y="141">{"< 0"}</text>
    <text x="95" y="177">0</text><text x="145" y="177">0</text><text x="195" y="177">1</text><text x="245" y="177">0</text><text x="295" y="177">0</text><text x="345" y="177">0</text><text x="395" y="177">1</text><text x="450" y="177">2</text><text x="520" y="177">—</text>
    <text x="95" y="213">1</text><text x="195" y="213">−2</text><text x="245" y="213">0</text><text x="295" y="213">0</text><text x="345" y="213">0</text><text x="395" y="213">0</text><text x="450" y="213">0</text><text x="520" y="213">—</text>
  </g>
  <circle cx="145" cy="100" r="14" fill="none" stroke="#c0392b" strokeWidth="2"/>
  <text x="145" y="105" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#c0392b">2</text>
  <text x="520" y="105" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#c0392b">4</text>
  <text x="145" y="213" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2176AE">−3</text>
  <line x1="660" y1="100" x2="570" y2="100" stroke="#c0392b" strokeWidth="1.6" markerEnd="url(#arr-tab)"/>
  <text x="615" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c0392b">Pivotzeile</text>
  <text x="615" y="120" textAnchor="middle" fontSize="10.5" fill="#555">kleinstes Q</text>
  <line x1="145" y1="275" x2="145" y2="236" stroke="#c0392b" strokeWidth="1.6" markerEnd="url(#arr-tab)"/>
  <text x="155" y="266" fontSize="12" fontWeight="bold" fill="#c0392b">Pivotspalte</text>
  <text x="155" y="281" fontSize="10.5" fill="#555">negativster Wert in der z-Zeile (−3)</text>
  <text x="330" y="266" fontSize="12" fontWeight="bold" fill="#c0392b">Pivotelement = 2</text>
  <text x="330" y="281" fontSize="10.5" fill="#555">Schnitt von Pivotzeile und -spalte</text>
</svg>

:::note Variablentausch
Die Variable der **Pivotspalte** wird zur neuen Basisvariable: Sie ersetzt in der BV-Spalte ganz links die Variable der **Pivotzeile** — hier wird $s_2$ durch $x_A$ ersetzt.
:::

#### Pivotverfahren anwenden

Umgeformt wird mit dem Pivotverfahren aus [1.1 - Lineare Gleichungssysteme - Pivot Verfahren](./1-Einführung.md#11---lineare-gleichungssysteme---pivot-verfahren):

:::tip Pivot-Regel
$$
\text{Neue Pivotzeile} = \frac{\text{Alte Pivotzeile}}{\text{Pivotelement}}
\qquad\qquad
\text{Neue Zeile} = \text{Alte Zeile} - \text{PSK} \cdot \text{Neue Pivotzeile}
$$
Die zweite Formel gilt für **alle übrigen Zeilen — auch die $z$-Zeile**.
:::

Zum Beispiel die $z$-Zeile (PSK $= -3$), gerechnet über die Spalten $x_A \dots s_4$ und $b$:

$$
(-3,\ -2,\ 0,\ 0,\ 0,\ 0 \;;\; 0) - (-3) \cdot (1,\ \tfrac{1}{2},\ 0,\ \tfrac{1}{2},\ 0,\ 0 \;;\; 4) = (0,\ -\tfrac{1}{2},\ 0,\ \tfrac{3}{2},\ 0,\ 0 \;;\; 12)
$$

Nach der ersten Iteration steht in der $z$-Zeile noch $-\tfrac{1}{2}$ → **nicht optimal**. Also dieselben Schritte noch einmal:

<svg viewBox="0 0 680 300" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"680px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-tab2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#c0392b"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="550" height="36" fill="#d5d5d5"/>
  <rect x="10" y="46" width="60" height="180" fill="#ececec"/>
  <rect x="10" y="82" width="60" height="36" fill="#2a9d6e" fillOpacity="0.25"/>
  <rect x="170" y="46" width="50" height="144" fill="#c0392b" fillOpacity="0.08" stroke="#c0392b" strokeWidth="1.8"/>
  <rect x="70" y="46" width="410" height="36" fill="#c0392b" fillOpacity="0.08" stroke="#c0392b" strokeWidth="1.8"/>
  <rect x="170" y="190" width="50" height="36" fill="#2176AE" fillOpacity="0.12" stroke="#2176AE" strokeWidth="1.8"/>
  <rect x="10" y="10" width="550" height="216" fill="none" stroke="#333" strokeWidth="2"/>
  <line x1="420" y1="10" x2="420" y2="226" stroke="#333" strokeWidth="2"/>
  <line x1="480" y1="10" x2="480" y2="226" stroke="#333" strokeWidth="2"/>
  <line x1="10" y1="190" x2="560" y2="190" stroke="#333" strokeWidth="2"/>
  <line x1="10" y1="46" x2="560" y2="46" stroke="#333" strokeWidth="1"/>
  <g fontSize="13" fill="#333" textAnchor="middle" fontWeight="bold">
    <text x="40" y="33">BV</text>
    <text x="95" y="33">z</text>
    <text x="145" y="33">xA</text>
    <text x="195" y="33">xI</text>
    <text x="245" y="33">s1</text>
    <text x="295" y="33">s2</text>
    <text x="345" y="33">s3</text>
    <text x="395" y="33">s4</text>
    <text x="450" y="33">b</text>
    <text x="520" y="33">Q = b/PSK</text>
    <text x="40" y="69">s1</text>
    <text x="40" y="105" fill="#1a6644">xA</text>
    <text x="40" y="141">s3</text>
    <text x="40" y="177">s4</text>
    <text x="40" y="213">z</text>
  </g>
  <g fontSize="13" fill="#333" textAnchor="middle">
    <text x="95" y="69">0</text><text x="145" y="69">0</text><text x="245" y="69">1</text><text x="295" y="69">−1/2</text><text x="345" y="69">0</text><text x="395" y="69">0</text><text x="450" y="69">2</text>
    <text x="95" y="105">0</text><text x="145" y="105">1</text><text x="195" y="105">1/2</text><text x="245" y="105">0</text><text x="295" y="105">1/2</text><text x="345" y="105">0</text><text x="395" y="105">0</text><text x="450" y="105">4</text><text x="520" y="105">8</text>
    <text x="95" y="141">0</text><text x="145" y="141">0</text><text x="195" y="141">3/2</text><text x="245" y="141">0</text><text x="295" y="141">1/2</text><text x="345" y="141">1</text><text x="395" y="141">0</text><text x="450" y="141">5</text><text x="520" y="141">10/3</text>
    <text x="95" y="177">0</text><text x="145" y="177">0</text><text x="195" y="177">1</text><text x="245" y="177">0</text><text x="295" y="177">0</text><text x="345" y="177">0</text><text x="395" y="177">1</text><text x="450" y="177">2</text><text x="520" y="177">2</text>
    <text x="95" y="213">1</text><text x="145" y="213">0</text><text x="245" y="213">0</text><text x="295" y="213">3/2</text><text x="345" y="213">0</text><text x="395" y="213">0</text><text x="450" y="213">12</text><text x="520" y="213">—</text>
  </g>
  <circle cx="195" cy="64" r="17" fill="none" stroke="#c0392b" strokeWidth="2"/>
  <text x="195" y="69" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#c0392b">3/2</text>
  <text x="520" y="69" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#c0392b">4/3</text>
  <text x="195" y="213" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2176AE">−1/2</text>
  <line x1="660" y1="64" x2="570" y2="64" stroke="#c0392b" strokeWidth="1.6" markerEnd="url(#arr-tab2)"/>
  <text x="615" y="54" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c0392b">Pivotzeile</text>
  <text x="615" y="84" textAnchor="middle" fontSize="10.5" fill="#555">kleinstes Q</text>
  <line x1="195" y1="275" x2="195" y2="236" stroke="#c0392b" strokeWidth="1.6" markerEnd="url(#arr-tab2)"/>
  <text x="205" y="266" fontSize="12" fontWeight="bold" fill="#c0392b">Pivotspalte</text>
  <text x="205" y="281" fontSize="10.5" fill="#555">einziger negativer Wert (−1/2)</text>
  <text x="400" y="266" fontSize="12" fontWeight="bold" fill="#c0392b">Pivotelement = 3/2</text>
  <text x="400" y="281" fontSize="10.5" fill="#555">Schnitt von Pivotzeile und -spalte</text>
</svg>

($x_A$ ist grün markiert — sie wurde in der ersten Iteration gegen $s_2$ getauscht.)

Nach der zweiten Iteration ($x_I$ ersetzt $s_1$) erhält man das **Endtableau**:

<svg viewBox="0 0 680 290" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"680px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-end-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2176AE"/>
    </marker>
    <marker id="arr-end-g" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2a9d6e"/>
    </marker>
  </defs>
  <rect x="10" y="10" width="470" height="36" fill="#d5d5d5"/>
  <rect x="10" y="46" width="60" height="180" fill="#ececec"/>
  <rect x="420" y="46" width="60" height="144" fill="#2176AE" fillOpacity="0.12" stroke="#2176AE" strokeWidth="1.8"/>
  <rect x="70" y="190" width="410" height="36" fill="#2a9d6e" fillOpacity="0.15" stroke="#2a9d6e" strokeWidth="1.8"/>
  <rect x="10" y="10" width="470" height="216" fill="none" stroke="#333" strokeWidth="2"/>
  <line x1="420" y1="10" x2="420" y2="226" stroke="#333" strokeWidth="2"/>
  <line x1="10" y1="190" x2="480" y2="190" stroke="#333" strokeWidth="2"/>
  <line x1="10" y1="46" x2="480" y2="46" stroke="#333" strokeWidth="1"/>
  <g fontSize="13" fill="#333" textAnchor="middle" fontWeight="bold">
    <text x="40" y="33">BV</text>
    <text x="95" y="33">z</text>
    <text x="145" y="33">xA</text>
    <text x="195" y="33">xI</text>
    <text x="245" y="33">s1</text>
    <text x="295" y="33">s2</text>
    <text x="345" y="33">s3</text>
    <text x="395" y="33">s4</text>
    <text x="450" y="33">b</text>
    <text x="40" y="69">xI</text>
    <text x="40" y="105">xA</text>
    <text x="40" y="141">s3</text>
    <text x="40" y="177">s4</text>
    <text x="40" y="213">z</text>
  </g>
  <g fontSize="13" fill="#333" textAnchor="middle">
    <text x="95" y="69">0</text><text x="145" y="69">0</text><text x="195" y="69">1</text><text x="245" y="69">2/3</text><text x="295" y="69">−1/3</text><text x="345" y="69">0</text><text x="395" y="69">0</text><text x="450" y="69">4/3</text>
    <text x="95" y="105">0</text><text x="145" y="105">1</text><text x="195" y="105">0</text><text x="245" y="105">−1/3</text><text x="295" y="105">2/3</text><text x="345" y="105">0</text><text x="395" y="105">0</text><text x="450" y="105">10/3</text>
    <text x="95" y="141">0</text><text x="145" y="141">0</text><text x="195" y="141">0</text><text x="245" y="141">−1</text><text x="295" y="141">1</text><text x="345" y="141">1</text><text x="395" y="141">0</text><text x="450" y="141">3</text>
    <text x="95" y="177">0</text><text x="145" y="177">0</text><text x="195" y="177">0</text><text x="245" y="177">−2/3</text><text x="295" y="177">1/3</text><text x="345" y="177">0</text><text x="395" y="177">1</text><text x="450" y="177">2/3</text>
    <text x="95" y="213">1</text><text x="145" y="213">0</text><text x="195" y="213">0</text><text x="245" y="213">1/3</text><text x="295" y="213">4/3</text><text x="345" y="213">0</text><text x="395" y="213">0</text>
  </g>
  <text x="450" y="213" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a6644">38/3</text>
  <line x1="660" y1="118" x2="490" y2="118" stroke="#2176AE" strokeWidth="1.6" markerEnd="url(#arr-end-b)"/>
  <text x="575" y="108" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2176AE">Lösung ablesen</text>
  <text x="575" y="138" textAnchor="middle" fontSize="10.5" fill="#555">Werte der BV stehen in b</text>
  <line x1="260" y1="270" x2="260" y2="236" stroke="#2a9d6e" strokeWidth="1.6" markerEnd="url(#arr-end-g)"/>
  <text x="270" y="261" fontSize="12" fontWeight="bold" fill="#1a6644">Optimum erreicht</text>
  <text x="270" y="276" fontSize="10.5" fill="#555">kein negativer Wert mehr in der z-Zeile</text>
</svg>

Ablesen: $x_A = \tfrac{10}{3}$, $x_I = \tfrac{4}{3}$, $z = \tfrac{38}{3} \approx 12{,}67$ T€ — dasselbe Ergebnis wie bei der grafischen Lösung. Nichtbasisvariablen ($s_1, s_2$) sind $0$: Beide Rohstoffe sind voll ausgelastet.

#### Zusammenfassung des Schritteablaufs
<svg viewBox="0 0 700 390" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"700px",display:"block",margin:"0.5rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-sx" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#666"/>
    </marker>
  </defs>
  <rect x="250" y="12" width="200" height="34" rx="17" fill="#f0f4f8" stroke="#888" strokeWidth="1.5"/>
  <text x="350" y="34" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Starttableau aufstellen</text>
  <line x1="350" y1="46" x2="350" y2="65" stroke="#666" strokeWidth="1.5" markerEnd="url(#arr-sx)"/>
  <polygon points="350,66 470,96 350,126 230,96" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="350" y="92" textAnchor="middle" fontSize="11" fill="#1a5c8c">Negativer Wert</text>
  <text x="350" y="106" textAnchor="middle" fontSize="11" fill="#1a5c8c">in der z-Zeile?</text>
  <path d="M 230 96 L 110 96 L 110 153" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arr-sx)"/>
  <text x="170" y="89" textAnchor="middle" fontSize="10" fill="#555" fontStyle="italic">NEIN</text>
  <rect x="40" y="153" width="140" height="46" rx="5" fill="#27ae60" stroke="#1e8449" strokeWidth="1.5"/>
  <text x="110" y="172" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">Optimum erreicht</text>
  <text x="110" y="188" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="white">Werte ablesen</text>
  <line x1="350" y1="126" x2="350" y2="151" stroke="#666" strokeWidth="1.5" markerEnd="url(#arr-sx)"/>
  <text x="358" y="142" textAnchor="start" fontSize="10" fill="#555" fontStyle="italic">JA</text>
  <rect x="230" y="152" width="240" height="40" rx="5" fill="#f0f4f8" stroke="#888" strokeWidth="1.5"/>
  <text x="350" y="168" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Pivotspalte wählen</text>
  <text x="350" y="184" textAnchor="middle" fontSize="10" fill="#555">negativster Wert der z-Zeile</text>
  <line x1="350" y1="192" x2="350" y2="211" stroke="#666" strokeWidth="1.5" markerEnd="url(#arr-sx)"/>
  <rect x="230" y="212" width="240" height="40" rx="5" fill="#f0f4f8" stroke="#888" strokeWidth="1.5"/>
  <text x="350" y="228" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Q berechnen</text>
  <text x="350" y="244" textAnchor="middle" fontSize="10" fill="#555">{"Q = b / PSK (nur für PSK > 0)"}</text>
  <line x1="350" y1="252" x2="350" y2="271" stroke="#666" strokeWidth="1.5" markerEnd="url(#arr-sx)"/>
  <rect x="230" y="272" width="240" height="40" rx="5" fill="#f0f4f8" stroke="#888" strokeWidth="1.5"/>
  <text x="350" y="288" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Pivotzeile wählen</text>
  <text x="350" y="304" textAnchor="middle" fontSize="10" fill="#555">kleinstes Q (≥ 0)</text>
  <line x1="350" y1="312" x2="350" y2="331" stroke="#666" strokeWidth="1.5" markerEnd="url(#arr-sx)"/>
  <rect x="230" y="332" width="240" height="40" rx="5" fill="#f0f4f8" stroke="#888" strokeWidth="1.5"/>
  <text x="350" y="348" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Pivotverfahren anwenden</text>
  <text x="350" y="364" textAnchor="middle" fontSize="10" fill="#555">BV tauschen, Tableau umformen</text>
  <path d="M 470 352 L 560 352 L 560 96 L 472 96" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arr-sx)"/>
  <text x="568" y="220" textAnchor="start" fontSize="10" fill="#555" fontStyle="italic">nächste</text>
  <text x="568" y="234" textAnchor="start" fontSize="10" fill="#555" fontStyle="italic">Iteration</text>
</svg>