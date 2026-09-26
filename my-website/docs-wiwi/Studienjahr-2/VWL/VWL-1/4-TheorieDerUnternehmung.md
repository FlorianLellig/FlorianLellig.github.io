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
:::

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

**Verlauf der Kostenfunktion**
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



## 4.4 - Erlös- und Gewinnanalyse


