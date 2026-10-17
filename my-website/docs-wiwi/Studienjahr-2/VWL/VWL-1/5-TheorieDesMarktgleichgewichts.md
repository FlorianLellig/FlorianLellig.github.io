# 5. Theorie des Marktgleichgewichts
:::info
In den Kapiteln 3 und 4 wurden nun Theorie des Haushaltes und Theorie der Unternehmung aufgearbeitet. Diese Kombination aus Angebot und Nachfrage wird nun in der Theorie des Marktgleichgewichts zusammengeführt.
:::

## 5.1 - Markt und Marktformen
### 5.1.1 - Markt
- ökonomischer Ort des Zusammentreffens von Angebot und Nachfrage für ein bestimmtes Gut X 
- Ein Markt muss abgegrenzt werden:
  - **Sachliche Abgrenzung:**
    - Welches Gut? Nur Güter, die aus Sicht der Nachfrager austauschbar sind (z. B. Markt für Kaffee)
  - **Räumliche Abgrenzung:**
    - Wo? Geografisches Gebiet des Marktes (z. B. regional, national, Weltmarkt)
  - **Zeitliche Abgrenzung:**
    - Wann? Betrachteter Zeitraum (z. B. Tag, Jahr, Saison)
  
:::tip Vollkommener Markt
- Man bezeichnet einen Markt als vollkommen, wenn vorliegt:
  1. **Vollständige Markttransparenz**
       - Allen Marktteilnehmern sind alle Marktbedingungen bekannt (Menge, Preise, Qualität, Marktstruktur, Produktionsmethode, Kosten)
       - Hat man am ehesten an der Börse, sonst aber realistisch eher nicht 
  2. **Homogenität der Güter**
       - Güte werden von Anbietern und Nachfragern als völlig gleichwertig angesehen
       - Sachliche Homogenität
         - Aktien von SAP sind immer gleich, Brötchen aber nicht
       - Personelle Homogenität
         - _"Mein Bäcker kenne ich schon seit der Geburt"_
       - Räumliche Homogenität
         - [...]
       - Zeitliche Homogenität
         - Bäckerei 1 macht schon um 6 Uhr auf, Bäckerei 2 erst um 9 Uhr
- Wenn sowohl _vollständige Markttransparenz_ als auch _Homogenität der Güter_ vorliegt, dann ist lediglich der Preis ausschlaggebend
:::

### 5.1.2 - Einteilen von Märkten
- Märkte lassen sich nach verschiedenen Kriterien einteilen:
  1. **Marktbesetzung**
       - Zahl und relative Größe der Marktteilnehmer auf sowohl Angebots- als auch Nachfrageseite
       - Grob 3 Kategorien: ein Großer, wenige Mittelgroße, viele Kleine
  2. **Markttyp** 
       - Vollkommenheitsgrad des Marktes
       - Grobeinteilung in Vollkommen und unvollkommen

:::info Marktbesetzung
**Klassifikation nach Zahl der Marktteilnehmer** (Zeilen = Anbieter **A**, Spalten = Nachfrager **N**)

| A ↓ \ N → | **einer** | **wenige** | **viele** |
|---|---|---|---|
| **einer** | bilaterales Monopol | beschränktes Monopol | Monopol |
| **wenige** | beschränktes Monopson | bilaterales Oligopol | Oligopol |
| **viele** | Monopson | Oligopson | (bilaterales) Polypol |

- Statt _Monopson_ und _Oligopson_ sagt man häufig **Nachfragemonopol** und **Nachfrageoligopol**
- Typische Marktformen:
  - viele Nachfrager: Konsumgütermärkte
  - wenige Nachfrager: Investitionsgütermärkte
  - ein Nachfrager: Staat (z. B. Rüstungsindustrie)
:::

## 5.2 - Marktgleichgewicht im homogenen Polypol
:::info
Ein homogenes Polypol ist eine Kombination aus bilateralem Polypol (siehe 5.1.2) und vollkommenheit des Marktes (siehe 5.1.1).
$$
\begin{array}{ll}
 & \text{bilaterales Polypol (viele kleine Anbieter \& viele kleine Nachfrager)} \\
+ & \text{vollkommener Markt (homogene Güter \& vollständige Markttransparenz)} \\
\hline
= & \textbf{Homogenes Polypol}
\end{array}
$$
:::

### 5.1.1 - Bestimmung des Marktgleichgewichts
- Das Marktgleichgewicht ergibt sich aus dem Schnittpunkt von **Marktnachfragefunktion** $N_x$ _(behandelt in Kapitel 3)_ und **Marktangebotsfunktion** $A_x$ _(behandelt in Kapitel 4)_
  - Funktionen stellen jeweils Pläne der Unternehmen ($A_x$) bzw. Verbraucher ($N_x$) dar
  - Aus Überlagerung dieser ergibt sich das Marktgleichgewicht mit den Punkten
    - **Gleichgewichtsmenge** $q_x^*$
    - **Gleichgewichtspreis** $p_x^*$

<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"460px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-mgg" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <pattern id="hatch-mgg-a" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="#e67e22" strokeWidth="1.2" strokeOpacity="0.4"/>
    </pattern>
    <pattern id="hatch-mgg-n" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="#2176AE" strokeWidth="1.2" strokeOpacity="0.4"/>
    </pattern>
  </defs>
  {/* Flächen */}
  <polygon points="50,50 210,170 50,170" fill="#dbeeff"/>
  <polygon points="50,170 210,170 50,270" fill="#fff3e0"/>
  {/* Überschüsse (schraffiert) */}
  <polygon points="76.7,70 370,70 210,170" fill="url(#hatch-mgg-a)"/>
  <polygon points="210,170 343.3,270 50,270" fill="url(#hatch-mgg-n)"/>
  {/* Achsen */}
  <line x1="50" y1="300" x2="420" y2="300" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-mgg)"/>
  <line x1="50" y1="300" x2="50" y2="20" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-mgg)"/>
  <text x="58" y="28" fontSize="13" fill="#333">p<tspan fontSize="9" dy="3">x</tspan></text>
  <text x="426" y="304" fontSize="13" fill="#333">q<tspan fontSize="9" dy="3">x</tspan></text>
  {/* Hilfslinien */}
  <line x1="50" y1="170" x2="210" y2="170" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,4"/>
  <line x1="210" y1="170" x2="210" y2="300" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,4"/>
  <text x="42" y="174" textAnchor="end" fontSize="12" fontWeight="bold" fill="#c0392b">p<tspan fontSize="8.5" dy="3">x</tspan><tspan dy="-6">{"*"}</tspan></text>
  <text x="210" y="317" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c0392b">q<tspan fontSize="8.5" dy="3">x</tspan><tspan dy="-6">{"*"}</tspan></text>
  {/* Kurven */}
  <line x1="50" y1="50" x2="370" y2="290" stroke="#2176AE" strokeWidth="2.2"/>
  <line x1="50" y1="270" x2="370" y2="70" stroke="#e67e22" strokeWidth="2.2"/>
  <text x="376" y="294" fontSize="13" fontWeight="bold" fill="#2176AE">N<tspan fontSize="9" dy="3">x</tspan></text>
  <text x="376" y="74" fontSize="13" fontWeight="bold" fill="#e67e22">A<tspan fontSize="9" dy="3">x</tspan></text>
  {/* Überschuss-Beschriftungen */}
  <g fontSize="11" textAnchor="middle" stroke="#fff" strokeWidth="3" paintOrder="stroke">
    <text x="225" y="98" fontWeight="bold" fill="#a0521a">Angebotsüberschuss</text>
    <text x="225" y="112" fontSize="10" fontStyle="italic" fill="#a0521a">Preis sinkt ↓</text>
    <text x="205" y="242" fontWeight="bold" fill="#1a5c8c">Nachfrageüberschuss</text>
    <text x="205" y="256" fontSize="10" fontStyle="italic" fill="#1a5c8c">Preis steigt ↑</text>
  </g>
  {/* Gleichgewicht */}
  <circle cx="210" cy="170" r="5" fill="#c0392b"/>
  <text x="250" y="178" fontSize="10.5" fontStyle="italic" fill="#c0392b">Marktgleichgewicht</text>
  {/* Renten */}
  <g fontSize="11" fill="#1a5c8c" textAnchor="middle">
    <text x="100" y="138">Konsumenten-</text>
    <text x="100" y="152">rente</text>
  </g>
  <g fontSize="11" fill="#a0521a" textAnchor="middle">
    <text x="95" y="196">Produzenten-</text>
    <text x="95" y="210">rente</text>
  </g>
</svg>

:::tip Angebots- und Nachfrageüberschuss
- **Angebotsüberschuss**
  - Zu viel Angebot, was die Anbieter los werden wollen
  - Es herscht Preisdruck, der die Preise bis zum Gleichgewichtspreis bringt
- **Nachfrageüberschuss**
  - Zu viel Nachfrage
  - Es herrscht Bereitschaft auch mehr zu zahlen, die Preise steigen bis zum Gleichgewichtspreis
:::

:::tip Konsumenten- und Produzentenrente
- **Konsumentenrente**
  - Zwar liegt Marktgleichgewicht vor, jedoch währen einige Käufer bereit gewesen mehr zu zahlen
  - Das Erstparnis ist die Fläche zwischen Nachfragekurve und Gleichgewichtspreis
- **Produzentenrente**
  - Zwar liegt Marktgleichgewicht vor, jedoch währen einige Anbieter auch bereit gewesen für weniger zu verkaufen
  - Der Mehrgewinn ist die Fläche zwischen Angebotskurve und Gleichgewichtspreis
- **Gesamtwirtschaftlicher Wohlfahrtsgewinn**
  - Summe aus Konsumenten- und Produzentenrente
:::

:::danger
Das **Marktgleichgewicht kann sich Verschieben**. Dies kann aufgrund verschiedenster Dinge passieren, z.B.:

- zusätzliche Anbieter durch Globalisierung
- zusätzliche Nachfrager durch Globalisierung
- allgemeine Lohnerhöhung in der Volkswirtschaft
- starke Rohstoffpreiserhöhung/Erhöhung der Materialkosten
- Wegfall wichtiger Anbieter durch Krieg/Krisen
- Entwicklung eines preisgünstigen Substitutionsprodukts
- starker Preisanstieg bei Komplementärprodukten
- Einführung/Erhöhung einer produktbezogenen Steuer
- Produkt ist nicht mehr „in“
- Nachfrager erwarten in Zukunft starke Preiserhöhungen
:::

:::danger Vorraussetzungen des Preis- und Wettbewerbsmechanismus
1. **Vorliegen eines Wettbewerbs**
   - Bei Monopolen (oft auch schon Oligopolen) kommt es am Markt i.d.R. zu anderen Lösungen, die zu einer geringeren gesamtwirtschaftlichen Wohlfahrt führen können.
2. **Preise müssen völlig Flexibel sein**
   - Werden Preise staatlich festgelegt (Mindest-, Höchst- oder Festpreis) so wird das Marktgleichgewicht i.d.R. nicht erreicht
:::


### 5.1.2 - Staatseingriffe in den Preismechanismus

#### Höchstpreise
- Werden i.d.R. von staatlicher Seite festgelegt, um die Konsumenten **von zu hohen Preisen zu schützen** und/oder **um Inflation zu bekämpfen**
- Höchstpreise haben nur dann eine Wirkung, wenn sie **unterhalb des Gleichgewichtpreises liegen**

<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"460px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-hp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <pattern id="hatch-hp" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="#999" strokeWidth="1.2" strokeOpacity="0.4"/>
    </pattern>
  </defs>
  {/* Bereich über dem Gleichgewichtspreis: Höchstpreis wirkungslos */}
  <rect x="70" y="35" width="350" height="130" fill="url(#hatch-hp)"/>
  <text x="250" y="50" textAnchor="middle" fontSize="11" fontStyle="italic" fill="#555" stroke="#fff" strokeWidth="3" paintOrder="stroke">Höchstpreis hier wirkungslos</text>
  {/* Achsen */}
  <line x1="70" y1="300" x2="430" y2="300" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-hp)"/>
  <line x1="70" y1="300" x2="70" y2="20" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-hp)"/>
  <text x="78" y="28" fontSize="13" fill="#333">p<tspan fontSize="9" dy="3">x</tspan></text>
  <text x="436" y="304" fontSize="13" fill="#333">q<tspan fontSize="9" dy="3">x</tspan></text>
  {/* Gleichgewichtspreis */}
  <line x1="70" y1="165" x2="250" y2="165" stroke="#999" strokeWidth="1.2" strokeDasharray="5,4"/>
  <text x="62" y="169" textAnchor="end" fontSize="12" fill="#555">p<tspan fontSize="8.5" dy="3">x</tspan><tspan dy="-6">{"*"}</tspan></text>
  {/* Höchstpreis */}
  <line x1="70" y1="230" x2="331.8" y2="230" stroke="#c0392b" strokeWidth="1.5" strokeDasharray="5,4"/>
  <g fontSize="12" fontWeight="bold" fill="#c0392b" textAnchor="end">
    <text x="62" y="226">Höchst-</text>
    <text x="62" y="240">preis</text>
  </g>
  {/* Kurven */}
  <line x1="100" y1="60" x2="400" y2="280" stroke="#2176AE" strokeWidth="2.2"/>
  <line x1="100" y1="270" x2="400" y2="50" stroke="#e67e22" strokeWidth="2.2"/>
  <text x="94" y="62" textAnchor="end" fontSize="13" fontWeight="bold" fill="#2176AE" stroke="#fff" strokeWidth="3" paintOrder="stroke">N<tspan fontSize="9" dy="3">x</tspan></text>
  <text x="406" y="54" fontSize="13" fontWeight="bold" fill="#e67e22" stroke="#fff" strokeWidth="3" paintOrder="stroke">A<tspan fontSize="9" dy="3">x</tspan></text>
  <circle cx="250" cy="165" r="4" fill="#555"/>
  {/* Schnittpunkte mit dem Höchstpreis */}
  <circle cx="154.5" cy="230" r="4" fill="#e67e22"/>
  <circle cx="331.8" cy="230" r="4" fill="#2176AE"/>
  {/* Nachfrageüberhang */}
  <path d="M 154.5 236 Q 154.5 250 168 250 L 230 250 Q 243 250 243 262 Q 243 250 256 250 L 318 250 Q 331.8 250 331.8 236" fill="none" stroke="#c0392b" strokeWidth="1.5"/>
  <text x="243" y="280" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c0392b">Nachfrageüberhang</text>
</svg>

- **Nachfrageüberhang**: Menge die fehlt um Nachfrage zu decken

:::danger 
- Ein Höchspreis unterhalb des Gleichgewichtspreises führt zu Nachfrageüberhang:
  - **Problem:** Das Angebot fällt aufgrund der weniger attraktiven Konditionen
    - **Die Nachfrage kann nicht gedeckt werden**
- **Folge:**
  - **Nachfrageüberhang** und **Wohlfahrtsverluste** durch sinkende Renten (Konsumenten- und Produzenten)
  - Gegenwirken mit Subventionen und Verstaatlichung erreichbar
    - _Subventionierung muss Differenz zwischen Marktgleichgewicht und Höchstpreis decken_
:::

#### Mindestpreise
- Mindestpreise werden von staatlicher Seite festgelegt, um die **Verkaufserlöse/Einkommen der Anbieter zu sichern** und/oder einen **kostendeckenden Preis zu sichern**
- Mindestpreise haben nur dann eine Wirkung, wenn sie **oberhalb des Gleichgewichtpreises liegen**

<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"460px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-mp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <pattern id="hatch-mp" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="7" stroke="#999" strokeWidth="1.2" strokeOpacity="0.4"/>
    </pattern>
  </defs>
  {/* Bereich unter dem Gleichgewichtspreis: Mindestpreis wirkungslos */}
  <rect x="70" y="165" width="350" height="135" fill="url(#hatch-mp)"/>
  <text x="250" y="292" textAnchor="middle" fontSize="11" fontStyle="italic" fill="#555" stroke="#fff" strokeWidth="3" paintOrder="stroke">Mindestpreis hier wirkungslos</text>
  {/* Achsen */}
  <line x1="70" y1="300" x2="430" y2="300" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-mp)"/>
  <line x1="70" y1="300" x2="70" y2="20" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-mp)"/>
  <text x="78" y="28" fontSize="13" fill="#333">p<tspan fontSize="9" dy="3">x</tspan></text>
  <text x="436" y="304" fontSize="13" fill="#333">q<tspan fontSize="9" dy="3">x</tspan></text>
  {/* Gleichgewichtspreis */}
  <line x1="70" y1="165" x2="250" y2="165" stroke="#999" strokeWidth="1.2" strokeDasharray="5,4"/>
  <text x="62" y="169" textAnchor="end" fontSize="12" fill="#555">p<tspan fontSize="8.5" dy="3">x</tspan><tspan dy="-6">{"*"}</tspan></text>
  {/* Mindestpreis */}
  <line x1="70" y1="100" x2="331.8" y2="100" stroke="#c0392b" strokeWidth="1.5" strokeDasharray="5,4"/>
  <g fontSize="12" fontWeight="bold" fill="#c0392b" textAnchor="end">
    <text x="62" y="96">Mindest-</text>
    <text x="62" y="110">preis</text>
  </g>
  {/* Kurven */}
  <line x1="100" y1="60" x2="400" y2="280" stroke="#2176AE" strokeWidth="2.2"/>
  <line x1="100" y1="270" x2="400" y2="50" stroke="#e67e22" strokeWidth="2.2"/>
  <text x="406" y="284" fontSize="13" fontWeight="bold" fill="#2176AE" stroke="#fff" strokeWidth="3" paintOrder="stroke">N<tspan fontSize="9" dy="3">x</tspan></text>
  <text x="94" y="274" textAnchor="end" fontSize="13" fontWeight="bold" fill="#e67e22" stroke="#fff" strokeWidth="3" paintOrder="stroke">A<tspan fontSize="9" dy="3">x</tspan></text>
  <circle cx="250" cy="165" r="4" fill="#555"/>
  {/* Schnittpunkte mit dem Mindestpreis */}
  <circle cx="154.5" cy="100" r="4" fill="#2176AE"/>
  <circle cx="331.8" cy="100" r="4" fill="#e67e22"/>
  {/* Angebotsüberhang */}
  <path d="M 154.5 94 Q 154.5 80 168 80 L 230 80 Q 243 80 243 68 Q 243 80 256 80 L 318 80 Q 331.8 80 331.8 94" fill="none" stroke="#c0392b" strokeWidth="1.5"/>
  <text x="243" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c0392b">Angebotsüberhang</text>
</svg>

:::danger
- Ein Höchstpreis überhalb des Preisgleichgewichts führt zu einem **Angabotsüberhang**
  - **Problem:** die Nachfrage fällt aufgrund der angestiegenden Kosten
    - **Das Angebot kann nicht verkauft werden**
- **Folge:**
  - **Angebotsüberhang** und **Wohlfahrtsverluste** durch sinkende Renten (Konsumenten- und Produzenten)
  - Gegenwirken mit Subventionen und Verstaatlichung erreichbar
    - _Subventionierung muss Differenz zwischen Marktgleichgewicht und Höchstpreis decken_
    - Bsp: (früher) sehr günstige Milch an Schulen
:::

### 5.1.3 - Fazit
- Staatliche Preiseingriffe führen in einer Marktwirtschaft in aller Regel immer dann zu **Wohlfahrtsverlusten**, wenn
  - ...eigentlich Wettbewerb vorliegt
  - ...es keine externen Effekte gibt
- Die Summe aus Konsumenten- und Produzentenrente (Gesamtwirtschaftliche Wohlfahrt) fällt geringer aus
  - In der Regel werden weitere Staatseingriffe benötigt, um die Überschüsse auf **Angebots- oder Nachfrageseite zu kompensieren**

:::tip Es gibt Ausnahmen
1. **Staatliche Höchstpreise**
   - Bei Monopolsituationen kann ein Höchstpreis sinnvoll sein
   - Werkzeug der _Brechung der Preissetzungsmacht_
   - Aber: Besser ist die **Verhinderung bzw. Auflösung der Monopolstellung durch wettbewerbspolitische Maßnahmen**
2. **Staatliche Mindestpreise**
   - Bei negativen externen Effekten (z.B. externen Kosten) kann ein Mindesetpreis sinnvoll sein
   - Z.B. bei Umweltpolitik
   - Aber: Besser sind z.B. umweltpolitische Instrumente (Auflagen, Steuern, Zertifikate, etc.)
:::

- **Es gilt:**
  - Normalfall: Homogenes Polypol und offene Märkte bilden ein **gesamtwirtschaftliches Mikrogleichgewicht**
  - Anbieter produzieren im Betriebsoptimum, es existiert eine optimale versorgung zu den niedrigst möglichen Preisen
  - _Es ist nicht möglich, die Wohlfahrt eines Individuums zu erhöhen ohne gleichzeitig die Wohlfahrt eines anderen Individuums zu vermindern_ - _**Pareto-Optimum**_
- **Kritik**
  - Basierend auf Annahmen wie _völlige Homogenität der Güter_ 
    - Dies ist meist kaum möglich umzusetzen und meist in einer stark individualisierten Gesellschaft garnicht erwünscht
  - In der Praxis sind Größenvorteile oft wichtig
    - Bsp: Flugzeugproduktion. Es gibt eine sehr begrenzte Nachfrage, damit aber die Anbieter eine bestimmte Menge produzieren um Mengenrabatte erzielen zu können ist ein Polypol nicht realistisch
  - Fraglichkeit des Technischen Fortschritts im Polypol
    - Können viele kleine Anbieter hohe Investitionskosten individuell überhaupt umsetzen?

## 5.3 - Marktgleichgewicht im Monopol
- Ein großer Anbieter trifft auf viele kleine Nachfrager
  - Sehr **starke Marktposition des Anbieters**
- Anbieter muss sich nicht nach Marktpreis richten, er **kann den Preis selbst bestimmen**

### 5.3.1 - Preisbestimmung als Monopolist
Als Monopolist versucht man gewinnmaximierend zu sein, daher gilt:

$$
\underbrace{G(q)}_{\text{Gewinn}} = \underbrace{U(q)}_{\text{Umsatz}} - \underbrace{K(q)}_{\text{Kosten}}
$$

Um nun das Gewinnmaximum zu bestimmen, muss die Ableitung der Gewinnfunktion gleich 0 gesetzt werden. Damit gilt:

$$
G'(q) = \underbrace{U'(q)}_{\text{Grenzerlös}} - \underbrace{K'(q)}_{\text{Grenzkosten}} = 0
$$

Daraus folgt die Bedingung für das Gewinnmaximum:

$$
\boxed{\;U'(q) = K'(q)\;} \qquad \text{Grenzerlös} = \text{Grenzkosten}
$$

:::note
Streng genommen müsste man noch prüfen, ob es wirklich ein Maximum ist: $G''(q) < 0$.
:::

- Der Monopolist produziert die Menge $q_M$, bei der **Grenzkosten = Grenzerlös** ($K' = U'$)
- Diese Menge verkauft er zu dem Preis $p_M$, den die Nachfrager **bei dieser Menge gerade noch bereit sind zu zahlen** (Punkt auf $N_x$)
  - _Es gibt keinen anderen Anbieter, die Nachfrager können nicht ausweichen_
- → **Cournotscher Punkt C**

<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"500px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-cour" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <marker id="arr-cour-g" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#555"/>
    </marker>
  </defs>
  {/* Achsen */}
  <line x1="80" y1="300" x2="470" y2="300" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-cour)"/>
  <line x1="80" y1="300" x2="80" y2="20" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-cour)"/>
  <text x="88" y="28" fontSize="12" fill="#333">p<tspan fontSize="8.5" dy="3">x</tspan><tspan dy="-3">, U′, K′, k</tspan></text>
  <text x="476" y="304" fontSize="13" fill="#333">q<tspan fontSize="9" dy="3">x</tspan></text>
  {/* Hilfslinien Cournot */}
  <line x1="80" y1="138.8" x2="208" y2="138.8" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,4"/>
  <line x1="208" y1="138.8" x2="208" y2="300" stroke="#c0392b" strokeWidth="1.2" strokeDasharray="5,4"/>
  <text x="72" y="143" textAnchor="end" fontSize="12" fontWeight="bold" fill="#c0392b">p<tspan fontSize="8.5" dy="3">M</tspan></text>
  <text x="208" y="317" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c0392b">q<tspan fontSize="8.5" dy="3">M</tspan></text>
  {/* Nachfrage N und Grenzerlös U' */}
  <line x1="80" y1="50" x2="440" y2="300" stroke="#2176AE" strokeWidth="2.2"/>
  <line x1="80" y1="50" x2="260" y2="300" stroke="#27ae60" strokeWidth="2"/>
  {/* Grenzkosten K' */}
  <polyline points="95.0,204.2 100.0,217.0 105.0,228.2 110.0,238.0 115.0,246.2 120.0,253.0 125.0,258.2 130.0,262.0 135.0,264.2 140.0,265.0 145.0,264.8 152.0,263.8 159.0,262.1 166.0,259.6 173.0,256.3 180.0,252.2 187.0,247.3 194.0,241.6 201.0,235.2 208.0,227.9 215.0,219.9 222.0,211.1 229.0,201.5 236.0,191.1 243.0,179.9 250.0,168.0 257.0,155.3 264.0,141.7 271.0,127.4 278.0,112.3 285.0,96.4 292.0,79.8 299.0,62.3 301.8,55.0" fill="none" stroke="#e67e22" strokeWidth="2"/>
  {/* Stückkosten k */}
  <polyline points="170.0,139.8 178.0,145.2 186.0,150.0 194.0,154.2 202.0,157.9 210.0,161.0 218.0,163.5 226.0,165.5 234.0,166.9 242.0,167.7 250.0,168.0 258.0,167.7 266.0,166.9 274.0,165.5 282.0,163.5 290.0,161.0 298.0,157.9 306.0,154.2 314.0,150.0 322.0,145.2 330.0,139.8" fill="none" stroke="#e67e22" strokeWidth="1.8" strokeDasharray="6,4"/>
  {/* Kurvenbeschriftungen */}
  <text x="308" y="62" fontSize="13" fontWeight="bold" fill="#e67e22">K′</text>
  <text x="336" y="144" fontSize="13" fontWeight="bold" fill="#e67e22">k</text>
  <text x="244" y="262" fontSize="13" fontWeight="bold" fill="#27ae60">U′</text>
  <text x="408" y="266" fontSize="13" fontWeight="bold" fill="#2176AE">N<tspan fontSize="9" dy="3">x</tspan></text>
  {/* Schnittpunkt K' = U' */}
  <circle cx="208" cy="227.9" r="3" fill="#555"/>
  {/* Punkte C und D */}
  <circle cx="208" cy="138.8" r="5" fill="#c0392b"/>
  <text x="216" y="132" fontSize="13" fontWeight="bold" fill="#c0392b">C</text>
  <circle cx="250" cy="168" r="5" fill="#555"/>
  <text x="250" y="190" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#555">D</text>
  {/* Hinweispfeile */}
  <line x1="208" y1="48" x2="208" y2="128" stroke="#c0392b" strokeWidth="1.3" markerEnd="url(#arr-cour)"/>
  <text x="214" y="44" fontSize="11" fontWeight="bold" fill="#c0392b">Cournotscher Punkt</text>
  <line x1="362" y1="206" x2="260" y2="171" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-cour-g)"/>
  <g fontSize="11" fill="#555">
    <text x="366" y="204">Marktgleichgewicht im</text>
    <text x="366" y="218">homogenen Polypol</text>
  </g>
  {/* Legende */}
  <line x1="20" y1="327" x2="480" y2="327" stroke="#ddd" strokeWidth="1"/>
  <text x="250" y="343" textAnchor="middle" fontSize="10.5" fill="#555">N = Nachfrage · U′ = Grenzerlös · K′ = Grenzkosten · k = Stückkosten</text>
</svg>

:::warning Nicht nur ein Verteilungsproblem
- Der bisherige Vergleich mit dem Polypol ermöglicht lediglich die Aussage eines Verteilungsproblems
  - In der Praxis hat man jedoch sogar einen **gesamtwirtschaftlichen Wohlfahrtsverlust!**

<svg viewBox="0 0 480 350" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"480px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-wv" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <marker id="arr-wv-g" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#555"/>
    </marker>
  </defs>
  {/* Flächen (Farben = Situation im Monopol) */}
  <polygon points="60,60 130,108 60,108" fill="#dbeeff"/>
  <rect x="60" y="108" width="70" height="55" fill="#fff3e0"/>
  <polygon points="60,163 130,163 130,209.2 60,250" fill="#fff3e0"/>
  <polygon points="130,108 210,163 130,163" fill="#fdecea"/>
  <polygon points="130,163 210,163 130,209.2" fill="#fdecea"/>
  {/* Achsen */}
  <line x1="60" y1="300" x2="460" y2="300" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-wv)"/>
  <line x1="60" y1="300" x2="60" y2="20" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-wv)"/>
  <text x="68" y="28" fontSize="13" fill="#333">p<tspan fontSize="9" dy="3">x</tspan></text>
  <text x="466" y="304" fontSize="13" fill="#333">q<tspan fontSize="9" dy="3">x</tspan></text>
  {/* Hilfslinien */}
  <g stroke="#999" strokeWidth="1.2" strokeDasharray="5,4">
    <line x1="60" y1="108" x2="130" y2="108"/>
    <line x1="130" y1="108" x2="130" y2="300"/>
    <line x1="60" y1="163" x2="210" y2="163"/>
    <line x1="210" y1="163" x2="210" y2="300"/>
  </g>
  <g fontSize="12" fill="#555" textAnchor="end">
    <text x="52" y="112">p<tspan fontSize="8.5" dy="3">M</tspan></text>
    <text x="52" y="167">p<tspan fontSize="8.5" dy="3">x</tspan><tspan dy="-6">{"*"}</tspan></text>
  </g>
  <g fontSize="12" fill="#555" textAnchor="middle">
    <text x="130" y="317">q<tspan fontSize="8.5" dy="3">M</tspan></text>
    <text x="210" y="317">q<tspan fontSize="8.5" dy="3">x</tspan><tspan dy="-6">{"*"}</tspan></text>
  </g>
  {/* Kurven */}
  <line x1="60" y1="60" x2="410" y2="300" stroke="#2176AE" strokeWidth="2.2"/>
  <line x1="60" y1="250" x2="420" y2="40" stroke="#e67e22" strokeWidth="2.2"/>
  <text x="396" y="272" fontSize="13" fontWeight="bold" fill="#2176AE">N<tspan fontSize="9" dy="3">x</tspan></text>
  <text x="392" y="40" fontSize="13" fontWeight="bold" fill="#e67e22">A<tspan fontSize="9" dy="3">x</tspan></text>
  {/* Flächenbuchstaben */}
  <g fontSize="14" fontWeight="bold" textAnchor="middle">
    <text x="78" y="100" fill="#1a5c8c">A</text>
    <text x="95" y="141" fill="#a0521a">B</text>
    <text x="95" y="210" fill="#a0521a">C</text>
    <text x="150" y="146" fill="#c0392b">D</text>
    <text x="150" y="187" fill="#c0392b">E</text>
  </g>
  {/* Punkte */}
  <circle cx="130" cy="108" r="5" fill="#c0392b"/>
  <circle cx="210" cy="163" r="5" fill="#555"/>
  {/* Hinweispfeile */}
  <line x1="178" y1="62" x2="137" y2="101" stroke="#c0392b" strokeWidth="1.3" markerEnd="url(#arr-wv)"/>
  <g fontSize="11" fontWeight="bold" fill="#c0392b">
    <text x="182" y="46">Cournotscher Punkt</text>
    <text x="182" y="59">im Monopol</text>
  </g>
  <line x1="300" y1="166" x2="220" y2="164" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-wv-g)"/>
  <g fontSize="11" fill="#555">
    <text x="305" y="164">Marktgleichgewicht im</text>
    <text x="305" y="178">homogenen Polypol</text>
  </g>
  {/* Legende */}
  <line x1="20" y1="327" x2="460" y2="327" stroke="#ddd" strokeWidth="1"/>
  <g fontSize="10.5" fill="#555">
    <rect x="40" y="335" width="12" height="10" fill="#dbeeff" stroke="#2176AE" strokeWidth="0.8"/>
    <text x="57" y="344">KR im Monopol</text>
    <rect x="160" y="335" width="12" height="10" fill="#fff3e0" stroke="#e67e22" strokeWidth="0.8"/>
    <text x="177" y="344">PR im Monopol</text>
    <rect x="280" y="335" width="12" height="10" fill="#fdecea" stroke="#c0392b" strokeWidth="0.8"/>
    <text x="297" y="344">Wohlfahrtsverlust</text>
  </g>
</svg>

| | **Homogenes Polypol** | **Monopol** |
|---|---|---|
| Konsumentenrente $KR$ | $A + B + D$ | $A$ |
| Produzentenrente $PR$ | $C + E$ | $B + C$ |
| Wohlfahrt $KR + PR$ | $A + B + C + D + E$ | $A + B + C$ |

$$
\text{Wohlfahrtsverlust im Monopol} = (A + B + C + D + E) - (A + B + C) = D + E
$$

**Ein homogenes Polypol hat eine _höhere gesamtwirtschaftliche Wohlfahrt_ als ein Monopol. Die PR fällt im Monopol jedoch größer aus als im homogenen Polypol ($B + C > C + E$, also $B > E$).**

**Trotzdem gilt:** Der Mehrzuwachs der PR im Monopol ($B$) kompensiert nicht den Verlust, der in der KR entsteht ($B + D$).
:::