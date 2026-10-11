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