# 4. Wahrscheinlichkeiten

## 4.1 - Axiome und Theoreme

### 4.1.1 - Grundbegriffe
- **Vereinigung** $A \cup B$
  - Menge aller Elementarereignisse, die zu $A$ **oder** $B$ gehören
- **Durchschnitt** $A \cap B$
  - Menge aller Elementarereignisse, die zu $A$ **und** $B$ gehören
- **Disjunkt** (= unvereinbar)
  - $A$ und $B$ schließen einander aus: Es gibt kein Elementarereignis, das zu beiden gleichzeitig gehört ($A \cap B = \emptyset$)
- **Unabhängig**
  - $B$ ist von $A$ unabhängig, wenn das Eintreten von $B$ nicht vom Eintreten oder Nichteintreten von $A$ abhängt

### 4.1.2 - Theoreme der Wahrscheinlichkeitsrechnung
:::info
Aus den **Axiomen** (= Grundsätze formaler Art, die keines Beweises bedürfen) lassen sich verschiedene **Theoreme der Wahrscheinlichkeitsrechnung** herleiten.
:::

:::note Schreibweise
$P(A \mid B)$ = Wahrscheinlichkeit von $A$ **unter der Bedingung** $B$. Auf den Folien steht dafür $P(A / B)$.
:::

**Addition paarweise disjunkter (= unvereinbarer) Ereignisse:**

$$
P(A_1 \cup A_2 \cup \dots \cup A_n) = P(A_1) + P(A_2) + \dots + P(A_n)
$$

**Addition zweier beliebiger Ereignisse:**

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

**Bedingte Wahrscheinlichkeit:**

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
$$

Bei **Unabhängigkeit** gilt $P(A \cap B) = P(A) \cdot P(B)$ und damit:

$$
P(A \mid B) = P(A)
$$

**Produkt von $n$ Ereignissen:**

$$
P(A_1 \cap A_2 \cap \dots \cap A_n) = P(A_1) \cdot P(A_2 \mid A_1) \cdot P(A_3 \mid A_1 \cap A_2) \cdot \ldots \cdot P(A_n \mid A_1 \cap \dots \cap A_{n-1})
$$

**Theorem für die totale Wahrscheinlichkeit** (bei paarweise disjunkten Ereignissen):

$$
P(B) = P(A_1) \cdot P(B \mid A_1) + P(A_2) \cdot P(B \mid A_2) + \dots + P(A_n) \cdot P(B \mid A_n) = \sum_{i=1}^{n} P(A_i) \cdot P(B \mid A_i)
$$

**Bayes-Theorem** (bei paarweise disjunkten Ereignissen):

$$
P(A_i \mid B) = \frac{P(A_i) \cdot P(B \mid A_i)}{P(A_1) \cdot P(B \mid A_1) + \dots + P(A_n) \cdot P(B \mid A_n)} = \frac{P(A_i) \cdot P(B \mid A_i)}{\displaystyle\sum_{j=1}^{n} P(A_j) \cdot P(B \mid A_j)}
$$


## 4.2 - Kombinatorik
- **Ziel:** Bestimmen **wie viele Möglichkeiten** es gibt um Elemente zu ordnen oder zusammenzustellen
- Typische Fragestellung: _Wie viele unterschiedliche Möglichkeiten gibt es, um...?_

:::info Es gibt (laut Skript) 3 Typen
| Typ | Verwendung |
|---|---|
| **Permutation** | **alle** $n$ Elemente nebeneinander reihen |
| **Variation** | $k$ aus $n$ Elementen auswählen, **Anordnung zählt** |
| **Kombination** | $k$ aus $n$ Elementen auswählen, **Anordnung egal** |
:::

### 4.2.1 - Permutation
- Die Permutation beschäftigt sich damit, **alle $n$ Elemente nebeneinander zu reihen**

$$
P_n = n!
$$

### 4.2.2 - Variation
- Die Variation beschäftigt sich mit Zusammenstellungen, bei denen die **Anordnung berücksichtigt wird**

#### Fall 1 - Werte dürfen sich NICHT Wiederholen

$$
V_n^{(k)} = \frac{n!}{(n-k)!}
$$

#### Fall 2 - Werte dürfen sich Wiederholen

$$
V_n^{(k)} = n^k
$$

### 4.2.3 - Kombination
- Die Kombination beschäftigt sich mit Zusammenstellungen, bei denen die **Anordnung NICHT berücksichtigt wird**

#### Fall 1 - Werte dürfen sich NICHT Wiederholen

$$
C_n^{(k)} = \binom{n}{k} = \frac{n!}{k! \cdot (n-k)!}
$$

#### Fall 2 - Werte dürfen sich Wiederholen

$$
C_n^{(k)} = \binom{n+k-1}{k} = \frac{(n+k-1)!}{k! \cdot (n-1)!}
$$

## 4.3 - Zufallsvariablen inkl. Verteilung
- Eine **Zufallsvariable $X$** ordnet den möglichen Ergebnissen eines Zufallsvorgangs reelle Zahlen zu
- Je nach Art der Werte unterscheidet man **diskrete** und **stetige** Zufallsvariablen mit jeweils eigenen Verteilungen

<svg viewBox="0 0 880 245" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"880px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-zv" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#999"/>
    </marker>
  </defs>
  {/* Pfeile Ebene 1 */}
  <g stroke="#999" strokeWidth="1.4" fill="none" markerEnd="url(#arr-zv)">
    <line x1="440" y1="50" x2="252" y2="83"/>
    <line x1="500" y1="50" x2="688" y2="83"/>
  </g>
  {/* Pfeile Ebene 2 */}
  <g stroke="#999" strokeWidth="1.2" fill="none" markerEnd="url(#arr-zv)">
    <line x1="250" y1="131" x2="70" y2="163"/>
    <line x1="250" y1="131" x2="190" y2="163"/>
    <line x1="250" y1="131" x2="310" y2="163"/>
    <line x1="250" y1="131" x2="430" y2="163"/>
    <line x1="690" y1="131" x2="570" y2="163"/>
    <line x1="690" y1="131" x2="690" y2="163"/>
    <line x1="690" y1="131" x2="810" y2="163"/>
  </g>
  {/* Wurzel */}
  <rect x="380" y="10" width="180" height="40" rx="8" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.8"/>
  <text x="470" y="35" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a6b3c">Zufallsvariable X</text>
  {/* Ebene 2 */}
  <rect x="150" y="85" width="200" height="46" rx="7" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.6"/>
  <text x="250" y="104" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">diskret</text>
  <text x="250" y="122" textAnchor="middle" fontSize="10.5" fill="#1a5c8c">Werte aufzählbar: 0, 1, 2, …</text>
  <rect x="590" y="85" width="200" height="46" rx="7" fill="#fff3e0" stroke="#e67e22" strokeWidth="1.6"/>
  <text x="690" y="104" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#a0521a">stetig</text>
  <text x="690" y="122" textAnchor="middle" fontSize="10.5" fill="#a0521a">jeder Wert möglich: 1; 4,325</text>
  {/* Blätter diskret */}
  <g fill="#f4f9ff" stroke="#2176AE" strokeWidth="1.2">
    <rect x="12" y="165" width="116" height="50" rx="6"/>
    <rect x="132" y="165" width="116" height="50" rx="6"/>
    <rect x="252" y="165" width="116" height="50" rx="6"/>
    <rect x="372" y="165" width="116" height="50" rx="6"/>
  </g>
  <g textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#1a5c8c">
    <text x="70" y="186">Allgemeiner Fall</text>
    <text x="190" y="186">Binomial</text>
    <text x="310" y="186">Hypergeometrisch</text>
    <text x="430" y="186">Poisson</text>
  </g>
  <g textAnchor="middle" fontSize="10" fill="#555">
    <text x="70" y="204">Wertetabelle</text>
    <text x="190" y="204">mit Zurücklegen</text>
    <text x="310" y="204">ohne Zurücklegen</text>
    <text x="430" y="204">Ereignisse/Zeitraum</text>
  </g>
  {/* Blätter stetig */}
  <g fill="#fffaf3" stroke="#e67e22" strokeWidth="1.2">
    <rect x="512" y="165" width="116" height="50" rx="6"/>
    <rect x="632" y="165" width="116" height="50" rx="6"/>
    <rect x="752" y="165" width="116" height="50" rx="6"/>
  </g>
  <g textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#a0521a">
    <text x="570" y="186">Gleichverteilung</text>
    <text x="690" y="186">Exponential</text>
    <text x="810" y="186">Normal</text>
  </g>
  <g textAnchor="middle" fontSize="10" fill="#555">
    <text x="570" y="204">{"Unter- & Obergrenze"}</text>
    <text x="690" y="204">Ø Dauer gegeben</text>
    <text x="810" y="204">E(X) und σ gegeben</text>
  </g>
  {/* Legende */}
  <line x1="12" y1="228" x2="868" y2="228" stroke="#ddd" strokeWidth="1"/>
  <text x="440" y="242" textAnchor="middle" fontSize="10.5" fill="#555">unterste Ebene = Verteilung + typisches Erkennungsmerkmal in der Aufgabe</text>
</svg>

### 4.3.1 - Diskret
- Eine Zufallsvariable ist **diskret**, wenn man ihre **Werte aufzählen** kann (z. B. $0, 1, 2, 3, \dots$)
- Typische Fragen: $P(X = 0)$, $P(X \leq 10)$

#### Fall 1 - Allgemeiner Fall
:::tip At a glance...
- **Verwendet wenn:** Allgemeiner Fall, kann immer verwendet werden (Wahrscheinlichkeiten stehen in einer Tabelle)
- **Bestimmbar sind:** Erwartungswert $E(X)$, Varianz $\sigma^2$, Standardabweichung $\sigma$
:::

| Formel | |
|---|---|
| Wahrscheinlichkeitsfunktion | $f(x_i) = P(X = x_i) = p_i$ |
| Verteilungsfunktion | $F(x) = P(X \leq x) = \sum\limits_{x_i \leq x} f(x_i)$ |
| Erwartungswert | $E(X) = \sum\limits_{i=1}^{n} x_i \cdot p_i$ |
| Varianz | $\sigma^2 = \sum\limits_{i=1}^{n} (x_i - E(X))^2 \cdot p_i = \sum\limits_{i=1}^{n} x_i^2 \cdot p_i - E(X)^2$ |
| Standardabweichung | $\sigma = \sqrt{\sigma^2}$ |

<details>
  <summary>Beispielaufgabe</summary>

Anzahl $X$ der Kunden, die pro Minute an eine Kasse kommen:

| $x_i$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $p_i$ | 0,1 | 0,3 | 0,4 | 0,2 |

- $E(X) = 0 \cdot 0{,}1 + 1 \cdot 0{,}3 + 2 \cdot 0{,}4 + 3 \cdot 0{,}2 = 1{,}7$
- $\sum x_i^2 \cdot p_i = 0 + 0{,}3 + 1{,}6 + 1{,}8 = 3{,}7$
- $\sigma^2 = 3{,}7 - 1{,}7^2 = 0{,}81 \quad\Rightarrow\quad \sigma = 0{,}9$
- $P(X \leq 1) = 0{,}1 + 0{,}3 = 0{,}4$

</details>

#### Fall 2 - Binomialverteilung
:::tip At a glance...
- **Verwendet wenn:** Arbeiten MIT Zurücklegen (Versuche unabhängig, nur 2 Ergebnisse, gleiche Erfolgswahrscheinlichkeit $p$)
- **Bestimmbar sind:** $P(X = k)$, $P(X \leq k)$, Erwartungswert, Varianz, Standardabweichung
:::

$$
P(X = k) = \binom{n}{k} \cdot p^k \cdot q^{n-k} \qquad \text{mit } q = 1 - p
$$

$$
E(X) = n \cdot p \qquad\qquad \sigma^2 = n \cdot p \cdot q
$$

<details>
  <summary>Beispielaufgabe</summary>

Eine Maschine produziert 10 % Ausschuss. Es werden 5 Teile **mit Zurücklegen** geprüft. Wie groß ist die Wahrscheinlichkeit für genau 2 defekte Teile?

- $n = 5$, $p = 0{,}1$, $q = 0{,}9$
- $P(X = 2) = \binom{5}{2} \cdot 0{,}1^2 \cdot 0{,}9^3 = 10 \cdot 0{,}01 \cdot 0{,}729 = 0{,}0729$
- $P(X \leq 1) = 0{,}9^5 + 5 \cdot 0{,}1 \cdot 0{,}9^4 = 0{,}5905 + 0{,}3281 = 0{,}9185$
- $E(X) = 5 \cdot 0{,}1 = 0{,}5 \qquad \sigma^2 = 5 \cdot 0{,}1 \cdot 0{,}9 = 0{,}45$

</details>

#### Fall 3 - Hypergeometrische Verteilung
:::tip At a glance...
- **Verwendet wenn:** Arbeiten OHNE Zurücklegen (Versuche **nicht** unabhängig)
- **Bestimmbar sind:** $P(X = m)$, Erwartungswert, Varianz, Standardabweichung
:::

$$
P(X = m) = \frac{\dbinom{M}{m} \cdot \dbinom{N - M}{n - m}}{\dbinom{N}{n}}
$$

$$
E(X) = n \cdot \frac{M}{N} \qquad\qquad \sigma^2 = n \cdot \frac{M}{N} \cdot \frac{N - M}{N} \cdot \frac{N - n}{N - 1}
$$

- $N$ = Elemente gesamt, $M$ = davon „Erfolge“, $n$ = Stichprobe, $m$ = gesuchte Erfolge in der Stichprobe

:::note
Ist die Stichprobe höchstens 5 % der Grundgesamtheit ($n \leq 0{,}05 \cdot N$), kann man stattdessen mit der **Binomialverteilung** rechnen (wichtig z. B. in der Qualitätskontrolle).
:::

<details>
  <summary>Beispielaufgabe</summary>

In einer Kiste liegen 10 Teile, davon 3 defekt. Es werden 4 Teile **ohne Zurücklegen** entnommen. Wie groß ist die Wahrscheinlichkeit für genau 1 defektes Teil?

- $N = 10$, $M = 3$, $n = 4$, $m = 1$
- $P(X = 1) = \dfrac{\binom{3}{1} \cdot \binom{7}{3}}{\binom{10}{4}} = \dfrac{3 \cdot 35}{210} = 0{,}5$
- $E(X) = 4 \cdot \frac{3}{10} = 1{,}2 \qquad \sigma^2 = 4 \cdot \frac{3}{10} \cdot \frac{7}{10} \cdot \frac{6}{9} = 0{,}56$

</details>

#### Fall 4 - Poisson-Verteilung
:::tip At a glance...
- **Verwendet wenn:** Ereignisse pro Zeitraum, nur der Durchschnitt $\lambda$ ist gegeben („Verteilung der seltenen Ereignisse“)
- **Bestimmbar sind:** $P(X = k)$, $P(X \leq k)$, Erwartungswert, Varianz, Standardabweichung
:::

$$
P(X = k) = \frac{\lambda^k}{k!} \cdot e^{-\lambda} \qquad \text{mit } \lambda = n \cdot p
$$

$$
E(X) = \sigma^2 = \lambda
$$

:::note
Faustregel: Für $n \geq 50$ und $p \leq 0{,}1$ kann die Binomialverteilung durch die Poissonverteilung angenähert werden.
:::

<details>
  <summary>Beispielaufgabe</summary>

In einem Callcenter kommen durchschnittlich 3 Anrufe pro Minute an. Wie groß ist die Wahrscheinlichkeit, dass in einer Minute genau 2 Anrufe eingehen?

- $\lambda = 3$
- $P(X = 2) = \dfrac{3^2}{2!} \cdot e^{-3} = 4{,}5 \cdot 0{,}0498 = 0{,}2240$
- $P(X = 0) = e^{-3} = 0{,}0498$
- $E(X) = \sigma^2 = 3 \quad\Rightarrow\quad \sigma = \sqrt{3} = 1{,}73$

</details>

### 4.3.2 - Stetig
- Eine Zufallsvariable ist **stetig**, wenn **jeder Wert** (in einem Intervall) möglich ist (z. B. $1$; $4{,}325$; …)
- Wahrscheinlichkeiten sind hier **Flächen** unter der Dichtefunktion $f(x)$:

$$
P(a \leq X \leq b) = \int_a^b f(x)\,dx \qquad\qquad F(x) = P(X \leq x) = \int_{-\infty}^{x} f(t)\,dt
$$

:::warning
Bei stetigen Zufallsvariablen gilt $P(X = a) = 0$. Daher ist es egal, ob $<$ oder $\leq$ verwendet wird.
:::

#### Fall 1 - Gleichverteilung
:::tip At a glance...
- **Verwendet wenn:** Wenn Unter- und Obergrenze gegeben ist (alle Werte dazwischen gleich wahrscheinlich, auch „Rechteckverteilung“)
- **Bestimmbar sind:** Wahrscheinlichkeit für ein Teilintervall, Erwartungswert, Varianz, Standardabweichung
:::

$$
P(x \leq X \leq x + \Delta x) = \frac{1}{b - a} \cdot \Delta x
$$

$$
E(X) = \frac{a + b}{2} \qquad\qquad \sigma^2 = \frac{(b - a)^2}{12}
$$

<details>
  <summary>Beispielaufgabe</summary>

Ein Bus kommt gleichverteilt zwischen 0 und 20 Minuten nach Ankunft an der Haltestelle. Wie groß ist die Wahrscheinlichkeit, zwischen 5 und 10 Minuten zu warten?

- $a = 0$, $b = 20$, $\Delta x = 10 - 5 = 5$
- $P(5 \leq X \leq 10) = \frac{1}{20} \cdot 5 = 0{,}25$
- $E(X) = \frac{0 + 20}{2} = 10 \qquad \sigma^2 = \frac{20^2}{12} = 33{,}33 \quad\Rightarrow\quad \sigma = 5{,}77$

</details>

#### Fall 2 - Exponentialverteilung
:::tip At a glance...
- **Verwendet wenn:** Keine Grenzen sondern eine durchschnittliche Dauer gegeben ist (Untergrenze theoretisch 0), „Wie lange dauert es bis zum nächsten …?“
- **Bestimmbar sind:** $P(X \leq x)$, $P(X > x)$, Erwartungswert, Varianz, Standardabweichung
:::

$$
\lambda = \frac{1}{\text{Ø Dauer}}
$$

$$
P(X \leq x) = 1 - e^{-\lambda x} \qquad\qquad P(X > x) = e^{-\lambda x}
$$

$$
E(X) = \frac{1}{\lambda} \qquad\qquad \sigma^2 = \frac{1}{\lambda^2}
$$

<details>
  <summary>Beispielaufgabe</summary>

Ein PC stürzt im Durchschnitt alle 5 Stunden ab. Mit welcher Wahrscheinlichkeit kann man mehr als 3 Stunden ununterbrochen arbeiten?

- $\lambda = \frac{1}{5} = 0{,}2$
- $P(X > 3) = e^{-0{,}2 \cdot 3} = e^{-0{,}6} = 0{,}5488$
- $E(X) = \frac{1}{0{,}2} = 5 \qquad \sigma^2 = \frac{1}{0{,}2^2} = 25$

</details>

#### Fall 3 - Normalverteilung
:::tip At a glance...
- **Verwendet wenn:** Standardabweichung oder Varianz mit jew. Erwartungswert gegeben
- **Bestimmbar sind:** $P(X \leq a)$, $P(X > a)$, $P(a \leq X \leq b)$ über die Tabelle der Standard-Normalverteilung $\Phi$
:::

- Glockenkurve, symmetrisch um $E(X)$, Wendepunkte bei $E(X) \pm \sigma$
- Jede Normalverteilung wird zuerst **standardisiert** (dann $E(X) = 0$, $\sigma = 1$) und anschließend in der Tabelle nachgeschlagen:

$$
Z = \frac{X - E(X)}{\sigma}
$$

$$
P(X \leq a) = \Phi\left(\frac{a - E(X)}{\sigma}\right) \qquad\qquad P(X > a) = 1 - P(X \leq a)
$$

$$
P(a \leq X \leq b) = P(X \leq b) - P(X \leq a) \qquad\qquad \Phi(-z) = 1 - \Phi(z)
$$

<details>
  <summary>Beispielaufgabe</summary>

Die Füllmenge einer Packung ist normalverteilt mit $E(X) = 500$ g und $\sigma = 10$ g.

- $P(X \leq 515) = \Phi\left(\frac{515 - 500}{10}\right) = \Phi(1{,}5) = 0{,}9332$
- $P(490 \leq X \leq 510) = \Phi(1) - \Phi(-1) = 2 \cdot 0{,}8413 - 1 = 0{,}6826$
- $P(X > 520) = 1 - \Phi(2) = 1 - 0{,}9772 = 0{,}0228$

</details>
