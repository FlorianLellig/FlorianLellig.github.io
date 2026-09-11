# 3. Theorie des Haushaltes

## 3.1 - Entwicklung und Determinanten der Nachfrage

**Konsumausgaben der privaten Haushalte** (∑ = 100 %)

| Verwendungszweck | 1970 | 1991 | 2019 | 2025 |
|---|---|---|---|---|
| Nahrungsmittel, Getränke, Tabakwaren | 24,5 % | 16,9 % | 13,5 % | 14,1 % |
| Bekleidung, Schuhe | 9,7 % | 7,4 % | 4,4 % | 3,9 % |
| Wohnung inkl. Nebenkosten | 17,6 % | 19,1 % | 23,4 % | 23,0 % |
| Möbel, Leuchten, Haushaltsgeräte | 9,4 % | 7,6 % | 5,3 % | 4,8 % |
| Verkehr, Nachrichtenübermittlung | 12,5 % | 16,6 % | 17,8 % | 17,5 % |
| Freizeit, Unterhaltung, Kultur | 9,5 % | 10,7 % | 10,5 % | 10,5 % |
| Beherbergung, Gaststätten | 4,9 % | 5,8 % | 6,3 % | 6,3 % |
| Sonstiges: z.B. Gesundheits- u. Körperpflege,<br/>Bildung, Versicherungs- u. Finanzdienstleistungen | 11,9 % | 15,9 % | 18,8 % | 19,9 % |

:::note
In absoluten Werten ist bei allen Gütergruppen ein Anstieg im gesamten Betrachtungszeitraum festzustellen. Da aber das Einkommen teilweise wesentlich stärker gestiegen ist, geht der relative Anteil für manche Güterkategorien zurück.
:::

- Daten spiegeln die **Einkommenselastizität der Nachfrage** wider
  - **Superiore Güter**: Bei steigendem Einkommen wird prozentual mehr für diese ausgegeben
  - **Normale Güter**: Bei steigendem Einkommen prozentual unverändert
  - **Sättigungsgüter**: Bei steigendem Einkommen wird prozentual weniger für diese ausgegeben
  - **Inferiore Güter**: Bei steigendem Einkommen wird sogar **absolut weniger** nachgefragt (z.B. billige Grundnahrungsmittel, die durch hochwertigere ersetzt werden)


### 3.1.1 - Nachfragefunktion

Allgemein ist die Nachfrage $N_x$ nach einem Gut X von mehreren Größen abhängig. Formal lassen sich diese Zusammenhänge über die **Nachfragefunktion** darstellen:

$$
N_x = f(p_x,\ U_x,\ Y,\ p_y,\ p_z,\ E)
$$

Die einzelnen Elemente der Formel bedeuten:

| Symbol | Größe |
|---|---|
| $N_x$ | Nachfrage nach dem Gut X |
| $p_x$ | Preis des Gutes X |
| $U_x$ | Nutzen (Wertschätzung) dieses Gutes X |
| $Y$ | (verfügbares) Einkommen |
| $p_y$ | Preise von **Substitutionsgütern** (Güter, die X ersetzen können) |
| $p_z$ | Preise von **Komplementärgütern** (Güter, die zusammen mit X genutzt werden) |
| $E$ | Erwartungen (z.B. hinsichtlich der zukünftigen Preisentwicklung des Gutes X) |

## 3.2 - Indifferenzkurve, Budgetgerade, Haushaltsgleichgewicht

### 3.2.1 - Indifferenzkurve
- Verbindet alle Gütermengenkombinationen, die dem Haushalt **denselben Nutzen** stiften
  - Alle Punkte auf der Funktion/Linie haben den gleichen Nutzen
- Besonderheit: Ordinale Nutzenmessung
  - Ordinal setzt Verschiedenartigkeit und Rangordnung voraus
  - Anderer Ansatz (Grenznutzenanalyse) setzt Kardinalität und damit zusätzlich genaue Abstandsbestimmung voraus
    - _"diese Pizza stiftet mir 42 Nutzeneinheiten"_
    - Deutlich **Unrealistischer**

#### Verwendungszweck
- Indifferenzkurve sagt primär **nur aus, was ein Haushalt wirklich haben will**
- Da menschliche Bedürfnisse (nahezu) unendlich sind würde ein Haushalt versuchen diese Kurve so weit nach rechts-oben zu verschieben wie nur möglich
  - Erst in **Kombination mit Budgetgerade** zeigt sich, was bei gegebenem Einkommen finanzierbar ist

#### Voraussetzungen
1. **Konsistenzbedingung**:
   - entweder $a \lt b$ oder $a = b$ oder $a \gt b$
   - Eine der Aussagen trifft auf mich zu, nicht nur Heute sondern auch Morgen (Konsistent)
2. **Transitivitätsbedingung**:
   - Wenn $a \lt b$ und $b \lt c$, dann gilt auch $a \lt c$

#### Verlauf einer Indifferenzkurve
>Der Verlauf einer Indifferenzkurve hängt davon ab, ob Güter **vollständig substitutiv** (beliebig gegeneinander austauschbar), **vollständig komplementär** (nur gemeinsam in festem Verhältnis nutzbar) oder wie im Normalfall **beschränkt substitutiv** (austauschbar, aber je knapper ein Gut, desto mehr vom anderen nötig) sind

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"720px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-ik" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
  </defs>

  {/* Panel 1: vollständig substitutiv */}
  <text x="130" y="34" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Vollständig substitutiv</text>
  <line x1="60" y1="230" x2="205" y2="230" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-ik)"/>
  <line x1="60" y1="230" x2="60" y2="55" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-ik)"/>
  <text x="50" y="66" textAnchor="end" fontSize="11" fill="#555">q₂</text>
  <text x="208" y="246" textAnchor="middle" fontSize="11" fill="#555">q₁</text>
  <line x1="75" y1="85" x2="190" y2="220" stroke="#2176AE" strokeWidth="2.2"/>
  <text x="130" y="264" textAnchor="middle" fontSize="10.5" fontStyle="italic" fill="#555">fallende Gerade</text>
  <text x="130" y="281" textAnchor="middle" fontSize="11" fill="#333">Butter / Margarine</text>

  {/* Panel 2: vollständig komplementär */}
  <text x="370" y="34" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Vollständig komplementär</text>
  <line x1="300" y1="230" x2="445" y2="230" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-ik)"/>
  <line x1="300" y1="230" x2="300" y2="55" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-ik)"/>
  <text x="290" y="66" textAnchor="end" fontSize="11" fill="#555">q₂</text>
  <text x="448" y="246" textAnchor="middle" fontSize="11" fill="#555">q₁</text>
  <path d="M 340 80 L 340 180 L 435 180" fill="none" stroke="#2176AE" strokeWidth="2.2"/>
  <text x="370" y="264" textAnchor="middle" fontSize="10.5" fontStyle="italic" fill="#555">rechter Winkel</text>
  <text x="370" y="281" textAnchor="middle" fontSize="11" fill="#333">linker / rechter Schuh</text>

  {/* Panel 3: beschränkt substitutiv */}
  <text x="610" y="34" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">Beschränkt substitutiv</text>
  <line x1="540" y1="230" x2="685" y2="230" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-ik)"/>
  <line x1="540" y1="230" x2="540" y2="55" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-ik)"/>
  <text x="530" y="66" textAnchor="end" fontSize="11" fill="#555">q₂</text>
  <text x="688" y="246" textAnchor="middle" fontSize="11" fill="#555">q₁</text>
  <path d="M 558 80 Q 575 200 675 215" fill="none" stroke="#2176AE" strokeWidth="2.2"/>
  <text x="610" y="264" textAnchor="middle" fontSize="10.5" fontStyle="italic" fill="#555">konvex zum Ursprung</text>
  <text x="610" y="281" textAnchor="middle" fontSize="11" fill="#333">Kaffee / Kuchen</text>
</svg>

:::tip Grenzrate der Substitution
Die Grenzrate der Substitution gibt an, wie viel man bereit ist von einem _Gut 2_ herzugeben um eine Einheit mehr von _Gut 1_ zu bekommen.

Formal gilt somit für die Grenzrate der Substitution (GRS):

$$
GRS = \frac{-\Delta q_2}{\Delta q_1}
$$

Für sehr kleine (infinitesimale) Änderungen schreibt man:

$$
GRS = \frac{-dq_2}{dq_1} = \tan \alpha
$$

Das Minuszeichen sorgt dafür, dass die GRS positiv ist, obwohl $q_2$ sinkt, wenn $q_1$ steigt. $\alpha$ ist der Steigungswinkel der Indifferenzkurve im betrachteten Punkt.

Die GRS nimmt **an jedem Punkt auf der Kurve einen anderen Wert** an. Dies bedeutet, dass das Austauschverhältnis zwischen zwei Gütern davon abhängt, welche Mengen man von diesen Gütern in der Ausgangslage 

- **Beispiel:** _Gut 1 = Kaffee, Gut 2 = Kuchen_
  - Du besitzt 1 Kaffee und 5 Stück Kuchen
  - $GRS = 2$ bedeutet, dass du bereit bist für einen Kaffee zwei Stücke Kuchen herzugeben - ohne das es dir schlechter geht.
:::

:::warning Steigung in einem Punkt – Reminder zu dq₂/dq₁
- **Δ (Delta)** steht für eine **endliche Änderung**: $\frac{\Delta q_2}{\Delta q_1}$ ist die Steigung der Verbindungsgeraden (Sekante) zwischen **zwei Punkten** auf der Kurve, also das durchschnittliche Tauschverhältnis über ein ganzes Stück
- **d** steht für eine **unendlich kleine Änderung**: $\frac{dq_2}{dq_1}$ ist die **Ableitung**, also die Steigung der **Tangente** in genau **einem Punkt**. Man erhält sie, wenn man $\Delta q_1$ gegen 0 laufen lässt:

$$
\frac{dq_2}{dq_1} = \lim_{\Delta q_1 \to 0} \frac{\Delta q_2}{\Delta q_1}
$$

- Warum das für die GRS wichtig ist: Die Indifferenzkurve ist **gekrümmt**, ihre Steigung ändert sich also von Punkt zu Punkt. Nur die Ableitung liefert die GRS für **genau die** Ausgangsmenge, die man gerade betrachtet
- $\tan \alpha$ ist dasselbe in geometrischer Form: die Steigung der Tangente ist der Tangens ihres Winkels $\alpha$ zur $q_1$-Achse
:::

### 3.2.2 - Budgetgerade + Haushaltsgleichgewicht

Die Indifferenzkurve bekommt erst richtige Relevanz in Kombination mit der Budgetgerade (Bilanzgerade).
- Ermöglicht grafischen Zusammenhang zwischen Budgetgerade und Indifferenzkurve
  - _Was ist die Güterkombination, mit der ich den bestmöglichen Nutzen **mit dem zu Verfügung stehenden Budget** rausholen kann?_
    - Dieser Punkt stellt das **Haushaltsgleichgewicht** dar

<svg viewBox="0 0 760 325" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"760px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-bg" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <marker id="arr-bg-grey" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#555"/>
    </marker>
  </defs>

  {/* (a) Budgetgerade allein */}
  <text x="195" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">(a) Budgetgerade</text>
  <line x1="60" y1="270" x2="330" y2="270" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-bg)"/>
  <line x1="60" y1="270" x2="60" y2="40" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-bg)"/>
  <text x="60" y="32" textAnchor="middle" fontSize="11" fill="#555">Gut 2</text>
  <text x="336" y="274" fontSize="11" fill="#555">Gut 1</text>
  <line x1="60" y1="80" x2="300" y2="270" stroke="#e67e22" strokeWidth="2.2"/>
  <text x="52" y="84" textAnchor="end" fontSize="11" fill="#333">Y/p₂</text>
  <text x="300" y="288" textAnchor="middle" fontSize="11" fill="#333">Y/p₁</text>
  <path d="M 270 270 A 30 30 0 0 1 276.5 251.4" fill="none" stroke="#333" strokeWidth="1.2"/>
  <text x="256" y="259" textAnchor="middle" fontSize="12" fontStyle="italic" fill="#333">β</text>
  <text x="250" y="166" textAnchor="middle" fontSize="11" fill="#555">Budgetgerade</text>
  <line x1="235" y1="172" x2="211" y2="196" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-bg-grey)"/>
  <text x="330" y="110" textAnchor="end" fontSize="11.5" fill="#333">tan β = (Y/p₂) / (Y/p₁)</text>
  <text x="330" y="128" textAnchor="end" fontSize="11.5" fill="#333">= p₁ / p₂</text>

  {/* (b) Budgetgerade + Indifferenzkurven */}
  <text x="595" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">(b) Budgetgerade und Indifferenzkurven</text>
  <line x1="460" y1="270" x2="730" y2="270" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-bg)"/>
  <line x1="460" y1="270" x2="460" y2="40" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-bg)"/>
  <text x="460" y="32" textAnchor="middle" fontSize="11" fill="#555">Gut 2</text>
  <text x="736" y="274" fontSize="11" fill="#555">Gut 1</text>
  <path d="M 486 88 Q 500 235 712 258" fill="none" stroke="#2176AE" strokeWidth="1.6"/>
  <path d="M 500 60 Q 520 179.2 700 218.3" fill="none" stroke="#2176AE" strokeWidth="2.2"/>
  <path d="M 535 55 Q 575 140 735 205" fill="none" stroke="#2176AE" strokeWidth="1.6"/>
  <line x1="460" y1="80" x2="700" y2="270" stroke="#e67e22" strokeWidth="2.2"/>
  <circle cx="560" cy="159.2" r="4.5" fill="#333"/>
  <text x="571" y="156" fontSize="13" fontWeight="bold" fill="#333">A</text>
  <line x1="484" y1="98" x2="494" y2="108" stroke="#c0392b" strokeWidth="2.2"/>
  <line x1="494" y1="98" x2="484" y2="108" stroke="#c0392b" strokeWidth="2.2"/>
  <text x="472" y="232" fontSize="9.5" fontWeight="bold" fill="#922b21">X = ungünstig:</text>
  <text x="472" y="245" fontSize="9.5" fill="#922b21">gleiches Budget, aber</text>
  <text x="472" y="258" fontSize="9.5" fill="#922b21">niedrigerer Nutzen als in A</text>
  <text x="700" y="58" textAnchor="end" fontSize="11" fill="#555">Indifferenzkurven</text>
  <line x1="650" y1="66" x2="594" y2="128" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-bg-grey)"/>

  {/* Legende */}
  <line x1="20" y1="297" x2="740" y2="297" stroke="#ddd" strokeWidth="1"/>
  <line x1="40" y1="312" x2="66" y2="312" stroke="#e67e22" strokeWidth="2.2"/>
  <text x="72" y="316" fontSize="10.5" fill="#555">Budgetgerade</text>
  <line x1="165" y1="312" x2="191" y2="312" stroke="#2176AE" strokeWidth="2"/>
  <text x="197" y="316" fontSize="10.5" fill="#555">Indifferenzkurven</text>
  <circle cx="320" cy="312" r="4" fill="#333"/>
  <text x="330" y="316" fontSize="10.5" fill="#555">A = Haushaltsgleichgewicht (Tangentialpunkt)</text>
  <line x1="565" y1="307" x2="575" y2="317" stroke="#c0392b" strokeWidth="2"/>
  <line x1="575" y1="307" x2="565" y2="317" stroke="#c0392b" strokeWidth="2"/>
  <text x="582" y="316" fontSize="10.5" fill="#555">ungünstige Kombination</text>
</svg>

- **(a) Budgetgerade:** alle Güterkombinationen, die das Einkommen $Y$ bei den Preisen $p_1$ und $p_2$ **genau ausschöpfen**. Die Achsenabschnitte $Y/p_1$ und $Y/p_2$ sind die Mengen, die man bekäme, wenn man alles für ein einziges Gut ausgibt. Die Steigung $\tan \beta = p_1 / p_2$ ist das **Preisverhältnis**
- **(b) Haushaltsgleichgewicht:** Legt man die Indifferenzkurven darüber, ist die **höchste noch erreichbare** Indifferenzkurve diejenige, die die Budgetgerade gerade **berührt**. Der Berührpunkt **A** ist das Haushaltsgleichgewicht – dort gilt $GRS = p_1 / p_2$
- Der Punkt **X** liegt zwar ebenfalls auf der Budgetgerade (kostet also gleich viel), aber auf einer **niedrigeren** Indifferenzkurve – mit demselben Geld ist in A ein höheres Nutzenniveau erreichbar

:::info Bedingung für das Haushaltsgleichgewicht
Im Haushaltsgleichgewicht haben die Indifferenzkurve und die Budgetgerade die **gleiche Steigung**. Somit gilt auch:

$$
\tan \alpha = \frac{-dq_2}{dq_1} = \frac{p_1}{p_2} = \tan \beta
\qquad\qquad
{\small \left( \tan = \tfrac{\text{Gegenkathete}}{\text{Ankathete}} \right)}
$$

Die Grenzrate der Substitution entspricht somit im Haushaltsgleichgewicht dem **Verhältnis der Güterpreise**.
:::

#### Änderungen der Einflussgrößen

Was passiert mit dem Haushaltsgleichgewicht, wenn sich eine der Einflussgrößen ändert?

| Änderung | Grafische Wirkung | Neues Gleichgewicht |
|---|---|---|
| **Erhöhung des Einkommens** | Budgetgerade verschiebt sich **parallel nach rechts** | Verstärkte Nachfrage nach **beiden** Gütern – außer bei Sättigungsgütern oder inferioren Gütern |
| **Veränderung der Bedürfnisstruktur** (= veränderte Wertschätzung der Güter) | Indifferenzkurven ändern ihre **Form** | Nachfrage nach dem **wichtiger** gewordenen Gut steigt, nach dem **unwichtigeren** Gut fällt |
| **Erhöhung des Preises für ein Gut** | Budgetgerade **dreht** sich (Achsenabschnitt des teureren Gutes rückt näher zum Ursprung) | Nachgefragte Menge des **teurer gewordenen** Gutes sinkt (→ *Nachfragefunktion*). Menge des **zweiten** Gutes kann steigen, gleich bleiben oder fallen (→ *Substitutions- und Einkommenseffekt*) |

#### Auswirkungen von Steuern

| Steuer | Grafische Wirkung | Neues Gleichgewicht |
|---|---|---|
| **Einkommensteuer** (Einführung bzw. Erhöhung) | Verfügbares Einkommen sinkt → Budgetgerade verschiebt sich **parallel nach links** | Nur noch eine **niedrigere** Indifferenzkurve erreichbar. **Beide** Güter werden im Normalfall weniger nachgefragt |
| **Mehrwertsteuer** (Einführung bzw. Erhöhung, sofern zumindest teilweise überwälzt) | Gestiegene Preise **beider** Güter ermöglichen nur noch geringere Konsummengen → ebenfalls **Linksverschiebung** der Budgetgerade | Effekt wie bei der Einkommensteuer: niedrigere Indifferenzkurve, beide Güter weniger nachgefragt |
| **Spezifische Verbrauchsteuer** (Einführung bzw. Erhöhung, bei Überwälzung) | Nur ein Gut wird teurer → Budgetgerade **dreht sich nach innen** | Niedrigere Indifferenzkurve erreichbar. Das **besteuerte** Gut wird weniger nachgefragt, beim **zweiten** Gut können Substitutions- und Einkommenseffekt zu unterschiedlichen Ergebnissen führen |

:::danger
Die **Ceteris-paribus-Methode** sieht vor, dass nur ein Wert verändert werden soll (Abschnitt 1.3.2). Dies ist zwar in Modellen Möglich, in der Realität aber nicht annehmar, da kleinste Veränderungen viele Wechselwirkungen mit sich bringen.
:::


## 3.3 - Marktnachfrage und Nachfrageelastizitäten

**_Die folgenden Elastizitätsansätze sind konkrete Implementationen der ceteris-paribus-Methode bezogen auf die Nachfragefunktion_**

$$
N_x = f(p_x,\ U_x,\ Y,\ p_y,\ p_z,\ E)
$$
(Siehe Abschnitt 3.1.1)

### 3.3.1 - Marktnachfrage

- Die **Marktnachfrage** (= Gesamtnachfrage) erhält man durch **Aggregation** der verschiedenen individuellen Nachfragefunktionen – man addiert für jeden Preis die Mengen, die alle Haushalte zusammen nachfragen
  - Beispiel: zwei Haushalte mit je $q_i = 15 - p$ ergeben die Marktnachfrage $q = 30 - 2p$
- Sie weist im Normalfall eine **negative Steigung** auf (je höher der Preis, desto geringer die nachgefragte Menge) und wird vereinfachend meist als **lineare Funktion** dargestellt
- Die Gesamtnachfrage ist gekennzeichnet durch zwei Eckpunkte:

| Begriff | Bedeutung | Grafisch |
|---|---|---|
| **Prohibitivpreis** | Der Preis, bei dem **niemand mehr** das Gut nachfragt, weil er so hoch ist | Schnittpunkt mit der **Preisachse** ($q = 0$) |
| **Sättigungsmenge** | Die **maximal** nachgefragte Menge – selbst bei einem Preis von 0 würde nicht mehr nachgefragt | Schnittpunkt mit der **Mengenachse** ($p = 0$) |

### 3.3.2 - Preiselastizität der Nachfrage

:::tip
Im folgenden wird Ceteris-paribus auf $p_x$, sprich den Preis des Gutes X, angewendet.
:::

Die **Preiselastizität der Nachfrage** gibt an, um wie viel **Prozent** sich die nachgefragte Menge eines Gutes verändert, wenn sich der Preis dieses Gutes um **ein Prozent** verändert.

- Bei einer fallenden linearen Nachfragefunktion ist die Preiselastizität **negativ** (Preis rauf, Menge runter)
- Sie nimmt aber **an jedem Punkt der Funktion einen anderen Wert** an – im oberen Bereich höhere absolute Werte als im unteren Bereich

Formal gilt:

$$
\eta = \frac{\dfrac{dN_x}{N_x}}{\dfrac{dp_x}{p_x}} = \frac{dN_x}{dp_x} \cdot \frac{p_x}{N_x}
$$

- Der linke Bruch ist die Definition: **relative Mengenänderung** geteilt durch **relative Preisänderung**
- Der rechte Ausdruck ist die Rechenform: **Steigung der Nachfragefunktion** ($dN_x/dp_x$) mal **Verhältnis von Preis zu Menge** im betrachteten Punkt

| $\lvert \eta \rvert$ | Bezeichnung | Bedeutung |
|---|---|---|
| $\gt 1$ | **elastisch** | Menge reagiert überproportional auf den Preis |
| $= 1$ | **proportional** (isoelastisch) | Menge reagiert genau proportional |
| $\lt 1$ | **unelastisch** | Menge reagiert unterproportional auf den Preis |

#### Beispiel: $N_x = q_x = 30 - 2p_x$

- **Prohibitivpreis:** $q_x = 0 \Rightarrow 30 - 2p_x = 0 \Rightarrow p_x = 15$
- **Sättigungsmenge:** $p_x = 0 \Rightarrow q_x = 30$
- **Steigung:** $\dfrac{dq_x}{dp_x} = -2$ – sie ist bei einer linearen Funktion **überall gleich**
- **Elastizität:** $\eta = -2 \cdot \dfrac{p_x}{q_x}$ – sie ändert sich von Punkt zu Punkt, weil sich das Verhältnis $p_x / q_x$ ändert

| Punkt | $p_x$ | $q_x = 30 - 2p_x$ | $\eta = -2 \cdot \frac{p_x}{q_x}$ | Bereich |
|---|---|---|---|---|
| A | 10 | 10 | $-2 \cdot \frac{10}{10} = -2$ | elastisch |
| B | 7,5 | 15 | $-2 \cdot \frac{7{,}5}{15} = -1$ | proportional |
| C | 5 | 20 | $-2 \cdot \frac{5}{20} = -0{,}5$ | unelastisch |

<svg viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"680px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-nf" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
  </defs>

  {/* Hilfslinien */}
  <line x1="240" y1="140" x2="240" y2="300" stroke="#ccc" strokeWidth="1" strokeDasharray="3 3"/>
  <line x1="80" y1="140" x2="240" y2="140" stroke="#ccc" strokeWidth="1" strokeDasharray="3 3"/>
  <line x1="320" y1="180" x2="320" y2="300" stroke="#ccc" strokeWidth="1" strokeDasharray="3 3"/>
  <line x1="80" y1="180" x2="320" y2="180" stroke="#ccc" strokeWidth="1" strokeDasharray="3 3"/>
  <line x1="400" y1="220" x2="400" y2="300" stroke="#ccc" strokeWidth="1" strokeDasharray="3 3"/>
  <line x1="80" y1="220" x2="400" y2="220" stroke="#ccc" strokeWidth="1" strokeDasharray="3 3"/>

  {/* Achsen */}
  <line x1="80" y1="300" x2="605" y2="300" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-nf)"/>
  <line x1="80" y1="300" x2="80" y2="35" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-nf)"/>
  <text x="80" y="26" textAnchor="middle" fontSize="11" fill="#555">p (Preis)</text>
  <text x="612" y="304" fontSize="11" fill="#555">q (Menge)</text>
  <text x="240" y="318" textAnchor="middle" fontSize="10.5" fill="#555">10</text>
  <text x="320" y="318" textAnchor="middle" fontSize="10.5" fill="#555">15</text>
  <text x="400" y="318" textAnchor="middle" fontSize="10.5" fill="#555">20</text>
  <text x="560" y="318" textAnchor="middle" fontSize="10.5" fill="#555">30</text>
  <text x="70" y="224" textAnchor="end" fontSize="10.5" fill="#555">5</text>
  <text x="70" y="184" textAnchor="end" fontSize="10.5" fill="#555">7,5</text>
  <text x="70" y="144" textAnchor="end" fontSize="10.5" fill="#555">10</text>
  <text x="70" y="64" textAnchor="end" fontSize="10.5" fill="#555">15</text>

  {/* Nachfragefunktion */}
  <line x1="80" y1="60" x2="560" y2="300" stroke="#2176AE" strokeWidth="2.4"/>
  <text x="478" y="240" fontSize="11.5" fontWeight="bold" fill="#1a5c8c">q = 30 − 2p</text>

  {/* Eckpunkte */}
  <circle cx="80" cy="60" r="4" fill="#e67e22"/>
  <text x="92" y="56" fontSize="10.5" fill="#e67e22">Prohibitivpreis p = 15</text>
  <circle cx="560" cy="300" r="4" fill="#e67e22"/>
  <text x="560" y="336" textAnchor="middle" fontSize="10.5" fill="#e67e22">Sättigungsmenge q = 30</text>

  {/* Punkte A, B, C */}
  <circle cx="240" cy="140" r="4.5" fill="#c0392b"/>
  <text x="250" y="132" fontSize="11" fontWeight="bold" fill="#922b21">A: η = −2</text>
  <circle cx="320" cy="180" r="4.5" fill="#333"/>
  <text x="330" y="172" fontSize="11" fontWeight="bold" fill="#333">B: η = −1</text>
  <circle cx="400" cy="220" r="4.5" fill="#27ae60"/>
  <text x="410" y="212" fontSize="11" fontWeight="bold" fill="#1a6b3c">C: η = −0,5</text>

  {/* Bereiche */}
  <text x="150" y="100" fontSize="10.5" fontStyle="italic" fill="#922b21">elastisch (|η| &gt; 1)</text>
  <text x="440" y="285" textAnchor="end" fontSize="10.5" fontStyle="italic" fill="#1a6b3c">unelastisch (|η| &lt; 1)</text>

  <line x1="20" y1="344" x2="660" y2="344" stroke="#ddd" strokeWidth="1"/>
  <text x="340" y="357" textAnchor="middle" fontSize="10.5" fill="#555">Gleiche Steigung überall, aber p/q ändert sich → die Elastizität sinkt entlang der Geraden nach unten</text>
</svg>

:::tip Interpretation
Im Punkt A gilt $\eta = -2$: Steigt der Preis um 1 %, sinkt die nachgefragte Menge um 2 %. Im Punkt C gilt $\eta = -0{,}5$: Steigt der Preis um 1 %, sinkt die Menge nur um 0,5 %. Oben auf der Geraden (hoher Preis, kleine Menge) reagiert die Nachfrage also stark, unten (niedriger Preis, große Menge) nur schwach – obwohl die Steigung der Geraden überall dieselbe ist.
:::

### 3.3.3 - Einkommenselastizität der Nachfrage
:::tip
Im folgenden wird Ceteris-paribus auf $Y$, sprich das Einkommen, angewendet.
:::

Die **Einkommenselastizität der Nachfrage** gibt an, um wie viel **Prozent** sich die nachgefragte Menge eines Gutes verändert, wenn sich das **Einkommen** um **ein Prozent** verändert.

- Sie ist im Normalfall **positiv** (Einkommen rauf, Menge rauf)
- Ihr Wert entscheidet darüber, zu welcher **Güterkategorie** ein Gut gehört → Unterscheidung zwischen **superioren Gütern**, **normalen Gütern**, **Sättigungsgütern** (= einkommensunabhängigen Gütern) und **inferioren Gütern** (vgl. Abschnitt 3.1)

Formal gilt:

$$
\eta = \frac{\dfrac{dN_x}{N_x}}{\dfrac{dY}{Y}} = \frac{dN_x}{dY} \cdot \frac{Y}{N_x}
$$

- Der linke Bruch ist die Definition: **relative Mengenänderung** geteilt durch **relative Einkommensänderung**
- Der rechte Ausdruck ist die Rechenform: **Reaktion der Nachfrage auf das Einkommen** ($dN_x/dY$) mal **Verhältnis von Einkommen zu Menge** im betrachteten Punkt

| $\eta$ | Gütertyp | Bedeutung |
|---|---|---|
| $\gt 1$ | **superiores Gut** | Nachfrage steigt **überproportional** – der Ausgabenanteil wächst mit dem Einkommen |
| $= 1$ | **normales Gut** | Nachfrage steigt **proportional** – der Ausgabenanteil bleibt gleich |
| $0 \leq \eta \lt 1$ | **Sättigungsgut** (einkommensunabhängig) | Nachfrage steigt **kaum oder gar nicht** – der Ausgabenanteil sinkt |
| $\lt 0$ | **inferiores Gut** | Nachfrage **sinkt** bei steigendem Einkommen – man steigt auf hochwertigere Alternativen um |

### 3.3.4 - Kreuzpreiselastizität der Nachfrage
:::tip
Im folgenden wird Ceteris-paribus auf $p_y$, sprich den Preis eines **anderen** Gutes Y, angewendet.
:::

Die **Kreuzpreiselastizität der Nachfrage** gibt an, um wie viel **Prozent** sich die nachgefragte Menge eines Gutes verändert, wenn sich der **Preis eines anderen Gutes** um **ein Prozent** verändert.

- Sie kann **unterschiedliche Werte** annehmen – auch das **Vorzeichen** ist nicht festgelegt
- Dies hängt davon ab, ob es sich um **substitutive Güter**, **komplementäre Güter** oder **unverbundene Güter** handelt

Formal gilt:

$$
\eta = \frac{\dfrac{dN_x}{N_x}}{\dfrac{dp_y}{p_y}} = \frac{dN_x}{dp_y} \cdot \frac{p_y}{N_x}
$$

- Der linke Bruch ist die Definition: **relative Mengenänderung von X** geteilt durch **relative Preisänderung von Y**
- Der rechte Ausdruck ist die Rechenform: **Reaktion der Nachfrage nach X auf den Preis von Y** ($dN_x/dp_y$) mal **Verhältnis von Preis Y zu Menge X** im betrachteten Punkt

| $\eta$ | Güterbeziehung | Bedeutung | Beispiel |
|---|---|---|---|
| $\gt 0$ | **substitutiv** | Wird Y teurer, weichen die Haushalte auf X aus → Nachfrage nach X **steigt** | Butter / Margarine |
| $\lt 0$ | **komplementär** | Wird Y teurer, wird auch weniger X gebraucht, da beide zusammen genutzt werden → Nachfrage nach X **sinkt** | Auto / Benzin |
| $= 0$ | **unverbunden** | Der Preis von Y hat **keinen Einfluss** auf die Nachfrage nach X | Brot / Fahrräder |