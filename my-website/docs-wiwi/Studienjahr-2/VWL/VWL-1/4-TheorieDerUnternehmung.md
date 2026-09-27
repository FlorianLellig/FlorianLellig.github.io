# 4. Theorie der Unternehmung
:::note
Im Kapitel 3 haben wir uns die Theorie des Haushalts angeschaut, nun wird die andere Seite, die Seite der Unternehmen, näher beleuchtet.
:::

## 4.1 - Unternehmensziele und Determinanten des Angebots
- Zentrales Ziel eines Unternehmens in der Marktwirtschaft ist weiterhin die **Gewinnmaximierung**
  - Bei öffentlichen (oder karitativen) Unternehmen ebenfalls auch Ziele wie optimale Versorgung


- Grundsätzlich gilt dabei, ein Angebot $A_x$ eines solchen Unternehmens ist unter anderem Abhängig von:
  - Preis des Produktes
  - Kosten (Preise der Produktionsfaktoren)
  - Preise anderer vom Unternehmen hergestellter Produkte
  - Stand der Produktionstechnik (technischer Fortschritt)
  - Kapazitätsrestriktionen
  - Erwartungen (z.B. bzgl. Preisänderungen)
  - Ziele des Unternehmens (z.B. Gewinnmaximierung)
  - Konkurrenz- und Wettbewerbssituation (Marktform)
  - Nachfragegegebenheiten (Substitutionsmöglichkeiten, nationaler oder globaler Markt)
- Um formal zu vereinfachen **beschränkt man die Abhängigkeit des Angebots $A_x$ auf den Preis des Gutes $p_x$**. Es gilt also:

$$
A_x = f(p_x)
$$

<svg viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"520px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-af" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <marker id="arr-af-grey" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#555"/>
    </marker>
  </defs>
  <line x1="70" y1="300" x2="490" y2="300" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-af)"/>
  <line x1="70" y1="300" x2="70" y2="20" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-af)"/>
  <text x="58" y="34" textAnchor="end" fontSize="13" fill="#333">P<tspan dy="4" fontSize="10">x</tspan></text>
  <text x="496" y="318" textAnchor="middle" fontSize="13" fill="#333">q<tspan dy="4" fontSize="10">x</tspan></text>
  <text x="62" y="314" textAnchor="end" fontSize="11" fill="#555">0</text>
  <line x1="70" y1="250" x2="430" y2="70" stroke="#2176AE" strokeWidth="2.2"/>
  <circle cx="70" cy="250" r="3.5" fill="#2176AE"/>
  <text x="438" y="72" fontSize="13" fontWeight="bold" fill="#2176AE">A</text>
  <line x1="70" y1="190" x2="370" y2="40" stroke="#e67e22" strokeWidth="2.2"/>
  <circle cx="70" cy="190" r="3.5" fill="#e67e22"/>
  <text x="378" y="42" fontSize="13" fontWeight="bold" fill="#e67e22">A′</text>
  <line x1="250" y1="155" x2="250" y2="107" stroke="#555" strokeWidth="1.4" markerEnd="url(#arr-af-grey)"/>
  <text x="258" y="136" fontSize="10.5" fontStyle="italic" fill="#555">Verschiebung</text>
</svg>

### 4.1.1 - Vorgehensweise
Die Angebotsfunktion setzt sich aus verschiedenen Elementen zusammen, die dabei helfen zu **verstehen, woher diese konkrete Angebotskurve $A_x = f(p_x)$ überhaupt herkommt.** Sie setzt sich (laut unseren Unterlagen) aus drei Komponenten zusammen:
1. **Produktionstheorie**
   - _Was kann man mit welchen Produktionsfaktoren in welcher Menge produziert werden?_
   - siehe 4.2 - Produktionsfunktion
2. **Kostentheorie**
   - _Wie kann ausgehend von den Produktionsgegebenheiten möglichst kostengünstig produziert werden?_
   - siehe 4.3 - Kostenfunktion
3. **Gewinnmaximierung**
   - _Welche Menge soll zu welchem Preis angeboten werden, um das Unternehmensziel (i.d.R. Gewinnmaximierung) zu erreichen?_
   - siehe 4.4 - Erlös- und Gewinnanalyse

:::warning Hinweis zur Kostentheorie
Die Kostentheorie besagt, dass man versucht _auf Teufel komm raus_ die Kosten so weit es geht zu reduzieren - dies bedeutet ebenfalls, dass man Angebote ableht, die höhere Kosten haben, selbst wenn sie trotzdem Gewinn abwerfen.
- Beispiel:
  - Ein Unternehmen verkauft Produkte im Wert von 10.000€ pro Stück (davon 6000€ Kosten)
  - Die Firma bekommt einen Zusatzauftrag, der aber aufgrund der Mehrbeschäftigung die Kosten auf 8000€ pro Stück steigert
    - Laut Kostentheorie sollte dieser Auftrag abgeleht werden! _Macht das Sinn? Will man das?_
:::

## 4.2 - Produktionsfunktion
>Beantwortet die Frage: _Was kann man mit welchen Produktionsfaktoren in welcher Menge produziert werden?_

Allgemein gilt:
$$
q_x = f(v_1, v_2, v_3, ..., v_n)
$$
Die Produktionsfunktion sagt damit aus, dass die Outputmenge $q_x$ abhängig von den eingesetzten Mengen der Produktionsfaktoren ist.

**Anpassung an Veränderung**
Angenommen, ein Unternehmen produziert gerade optimal (Minimalkostenkombination). Dann wird das Produkt plötzlich beliebt, die Nachfrage steigt und man möchte mehr produzieren. Dafür gibt es Zwei Wege:

### 4.2.1 - Proportionale Faktorvariation
- Man vervielfacht alles im gleichen Verhältnis
- Beispiel:
  - Die Bäckerei mit 2 Bäckern und 1 Ofen stellt auf 4 Bäcker und 2 Ofen um.

:::danger Das Problem der Kurzfristigkeit
Auch wenn die **proportionale Faktorvariation** meist sinnvolle scheint, ist diese oft **kurzfristig nicht möglich**
:::


### 4.2.2 - Partielle Faktorvariation
- Man erhöht nur einen Faktor und lässt die anderen gleich
- Beispiel:
  - Die Bäckerei mit 2 Bäckern und 1 Ofen stellt auf 4 Bäcker um - die Anzahl an Öfen bleibt gleich

#### Die S-Kurve - Was passiert wenn man nur Arbeit erhöht?

<svg viewBox="0 0 560 370" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"560px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-sk" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <marker id="arr-sk-grey" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#555"/>
    </marker>
  </defs>
  <text x="280" y="20" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">Produktionsfunktion bei partieller Faktorvariation</text>
  <text x="280" y="37" textAnchor="middle" fontSize="10.5" fill="#555">(= S-förmige bzw. ertragsgesetzliche Produktionsfunktion)</text>
  <line x1="70" y1="340" x2="520" y2="340" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-sk)"/>
  <line x1="70" y1="340" x2="70" y2="58" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-sk)"/>
  <text x="58" y="70" textAnchor="end" fontSize="13" fill="#333">q<tspan dy="4" fontSize="10">x</tspan></text>
  <text x="522" y="360" textAnchor="end" fontSize="12" fill="#333">PF Arbeit</text>
  <path d="M 70 340 C 180 325, 240 280, 290 210 C 340 140, 380 107, 430 105" fill="none" stroke="#2176AE" strokeWidth="2.4"/>
  <path d="M 430 105 C 460 104, 480 110, 500 128" fill="none" stroke="#2176AE" strokeWidth="2" strokeDasharray="5,4"/>
  <text x="165" y="205" textAnchor="middle" fontSize="11.5" fill="#333">steigender</text>
  <text x="165" y="221" textAnchor="middle" fontSize="11.5" fill="#333">Grenzertrag</text>
  <line x1="195" y1="231" x2="232" y2="259" stroke="#555" strokeWidth="1.4" markerEnd="url(#arr-sk-grey)"/>
  <text x="300" y="70" textAnchor="middle" fontSize="11.5" fill="#333">fallender</text>
  <text x="300" y="86" textAnchor="middle" fontSize="11.5" fill="#333">Grenzertrag</text>
  <line x1="304" y1="94" x2="315" y2="162" stroke="#555" strokeWidth="1.4" markerEnd="url(#arr-sk-grey)"/>
  <text x="485" y="162" textAnchor="middle" fontSize="11.5" fill="#333">evtl. sogar</text>
  <text x="485" y="178" textAnchor="middle" fontSize="11.5" fill="#333">negativer</text>
  <text x="485" y="194" textAnchor="middle" fontSize="11.5" fill="#333">Grenzertrag</text>
</svg>

- **Grenzertrag** = zusätzlicher Output durch **eine weitere Einheit** Arbeit, also die **Steigung** der Kurve: $\frac{\Delta q_x}{\Delta v_{\text{Arbeit}}}$
- **Phase 1 – steigender Grenzertrag** (Kurve wird steiler)
  - Jeder weitere Arbeiter bringt **mehr** zusätzlichen Output als der vorherige
  - Grund: Arbeitsteilung/Spezialisierung, der fixe Faktor (Ofen) ist noch nicht ausgelastet
  - Bsp.: Der 2. Bäcker bereitet Teig vor, während der 1. backt
- **Wendepunkt** – hier ist der Grenzertrag **maximal**
- **Phase 2 – fallender Grenzertrag** (Kurve steigt, wird aber flacher)
  - Output steigt weiter, aber jeder weitere Arbeiter bringt **weniger** zusätzlich
  - Grund: Der fixe Faktor wird zum **Engpass** – 1 Ofen reicht nicht für beliebig viele Bäcker
  - Das ist das **Ertragsgesetz** („Gesetz vom abnehmenden Grenzertrag“)
- **Maximum** – Grenzertrag $= 0$, ein weiterer Arbeiter bringt gar nichts mehr
- **Phase 3 – negativer Grenzertrag** (Kurve fällt, gestrichelt)
  - Zusätzliche Arbeiter **senken** den Output – man steht sich gegenseitig im Weg
  - Gestrichelt, weil kein rational handelndes Unternehmen hier produzieren würde

:::note Merke
Die S-Form entsteht nur, weil **ein Faktor erhöht wird, während die anderen fix bleiben** (partielle Faktorvariation). Bei proportionaler Faktorvariation (mehr Bäcker **und** mehr Öfen) tritt der Engpass so nicht auf.
:::


## 4.3 - Kostenfunktion
>Beantwortet die Frage: _Wie kann ausgehend von den Produktionsgegebenheiten möglichst kostengünstig produziert werden?_

### 4.3.1 - Grundlagen
- Die Produktionsfunktion ist der **Ausgangspunkt** für die Kostenfunktion:
$$
K = f(q_x)
$$
- Dazu werden die **Einsatzmengen der Produktionsfaktoren mit ihren Faktorpreisen bewertet**
- Die Kostenfunktion zeigt damit die **Abhängigkeit der Kosten vom Output**
- Die Gesamtkosten $K$ setzen sich zusammen aus:
  - **Fixkosten $K_f$** – unabhängig von der Produktionsmenge (z.B. Ausrüstung, Miete)
  - **Variable Kosten $K_v$** – steigen mit der Produktionsmenge (z.B. Löhne)
  - $K = K_f + K_v$

:::info Beispiel: Papierfliegerproduktion
- $q_x$: hergestellte Menge an Papierfliegern in 10 Minuten
- $v_1$: Arbeitskräfte – **variabel**, Lohn 5 € pro Arbeitskraft
- $v_2$: Ausrüstung (1 Schere, 1 Kleber, 1 Stift rot, 1 Stift blau usw.) – **fix**, hat 10 € gekostet und ist kurzfristig nicht veränderbar
- Materialkosten für das Papier sind unbedeutend und werden nicht berücksichtigt

**Wertetabelle bei partieller Faktorvariation**

| $v_1$ (Arbeitskräfte) | $v_2$ (Ausrüstung) | $q_x$ (Output) | Zusatzoutput | $K_f$ | $K_v$ | $K$ |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| 0 | 1 | 0 | – | 10 | 0 | 10 |
| 1 | 1 | 1 | +1 | 10 | 5 | 15 |
| 2 | 1 | 3 | +2 | 10 | 10 | 20 |
| 3 | 1 | 6 | +3 | 10 | 15 | 25 |
| 4 | 1 | 8 | +2 | 10 | 20 | 30 |
| 5 | 1 | 10 | +2 | 10 | 25 | 35 |
| 6 | 1 | 11 | +1 | 10 | 30 | 40 |
| 7 | 1 | 12 | +1 | 10 | 35 | 45 |
| 8 | 1 | 12 | 0 | 10 | 40 | 50 |

Die Spalte **Zusatzoutput** (= Grenzertrag) ist ergänzt: Hier sieht man die S-Kurve aus 4.2.2 wieder – erst steigend (+1, +2, +3), dann fallend, am Ende $0$.

<svg viewBox="0 0 580 340" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"580px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-kf" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
  </defs>
  <text x="290" y="18" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">Kostenverlauf der Papierfliegerproduktion</text>
  <line x1="70" y1="300" x2="500" y2="300" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-kf)"/>
  <line x1="70" y1="300" x2="70" y2="30" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-kf)"/>
  <text x="58" y="42" textAnchor="end" fontSize="13" fill="#333">K</text>
  <text x="506" y="318" textAnchor="middle" fontSize="13" fill="#333">q<tspan dy="4" fontSize="10">x</tspan></text>
  <g fontSize="10.5" fill="#555" textAnchor="end">
    <text x="62" y="254">10</text>
    <text x="62" y="204">20</text>
    <text x="62" y="154">30</text>
    <text x="62" y="104">40</text>
    <text x="62" y="54">50</text>
  </g>
  <g stroke="#333" strokeWidth="1">
    <line x1="66" y1="250" x2="70" y2="250"/>
    <line x1="66" y1="200" x2="70" y2="200"/>
    <line x1="66" y1="150" x2="70" y2="150"/>
    <line x1="66" y1="100" x2="70" y2="100"/>
    <line x1="66" y1="50" x2="70" y2="50"/>
    <line x1="130" y1="300" x2="130" y2="304"/>
    <line x1="190" y1="300" x2="190" y2="304"/>
    <line x1="250" y1="300" x2="250" y2="304"/>
    <line x1="310" y1="300" x2="310" y2="304"/>
    <line x1="370" y1="300" x2="370" y2="304"/>
    <line x1="430" y1="300" x2="430" y2="304"/>
  </g>
  <g fontSize="10.5" fill="#555" textAnchor="middle">
    <text x="130" y="317">2</text>
    <text x="190" y="317">4</text>
    <text x="250" y="317">6</text>
    <text x="310" y="317">8</text>
    <text x="370" y="317">10</text>
    <text x="430" y="317">12</text>
  </g>
  <line x1="70" y1="250" x2="470" y2="250" stroke="#e67e22" strokeWidth="1.8" strokeDasharray="6,4"/>
  <text x="476" y="254" fontSize="11.5" fontWeight="bold" fill="#e67e22">K<tspan dy="4" fontSize="9">f</tspan><tspan dy="-4"> = 10</tspan></text>
  <polyline points="70,250 100,225 160,200 250,175 310,150 370,125 400,100 430,75 430,50" fill="none" stroke="#2176AE" strokeWidth="2.2"/>
  <g fill="#2176AE">
    <circle cx="70" cy="250" r="3.5"/>
    <circle cx="100" cy="225" r="3.5"/>
    <circle cx="160" cy="200" r="3.5"/>
    <circle cx="250" cy="175" r="3.5"/>
    <circle cx="310" cy="150" r="3.5"/>
    <circle cx="370" cy="125" r="3.5"/>
    <circle cx="400" cy="100" r="3.5"/>
    <circle cx="430" cy="75" r="3.5"/>
    <circle cx="430" cy="50" r="3.5"/>
  </g>
  <text x="440" y="54" fontSize="13" fontWeight="bold" fill="#2176AE">K</text>
  <text x="80" y="158" fontSize="10.5" fontStyle="italic" fill="#555">flacher Anstieg:</text>
  <text x="80" y="172" fontSize="10.5" fontStyle="italic" fill="#555">steigender Grenzertrag</text>
  <text x="444" y="110" fontSize="10.5" fontStyle="italic" fill="#555">steiler Anstieg:</text>
  <text x="444" y="124" fontSize="10.5" fontStyle="italic" fill="#555">fallender Grenzertrag</text>
</svg>

- Zu Beginn kostet jeder zusätzliche Papierflieger **wenig** (Arbeit ist sehr produktiv), am Ende **viel** – die 8. Arbeitskraft kostet 5 €, bringt aber keinen einzigen Flieger mehr
:::

### 4.3.2 - Verlauf der Kostenfunktion
- **Proportionale Faktorvariation** (spielt nur bei sehr langfristiger Betrachtung eine Rolle)
  - Im einfachsten Fall **linearer** Kostenverlauf
  - Ausgehend von der Minimalkostenkombination: doppelter Output → doppelte Einsatzmengen der Produktionsfaktoren → **doppelte Kosten**
- **Partielle Faktorvariation** (realistischer auf kurze und mittlere Sicht)
  - Produktionsfunktion verläuft S-förmig → Kostenfunktion hat die Form eines **umgekippten S** (siehe Grafik oben)
  - Umgekippt, weil die Achsen getauscht sind: Faktoreinsatz steht bei der Produktionsfunktion auf der x-Achse, bei der Kostenfunktion (bewertet als Kosten) auf der y-Achse
  - Lässt sich über ein **Polynom dritten Grades** darstellen, z.B. $K(q_x) = 12q_x - 2q_x^2 + \frac{q_x^3}{3} + 100$
  - Dabei sind $100$ die Fixkosten $K_f$, der Rest sind die variablen Kosten $K_v$

:::tip Betriebliche Praxis
Exakte Kostenfunktionen liegen in der Praxis selten vor. Mit **Erfahrungswerten** aus der Vergangenheit und **ingenieurwissenschaftlichen Schätzungen** lassen sich die Kostenverläufe aber in aller Regel gut approximieren.
:::

### 4.3.3 - Wichtige Kostenbegriffe

| **Bezeichnung** | **Formel** | **Erläuterung** |
|---|---|---|
| Grenzkosten | $\begin{gathered} K' = \dfrac{\Delta K}{\Delta q_x} \\[4pt] \text{bzw. } K' = \dfrac{dK}{dq_x} \end{gathered}$ | Grenzkosten sind die Kosten, die für eine zusätzliche Outputeinheit anfallen (_Steigung_ von $K$) |
| fixe Kosten | $K_f$ | Kosten, die unabhängig sind von der produzierten Menge (z.B. Miete) |
| variable Kosten | $K_v$ | Kosten, die abhängig sind von der produzierten Menge (z.B. Materialkosten) |
| Stückkosten | $k = \frac{K}{q_x}$ | Das Minimum der Stückkosten ist das Betriebsoptimum und bestimmt somit auch die langfristige Preisuntergrenze (Erläuterung siehe 4.3.4) |
| fixe Stückkosten | $k_f = \frac{K_f}{q_x}$ | Die fixen Stückkosten fallen mit zunehmendem Output: _Fixkostendegression_ (Je mehr Output, desto mehr teilt sich die Miete auf) |
| variable Stückkosten | $k_v = \frac{K_v}{q_x}$ | Das Minimum der variablen Stückkosten ist das Betriebsminimum und bestimmt somit auch die kurzfristige Preisuntergrenze (Erläuterung siehe 4.3.4) |

### 4.3.4 - Kurz-/Langfristige Preisuntergrenze

| | **Langfristige Preisuntergrenze** | **Kurzfristige Preisuntergrenze** |
|---|---|---|
| **Bedeutung** | Preis pro Stück, der _langfristig_ nicht unterschritten werden darf | Preis, ab dem es noch Sinn macht zu produzieren, obwohl nicht alle Kosten gedeckt sind |
| **Liegt bei** | Minimum der Stückkosten $k$ → **Betriebsoptimum** (E) | Minimum der variablen Stückkosten $k_v$ → **Betriebsminimum** (D) |
| **Gedeckt werden** | alle Stückkosten $k$ (100 %) | nur die variablen Stückkosten $k_v$ – aber jeder Euro darüber hilft, die Fixkosten zu decken |

<svg viewBox="0 0 610 400" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"610px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-pug" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <marker id="arr-pug-grey" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#555"/>
    </marker>
  </defs>
  <g transform="translate(40,0)">
    <line x1="70" y1="360" x2="560" y2="360" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-pug)"/>
    <line x1="70" y1="360" x2="70" y2="30" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-pug)"/>
    <text x="80" y="40" fontSize="13" fill="#333">K′, k, k<tspan dy="4" fontSize="10">v</tspan></text>
    <text x="560" y="380" fontSize="13" fill="#333">q<tspan dy="4" fontSize="10">x</tspan></text>
    <line x1="70" y1="170" x2="410" y2="170" stroke="#999" strokeWidth="1.2" strokeDasharray="5,4"/>
    <line x1="70" y1="235" x2="330" y2="235" stroke="#999" strokeWidth="1.2" strokeDasharray="5,4"/>
    <text x="62" y="174" textAnchor="end" fontSize="10.5" fontWeight="bold" fill="#2176AE">langfr. PUG</text>
    <text x="62" y="239" textAnchor="end" fontSize="10.5" fontWeight="bold" fill="#2a9d6e">kurzfr. PUG</text>
    <path d="M 200 90 C 250 150, 330 170, 410 170 C 460 170, 500 150, 540 125" fill="none" stroke="#2176AE" strokeWidth="2.2"/>
    <path d="M 190 165 C 240 205, 280 235, 330 235 C 380 235, 440 200, 510 160" fill="none" stroke="#2a9d6e" strokeWidth="2.2"/>
    <path d="M 150 170 C 175 260, 210 290, 250 290 C 285 290, 310 262, 330 235 C 350 208, 385 200, 410 170 C 430 146, 445 90, 455 40" fill="none" stroke="#c0392b" strokeWidth="2.2"/>
    <text x="462" y="44" fontSize="13" fontWeight="bold" fill="#c0392b">K′</text>
    <text x="546" y="128" fontSize="13" fontWeight="bold" fill="#2176AE">k</text>
    <text x="516" y="163" fontSize="13" fontWeight="bold" fill="#2a9d6e">k<tspan dy="4" fontSize="10">v</tspan></text>
    <circle cx="250" cy="290" r="4.5" fill="#333"/>
    <circle cx="330" cy="235" r="4.5" fill="#333"/>
    <circle cx="410" cy="170" r="4.5" fill="#333"/>
    <text x="238" y="282" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">C</text>
    <text x="322" y="224" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">D</text>
    <text x="402" y="159" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">E</text>
    <line x1="350" y1="306" x2="333" y2="245" stroke="#555" strokeWidth="1.4" markerEnd="url(#arr-pug-grey)"/>
    <text x="360" y="320" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Betriebsminimum</text>
    <text x="360" y="335" textAnchor="middle" fontSize="10.5" fill="#555">nur variable Kosten gedeckt</text>
    <line x1="460" y1="238" x2="416" y2="179" stroke="#555" strokeWidth="1.4" markerEnd="url(#arr-pug-grey)"/>
    <text x="475" y="254" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Betriebsoptimum</text>
    <text x="475" y="269" textAnchor="middle" fontSize="10.5" fill="#555">alle Kosten gedeckt</text>
  </g>
</svg>

- Die Grenzkosten $K'$ schneiden $k_v$ und $k$ jeweils **in deren Minimum** (D bzw. E). Punkt C ist das Minimum der Grenzkosten selbst.
- **Preis über E:** Gewinn
- **Preis zwischen D und E:** Verlust – trotzdem weiter produzieren, da die Fixkosten ohnehin anfallen und so zumindest teilweise gedeckt werden
- **Preis unter D:** Produktion einstellen, da nicht einmal die variablen Kosten gedeckt sind

### 4.3.5 - Exkurs: Lineare Kostenfunktion
- Bisher: S-förmige Produktionsfunktion → jedes weitere Stück wird **teurer**
- Jetzt der Gegenfall: **Jedes Stück kostet gleich viel**
  - Passt zur proportionalen Faktorvariation (4.2.1): man vervielfacht einfach alles
  - In der Praxis gar nicht so selten, z.B. Massenfertigung am Fließband

$$
K(q) = K_f + c \cdot q
$$

- $K_f$ = Fixkosten
- $c$ = variable Kosten pro Stück (immer gleich)

Daraus folgt:

| Größe | Formel | Bedeutung |
|---|---|---|
| Grenzkosten | $K' = c$ | Jedes weitere Stück kostet $c$ |
| variable Stückkosten | $k_v = \frac{K_v}{q} = c$ | Durchschnitt = jedes einzelne Stück, weil alle gleich teuer sind |
| Stückkosten | $k = \frac{K_f}{q} + c$ | Sinkt immer weiter (Fixkostendegression) |

:::tip Was bedeutet das?
- **Variable Stückkosten = Grenzkosten:** Wenn jedes Stück gleich viel kostet, ist das nächste Stück genau so teuer wie der Durchschnitt.
- **Das Minimum von $k$ liegt ganz rechts** (an der Kapazitätsgrenze): Die Fixkosten verteilen sich auf immer mehr Stücke, und nichts wirkt dagegen – es gibt kein steigendes $K'$ wie bei der S-Kurve.
:::


## 4.4 - Erlös- und Gewinnanalyse
>Beantwortet die Frage: _Welche Menge soll zu welchem Preis angeboten werden, um das Unternehmensziel (i.d.R. Gewinnmaximierung) zu erreichen?_

:::warning Kostenminimierung ungleich Gewinnmaximierung
- Aus der Kostenfunktion (Kapitel 4.3) ist bereits **Betriebsoptimum** bekannt
  - Punkt, in dem die Stückkosten am niedrigsten sind
- **I.d.R. ist es nicht das Ziel, das Betriebsoptimum zu erreichen**
  - Das Ziel ist der größte Gewinn, und der liegt meist wo anders

$$
\begin{aligned}
\text{Gewinn} &= \text{Erlös} - \text{Kosten} \\
G(q) &= U(q) - K(q)
\end{aligned}
$$
:::

- Solange ein **zusätzliches Stück mehr einbringt, als es Kostet** (Steigung von Erlös $U$ größer als Steigung der Kosten $K$) **steigt der Gewinn**
  - Weiterproduktion macht Sinn
- Sobald ein **zusätzliches Stück mehr kostet, als es einbringt** (Steigung von Erlös $U$ kleiner als Steigung der Kosten $K$)
- Der Beste Punkt ist also dort, wo sich beides Ausgleicht: die **Steigung von Erlös $U$ ist gleich der Steigung der Kosten $K$**

:::tip Gewinn = Abstand zwischen U und K
Zeichnet man Erlös $U$ und Kosten $K$ in ein Diagramm, ist der Gewinn bei jeder Menge einfach der **senkrechte Abstand** zwischen den beiden Kurven ($U - K$). Gesucht ist die Menge, bei der dieser Abstand **am größten** ist.

<svg viewBox="0 0 775 300" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"775px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-gw" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <marker id="arr-gw-g" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto-start-reverse">
      <polygon points="0 0, 7 2.5, 0 5" fill="#1a6644"/>
    </marker>
    <marker id="arr-gw-r" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto-start-reverse">
      <polygon points="0 0, 7 2.5, 0 5" fill="#c0392b"/>
    </marker>
  </defs>

  {/* Links: Gesamtgrößen */}
  <text x="188" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Gesamtgrößen: U und K</text>
  <line x1="50" y1="260" x2="345" y2="260" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-gw)"/>
  <line x1="50" y1="260" x2="50" y2="30" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-gw)"/>
  <text x="58" y="40" fontSize="12" fill="#333">U, K</text>
  <text x="348" y="276" fontSize="12" fill="#333">q<tspan dy="4" fontSize="9">x</tspan></text>
  <line x1="50" y1="260" x2="314" y2="62" stroke="#2176AE" strokeWidth="2.2"/>
  <path d="M 50 245 C 138 135, 226 218.6, 314 69.9" fill="none" stroke="#c0392b" strokeWidth="2.2"/>
  <text x="320" y="60" fontSize="13" fontWeight="bold" fill="#2176AE">U</text>
  <text x="320" y="80" fontSize="13" fontWeight="bold" fill="#c0392b">K</text>
  <line x1="85" y1="234" x2="85" y2="260" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <line x1="85" y1="213" x2="85" y2="231" stroke="#c0392b" strokeWidth="1.6" markerStart="url(#arr-gw-r)" markerEnd="url(#arr-gw-r)"/>
  <line x1="255" y1="140" x2="255" y2="260" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <line x1="255" y1="109" x2="255" y2="137" stroke="#1a6644" strokeWidth="1.8" markerStart="url(#arr-gw-g)" markerEnd="url(#arr-gw-g)"/>
  <text x="85" y="276" textAnchor="middle" fontSize="12" fill="#333">q<tspan dy="3" fontSize="9">1</tspan></text>
  <text x="85" y="291" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#c0392b">G min</text>
  <text x="255" y="276" textAnchor="middle" fontSize="12" fill="#333">q*</text>
  <text x="255" y="291" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1a6644">G max</text>

  {/* Rechts: Ableitungen */}
  <text x="578" y="18" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Ableitungen: U′ und K′</text>
  <line x1="440" y1="260" x2="735" y2="260" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-gw)"/>
  <line x1="440" y1="260" x2="440" y2="30" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-gw)"/>
  <text x="448" y="40" fontSize="12" fill="#333">U′, K′</text>
  <text x="738" y="276" fontSize="12" fill="#333">q<tspan dy="4" fontSize="9">x</tspan></text>
  <line x1="440" y1="179" x2="716" y2="179" stroke="#2176AE" strokeWidth="2.2"/>
  <path d="M 440 125 Q 578 373.4 716 50.5" fill="none" stroke="#c0392b" strokeWidth="2.2"/>
  <text x="722" y="183" fontSize="12" fontWeight="bold" fill="#2176AE">U′ = p</text>
  <text x="722" y="54" fontSize="13" fontWeight="bold" fill="#c0392b">K′</text>
  <line x1="475" y1="179" x2="475" y2="260" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <line x1="645" y1="179" x2="645" y2="260" stroke="#999" strokeWidth="1.2" strokeDasharray="4,3"/>
  <circle cx="475" cy="179" r="4.5" fill="#c0392b"/>
  <circle cx="645" cy="179" r="4.5" fill="#1a6644"/>
  <text x="475" y="276" textAnchor="middle" fontSize="12" fill="#333">q<tspan dy="3" fontSize="9">1</tspan></text>
  <text x="475" y="291" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#c0392b">K′ fällt</text>
  <text x="645" y="276" textAnchor="middle" fontSize="12" fill="#333">q*</text>
  <text x="645" y="291" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#1a6644">K′ steigt</text>
</svg>

Links sieht man den Abstand, rechts die Steigungen: $U' = K'$ gilt bei $q_1$ **und** $q^*$ – maximal ist der Gewinn aber nur bei $q^*$, wo $K'$ steigt.

Die **Steigung** einer Kurve sagt, um wie viel sie wächst, wenn man ein Stück mehr produziert:
- Steigung von $U$ = was das nächste Stück zusätzlich **einbringt** (bei vollkommener Konkurrenz = Preis)
- Steigung von $K$ = was das nächste Stück zusätzlich **kostet** (Grenzkosten)

Daraus folgt:
- **$U$ steigt steiler als $K$:** Der Abstand wird größer → mehr produzieren lohnt sich
- **$K$ steigt steiler als $U$:** Der Abstand wird kleiner → mehr produzieren schadet
- **Beide gleich steil:** Der Abstand wächst nicht mehr, schrumpft aber auch noch nicht → genau hier ist er **am größten** ($q^*$)
:::

:::warning U′ = K′ allein reicht nicht
Da $K'$ U-förmig ist, kann $U' = K'$ **zweimal** gelten. Ein Gewinnmaximum liegt nur vor, wenn $K'$ dort **steigt** (sonst ist es das Gewinnminimum).

Prüfen lässt sich das mit der **zweiten Ableitung des Gewinns**: Ist $G''(q) < 0$, liegt ein **Maximum** vor (bei $G''(q) > 0$ ein Minimum).

Ob sich die Produktion überhaupt lohnt, entscheidet zusätzlich die Preisuntergrenze (siehe 4.3.4).
:::

### 4.4.1 - Vollkommene Konkurrenz: Preis = Grenzkosten
- Bei vollkommener Konkurrenz: sehr viele kleine Anbieter
  -  Keiner kann den Preis beeinflussen
- Beispiel:
  - Ein einzelner Weizenbauer kann nicht sagen „mein Weizen kostet jetzt mehr“, dann kauft einfach niemand bei ihm. Er ist Preisnehmer: Er nimmt den Marktpreis als gegeben und entscheidet nur über seine Menge.
- Das bedeutet: **Jedes zusätzliche Stück bringt genau den Marktpreis ein**
  - $U(q) = p \cdot q$
  - $U'(q) = p$ (Grenzerlös = Preis)
- Es gilt also:
  - **Gewinnmaximum: $p = K'(q)$**


### 4.4.2 - Beispiel

Ein Weizenbauer verkauft zum Marktpreis $p = 30$. Seine Kosten:

$$
K(q) = q^3 - 6q^2 + 15q + 20
$$

**1. Grenzkosten bilden**

$$
K'(q) = 3q^2 - 12q + 15
$$

**2. Bedingung $p = K'(q)$ aufstellen und lösen**

$$
\begin{aligned}
30 &= 3q^2 - 12q + 15 \\
0 &= 3q^2 - 12q - 15 \quad \big|\ :3 \\
0 &= q^2 - 4q - 5 \\
q &= 2 \pm \sqrt{4 + 5} = 2 \pm 3
\end{aligned}
$$

→ $q = 5$ (die zweite Lösung $q = -1$ entfällt, negative Mengen gibt es nicht)

**3. Prüfen, ob es ein Maximum ist**

$$
G''(q) = -K''(q) = -(6q - 12) \quad\Rightarrow\quad G''(5) = -18 < 0 \;\checkmark
$$

**4. Gewinn berechnen**

$$
\begin{aligned}
U(5) &= 30 \cdot 5 = 150 \\
K(5) &= 125 - 150 + 75 + 20 = 70 \\
G(5) &= 150 - 70 = \mathbf{80}
\end{aligned}
$$

**Probe:** Eine Einheit mehr oder weniger bringt weniger Gewinn:

| $q$ | 4 | **5** | 6 |
|---|:---:|:---:|:---:|
| $G(q)$ | 72 | **80** | 70 |

## 4.5 - Finales Aufstellen der Angebotsfunktion
:::tip
- Das Tolle ist: Wir müssen unsere Angebotsfunktion garnicht neu aufstellen, wir haben sie bereits vorliegen.
- **Die Angebotsfunktion ist nämlich einfach die Grenzkostenfunktion $K'$**
  - Diese Grenzkostenfunktion muss nurnoch in einzelne Bereiche geteilt werden
:::

- Die Grenzkostenfunktion sagt z.B. aus: _"Was kostet das 5. Stück zusätzlich?"_
  - D.h. wir können daraus ablesen, ab wann uns ein x'tes Stück zu teuer wird
  - **Beispiel: Kuchen**
    - Grenzkosten sagen aus:
      - 1. Kuchen kostet dich zusätzlich  2 €
      - 2. Kuchen kostet dich zusätzlich  3 €
      - 3. Kuchen kostet dich zusätzlich  4 €
      - 4. Kuchen kostet dich zusätzlich  5 €
      - 5. Kuchen kostet dich zusätzlich  6 €
    - Bei Marktpreis pro Kuchen 4€ würde man also max. 3 Kuchen verkaufen. Es gilt also:
      - Preis 3€ -> Menge 2
      - Preis 4€ -> Menge 3
      - Preis 5€ -> Menge 4
      - Preis 6€ -> Menge 5
  - Dies ist die Angebotsfunktion - Sie kann ins **Angebot-Nachfrage-Diagramm** eingetragen werden.

<svg viewBox="0 0 440 275" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"440px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-kuchen" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
  </defs>
  <line x1="50" y1="240" x2="400" y2="240" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-kuchen)"/>
  <line x1="50" y1="240" x2="50" y2="20" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-kuchen)"/>
  <text x="58" y="28" fontSize="12" fill="#333">Preis p (€)</text>
  <text x="404" y="244" fontSize="12" fill="#333">q</text>
  <g fontSize="10.5" fill="#555" textAnchor="middle">
    <text x="110" y="256">1</text>
    <text x="170" y="256">2</text>
    <text x="290" y="256">4</text>
    <text x="350" y="256">5</text>
  </g>
  <g fontSize="10.5" fill="#555" textAnchor="end">
    <text x="42" y="184">2</text>
    <text x="42" y="154">3</text>
    <text x="42" y="94">5</text>
    <text x="42" y="64">6</text>
  </g>
  <text x="230" y="256" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#c0392b">3</text>
  <text x="42" y="124" textAnchor="end" fontSize="11" fontWeight="bold" fill="#c0392b">4</text>
  <text x="225" y="271" textAnchor="middle" fontSize="10.5" fill="#555">Menge (Kuchen)</text>
  <line x1="50" y1="120" x2="230" y2="120" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,4"/>
  <line x1="230" y1="120" x2="230" y2="240" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,4"/>
  <polyline points="110,180 170,150 230,120 290,90 350,60" fill="none" stroke="#2176AE" strokeWidth="2.2"/>
  <g fill="#2176AE">
    <circle cx="110" cy="180" r="4"/>
    <circle cx="170" cy="150" r="4"/>
    <circle cx="290" cy="90" r="4"/>
    <circle cx="350" cy="60" r="4"/>
  </g>
  <circle cx="230" cy="120" r="5" fill="#c0392b"/>
  <text x="340" y="50" textAnchor="end" fontSize="12" fontWeight="bold" fill="#2176AE">Angebot = K′</text>
  <text x="240" y="134" fontSize="10.5" fontStyle="italic" fill="#c0392b">p = 4 € → 3 Kuchen</text>
</svg>

:::danger Zuschneiden der Angebotsfunktion
Die Angebotsfunktion **muss begrenzt werden**:
1. **Unten Abschneiden:**
    - Ist der Preis zu niedrig um den Preis zu decken (unter Betriebsminimum bzw. -optimum), wird kein Angebot gestellt
    - Das Angebot ist dann **0**, egal was die Grenzkosten sagen
2. **Oben Begrenzen:**
    - Mehr als die maximal mögliche Produktionskapazität geht nicht, es greift eine **technische Grenze**
    - _Es würde sich lohnen, mehr anzubieten. Es geht aber technisch nicht._
    - 
:::

:::tip Sonderfall lineare Kostenfunktion (siehe 4.3.5): alles oder nichts
Jedes Stück bringt denselben Überschuss $(p - c)$:
- Lohnt sich das **erste** Stück, lohnt sich auch **jedes weitere** – bis zur Kapazität
- Lohnt es sich nicht, lohnt sich **keins**
- Einen Punkt „$p = K'$“ in der Mitte gibt es nicht, weil $K'$ waagrecht ist

**Beispiel:** Fixkosten 1.000 €, variable Kosten 5 € pro Stück, Kapazität 500 Stück
- Stückkosten an der Kapazität: $k = \frac{1000}{500} + 5 = 7$ €

| | Maßstab | Preis darunter | Preis ab Maßstab |
|---|---|:---:|:---:|
| **Kurzfristig** | $k_v = 5$ € | Menge 0 | Menge 500 |
| **Langfristig** | $k = 7$ € | Menge 0 | Menge 500 |

Die Angebotskurve ist also keine ansteigende Kurve, sondern eine **Treppe**: bis zur Preisuntergrenze auf der y-Achse (Menge 0), dann waagrecht bis zur Kapazität und von dort senkrecht nach oben.

<svg viewBox="0 0 490 275" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"490px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-treppe" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
  </defs>
  <line x1="50" y1="240" x2="400" y2="240" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-treppe)"/>
  <line x1="50" y1="240" x2="50" y2="20" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-treppe)"/>
  <text x="58" y="28" fontSize="12" fill="#333">Preis p (€)</text>
  <text x="404" y="244" fontSize="12" fill="#333">q</text>
  <text x="42" y="144" textAnchor="end" fontSize="11" fontWeight="bold" fill="#2a9d6e">5</text>
  <text x="42" y="104" textAnchor="end" fontSize="11" fontWeight="bold" fill="#2176AE">7</text>
  <text x="300" y="256" textAnchor="middle" fontSize="10.5" fill="#555">500</text>
  <text x="300" y="270" textAnchor="middle" fontSize="10.5" fill="#555">(Kapazität)</text>
  <path d="M 50 240 L 50 140 L 300 140 L 300 35" fill="none" stroke="#2a9d6e" strokeWidth="2.2" strokeDasharray="6,4"/>
  <path d="M 50 240 L 50 100 L 300 100 L 300 35" fill="none" stroke="#2176AE" strokeWidth="2.4"/>
  <text x="62" y="200" fontSize="10.5" fontStyle="italic" fill="#555">unter PUG: Menge 0</text>
  <text x="308" y="200" fontSize="10.5" fontStyle="italic" fill="#555">ab PUG: Menge 500</text>
  <line x1="320" y1="52" x2="346" y2="52" stroke="#2176AE" strokeWidth="2.4"/>
  <text x="352" y="56" fontSize="10.5" fill="#333">langfristig (PUG 7 €)</text>
  <line x1="320" y1="72" x2="346" y2="72" stroke="#2a9d6e" strokeWidth="2.2" strokeDasharray="6,4"/>
  <text x="352" y="76" fontSize="10.5" fill="#333">kurzfristig (PUG 5 €)</text>
</svg>

> Die Angebotskurve beantwortet die Frage _Wie viel wird bei diesem Preisangeboten?_ Da unsere Kapazität auf 500 beschränkt ist wird selbst zu einem höheren Preis als der PUG weiterhin _nur_ 500 angeboten.
:::

### 4.5.1 - Zusammenfassung: Herleitung der individuellen Angebotsfunktion

<svg viewBox="0 0 910 470" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"900px",display:"block",margin:"0.5rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-ang" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#666"/>
    </marker>
    <marker id="arr-ang-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2176AE"/>
    </marker>
  </defs>

  {/* Ebene 1: Ergebnis */}
  <rect x="315" y="15" width="280" height="50" rx="5" fill="#27ae60" stroke="#1e8449" strokeWidth="1.5"/>
  <text x="455" y="37" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">Angebotsfunktion A<tspan dy="3" fontSize="9">x</tspan><tspan dy="-3"> = f(p</tspan><tspan dy="3" fontSize="9">x</tspan><tspan dy="-3">)</tspan></text>
  <text x="455" y="55" textAnchor="middle" fontSize="10.5" fill="white">Preis → angebotene Menge</text>

  {/* Ebene 2: Bausteine */}
  <rect x="15" y="125" width="205" height="74" rx="5" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="117.5" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Regel p = K′</text>
  <text x="117.5" y="173" textAnchor="middle" fontSize="9.5" fill="#555">aus Gewinnanalyse (4.4)</text>

  <rect x="240" y="125" width="205" height="74" rx="5" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="342.5" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Kurve: Grenzkosten K′</text>
  <text x="342.5" y="173" textAnchor="middle" fontSize="9.5" fill="#555">nur steigender Ast</text>

  <rect x="465" y="125" width="205" height="74" rx="5" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="567.5" y="143" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Untergrenze</text>
  <text x="567.5" y="159" textAnchor="middle" fontSize="9" fill="#555">kurzfristig: min k<tspan dy="3" fontSize="7.5">v</tspan><tspan dy="-3"> (Betriebsminimum)</tspan></text>
  <text x="567.5" y="173" textAnchor="middle" fontSize="9" fill="#555">langfristig: min k (Betriebsoptimum)</text>
  <text x="567.5" y="187" textAnchor="middle" fontSize="9" fill="#555">darunter Menge 0</text>

  <rect x="690" y="125" width="205" height="74" rx="5" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="792.5" y="150" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Obergrenze</text>
  <text x="792.5" y="167" textAnchor="middle" fontSize="9.5" fill="#555">Kapazitätsgrenze,</text>
  <text x="792.5" y="181" textAnchor="middle" fontSize="9.5" fill="#555">darüber Menge konstant</text>

  {/* Pfeile Ebene 2 → Ebene 1 */}
  <path d="M 117.5 125 L 117.5 40 L 313 40" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arr-ang)"/>
  <line x1="342.5" y1="125" x2="342.5" y2="67" stroke="#2176AE" strokeWidth="2.5" markerEnd="url(#arr-ang-b)"/>
  <line x1="567.5" y1="125" x2="567.5" y2="67" stroke="#666" strokeWidth="1.5" markerEnd="url(#arr-ang)"/>
  <path d="M 792.5 125 L 792.5 40 L 597 40" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arr-ang)"/>

  {/* Ebene 3 */}
  <rect x="15" y="265" width="205" height="56" rx="5" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="117.5" y="287" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Gewinnmaximierung</text>
  <text x="117.5" y="305" textAnchor="middle" fontSize="9.5" fill="#555">Grenzerlös U′ = Grenzkosten K′</text>

  <rect x="240" y="265" width="205" height="56" rx="5" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="342.5" y="287" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Kostenfunktion K(q) (4.3)</text>
  <text x="342.5" y="305" textAnchor="middle" fontSize="9.5" fill="#555">umgekipptes S</text>

  {/* Pfeile Ebene 3 → Ebene 2 */}
  <line x1="117.5" y1="265" x2="117.5" y2="201" stroke="#666" strokeWidth="1.5" markerEnd="url(#arr-ang)"/>
  <line x1="342.5" y1="265" x2="342.5" y2="201" stroke="#2176AE" strokeWidth="2.5" markerEnd="url(#arr-ang-b)"/>
  <text x="351" y="237" fontSize="10" fill="#555" fontStyle="italic">ableiten</text>
  <path d="M 445 293 L 567.5 293 L 567.5 201" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arr-ang)"/>
  <text x="576" y="240" fontSize="10" fill="#555" fontStyle="italic">durch q teilen</text>
  <text x="576" y="254" fontSize="9.5" fill="#555" fontStyle="italic">(k<tspan dy="3" fontSize="7.5">v</tspan><tspan dy="-3"> = K</tspan><tspan dy="3" fontSize="7.5">v</tspan><tspan dy="-3">/q, k = K/q)</tspan></text>

  {/* Ebene 4: Grundlagen */}
  <rect x="15" y="395" width="205" height="62" rx="5" fill="#f0f4f8" stroke="#888" strokeWidth="1.5"/>
  <text x="117.5" y="415" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Vollkommene Konkurrenz</text>
  <text x="117.5" y="432" textAnchor="middle" fontSize="9.5" fill="#555">Preisnehmer:</text>
  <text x="117.5" y="446" textAnchor="middle" fontSize="9.5" fill="#555">Grenzerlös U′ = p</text>

  <rect x="240" y="395" width="205" height="62" rx="5" fill="#f0f4f8" stroke="#888" strokeWidth="1.5"/>
  <text x="342.5" y="415" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Produktionsfunktion (4.2)</text>
  <text x="342.5" y="432" textAnchor="middle" fontSize="10" fill="#333">q = f(v<tspan dy="3" fontSize="7.5">1</tspan><tspan dy="-3">, …, v</tspan><tspan dy="3" fontSize="7.5">n</tspan><tspan dy="-3">)</tspan></text>
  <text x="342.5" y="446" textAnchor="middle" fontSize="9.5" fill="#555">S-förmig, Ertragsgesetz</text>

  {/* Pfeile Ebene 4 → Ebene 3 / 2 */}
  <line x1="117.5" y1="395" x2="117.5" y2="323" stroke="#666" strokeWidth="1.5" markerEnd="url(#arr-ang)"/>
  <text x="126" y="357" fontSize="10" fill="#555" fontStyle="italic">U′ = p einsetzen</text>
  <text x="126" y="371" fontSize="10" fill="#555" fontStyle="italic">→ ergibt p = K′</text>
  <line x1="342.5" y1="395" x2="342.5" y2="323" stroke="#2176AE" strokeWidth="2.5" markerEnd="url(#arr-ang-b)"/>
  <text x="351" y="363" fontSize="10" fill="#555" fontStyle="italic">mit Faktorpreisen bewerten</text>
  <path d="M 445 426 L 792.5 426 L 792.5 201" stroke="#666" strokeWidth="1.5" fill="none" markerEnd="url(#arr-ang)"/>
  <text x="620" y="418" textAnchor="middle" fontSize="10" fill="#555" fontStyle="italic">technische Grenze</text>
</svg>

## 4.6 - Add-On: Angebotselastizität
Die **Preiselastizität des Angebots** gibt an, um wie viel **Prozent** sich die angebotene Menge verändert, wenn sich der Preis um **ein Prozent** verändert – also das Gegenstück zur Preiselastizität der Nachfrage (siehe 3.3.2).

$$
\varepsilon = \frac{\dfrac{dA_x}{A_x}}{\dfrac{dp_x}{p_x}} = \frac{dA_x}{dp_x} \cdot \frac{p_x}{A_x}
$$

- Bei einer steigenden Angebotsfunktion ist $\varepsilon$ **positiv** (Preis rauf → Menge rauf)
- Auch bei einer **linearen** Angebotsfunktion ist $\varepsilon$ an **jedem Punkt anders**: Die Steigung $\frac{dA_x}{dp_x}$ ist zwar überall gleich, das Verhältnis $\frac{p_x}{A_x}$ aber nicht

:::info Beispiel: $A_x = 2p_x - 4$
Steigung $\frac{dA_x}{dp_x} = 2$, also $\varepsilon = 2 \cdot \frac{p_x}{A_x}$:

| $p_x$ | $A_x$ | $\varepsilon$ |
|:---:|:---:|:---:|
| 5 | 6 | $2 \cdot \frac{5}{6} \approx 1{,}67$ |
| 10 | 16 | $2 \cdot \frac{10}{16} = 1{,}25$ |

Bei $p_x = 5$ führt 1 % mehr Preis zu ca. 1,67 % mehr Angebot.
:::

