# 3. Speicherbasierte Synchonisation

## 3.1 - Wiederkehrende Synchronisationsprobleme

Ausgangslage für funktionierendes Threading ist die korrekte Handhabung von sogenannten **Synchronisationsproblemen**. Diese entstehen immer dann, wenn mehrere Prozesse oder Threads gleichzeitig auf gemeinsame Ressourcen zugreifen. Sie treten i.d.R. als eines der folgenden Szenarien auf:

### 3.1.1 - Betriebsmittelverwaltung

**Betriebsmittel** sind physische oder logische Ressourcen eines Systems (z.B. Drucker, Scanner, Festplatten, Netzwerkverbindungen), die von Prozessen oder Threads angefordert und exklusiv genutzt werden müssen.

- Es gibt nur eine **begrenzte Anzahl** gleichartiger Betriebsmittel, die jedoch von mehreren Prozessen oder Threads gleichzeitig benötigt werden
- Solange ein Betriebsmittel belegt ist, kann es kein anderer Prozess verwenden – alle Wartenden **blockieren**, bis es wieder freigegeben wird
- **Problem:** Zu viele gleichzeitige Anfragen führen zu langen Wartezeiten oder im schlimmsten Fall zu einem **Deadlock** (gegenseitiges Warten ohne Fortschritt)

### 3.1.2 - Erzeuger-Verbraucher-Problem

Beim **Erzeuger-Verbraucher-Problem** (engl. *Producer-Consumer Problem*) gibt es zwei Arten von Akteuren, die über einen gemeinsamen **Puffer** kommunizieren:

- **Erzeuger** (*Producer*): Produzieren Daten und legen diese im Puffer ab
- **Verbraucher** (*Consumer*): Entnehmen Daten aus dem Puffer und verarbeiten sie

Dabei entstehen zwei Synchronisationsbedingungen:

1. **Puffer leer:** Verbraucher müssen warten, wenn noch keine Daten vorliegen
2. **Puffer voll:** Erzeuger müssen warten, wenn der Puffer keine freie Kapazität mehr hat

**Ziel:** Erzeuger und Verbraucher müssen so koordiniert werden, dass weder auf leere noch auf volle Puffer unkontrolliert zugegriffen wird.

### 3.1.3 - Leser-Schreiber-Problem

Beim **Leser-Schreiber-Problem** greifen mehrere Prozesse oder Threads gleichzeitig auf dieselben Daten zu – manche nur lesend, andere schreibend.

- **Mehrere Leser gleichzeitig** sind unproblematisch, da sie die Daten nicht verändern
- **Schreibzugriffe** hingegen erfordern **exklusiven Zugriff** – während ein Schreiber aktiv ist, darf weder ein anderer Schreiber noch ein Leser auf die Daten zugreifen

**Problem:** Ohne Koordination können Leser veraltete oder inkonsistente Daten lesen, während ein Schreiber gerade ändert. Es gibt zwei klassische Varianten:
- **Leser bevorzugt:** Solange Leser vorhanden sind, warten Schreiber – kann zu **Schreiber-Verhungern** (*Writer Starvation*) führen
- **Schreiber bevorzugt:** Schreiber erhalten Vorrang – kann zu **Leser-Verhungern** führen

## 3.2 - Begriffliches

### 3.2.1 - Kritische Daten
Kritische Daten sind Daten, die **von Prozessen oder Threads gemeinsam benutzt werden**. Diese Daten sind von nebenläufigen Zugriffen gefärdet - man riskiert Dateninkonsistenz.

### 3.2.2 - Kritischer Abschnitt (Critical Section)
Ein Kritischer Abschnitt (eng. *Critical Section, Critical Region*) ist ein Code-Abschnitt, in dem auf die kritischen Daten zugegriffen wird. Diese zu einer bestimmten Menge Kritischer Daten gehörendenn Code-Abschnitte dürfen im Allgemeinen nicht in beliebiger zeitlicher Überlappung ausgeführt werden. Sollte dies allerdings doch notwendig sein, muss dabei die Einhaltung gewisser *Synchonisationsbedingungen* und damit die Konsistenz kritischer Daten gewährleistet sein

## 3.3 - Deadlock (Verklemmung)

Ein **Deadlock** (dt. *Verklemmung*) ist ein Zustand, in dem mehrere Prozesse bzw. Threads **gegenseitig aufeinander warten** – und zwar so, dass keiner von ihnen jemals weiterkommen kann.

- Es entsteht eine **zyklische Wartesituation**: Jeder Beteiligte wartet auf ein Betriebsmittel, das ein anderer Beteiligter gerade belegt hat – und dieser wartet wiederum auf etwas, das der Erste belegt
- Keiner der Prozesse kann in seiner Verarbeitung fortfahren, daher kommt das in Ausführung befindliche Programm **zum Stillstand**
- Ein einmal eingetretener Deadlock lässt sich **nur schwer auflösen** – meist bleibt nur das gewaltsame Beenden eines der beteiligten Prozesse
- Deadlocks **im Betriebssystemkern** sind besonders kritisch, da sie zu unkontrolliertem Verhalten des gesamten Systems führen können

:::tip Lösungsansatz
Da sich ein Deadlock im Nachhinein nur schwer beheben lässt, empfiehlt es sich, Programme so zu bauen, dass solche Verklemmungen **gar nicht erst entstehen** können. Die dafür nötigen Strategien werden in den Abschnitten 3.3.3 bis 3.3.6 behandelt. Eine mögliche Verklemmung kann bereits visuell herausgearbeitet werden – dazu dienen die **Wartegraphen**.
:::

### 3.3.1 - Wartegraphen

Ein **Wartegraph** (engl. *Wait-for Graph*, auch *Betriebsmittel-Belegungsgraph*) ist ein gerichteter Graph, der die Warte- und Belegungsbeziehungen zwischen Prozessen/Threads und Betriebsmitteln visualisiert. Damit lässt sich ein Deadlock erkennen: **Ein Zyklus im Wartegraphen bedeutet einen Deadlock.**

Der Graph besteht aus zwei Knotentypen und zwei Kantentypen:

| Element | Darstellung | Bedeutung |
|---|---|---|
| Prozess / Thread | Kreis `( )` | Ein aktiver Ausführungskontext |
| Betriebsmittel | Rechteck `[ ]` | Eine Ressource (z.B. Drucker, Lock) |
| Kante Prozess → Betriebsmittel | gerichteter Pfeil | Prozess **wartet** auf dieses Betriebsmittel (Anforderung) |
| Kante Betriebsmittel → Prozess | gerichteter Pfeil | Betriebsmittel ist von diesem Prozess **belegt** (Zuteilung) |

:::tip Merkhilfe für die Pfeilrichtung
Der Pfeil zeigt immer dorthin, **wo es hingehen soll**: Ein wartender Prozess „möchte zum Betriebsmittel“ (Pfeil zum Rechteck), ein belegtes Betriebsmittel „gehört zum Prozess“ (Pfeil zum Kreis).
:::

**Beispiele:**

<svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"760px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-wg" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
    <marker id="arr-wg-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#c0392b"/>
    </marker>
  </defs>

  {/* Panel (a): Belegung – R ist von A belegt */}
  <circle cx="112" cy="62" r="24" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="112" y="67" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">A</text>
  <rect x="88" y="196" width="48" height="48" fill="#f5f5f5" stroke="#555" strokeWidth="2"/>
  <text x="112" y="225" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#333">R</text>
  <line x1="112" y1="194" x2="112" y2="90" stroke="#555" strokeWidth="1.8" markerEnd="url(#arr-wg)"/>
  <text x="124" y="146" fontSize="10.5" fontStyle="italic" fill="#555">belegt von</text>
  <text x="112" y="278" textAnchor="middle" fontSize="12" fill="#555">(a)</text>

  {/* Panel (b): Warten – B wartet auf S */}
  <rect x="276" y="38" width="48" height="48" fill="#f5f5f5" stroke="#555" strokeWidth="2"/>
  <text x="300" y="67" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#333">S</text>
  <circle cx="300" cy="220" r="24" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="300" y="225" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">B</text>
  <line x1="300" y1="194" x2="300" y2="90" stroke="#555" strokeWidth="1.8" markerEnd="url(#arr-wg)"/>
  <text x="312" y="146" fontSize="10.5" fontStyle="italic" fill="#555">wartet auf</text>
  <text x="300" y="278" textAnchor="middle" fontSize="12" fill="#555">(b)</text>

  {/* Panel (c): Deadlock – Zyklus D → U → C → T → D */}
  <circle cx="560" cy="60" r="24" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="560" y="65" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">D</text>
  <rect x="626" y="126" width="48" height="48" fill="#f5f5f5" stroke="#555" strokeWidth="2"/>
  <text x="650" y="155" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#333">U</text>
  <circle cx="560" cy="240" r="24" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="560" y="245" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">C</text>
  <rect x="446" y="126" width="48" height="48" fill="#f5f5f5" stroke="#555" strokeWidth="2"/>
  <text x="470" y="155" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#333">T</text>

  <path d="M 590.8 65.4 A 90 90 0 0 1 644.6 119.2" stroke="#c0392b" strokeWidth="2" fill="none" markerEnd="url(#arr-wg-red)"/>
  <path d="M 644.6 180.8 A 90 90 0 0 1 590.8 234.6" stroke="#c0392b" strokeWidth="2" fill="none" markerEnd="url(#arr-wg-red)"/>
  <path d="M 529.2 234.6 A 90 90 0 0 1 475.4 180.8" stroke="#c0392b" strokeWidth="2" fill="none" markerEnd="url(#arr-wg-red)"/>
  <path d="M 475.4 119.2 A 90 90 0 0 1 529.2 65.4" stroke="#c0392b" strokeWidth="2" fill="none" markerEnd="url(#arr-wg-red)"/>

  <text x="634" y="84" fontSize="10.5" fontStyle="italic" fill="#922b21">wartet auf</text>
  <text x="628" y="222" fontSize="10.5" fontStyle="italic" fill="#922b21">belegt von</text>
  <text x="440" y="222" textAnchor="end" fontSize="10.5" fontStyle="italic" fill="#922b21">wartet auf</text>
  <text x="440" y="84" textAnchor="end" fontSize="10.5" fontStyle="italic" fill="#922b21">belegt von</text>
  <text x="560" y="155" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#c0392b">Zyklus</text>
  <text x="560" y="278" textAnchor="middle" fontSize="12" fill="#555">(c)</text>

  <line x1="20" y1="296" x2="740" y2="296" stroke="#ddd" strokeWidth="1"/>
  <text x="380" y="312" textAnchor="middle" fontSize="11" fill="#555">(a) Belegung  ·  (b) Warten  ·  (c) Deadlock – geschlossener Zyklus im Wartegraphen</text>
</svg>

- **(a) Belegung:** Prozess **A** hält Betriebsmittel **R** – die Kante geht von R nach A
- **(b) Warten:** Thread **B** wartet auf Betriebsmittel **S** – die Kante geht von B nach S
- **(c) Deadlock:** D wartet auf U, U ist von C belegt, C wartet auf T, T ist von D belegt → **geschlossener Zyklus = Deadlock**

:::info Zyklus = Deadlock
Sobald im Wartegraphen ein Zyklus entsteht, befinden sich alle beteiligten Prozesse in einer Verklemmung – keiner kann fortfahren, da alle auf einen der anderen warten. Genau diese Beobachtung ist die Grundlage für die **Deadlock-Erkennung** im Betriebssystem: Es genügt, den Wartegraphen regelmäßig auf Zyklen zu prüfen.
:::

### 3.3.2 - Bedingungen für Deadlocks

Ein Deadlock kann **nur dann** entstehen, wenn die folgenden drei Bedingungen (B1–B3) gleichzeitig erfüllt sind. Sie sind die *Voraussetzungen*. Tritt zusätzlich die vierte Bedingung (B4) ein, liegt der Deadlock tatsächlich vor.

#### Bedingung 1 - Exklusivität
- Auch genannt: _Mutual exclusion condition_
- Mindestens zwei Betriebsmittel können nur **exklusiv** benutzt werden, d.h. immer nur von einem Prozess gleichzeitig
- Beispiel: Ein Drucker kann nicht von zwei Prozessen gleichzeitig bedruckt werden

#### Bedingung 2 - Nachforderung
- Auch genannt: _Wait-for condition_ bzw. _Hold-and-wait condition_
- Prozesse, die **schon Betriebsmittel belegt haben**, können **weitere** Betriebsmittel anfordern – und behalten währenddessen die bereits belegten
- Beispiel: Ein Prozess hält den Drucker und fordert zusätzlich den Scanner an

#### Bedingung 3 - Nichtentziehbarkeit
- Auch genannt: _No preemption condition_
- Die belegten Betriebsmittel können den Prozessen **nicht (gewaltsam) entzogen** werden – nur der Prozess selbst kann sie freiwillig wieder freigeben
- Beispiel: Man kann einem Prozess mitten im Druckvorgang nicht einfach den Drucker wegnehmen

#### Bedingung 4 - Zyklisches Warten

:::danger Bedingung 4 – Zyklisches Warten (circular wait condition)
Ein Deadlock liegt vor, wenn zusätzlich zu B1–B3 gilt:

Es gibt eine Folge von Prozessen $P_0, P_1, \dots, P_{n-1}$, sodass für alle $i = 0, \dots, n-1$ gilt:

$$
P_i \text{ hat ein Betriebsmittel angefordert, das } P_{(i+1) \bmod n} \text{ belegt hat.}
$$
:::

**Was heißt das konkret?** Die Formel beschreibt nichts anderes als den **Zyklus im Wartegraphen** aus Abschnitt 3.3.1:

- Jeder Prozess $P_i$ in der Folge wartet auf etwas, das der **nächste** Prozess $P_{i+1}$ belegt hat
- Der Ausdruck $(i+1) \bmod n$ sorgt dafür, dass der **letzte** Prozess $P_{n-1}$ wieder auf den **ersten** Prozess $P_0$ wartet – denn $(n-1+1) \bmod n = 0$. Genau dadurch schließt sich die Kette zu einem **Ring**
- Weil jeder auf seinen Nachfolger wartet und der Ring geschlossen ist, kann **niemand** als Erster fertig werden

**Beispiel mit $n = 2$:** Prozess $P_0$ hält den Drucker und fordert den Scanner an. Prozess $P_1$ hält den Scanner und fordert den Drucker an.

| $i$ | $P_i$ wartet auf … | … das belegt ist von $P_{(i+1) \bmod 2}$ |
|---|---|---|
| 0 | Scanner | $P_1$ |
| 1 | Drucker | $P_0$ |

Beide Bedingungen sind erfüllt, die Kette ist geschlossen → **Deadlock**.

:::info Zusammenfassung der vier Bedingungen
| Nr. | Bedingung | Englisch | Kurzform |
|---|---|---|---|
| B1 | Exklusivität | mutual exclusion | Betriebsmittel nur exklusiv nutzbar |
| B2 | Nachforderung | hold and wait | Belegen **und** gleichzeitig weiter anfordern |
| B3 | Nichtentziehbarkeit | no preemption | Betriebsmittel können nicht entzogen werden |
| B4 | Zyklisches Warten | circular wait | Geschlossener Ring von Wartenden |

Alle Strategien gegen Deadlocks setzen an genau diesen Bedingungen an: Man sorgt dafür, dass **mindestens eine** von ihnen **niemals erfüllt** sein kann.
:::

### 3.3.3 - Strategien gegen Deadlocks im Überblick

Grundsätzlich lassen sich drei Herangehensweisen unterscheiden:

| Strategie | Zeitpunkt | Grundidee | Behandelt in |
|---|---|---|---|
| **Verhinderung** (*Prevention*) | Beim Entwurf / durch feste Regeln | Eine der Bedingungen B1–B3 wird grundsätzlich aufgehoben, **oder** die Betriebsmittelverteilung folgt festen Regeln, sodass B4 nicht eintreten kann | 3.3.4 |
| **Vermeidung** (*Avoidance*) | Zur Laufzeit, bei jeder Anforderung | B1–B3 dürfen gelten. Vor jeder Zuteilung wird geprüft, ob sie in einen gefährlichen Zustand führt – falls ja, muss der Prozess warten | 3.3.5, 3.3.6 |
| **Erkennung & Auflösung** (*Detection*) | Nachträglich | Deadlock zulassen, per Wartegraph erkennen und durch Abbruch eines Prozesses auflösen | 3.3.1 |

:::note Verhinderung vs. Vermeidung
Die beiden Begriffe klingen ähnlich, meinen aber Unterschiedliches:
- **Verhinderung** macht Deadlocks *strukturell unmöglich* – das System muss zur Laufzeit nichts prüfen, bezahlt aber mit Einschränkungen (z.B. schlechtere Auslastung der Betriebsmittel)
- **Vermeidung** lässt alle Voraussetzungen zu, trifft aber bei *jeder einzelnen Anforderung* eine Entscheidung. Dafür benötigt das System **Vorwissen** über den künftigen Bedarf der Prozesse
:::


### 3.3.4 - Verhinderung durch Zuteilungsregeln

Bei der **Verhinderung** wird das System so gebaut, dass ein Deadlock strukturell unmöglich ist. Dafür gibt es zwei Ansatzpunkte:

1. **Eine der Voraussetzungen B1, B2 oder B3 wird aufgehoben** – ohne Voraussetzung kein Deadlock
2. **Die Betriebsmittelverteilung erfolgt nach bestimmten Regeln**, sodass B4 (der geschlossene Ring) nicht eintreten kann

Die Vorlesung behandelt vier konkrete Verfahren: *Statische Zuteilung*, *Dynamische Zuteilung*, *Zuteilungsprioritäten* und *Spooling*.

#### Statische Zuteilung

- Prozesse (Threads) melden ihren **vollständigen Betriebsmittelbedarf im Voraus** an
- Ein Prozess läuft **erst dann los, wenn alle** benötigten Betriebsmittel verfügbar sind – er bekommt sie **auf einen Schlag** zugeteilt
- Ein laufender Prozess muss daher **nie nachfordern**, denn er besitzt bereits alles, was er braucht
    - ⇒ **B2 (Nachforderung) ist aufgehoben**
- **Beispiel: Two-Phase-Locking** – der Lebenszyklus eines Prozesses zerfällt in zwei strikt getrennte Phasen:
    1. **Lock-Phase:** Alle Betriebsmittel werden angefordert (gesperrt). In dieser Phase wird nichts freigegeben
    2. **Release-Phase:** Die Betriebsmittel werden nach und nach freigegeben. In dieser Phase wird nichts mehr angefordert

<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"640px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-2pl" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
    <marker id="arr-2pl-blue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2176AE"/>
    </marker>
    <marker id="arr-2pl-orange" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#e67e22"/>
    </marker>
  </defs>

  {/* Fläche unter der Kurve */}
  <path d="M 60 240 L 150 240 L 150 90 L 300 90 L 300 130 L 350 130 L 350 170 L 400 170 L 400 205 L 450 205 L 450 240 Z" fill="#e8f5e9" fillOpacity="0.7"/>

  {/* Phasen-Trennlinien */}
  <line x1="150" y1="50" x2="150" y2="250" stroke="#bbb" strokeWidth="1" strokeDasharray="4 3"/>
  <line x1="300" y1="50" x2="300" y2="250" stroke="#bbb" strokeWidth="1" strokeDasharray="4 3"/>
  <line x1="450" y1="50" x2="450" y2="250" stroke="#bbb" strokeWidth="1" strokeDasharray="4 3"/>

  {/* Achsen */}
  <line x1="60" y1="240" x2="600" y2="240" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-2pl)"/>
  <line x1="60" y1="240" x2="60" y2="30" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-2pl)"/>
  <text x="604" y="258" fontSize="13" fontWeight="bold" fill="#333">t</text>
  <text x="24" y="140" textAnchor="middle" fontSize="11" fill="#555" transform="rotate(-90, 24, 140)">belegte Betriebsmittel</text>

  {/* Kurve */}
  <path d="M 60 240 L 150 240 L 150 90 L 300 90 L 300 130 L 350 130 L 350 170 L 400 170 L 400 205 L 450 205 L 450 240 L 560 240" stroke="#27ae60" strokeWidth="2.5" fill="none"/>

  {/* lock-Pfeil */}
  <line x1="132" y1="218" x2="132" y2="108" stroke="#2176AE" strokeWidth="1.6" markerEnd="url(#arr-2pl-blue)"/>
  <text x="120" y="165" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c" transform="rotate(-90, 120, 165)">lock</text>

  {/* release-Pfeil */}
  <line x1="340" y1="85" x2="490" y2="235" stroke="#e67e22" strokeWidth="1.6" markerEnd="url(#arr-2pl-orange)"/>
  <text x="432" y="146" fontSize="12" fontWeight="bold" fill="#e67e22" transform="rotate(45, 432, 146)">release</text>

  {/* Phasenbeschriftung */}
  <text x="105" y="262" textAnchor="middle" fontSize="10.5" fill="#555">Warten auf alle BM</text>
  <text x="225" y="262" textAnchor="middle" fontSize="10.5" fill="#555">Arbeiten (alles belegt)</text>
  <text x="375" y="262" textAnchor="middle" fontSize="10.5" fill="#555">schrittweise Freigabe</text>
  <text x="225" y="78" textAnchor="middle" fontSize="10" fill="#1a6b3c">Prozess startet erst, wenn alles verfügbar ist</text>

  <line x1="20" y1="282" x2="620" y2="282" stroke="#ddd" strokeWidth="1"/>
  <text x="320" y="299" textAnchor="middle" fontSize="11" fill="#555">Two-Phase-Locking: erst alles anfordern (lock), danach nur noch freigeben (release) – nie gemischt</text>
</svg>

:::warning Preis der statischen Zuteilung
- Der **gesamte Bedarf muss im Voraus bekannt** sein – bei interaktiven oder datenabhängigen Programmen ist das oft nicht möglich
- Betriebsmittel sind **von Anfang an belegt**, auch wenn sie erst ganz am Ende gebraucht werden → **schlechte Auslastung**
- Prozesse mit großem Bedarf warten unter Umständen sehr lange, bis *alles gleichzeitig* frei ist → Gefahr des **Verhungerns** (*Starvation*)
:::

#### Dynamische Zuteilung

Die dynamische Zuteilung mildert die schlechte Auslastung der statischen Zuteilung, indem sie den Auftrag in kleinere Abschnitte zerlegt:

- Jeder Auftrag besteht aus **Laufphasen** (engl. *job steps*)
- Für **jede Laufphase** erfolgt eine **statische Zuteilung** – d.h. zu Beginn der Phase wird alles angefordert, was in dieser Phase gebraucht wird
- Am **Ende einer Laufphase** werden **alle** Betriebsmittel wieder freigegeben
- Jede Laufphase wird wie ein **neuer Auftrag** angesehen – innerhalb einer Phase wird also nie nachgefordert
    - ⇒ **B2 (Nachforderung) ist aufgehoben**

<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"720px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-dyn" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>

  {/* Flächen unter den Kurven */}
  <path d="M 90 240 L 90 100 L 140 100 L 140 135 L 175 135 L 175 175 L 210 175 L 210 210 L 245 210 L 245 240 Z" fill="#e8f5e9" fillOpacity="0.7"/>
  <path d="M 300 240 L 300 120 L 345 120 L 345 160 L 385 160 L 385 200 L 425 200 L 425 240 Z" fill="#e8f5e9" fillOpacity="0.7"/>
  <path d="M 510 240 L 510 90 L 565 90 L 565 130 L 600 130 L 600 170 L 640 170 L 640 210 L 675 210 L 675 240 Z" fill="#e8f5e9" fillOpacity="0.7"/>

  {/* Phasengrenzen */}
  <line x1="270" y1="40" x2="270" y2="255" stroke="#888" strokeWidth="1.2" strokeDasharray="5 4"/>
  <line x1="480" y1="40" x2="480" y2="255" stroke="#888" strokeWidth="1.2" strokeDasharray="5 4"/>

  {/* Achsen */}
  <line x1="60" y1="240" x2="700" y2="240" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-dyn)"/>
  <line x1="60" y1="240" x2="60" y2="30" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-dyn)"/>
  <text x="704" y="258" fontSize="13" fontWeight="bold" fill="#333">t</text>
  <text x="24" y="140" textAnchor="middle" fontSize="11" fill="#555" transform="rotate(-90, 24, 140)">belegte Betriebsmittel</text>

  {/* Kurve */}
  <path d="M 60 240 L 90 240 L 90 100 L 140 100 L 140 135 L 175 135 L 175 175 L 210 175 L 210 210 L 245 210 L 245 240 L 300 240 L 300 120 L 345 120 L 345 160 L 385 160 L 385 200 L 425 200 L 425 240 L 510 240 L 510 90 L 565 90 L 565 130 L 600 130 L 600 170 L 640 170 L 640 210 L 675 210 L 675 240 L 690 240" stroke="#27ae60" strokeWidth="2.5" fill="none"/>

  {/* Annotationen */}
  <text x="96" y="88" fontSize="10" fill="#1a5c8c">alle BM der Phase auf einmal (statisch)</text>
  <text x="276" y="60" fontSize="10" fill="#555">Phasenende: alle BM wieder frei</text>

  {/* Phasenbeschriftung */}
  <text x="165" y="264" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Laufphase 1</text>
  <text x="375" y="264" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Laufphase 2</text>
  <text x="585" y="264" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Laufphase 3</text>

  <line x1="20" y1="278" x2="700" y2="278" stroke="#ddd" strokeWidth="1"/>
  <text x="360" y="294" textAnchor="middle" fontSize="11" fill="#555">Jede Laufphase (job step) wird wie ein eigener Auftrag behandelt → statische Zuteilung pro Phase</text>
</svg>

:::tip Statisch vs. dynamisch
Beide Verfahren heben dieselbe Bedingung (B2) auf. Der Unterschied liegt in der **Granularität**: Bei der statischen Zuteilung gilt „alles oder nichts“ für den **gesamten** Auftrag, bei der dynamischen Zuteilung nur für die **aktuelle Laufphase**. Dadurch sind Betriebsmittel kürzer belegt und die Auslastung ist besser – dafür muss der Bedarf **pro Phase** bekannt sein, und das wiederholte Anfordern verursacht zusätzlichen Verwaltungsaufwand.
:::

#### Zuteilungsprioritäten (Resource Ordering)

Statt B2 komplett aufzuheben, wird die Nachforderung hier nur **eingeschränkt** – aber so geschickt, dass sich kein Ring mehr schließen kann:

- Jede Ressource hat eine **feste Zuteilungspriorität** (eine Rangnummer)
- Ein Prozess (Thread) erhält eine Ressource **nicht**, wenn er bereits Ressourcen **höherer Priorität** besitzt
    - Anders formuliert: Ressourcen dürfen nur in **aufsteigender Prioritätsreihenfolge** angefordert werden
    - ⇒ **B2 ist derart eingeschränkt, dass B4 nicht eintreten kann**

**Beispiel aus der Vorlesung:**

| Ressource | Priorität |
|---|---|
| Band | 3 |
| Platte | 2 |
| Drucker | 1 |

| Schritt | Prozess 1 | Prozess 2 |
|---|---|---|
| 1 | Platte → **zuteilen** | Band → **zuteilen** |
| 2 | Band → **warten** ✅ | Platte → **abweisen** ❌ |

- **Prozess 1** hält die Platte (Prio 2) und fordert das Band (Prio 3) an. Das Band hat eine **höhere** Priorität als alles, was Prozess 1 besitzt → die Anforderung ist erlaubt. Da Prozess 2 das Band gerade belegt, muss Prozess 1 **warten**
- **Prozess 2** hält das Band (Prio 3) und fordert die Platte (Prio 2) an. Prozess 2 besitzt bereits eine Ressource **höherer** Priorität → die Anforderung wird **abgewiesen**
- Prozess 2 läuft (hoffentlich) weiter und gibt das Band irgendwann wieder frei – dann erhält Prozess 1 das Band und kann fortfahren

<svg viewBox="0 0 700 262" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"700px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-ro" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>

  {/* Richtungspfeil */}
  <text x="350" y="16" textAnchor="middle" fontSize="11" fill="#555">erlaubte Anforderungsrichtung: aufsteigende Priorität</text>
  <line x1="80" y1="28" x2="620" y2="28" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-ro)"/>

  {/* Ressourcen */}
  <rect x="60" y="42" width="140" height="48" rx="4" fill="#f5f5f5" stroke="#555" strokeWidth="1.8"/>
  <text x="130" y="62" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Drucker</text>
  <text x="130" y="80" textAnchor="middle" fontSize="11" fill="#555">Priorität 1</text>
  <rect x="280" y="42" width="140" height="48" rx="4" fill="#f5f5f5" stroke="#555" strokeWidth="1.8"/>
  <text x="350" y="62" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Platte</text>
  <text x="350" y="80" textAnchor="middle" fontSize="11" fill="#555">Priorität 2</text>
  <rect x="500" y="42" width="140" height="48" rx="4" fill="#f5f5f5" stroke="#555" strokeWidth="1.8"/>
  <text x="570" y="62" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">Band</text>
  <text x="570" y="80" textAnchor="middle" fontSize="11" fill="#555">Priorität 3</text>

  <line x1="20" y1="108" x2="680" y2="108" stroke="#ddd" strokeWidth="1"/>

  {/* Prozess 1 */}
  <circle cx="60" cy="150" r="20" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="60" y="155" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">P1</text>
  <rect x="100" y="134" width="150" height="32" rx="4" fill="#f5f5f5" stroke="#999" strokeWidth="1"/>
  <text x="175" y="154" textAnchor="middle" fontSize="11.5" fill="#333">hält Platte (2)</text>
  <line x1="252" y1="150" x2="298" y2="150" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-ro)"/>
  <rect x="300" y="134" width="150" height="32" rx="4" fill="#f5f5f5" stroke="#999" strokeWidth="1"/>
  <text x="375" y="154" textAnchor="middle" fontSize="11.5" fill="#333">fordert Band (3)</text>
  <line x1="452" y1="150" x2="498" y2="150" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-ro)"/>
  <rect x="500" y="134" width="140" height="32" rx="4" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.8"/>
  <text x="570" y="154" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a6b3c">warten erlaubt</text>

  {/* Prozess 2 */}
  <circle cx="60" cy="205" r="20" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="60" y="210" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">P2</text>
  <rect x="100" y="189" width="150" height="32" rx="4" fill="#f5f5f5" stroke="#999" strokeWidth="1"/>
  <text x="175" y="209" textAnchor="middle" fontSize="11.5" fill="#333">hält Band (3)</text>
  <line x1="252" y1="205" x2="298" y2="205" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-ro)"/>
  <rect x="300" y="189" width="150" height="32" rx="4" fill="#f5f5f5" stroke="#999" strokeWidth="1"/>
  <text x="375" y="209" textAnchor="middle" fontSize="11.5" fill="#333">fordert Platte (2)</text>
  <line x1="452" y1="205" x2="498" y2="205" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-ro)"/>
  <rect x="500" y="189" width="140" height="32" rx="4" fill="#fdecea" stroke="#c0392b" strokeWidth="1.8"/>
  <text x="570" y="209" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#922b21">abweisen</text>

  <line x1="20" y1="236" x2="680" y2="236" stroke="#ddd" strokeWidth="1"/>
  <text x="350" y="253" textAnchor="middle" fontSize="11" fill="#555">P2 besitzt bereits eine Ressource höherer Priorität (Band 3 &gt; Platte 2) → Anforderung wird abgewiesen</text>
</svg>

:::info Warum kann so kein Zyklus entstehen?
Angenommen, es gäbe trotzdem einen Ring von Prozessen, die aufeinander warten. Jeder Prozess im Ring hält eine Ressource und wartet auf die Ressource des Nächsten. Nach der Regel darf er aber nur auf eine Ressource mit **höherer** Priorität warten als alle, die er hält. Geht man einmal um den Ring herum, müsste die Priorität also **immer weiter steigen** – und am Ende wieder beim Ausgangswert ankommen. Das ist ein Widerspruch. Also kann es keinen solchen Ring geben.

**Praxisbezug:** Genau dieses Prinzip wird in Multithreading-Programmen als *Lock Ordering* eingesetzt – alle Threads sperren gemeinsame Locks stets in derselben festgelegten Reihenfolge.
:::

:::warning Was bedeutet „abweisen“?
Die Anforderung von Prozess 2 wird nicht einfach vertagt, sondern mit einer **Fehlermeldung zurückgewiesen**. Der Prozess muss damit umgehen können – z.B. das Band zuerst freigeben und danach beide Ressourcen in der richtigen Reihenfolge (erst Platte, dann Band) anfordern. Das „hoffentlich“ in der Vorlesungsfolie spielt darauf an, dass der Prozess korrekt auf die Abweisung reagieren muss.
:::

#### Spooling

**Spooling** (*Simultaneous Peripheral Operations On-Line*) setzt bei Bedingung B1 an: Die Ressource wird gar nicht mehr direkt von den Anwendungsprozessen benutzt.

- Ein **Server-Prozess** (z.B. der Drucker-Daemon) nimmt eingehende **Aufträge für genau eine Ressource** entgegen, **puffert** sie in einer Warteschlange (dem *Spool*) und teilt die Ressource **sukzessive** – also einen Auftrag nach dem anderen – zu
- Die Anwendungsprozesse geben ihren Auftrag lediglich ab und **laufen sofort weiter** – sie belegen die Ressource nie selbst
- Aus Sicht der Anwendungsprozesse ist die Ressource somit **nicht mehr exklusiv** – der einzige Prozess, der sie jemals belegt, ist der Spooler
    - ⇒ **B1 (Exklusivität) ist aufgehoben**

<svg viewBox="0 0 720 275" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"720px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-sp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>

  {/* Anwendungsprozesse */}
  <text x="70" y="22" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Prozesse</text>
  <circle cx="70" cy="60" r="24" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="70" y="65" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">P1</text>
  <circle cx="70" cy="135" r="24" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="70" y="140" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">P2</text>
  <circle cx="70" cy="210" r="24" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="70" y="215" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">P3</text>
  <text x="70" y="250" textAnchor="middle" fontSize="10" fill="#1a6b3c">geben Auftrag ab und</text>
  <text x="70" y="263" textAnchor="middle" fontSize="10" fill="#1a6b3c">laufen sofort weiter</text>

  {/* Aufträge → Puffer */}
  <line x1="96" y1="60" x2="206" y2="118" stroke="#555" strokeWidth="1.6" markerEnd="url(#arr-sp)"/>
  <line x1="96" y1="135" x2="206" y2="135" stroke="#555" strokeWidth="1.6" markerEnd="url(#arr-sp)"/>
  <line x1="96" y1="210" x2="206" y2="152" stroke="#555" strokeWidth="1.6" markerEnd="url(#arr-sp)"/>
  <text x="150" y="122" textAnchor="middle" fontSize="10" fill="#555">Aufträge</text>

  {/* Spool-Puffer */}
  <text x="280" y="98" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a5c8c">Spool-Puffer (Warteschlange)</text>
  <rect x="210" y="110" width="140" height="50" fill="white" stroke="#2176AE" strokeWidth="1.8"/>
  <line x1="238" y1="110" x2="238" y2="160" stroke="#2176AE" strokeWidth="1"/>
  <line x1="266" y1="110" x2="266" y2="160" stroke="#2176AE" strokeWidth="1"/>
  <line x1="294" y1="110" x2="294" y2="160" stroke="#2176AE" strokeWidth="1"/>
  <line x1="322" y1="110" x2="322" y2="160" stroke="#2176AE" strokeWidth="1"/>

  {/* Puffer → Spooler */}
  <line x1="352" y1="135" x2="418" y2="135" stroke="#555" strokeWidth="1.6" markerEnd="url(#arr-sp)"/>

  {/* Spooler */}
  <circle cx="470" cy="135" r="48" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="470" y="131" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">Spooler-</text>
  <text x="470" y="148" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">Prozess</text>
  <text x="470" y="200" textAnchor="middle" fontSize="10" fill="#555">(Server, z.B. Drucker-Daemon)</text>

  {/* Spooler → Drucker */}
  <line x1="520" y1="135" x2="578" y2="135" stroke="#555" strokeWidth="1.6" markerEnd="url(#arr-sp)"/>
  <text x="549" y="126" textAnchor="middle" fontSize="10" fill="#555">nacheinander</text>

  {/* Drucker */}
  <rect x="580" y="108" width="110" height="54" rx="4" fill="#f5f5f5" stroke="#555" strokeWidth="2"/>
  <text x="635" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">Drucker</text>
  <text x="635" y="96" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#922b21">exklusiv – nur vom Spooler belegt</text>
</svg>

**Nachteile des Spoolings:**

- Prozesse können **keine Gleichzeitigkeit der Belegung** von Ressourcen forcieren – wer z.B. Scanner *und* Drucker gleichzeitig für einen Kopiervorgang braucht, kann das über zwei getrennte Spooler nicht erzwingen
- Spooling ist **nicht für alle Arten von Ressourcen** einsetzbar – z.B. nicht für **Semaphore**: Ein Lock lässt sich nicht als „Auftrag“ abgeben und später stellvertretend ausführen, es muss vom Prozess selbst gehalten werden
- Spooling kann **selbst Verklemmungen hervorrufen**, denn der Spool-Puffer ist ebenfalls eine begrenzte Ressource

:::danger Beispiel – Deadlock im Spooler
Angenommen, der Speicherplatz des Spools reicht nur aus, um **genau einen Auftrag** vollständig zu puffern, und ein Auftrag wird erst nach seiner **Erledigung** wieder freigegeben. Nun schreiben zwei Prozesse gleichzeitig ihre Druckaufträge in den Spool. Jeder bekommt die **Hälfte** des Puffers – dann ist er voll. Keiner der beiden Aufträge ist vollständig, also kann der Spooler keinen von ihnen drucken und den Platz freigeben. Beide Prozesse warten auf Pufferplatz, der Spooler wartet auf einen vollständigen Auftrag → **Deadlock**.
:::

### 3.3.5 - Vermeidung: Prozessfortschrittsdiagramm

Bei der **Vermeidung** (*Avoidance*) wird angenommen, dass die Bedingungen **B1, B2 und B3 erfüllt** sind – also nichts strukturell verhindert wird. Stattdessen entscheidet das System **bei jeder einzelnen Anforderung**, ob sie gefahrlos erfüllt werden kann.

**Idee:**
- Prüfe **vor jeder Ressourcenzuteilung**, ob diese zu B4 (zyklisches Warten) führen kann
- Falls ja: Anforderung **nicht erfüllen**, sondern den Prozess in eine **Warteschlange** einreihen, bis die Zuteilung gefahrlos möglich ist

Ein anschauliches Hilfsmittel für zwei Prozesse ist das **Prozessfortschrittsdiagramm** (engl. *Resource Trajectory*):

- Die **x-Achse** zeigt den Fortschritt von Prozess **A**, die **y-Achse** den Fortschritt von Prozess **B** (jeweils die Anzahl ausgeführter Befehle). Jeder Punkt im Diagramm ist damit ein **gemeinsamer Zustand** beider Prozesse
- Auf einem Einprozessorsystem rechnet zu jedem Zeitpunkt nur **einer** der beiden. Der Pfad verläuft daher immer **waagrecht** (A rechnet) oder **senkrecht** (B rechnet) – und **nie nach links oder unten**, denn die Zeit läuft nicht rückwärts
- A benötigt den **Printer** von I₁ bis I₃ und den **Plotter** von I₂ bis I₄. B benötigt den **Plotter** von I₅ bis I₇ und den **Printer** von I₆ bis I₈
- Die **schraffierten Bereiche** sind Zustände, in denen beide Prozesse **gleichzeitig dieselbe Ressource** hätten. Wegen B1 (Exklusivität) ist das unmöglich – **diese Bereiche dürfen nicht betreten werden**

<svg viewBox="0 0 720 505" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"720px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-pfd" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
    <marker id="arr-pfd-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#c0392b"/>
    </marker>
    <marker id="arr-pfd-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#27ae60"/>
    </marker>
    <pattern id="hatch-pfd-a" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#c0392b" strokeWidth="1.4"/>
    </pattern>
    <pattern id="hatch-pfd-b" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(-45)">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#c0392b" strokeWidth="1.4"/>
    </pattern>
  </defs>

  {/* Hilfslinien I1–I4 (A) und I5–I8 (B) */}
  <line x1="240" y1="60" x2="240" y2="380" stroke="#bbb" strokeWidth="1"/>
  <line x1="300" y1="60" x2="300" y2="380" stroke="#bbb" strokeWidth="1"/>
  <line x1="380" y1="60" x2="380" y2="380" stroke="#bbb" strokeWidth="1"/>
  <line x1="450" y1="60" x2="450" y2="380" stroke="#bbb" strokeWidth="1"/>
  <line x1="120" y1="290" x2="610" y2="290" stroke="#bbb" strokeWidth="1"/>
  <line x1="120" y1="240" x2="610" y2="240" stroke="#bbb" strokeWidth="1"/>
  <line x1="120" y1="190" x2="610" y2="190" stroke="#bbb" strokeWidth="1"/>
  <line x1="120" y1="130" x2="610" y2="130" stroke="#bbb" strokeWidth="1"/>

  {/* Verbotene Bereiche */}
  <rect x="240" y="130" width="140" height="110" fill="#fdecea"/>
  <rect x="240" y="130" width="140" height="110" fill="url(#hatch-pfd-a)"/>
  <rect x="300" y="190" width="150" height="100" fill="#fdecea"/>
  <rect x="300" y="190" width="150" height="100" fill="url(#hatch-pfd-b)"/>
  <rect x="240" y="130" width="140" height="110" fill="none" stroke="#c0392b" strokeWidth="1"/>
  <rect x="300" y="190" width="150" height="100" fill="none" stroke="#c0392b" strokeWidth="1"/>
  <text x="310" y="122" textAnchor="middle" fontSize="10" fill="#922b21">beide hätten den Printer</text>
  <text x="458" y="244" fontSize="10" fill="#922b21">beide hätten den Plotter</text>

  {/* Unsicherer Bereich */}
  <rect x="240" y="240" width="60" height="50" fill="#fdebd0" stroke="#e67e22" strokeWidth="1.5" strokeDasharray="3 2"/>
  <text x="270" y="252" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#e67e22">unsicher</text>

  {/* Achsen */}
  <line x1="120" y1="380" x2="630" y2="380" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-pfd)"/>
  <line x1="120" y1="380" x2="120" y2="40" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-pfd)"/>
  <text x="642" y="385" fontSize="14" fontWeight="bold" fill="#333">A</text>
  <text x="120" y="28" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">B</text>
  <text x="240" y="398" textAnchor="middle" fontSize="11" fill="#555">I₁</text>
  <text x="300" y="398" textAnchor="middle" fontSize="11" fill="#555">I₂</text>
  <text x="380" y="398" textAnchor="middle" fontSize="11" fill="#555">I₃</text>
  <text x="450" y="398" textAnchor="middle" fontSize="11" fill="#555">I₄</text>
  <text x="110" y="294" textAnchor="end" fontSize="11" fill="#555">I₅</text>
  <text x="110" y="244" textAnchor="end" fontSize="11" fill="#555">I₆</text>
  <text x="110" y="194" textAnchor="end" fontSize="11" fill="#555">I₇</text>
  <text x="110" y="134" textAnchor="end" fontSize="11" fill="#555">I₈</text>

  {/* Ressourcenklammern unten (A) */}
  <line x1="240" y1="412" x2="380" y2="412" stroke="#555" strokeWidth="1.2"/>
  <line x1="240" y1="407" x2="240" y2="417" stroke="#555" strokeWidth="1.2"/>
  <line x1="380" y1="407" x2="380" y2="417" stroke="#555" strokeWidth="1.2"/>
  <text x="310" y="427" textAnchor="middle" fontSize="11" fill="#333">Printer</text>
  <line x1="300" y1="440" x2="450" y2="440" stroke="#555" strokeWidth="1.2"/>
  <line x1="300" y1="435" x2="300" y2="445" stroke="#555" strokeWidth="1.2"/>
  <line x1="450" y1="435" x2="450" y2="445" stroke="#555" strokeWidth="1.2"/>
  <text x="375" y="455" textAnchor="middle" fontSize="11" fill="#333">Plotter</text>

  {/* Ressourcenklammern links (B) */}
  <line x1="92" y1="130" x2="92" y2="240" stroke="#555" strokeWidth="1.2"/>
  <line x1="87" y1="130" x2="97" y2="130" stroke="#555" strokeWidth="1.2"/>
  <line x1="87" y1="240" x2="97" y2="240" stroke="#555" strokeWidth="1.2"/>
  <text x="80" y="185" textAnchor="middle" fontSize="11" fill="#333" transform="rotate(-90, 80, 185)">Printer</text>
  <line x1="66" y1="190" x2="66" y2="290" stroke="#555" strokeWidth="1.2"/>
  <line x1="61" y1="190" x2="71" y2="190" stroke="#555" strokeWidth="1.2"/>
  <line x1="61" y1="290" x2="71" y2="290" stroke="#555" strokeWidth="1.2"/>
  <text x="54" y="240" textAnchor="middle" fontSize="11" fill="#333" transform="rotate(-90, 54, 240)">Plotter</text>

  {/* Bisheriger Pfad p → q → r → s → t */}
  <path d="M 120 380 L 200 380 L 200 330 L 270 330 L 270 290" stroke="#333" strokeWidth="2" strokeDasharray="6 4" fill="none"/>
  <circle cx="120" cy="380" r="3.5" fill="#333"/>
  <circle cx="200" cy="380" r="3.5" fill="#333"/>
  <circle cx="200" cy="330" r="3.5" fill="#333"/>
  <circle cx="270" cy="330" r="3.5" fill="#333"/>
  <circle cx="270" cy="290" r="3.5" fill="#333"/>
  <text x="112" y="398" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">p</text>
  <text x="200" y="398" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">q</text>
  <text x="190" y="327" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">r</text>
  <text x="278" y="344" fontSize="12" fontWeight="bold" fill="#333">s</text>
  <text x="258" y="298" textAnchor="end" fontSize="12" fontWeight="bold" fill="#333">t</text>

  {/* Verbotene Fortsetzung: B bekommt Plotter */}
  <line x1="270" y1="287" x2="270" y2="262" stroke="#c0392b" strokeWidth="2" strokeDasharray="3 2" markerEnd="url(#arr-pfd-red)"/>

  {/* Erlaubte Fortsetzung: B wartet, A läuft weiter */}
  <line x1="274" y1="290" x2="480" y2="290" stroke="#27ae60" strokeWidth="2" markerEnd="url(#arr-pfd-green)"/>
  <text x="378" y="306" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1a6b3c">B wartet, A läuft weiter bis hinter I₄</text>
  <path d="M 480 290 L 480 60 L 594 60" stroke="#27ae60" strokeWidth="1.2" strokeDasharray="2 3" fill="none" markerEnd="url(#arr-pfd-green)"/>
  <circle cx="600" cy="60" r="3.5" fill="#333"/>
  <text x="610" y="65" fontSize="12" fontWeight="bold" fill="#333">u</text>
  <text x="600" y="82" textAnchor="middle" fontSize="10" fill="#555">(beide Prozesse fertig)</text>

  <line x1="20" y1="468" x2="700" y2="468" stroke="#ddd" strokeWidth="1"/>
  <text x="360" y="484" textAnchor="middle" fontSize="10.5" fill="#555">schraffiert = beide hätten dieselbe Ressource (unmöglich)  ·  orange = unsicher: von hier führt jeder Weg in einen Deadlock</text>
  <text x="360" y="498" textAnchor="middle" fontSize="10.5" fill="#555">Bewegung nur nach rechts (A rechnet) oder nach oben (B rechnet) – nie zurück</text>
</svg>

**Was passiert im Beispiel?**

| Zeitpunkt | Ereignis |
|---|---|
| p → q | A rechnet |
| q → r | B rechnet |
| r → s | A rechnet und überschreitet I₁ → **Prozess A hat den Printer** |
| s → t | B rechnet und erreicht I₅ → **Prozess B will den Plotter** |

Zum Zeitpunkt **t** muss das System entscheiden, ob B den Plotter bekommt:

- **Würde die Anforderung erfüllt**, ginge der Pfad nach oben in den **orangen Kasten** (I₁–I₂ × I₅–I₆). Dieser Bereich ist zwar selbst nicht verboten – aber von dort aus führt **jeder erlaubte Weg** in einen schraffierten Bereich:
    - Nach **rechts**: A erreicht I₂ und fordert den Plotter an – den hält aber B → A blockiert
    - Nach **oben**: B erreicht I₆ und fordert den Printer an – den hält aber A → B blockiert
    - Beide blockiert → **Deadlock**. Der orange Kasten ist deshalb ein **unsicherer Bereich**
- Zum Zeitpunkt **t** ist also **kein Weg mehr um die schraffierten Bereiche herum zu u möglich**, sobald B den Plotter bekommt
    - ⇒ **Die Anforderung von Prozess B darf nicht erfüllt werden!**
- **Richtige Entscheidung:** B wird in die Warteschlange gestellt, A läuft weiter, bis es hinter I₄ den Plotter (und bei I₃ bereits den Printer) freigegeben hat. Erst dann bekommt B den Plotter und beide erreichen problemlos **u**

:::info Unsicher ist nicht gleich verboten
Der orange Kasten ist ein Zustand, in dem noch **kein** Deadlock vorliegt – beide Prozesse könnten noch etwas rechnen. Aber er ist eine **Sackgasse**: Egal wie weitergerechnet wird, der Deadlock ist unvermeidbar. Genau darum geht es bei der Vermeidung: **unsichere Zustände gar nicht erst betreten**, auch wenn sie im Moment noch harmlos wirken. Dieser Gedanke wird im Banker's Algorithm auf beliebig viele Prozesse und Ressourcen verallgemeinert.
:::

### 3.3.6 - Vermeidung: Banker's Algorithm (Dijkstra, 1965)

Der **Banker's Algorithm** verallgemeinert die Idee des Prozessfortschrittsdiagramms auf **beliebig viele Prozesse und Betriebsmitteltypen**. Der Name stammt von der Analogie zu einem Bankier: Er hat begrenztes Bargeld und hat seinen Kunden Kreditrahmen zugesagt. Er darf nur so viel auszahlen, dass **immer mindestens ein Kunde** seinen Kreditrahmen voll ausschöpfen, sein Projekt abschließen und das Geld zurückzahlen kann – sonst droht der Stillstand, in dem alle Kunden auf Geld warten, das niemand zurückzahlen kann.

#### Annahmen

- Es existieren $k \geq 1$ unterschiedliche **Betriebsmitteltypen** (z.B. Band, Scanner, Drucker, CD)
- Vom Typ $i$ gibt es $n_i$ **gleichwertige Exemplare** (z.B. 6 Bandlaufwerke)
- Jeder Prozess gibt **im Voraus** für jeden Typ seine **Maximalanforderung** bekannt (wie viele Exemplare er höchstens gleichzeitig braucht)
- Jeder Prozess fordert seine Betriebsmittel **sukzessive** (nach und nach) an, jedoch **niemals mehr** als seine Maximalanforderung

#### Sichere und unsichere Zustände

Der aus der Erfüllung einer Anforderung resultierende Zustand ist:

- **sicher**, wenn es immer noch (mindestens) **eine Prozessausführungsreihenfolge** gibt, sodass **alle Prozesse zum Ende kommen** können – selbst dann, wenn jeder sofort seine komplette Maximalanforderung stellt
- **unsicher**, wenn es für den Fall, dass alle Prozesse ihre Maximalanforderungen stellen, **keine Terminierungsmöglichkeit** mehr gibt ⇒ Deadlock droht!

:::warning Unsicher bedeutet nicht Deadlock
Ein unsicherer Zustand bedeutet **nicht**, dass ein Deadlock tatsächlich auftreten **muss** – nur, dass das System ihn nicht mehr **ausschließen** kann. Ob er eintritt, hängt davon ab, ob die Prozesse ihre Maximalanforderungen wirklich stellen. Der Algorithmus rechnet immer mit dem **schlimmsten Fall**.
:::

#### Algorithmus

> **Erfülle nur diejenigen Anforderungen bzw. Nachforderungen, die zu einem sicheren Zustand führen.**

Praktisch bedeutet das: Bei jeder Anforderung wird die Zuteilung **probeweise** durchgeführt und geprüft, ob der entstehende Zustand sicher ist. Falls ja, wird die Zuteilung wirksam. Falls nein, wird sie **zurückgenommen** und der Prozess muss warten, bis andere Prozesse Betriebsmittel freigegeben haben.

#### Beispiel mit 10 Exemplaren einer Ressource

Zunächst der einfachste Fall: nur **ein** Betriebsmitteltyp mit **10 Exemplaren** und drei Prozessen. Die Spalte *nachgefordert* gibt an, wie viele Exemplare der Prozess **noch anfordert**.

**Sicherer Zustand:**

| Prozess | max. Anforderung | belegt | nachgefordert |
|---|---|---|---|
| 1 | 4 | 2 | 2 |
| 2 | 6 | 3 | 3 |
| 3 | 8 | 2 | 6 |

Belegt sind $2 + 3 + 2 = 7$ Exemplare, also sind noch $10 - 7 = 3$ **frei**. Gibt es eine Reihenfolge, in der alle fertig werden?

| Reihenfolge | Ablauf | Ergebnis |
|---|---|---|
| **(1, 2, 3)** | P1 braucht 2 ≤ 3 frei ✅ → P1 fertig, gibt 4 zurück → 5 frei. P2 braucht 3 ≤ 5 ✅ → 8 frei. P3 braucht 6 ≤ 8 ✅ | sicher |
| **(2, 1, 3)** | P2 braucht 3 ≤ 3 ✅ → 6 frei. P1 braucht 2 ✅ → 8 frei. P3 braucht 6 ✅ | sicher |
| **(2, 3, 1)** | P2 braucht 3 ≤ 3 ✅ → 6 frei. P3 braucht 6 ≤ 6 ✅ → 8 frei. P1 braucht 2 ✅ | sicher |
| (3, …) | P3 braucht 6 > 3 frei ❌ | nicht möglich |
| (1, 3, 2) | Nach P1 sind 5 frei, P3 braucht 6 ❌ | nicht möglich |

⇒ Mögliche Ausführungsreihenfolgen: **(1, 2, 3)**, **(2, 1, 3)**, **(2, 3, 1)**. Da es mindestens eine gibt, ist der Zustand **sicher**.

**Unsicherer Zustand:**

| Prozess | max. Anforderung | belegt | nachgefordert |
|---|---|---|---|
| 1 | 4 | – | 4 |
| 2 | 6 | 4 | 2 |
| 3 | 8 | 6 | – |

Belegt sind $4 + 6 = 10$ Exemplare, also sind **0 frei**. Aus Sicht des Algorithmus (schlimmster Fall) könnte P3 noch $8 - 6 = 2$ Exemplare nachfordern. Da nichts frei ist, kann **kein** Prozess garantiert fertig werden ⇒ **unsicher**.

⇒ Tatsächlich aber **kein Deadlock**: P3 stellt keine weiteren Nachforderungen („–“), **terminiert** und gibt seine 6 Exemplare frei. Damit bekommt P1 seine 4, wird fertig, und anschließend erhält P2 seine 2. Der Zustand war unsicher, aber der Deadlock ist nicht eingetreten.

**Deadlock:**

| Prozess | max. Anforderung | belegt | nachgefordert |
|---|---|---|---|
| 1 | 4 | – | 2 |
| 2 | 6 | 4 | 2 |
| 3 | 8 | 6 | 2 |

Wieder sind **0 frei** – aber diesmal hat **jeder** Prozess eine offene Nachforderung von 2 Exemplaren. Niemand kann bedient werden, niemand wird fertig, niemand gibt etwas frei ⇒ **Deadlock** (tatsächlich eingetreten). Genau diesen Zustand hätte der Banker's Algorithm verhindert, indem er die letzte Zuteilung, die in den unsicheren Zustand führte, verweigert hätte.

#### Allgemeiner Banker's Algorithm

Für **mehrere Betriebsmitteltypen** werden die Größen als Vektoren und Matrizen geführt (je eine Komponente bzw. Spalte pro Typ):

| Größe | Bedeutung |
|---|---|
| Vektor **Exist** | Anzahl **aller** gleichartigen Ressourcen je Typ (was das System insgesamt besitzt) |
| Vektor **Avail** | Anzahl der **noch nicht zugeteilten** Ressourcen je Typ (was gerade frei ist) |
| Matrix **assigned($P_i$)** | Anzahl der **bereits an Prozess $P_i$ zugeteilten** Ressourcen je Typ (eine Zeile pro Prozess) |
| Matrix **needed($P_i$)** | Anzahl der von Prozess $P_i$ **noch maximal benötigten** Ressourcen je Typ, also *Maximalanforderung − assigned* |

Zwischen den Größen gilt immer: $\text{Avail} = \text{Exist} - \sum_i \text{assigned}(P_i)$ – was frei ist, ist alles, was existiert, abzüglich dessen, was schon verteilt wurde.

**Algorithmus zum Bewerten der Zustände:**

1. Bestimme einen Prozess $P_i$ mit **needed($P_i$) ≤ Avail** (der Vergleich gilt **komponentenweise**, d.h. in *jeder* Spalte muss der Bedarf kleiner oder gleich dem freien Bestand sein)
2. Falls **kein** solcher Prozess existiert ⇒ **unsicherer Zustand**; Ende
3. Beende $P_i$ (gedanklich) und gib dessen belegte Ressourcen frei: **Avail = Avail + assigned($P_i$)**
4. Falls es noch laufende Prozesse gibt ⇒ zurück zu (1)
5. **Sicherer Zustand**; Ende

:::tip Wie man den Algorithmus liest
Der Algorithmus ist eine **Simulation im Kopf**: „Wenn ich jedem Prozess, der jetzt schon vollständig bedient werden könnte, seinen Maximalbedarf gebe, ihn fertig rechnen lasse und alles wieder einsammle – bekomme ich dann irgendwann alle Prozesse durch?“ Die Reihenfolge, in der die Prozesse dabei fertig werden, ist die **sichere Ausführungsreihenfolge**. Wird man irgendwo nicht mehr fündig (Schritt 2), ist der Zustand unsicher.
:::

#### Beispiel mit vier Betriebsmitteltypen

Fünf Prozesse konkurrieren um die Typen **Band, Scanner, Drucker, CD**. Das System besitzt **Exist = (6, 3, 4, 2)**.

**assigned($P_i$)** – bereits zugeteilt:

| Prozess | Band | Scanner | Drucker | CD |
|---|---|---|---|---|
| $P_1$ | 3 | 0 | 1 | 1 |
| $P_2$ | 0 | 1 | 0 | 0 |
| $P_3$ | 1 | 1 | 1 | 0 |
| $P_4$ | 1 | 1 | 0 | 1 |
| $P_5$ | 0 | 0 | 0 | 0 |
| **Summe** | **5** | **3** | **2** | **2** |

**needed($P_i$)** – noch maximal benötigt:

| Prozess | Band | Scanner | Drucker | CD |
|---|---|---|---|---|
| $P_1$ | 1 | 1 | 0 | 0 |
| $P_2$ | 0 | 1 | 1 | 2 |
| $P_3$ | 3 | 1 | 0 | 0 |
| $P_4$ | 0 | 0 | 1 | 0 |
| $P_5$ | 2 | 1 | 1 | 0 |

Daraus ergibt sich **Avail = Exist − Summe = (6−5, 3−3, 4−2, 2−2) = (1, 0, 2, 0)**: Es sind noch 1 Band und 2 Drucker frei, aber kein Scanner und keine CD.

**(a) Ist der Zustand derzeit sicher?**

Wir suchen in jedem Schritt einen Prozess, dessen *needed*-Zeile komplett in *Avail* passt:

| Schritt | Avail vorher | Kandidat mit needed ≤ Avail | gibt frei (assigned) | Avail nachher |
|---|---|---|---|---|
| 1 | (1, 0, 2, 0) | $P_4$: (0, 0, 1, 0) ✅ | (1, 1, 0, 1) | (2, 1, 2, 1) |
| 2 | (2, 1, 2, 1) | $P_5$: (2, 1, 1, 0) ✅ | (0, 0, 0, 0) | (2, 1, 2, 1) |
| 3 | (2, 1, 2, 1) | $P_1$: (1, 1, 0, 0) ✅ | (3, 0, 1, 1) | (5, 1, 3, 2) |
| 4 | (5, 1, 3, 2) | $P_3$: (3, 1, 0, 0) ✅ | (1, 1, 1, 0) | (6, 2, 4, 2) |
| 5 | (6, 2, 4, 2) | $P_2$: (0, 1, 1, 2) ✅ | (0, 1, 0, 0) | (6, 3, 4, 2) = Exist |

In Schritt 1 kommt **nur $P_4$** in Frage: $P_1$, $P_3$ und $P_5$ bräuchten einen Scanner (0 frei), $P_2$ zwei CDs (0 frei). Nachdem $P_4$ seine Ressourcen zurückgegeben hat, ist ein Scanner frei und die anderen Prozesse kommen der Reihe nach durch.

⇒ Der Zustand ist **sicher**. Mögliche Reihenfolge: **$P_4$ ⇒ $P_5$ ⇒ $P_1$ ⇒ $P_3$ ⇒ $P_2$**

**(b) $P_2$ fordert nun 1 Drucker an**

Probeweise Zuteilung: assigned($P_2$) wird zu (0, 1, **1**, 0), needed($P_2$) sinkt auf (0, 1, **0**, 2), und Avail sinkt auf **(1, 0, 1, 0)**. Ist dieser Zustand sicher?

| Schritt | Avail vorher | Kandidat | gibt frei | Avail nachher |
|---|---|---|---|---|
| 1 | (1, 0, 1, 0) | $P_4$: (0, 0, 1, 0) ✅ | (1, 1, 0, 1) | (2, 1, 1, 1) |
| 2 | (2, 1, 1, 1) | $P_5$: (2, 1, 1, 0) ✅ | (0, 0, 0, 0) | (2, 1, 1, 1) |
| 3 | (2, 1, 1, 1) | $P_1$: (1, 1, 0, 0) ✅ | (3, 0, 1, 1) | (5, 1, 2, 2) |
| 4 | (5, 1, 2, 2) | $P_3$: (3, 1, 0, 0) ✅ | (1, 1, 1, 0) | (6, 2, 3, 2) |
| 5 | (6, 2, 3, 2) | $P_2$: (0, 1, 0, 2) ✅ | (0, 1, 1, 0) | (6, 3, 4, 2) = Exist |

⇒ **sicher** – die Anforderung wird erfüllt. Nach der Zuteilung gilt weiterhin die Reihenfolge $P_4$ ⇒ $P_5$ ⇒ $P_1$ ⇒ $P_3$ ⇒ $P_2$.

**(c) $P_5$ fordert anschließend 1 Drucker an**

Probeweise Zuteilung: assigned($P_5$) wird zu (0, 0, **1**, 0), needed($P_5$) sinkt auf (2, 1, **0**, 0), und Avail sinkt auf **(1, 0, 0, 0)** – nur noch ein einziges Band ist frei.

| Prozess | needed | passt in Avail = (1, 0, 0, 0)? |
|---|---|---|
| $P_1$ | (1, 1, 0, 0) | ❌ – braucht einen Scanner |
| $P_2$ | (0, 1, 0, 2) | ❌ – braucht Scanner und CDs |
| $P_3$ | (3, 1, 0, 0) | ❌ – braucht 3 Bänder und einen Scanner |
| $P_4$ | (0, 0, 1, 0) | ❌ – braucht einen Drucker |
| $P_5$ | (2, 1, 0, 0) | ❌ – braucht 2 Bänder und einen Scanner |

Schon in Schritt 1 findet sich **kein** Prozess ⇒ **unsicher!** Falls keine Ressourcen mehr freigegeben werden, kann **kein** Prozess seine Maximalanforderung noch erfüllen.

⇒ Die probeweise Zuteilung wird **zurückgenommen**. $P_5$ muss **warten**, bis ein anderer Prozess Ressourcen freigibt. Der letzte sichere Zustand aus (b) bleibt erhalten.

:::note Grenzen des Banker's Algorithm in der Praxis
So elegant das Verfahren ist – in realen Betriebssystemen wird es kaum eingesetzt, denn:
- Prozesse kennen ihre **Maximalanforderung selten im Voraus**
- Die **Anzahl der Prozesse** ist nicht fest, sondern ändert sich ständig
- Betriebsmittel können **ausfallen** (Exist ist nicht konstant)

Wichtig für die Klausur ist dennoch das Konzept des **sicheren Zustands** und die Fähigkeit, den Algorithmus auf ein gegebenes Beispiel **von Hand durchzurechnen**.
:::

### 3.3.7 - Lösungsstrategien für unterschiedliche Ressourcentypen

In der Praxis gibt es nicht *die eine* Strategie gegen Deadlocks. Ein Betriebssystem setzt je nach **Art der Ressource** unterschiedliche Verfahren ein:

| Nr. | Ressourcentyp | Strategie | Erläuterung |
|---|---|---|---|
| (1) | **Systemstrukturen** (Prozesskontrollblöcke, Kern-Tabellen, …) | Vermeidung (z.B. *resource ordering*) | Der Kern sperrt seine internen Datenstrukturen stets in einer **festen Reihenfolge**. Da der Kern-Code vollständig bekannt ist, lässt sich diese Reihenfolge beim Entwurf festlegen |
| (2) | **Speicherplatz im Benutzeradressraum** | längerfristiges Zurückstellen des Prozesses (*swap out*) | Wird der Hauptspeicher knapp, wird ein ganzer Prozess auf die Platte **ausgelagert** und sein Speicher freigegeben. Hier ist die Ressource also doch **entziehbar** – B3 gilt nicht |
| (3) | **Job-Ressourcen** (Dateien, Geräte) | Vermeidung (z.B. *Banker's Algorithm*) | Für Geräte und Dateien lässt sich der Bedarf eines Jobs eher im Voraus angeben, sodass zur Laufzeit auf sichere Zustände geprüft werden kann |
| (4) | **Speicherplatz im Swap Space** | vollständige Anforderung (z.B. *two phase locking*) | Der benötigte Auslagerungsspeicher wird beim Start eines Prozesses **komplett reserviert** (statische Zuteilung), sodass beim Auslagern nie nachgefordert werden muss |

:::note Begriffe in der Vorlesungsfolie
Die Folie ordnet das *resource ordering* der **Vermeidung** zu, obwohl es in Abschnitt 3.3.4 als Regel zur **Verhinderung** eingeführt wurde. In der Literatur werden die Begriffe nicht immer scharf getrennt – entscheidend ist das Prinzip: feste Sperrreihenfolge ⇒ kein Zyklus möglich.
:::

### 3.3.8 - Zusammenfassung: Welche Strategie hebt welche Bedingung auf?

| Verfahren | Art | Setzt an bei | Grundidee | Preis |
|---|---|---|---|---|
| **Statische Zuteilung** (Two-Phase-Locking) | Verhinderung | B2 | Alles im Voraus anfordern, erst dann starten | Bedarf muss bekannt sein, schlechte Auslastung, Starvation möglich |
| **Dynamische Zuteilung** | Verhinderung | B2 | Statische Zuteilung pro Laufphase, am Phasenende alles freigeben | Bedarf pro Phase muss bekannt sein, Verwaltungsaufwand |
| **Zuteilungsprioritäten** (Resource Ordering) | Verhinderung | B2 eingeschränkt ⇒ B4 unmöglich | Ressourcen nur in aufsteigender Priorität anfordern | Abgewiesene Anforderungen müssen behandelt werden |
| **Spooling** | Verhinderung | B1 | Server-Prozess puffert Aufträge, nur er belegt die Ressource | Nicht für alle Ressourcen, keine gleichzeitige Belegung erzwingbar, Spooler kann selbst verklemmen |
| **Prozessfortschrittsdiagramm** | Vermeidung | B4 | Unsichere Bereiche zur Laufzeit nicht betreten | Nur für zwei Prozesse anschaulich, Vorwissen nötig |
| **Banker's Algorithm** | Vermeidung | B4 | Nur Anforderungen erfüllen, die in einen sicheren Zustand führen | Maximalanforderungen müssen vorab bekannt sein |
| **Wartegraph** | Erkennung | B4 | Zyklus im Graphen finden und einen Prozess abbrechen | Deadlock tritt erst ein, Arbeit geht verloren |

:::tip Merksatz
**Verhindern** = eine Voraussetzung (B1–B3) abschaffen oder Regeln aufstellen, sodass sich kein Ring (B4) bilden kann.
**Vermeiden** = alle Voraussetzungen zulassen, aber jede Anforderung einzeln prüfen und nur **sichere Zustände** betreten.
**Erkennen** = den Ring im Wartegraphen finden und gewaltsam aufbrechen.
:::

## 3.4 - Grafische Darstellung von Synchronisationsbedingungen

- Auswahl eines Synchonisationsmechanismus erfordert Klarheit darüber **welche** Bedingungen zwischen den kritischen Abschnitten eines Programms gelten sollen.
-  Dafür geeignet: **Synchronisationsgraphen**: 
   -  Zeigen, welche Abschnitte sich gegenseitig behindern
   -  Helfen, Fehler wie fehlende Sperren oder mögliche Verklemmungen früh zu erkennen
- Wichtig: Im Gegensatz zum Wartegraphen (Abschnitt 3.3.1) wird **nicht** momentanen Systemzustand beschrieben, sondern dauerhaft geltende **Regeln**

### 3.4.1 - Ausschluss kritischer Abschnitte

- **Knoten:** ein kritischer Abschnitt
- **Kante A → B:** Relation *schließt aus* (**einseitiger Ausschluss**)
    - Solange **A in Ausführung** ist, darf **B nicht betreten** werden
    - **Folge:** Prozesse bzw. Threads, die B aufrufen, müssen **warten, bis A frei ist**
    - Die Kante gilt **nur in Pfeilrichtung**: Läuft gerade B, darf A trotzdem gestartet werden


<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"760px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-sg" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>

  {/* (a) einseitiger Ausschluss */}
  <circle cx="90" cy="70" r="26" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="90" y="75" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">A</text>
  <circle cx="230" cy="70" r="26" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="230" y="75" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">B</text>
  <line x1="118" y1="70" x2="202" y2="70" stroke="#555" strokeWidth="1.8" markerEnd="url(#arr-sg)"/>
  <text x="160" y="60" textAnchor="middle" fontSize="10" fontStyle="italic" fill="#555">schließt aus</text>
  <text x="160" y="122" textAnchor="middle" fontSize="11" fill="#555">(a) einseitig: A schließt B aus</text>

  {/* (b) gegenseitiger Ausschluss */}
  <circle cx="330" cy="70" r="26" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="330" y="75" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">A</text>
  <circle cx="470" cy="70" r="26" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="470" y="75" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">B</text>
  <path d="M 352 58 Q 400 28 448 58" stroke="#555" strokeWidth="1.8" fill="none" markerEnd="url(#arr-sg)"/>
  <path d="M 448 82 Q 400 112 352 82" stroke="#555" strokeWidth="1.8" fill="none" markerEnd="url(#arr-sg)"/>
  <text x="400" y="122" textAnchor="middle" fontSize="11" fill="#555">(b) gegenseitig: A → B und B → A</text>

  {/* (c) Selbstausschluss */}
  <circle cx="620" cy="70" r="26" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="620" y="75" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">A</text>
  <path d="M 634 48 C 664 0 576 0 607 46" stroke="#555" strokeWidth="1.8" fill="none" markerEnd="url(#arr-sg)"/>
  <text x="620" y="122" textAnchor="middle" fontSize="11" fill="#555">(c) A schließt sich selbst aus (Mutex)</text>

  <line x1="20" y1="140" x2="740" y2="140" stroke="#ddd" strokeWidth="1"/>

  {/* Zeitlicher Ablauf bei (a) */}
  <text x="380" y="162" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Zeitlicher Ablauf bei einseitigem Ausschluss (a)</text>
  <text x="82" y="204" textAnchor="end" fontSize="13" fontWeight="bold" fill="#333">A</text>
  <text x="82" y="249" textAnchor="end" fontSize="13" fontWeight="bold" fill="#333">B</text>

  <rect x="100" y="186" width="150" height="26" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="175" y="203" textAnchor="middle" fontSize="11" fill="#1a5c8c">A in Ausführung</text>

  <line x1="170" y1="226" x2="170" y2="258" stroke="#c0392b" strokeWidth="1.5"/>
  <text x="170" y="223" textAnchor="middle" fontSize="9.5" fill="#922b21">B ruft auf</text>
  <rect x="170" y="231" width="80" height="26" fill="#f5f5f5" stroke="#999" strokeWidth="1.2" strokeDasharray="4 2"/>
  <text x="210" y="248" textAnchor="middle" fontSize="10" fill="#555">wartet</text>
  <rect x="250" y="231" width="170" height="26" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.5"/>
  <text x="335" y="248" textAnchor="middle" fontSize="11" fill="#1a6b3c">B in Ausführung</text>

  <rect x="330" y="186" width="140" height="26" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="400" y="203" textAnchor="middle" fontSize="11" fill="#1a5c8c">A erneut</text>

  <line x1="330" y1="270" x2="420" y2="270" stroke="#e67e22" strokeWidth="2"/>
  <line x1="330" y1="265" x2="330" y2="275" stroke="#e67e22" strokeWidth="2"/>
  <line x1="420" y1="265" x2="420" y2="275" stroke="#e67e22" strokeWidth="2"/>
  <text x="375" y="286" textAnchor="middle" fontSize="10" fill="#e67e22">Überlappung erlaubt: B hindert A nicht</text>

  <line x1="100" y1="302" x2="720" y2="302" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-sg)"/>
  <text x="728" y="307" fontSize="12" fontWeight="bold" fill="#333">t</text>

  <line x1="20" y1="325" x2="740" y2="325" stroke="#ddd" strokeWidth="1"/>
  <text x="380" y="343" textAnchor="middle" fontSize="11" fill="#555">Knoten = kritischer Abschnitt  ·  Kante A → B: solange A läuft, darf B nicht betreten werden – nicht umgekehrt</text>
</svg>

:::tip Mutex-Fall (Fall c)
Soll ein Abschnitt nur von *einem* Thread gleichzeitig ausgeführt werden dürfen (der klassische Mutex-Fall), schließt er sich **selbst** aus – das ergibt eine Kante von A auf sich selbst.
:::

:::info Warum reicht eine Richtung manchmal aus?
Nicht jede Synchronisation ist symmetrisch. 
- Beispiel: 
  - Während ein Abschnitt A eine Datenstruktur **neu aufbaut**, darf kein Abschnitt B darauf **lesend** zugreifen. 
  - Umgekehrt muss ein laufender Lesezugriff den Neuaufbau nicht zwingend blockieren, wenn das Programm damit leben kann, dass der Leser danach noch einmal liest. 
:::

### 3.4.2 - Reihenfolge kritischer Abschnitte

Neben dem Ausschluss gibt es die Bedingung, dass ein Abschnitt **erst nach** einem anderen ausgeführt werden darf – z.B. darf der *Verbraucher* erst entnehmen, nachdem der *Erzeuger* etwas abgelegt hat (vgl. Abschnitt 3.1.2).

- **Gestrichelte Kante A ⇢ B:** Relation *k-folgt*
    - Gelesen als: **B k-folgt A** (mit $k \geq 0$)
    - Entspricht dem Synchronisationstyp der **Bedingungssynchronisation**: B wartet nicht darauf, dass A *frei* ist, sondern darauf, dass A **oft genug beendet** wurde
- Für jeden kritischen Abschnitt definieren wir **zwei Zähler**:

| Zähler | Bedeutung |
|---|---|
| **Anf** | Anzahl der **angefangenen** Ausführungen des kritischen Abschnitts |
| **End** | Anzahl der **beendeten** Ausführungen des kritischen Abschnitts |

- Die Synchronisation stellt sicher, dass **zu jedem Zeitpunkt** die folgende Bedingung eingehalten wird:

$$
\textbf{Anf}(B) \leq \textbf{End}(A) + k
$$

- Der **Anfang von B wird so lange verzögert**, bis die Bedingung eingehalten werden kann

**Was bedeutet k?** Die Zahl $k$ gibt an, wie viele Ausführungen B gegenüber A **vorauslaufen** darf:

- $k = 0$: 
  - B darf höchstens so oft **begonnen** werden, wie A bereits **beendet** wurde. 
  - $n$-te Ausführung von B braucht $n$ abgeschlossene Ausführungen von A
  - Klassische Erzeuger-Verbraucher-Bedingung „Puffer leer“
- $k > 0$: 
  - B bekommt einen **Vorschuss** von $k$ Ausführungen, die es starten darf, bevor A überhaupt einmal fertig ist. 
  - Bsp: Ausdrücken eines Puffers mit $k$ freien Plätzen: 
    - *Erzeuger k-folgt Verbraucher* 
    - Erzeuger darf höchstens $k$ Elemente mehr abgelegt haben, als Verbraucher entnommen hat („Puffer voll“)

<svg viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"760px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-kf" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>

  {/* Notation */}
  <circle cx="70" cy="80" r="26" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="70" y="85" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">A</text>
  <circle cx="210" cy="80" r="26" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="210" y="85" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">B</text>
  <line x1="98" y1="80" x2="182" y2="80" stroke="#555" strokeWidth="1.8" strokeDasharray="6 4" markerEnd="url(#arr-kf)"/>
  <text x="140" y="68" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#333">k</text>
  <text x="140" y="132" textAnchor="middle" fontSize="11" fill="#555">B k-folgt A</text>
  <text x="140" y="148" textAnchor="middle" fontSize="10" fill="#555">Anf(B) ≤ End(A) + k</text>

  <line x1="280" y1="30" x2="280" y2="200" stroke="#ddd" strokeWidth="1"/>

  {/* Beispiel k = 1 */}
  <text x="520" y="32" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">Beispiel mit k = 1: B darf einmal vorauslaufen</text>
  <text x="292" y="70" textAnchor="end" fontSize="13" fontWeight="bold" fill="#333">A</text>
  <text x="292" y="115" textAnchor="end" fontSize="13" fontWeight="bold" fill="#333">B</text>

  <rect x="400" y="52" width="120" height="24" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="460" y="68" textAnchor="middle" fontSize="10.5" fill="#1a5c8c">A (1. Ausführung)</text>

  <rect x="310" y="97" width="90" height="24" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.5"/>
  <text x="355" y="113" textAnchor="middle" fontSize="10.5" fill="#1a6b3c">B (1.)</text>
  <rect x="400" y="97" width="120" height="24" fill="#f5f5f5" stroke="#999" strokeWidth="1.2" strokeDasharray="4 2"/>
  <text x="460" y="113" textAnchor="middle" fontSize="10" fill="#555">B (2.) wartet</text>
  <rect x="520" y="97" width="120" height="24" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.5"/>
  <text x="580" y="113" textAnchor="middle" fontSize="10.5" fill="#1a6b3c">B (2.)</text>

  <line x1="300" y1="140" x2="720" y2="140" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-kf)"/>
  <text x="728" y="145" fontSize="12" fontWeight="bold" fill="#333">t</text>

  <text x="355" y="162" textAnchor="middle" fontSize="9.5" fill="#1a6b3c">Anf(B)=1 ≤ 0+1: erlaubt</text>
  <text x="460" y="162" textAnchor="middle" fontSize="9.5" fill="#922b21">Anf(B)=2 &gt; 0+1: warten</text>
  <text x="580" y="162" textAnchor="middle" fontSize="9.5" fill="#1a6b3c">End(A)=1 ⇒ 2 ≤ 1+1: erlaubt</text>

  <line x1="20" y1="215" x2="740" y2="215" stroke="#ddd" strokeWidth="1"/>
  <text x="380" y="235" textAnchor="middle" fontSize="11" fill="#555">gestrichelte Kante = k-folgt: B darf höchstens k Ausführungen vor den beendeten Ausführungen von A liegen</text>
</svg>

:::tip Abgrenzung zum Ausschluss
- **Ausschluss** (durchgezogene Kante) - *Gleichzeitigkeit*: 
  - B darf nicht laufen, **während** A läuft. 
- **Reihenfolge** (gestrichelte Kante) - *Häufigkeit*: 
  - B darf erst starten, wenn A **oft genug fertig** geworden ist. Ob A gerade läuft, spielt dabei keine Rolle.
:::

### 3.4.3 - Geschachtelte kritische Abschnitte

- **Geschachtelte** kritische Abschnitte ⇒ **B liegt innerhalb von A**, d.h. der Code von B ist Teil des Codes von A
- Es gilt folgende Regel: **Bevor B betreten werden kann, muss A durchlaufen werden – aber nicht umgekehrt**
    - Ein Thread, der in B ist, befindet sich also **immer auch** in A
    - A kann dagegen durchlaufen werden, **ohne** dass B betreten wird (z.B. wenn B nur bedingt aufgerufen wird)

<svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"760px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-nest" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>

  {/* Notation: B innerhalb von A */}
  <circle cx="150" cy="95" r="70" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="105" y="102" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1a5c8c">A</text>
  <circle cx="175" cy="95" r="32" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2"/>
  <text x="175" y="102" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1a6b3c">B</text>
  <text x="150" y="190" textAnchor="middle" fontSize="11" fill="#555">B liegt innerhalb von A</text>

  <line x1="290" y1="20" x2="290" y2="200" stroke="#ddd" strokeWidth="1"/>

  {/* Als Code-Struktur */}
  <text x="330" y="40" fontSize="12" fontWeight="bold" fill="#333">Im Programm:</text>
  <rect x="330" y="52" width="180" height="128" rx="4" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="342" y="70" fontSize="11" fontWeight="bold" fill="#1a5c8c">A betreten</text>
  <text x="342" y="88" fontSize="10.5" fill="#1a5c8c">...</text>
  <rect x="352" y="96" width="146" height="50" rx="4" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.5"/>
  <text x="364" y="114" fontSize="11" fontWeight="bold" fill="#1a6b3c">B betreten</text>
  <text x="364" y="131" fontSize="10.5" fill="#1a6b3c">... B verlassen</text>
  <text x="342" y="165" fontSize="11" fontWeight="bold" fill="#1a5c8c">A verlassen</text>

  {/* Regel */}
  <text x="545" y="70" fontSize="11" fill="#333">in B  ⇒  immer auch in A</text>
  <text x="545" y="92" fontSize="11" fill="#333">in A  ⇏  zwingend in B</text>
  <text x="545" y="128" fontSize="10" fill="#922b21">Wer B betritt, hält bereits A –</text>
  <text x="545" y="142" fontSize="10" fill="#922b21">das ist genau Bedingung B2</text>
  <text x="545" y="156" fontSize="10" fill="#922b21">(Nachforderung) aus Abschnitt 3.3.2</text>
</svg>

:::warning Folge für Deadlocks
Wer den inneren Abschnitt B betritt, hält bereits die Sperre des äußeren Abschnitts A und fordert eine weitere an – genau die Situation aus Bedingung B2 (*Nachforderung*). Werden geschachtelte Abschnitte von verschiedenen Threads in **unterschiedlicher Reihenfolge** betreten (Thread 1: A dann B, Thread 2: B dann A), droht ein Deadlock. Abhilfe schafft eine feste Sperrreihenfolge (vgl. *Resource Ordering*, Abschnitt 3.3.4).
:::

## 3.5 - Basismechanismen zur Synchronisation

Um einen kritischen Abschnitt tatsächlich zu schützen, braucht es Mechanismen, die von **Hardware und Betriebssystem** bereitgestellt werden. Die Vorlesung baut sie stufenweise aufeinander auf:

1. **Unterbrechungssperren** – die einfachste Lösung, nur für Einprozessorsysteme im Kern
2. **Atomare Speicheroperationen und spezielle Hardware-Befehle** (TSL, SWAP) – die Grundlage für Sperren auf Multiprozessorsystemen
3. **Spin-Locks** – aus TSL gebaute Sperren mit aktivem Warten
4. **Semaphore** (Abschnitt 3.6) – der mächtigere Mechanismus, der auf den Basismechanismen aufsetzt und auch für lange kritische Abschnitte im User-Space geeignet ist

### 3.5.1 - Unterbrechungssperren

Der kritische Abschnitt wird mit zwei Befehlen **geklammert**:

```c
itrs_off();   // Unterbrechungen sperren
// ... kritischer Abschnitt ...
itrs_on();    // Unterbrechungen wieder zulassen
```

- Zwischen `itrs_off` und `itrs_on` sind **Interrupts verboten**
- **Warum wirkt das?** 
  - Einprozessorsystem: Prozess- bzw. Threadwechsel wird immer durch **Interrupts** ausgelöst 
    - beim Round-Robin-Scheduling durch den Timer-Interrupt am Ende der Zeitscheibe (vgl. Abschnitt 2.2.1)
  - Bei gesperrten Unterbrechungen kann Scheduler nicht eingreifen: Prozess bzw. Thread ist **nicht unterbrechbar**
- Falls Prozessor nicht freiwillig abgegeben wird (kein `yield`, keine blockierende E/A), wird kritischer Abschnitt dadurch **atomar** ausgeführt – kein anderer Thread kann ihn zwischendurch betreten


**Nachteile:**

| Nachteil | Erklärung |
|---|---|
| Bei **Multiprozessorsystemen nicht ausreichend** |  Sperre wirkt nur auf Unterbrechungen des **eigenen** Prozessors; Ein Thread auf einem anderen Kern läuft ungehindert weiter und kann den kritischen Abschnitt gleichzeitig betreten |
| **Herabgesetzte Reaktionsfähigkeit** auf Interrupts | Während Sperre werden *alle* Interrupts nicht bearbeitet; Risiko von überlaufendem Interruptpuffer ⇒ **möglicher Verlust von Daten bei E/A-Operationen** |
| Nur im **privilegierten Zustand** möglich | Das Sperren von Unterbrechungen ist ein **privilegierter Maschinenbefehl** – er ist nur im **System-Mode** erlaubt, nicht im User-Mode |
| **Kein System-Call** hierfür | Kein System Call, um zu vermeiden, dass ein Programmierer **vergisst, die Unterbrechungen wieder zuzulassen** |

**Einsatzgebiet:** Einprozessorsysteme, für **zeitlich kurze** kritische Abschnitte **innerhalb des Betriebssystemkerns**.

### 3.5.2 - Atomare Speicheroperationen und spezielle Hardware-Befehle

#### Atomare Speicheroperationen

- Das **Abspeichern eines Wertes** in den Hauptspeicher erfolgt **atomar**: 
  - Ein Speicherwort wird immer vollständig geschrieben – ein anderer Prozessor sieht entweder den alten oder den neuen Wert, nie einen halb geschriebenen
- Bei gleichzeitigem Versuch im **selben Wort** zu speichern, entscheidet **Hardware** über Reihenfolge
  - **Busarbitrierung** (Speicherbus kann nur von einem Prozessor gleichzeitig genutzt werden - sequenzielle Abarbeitung)

:::warning Warum reicht das allein nicht?
Atomar ist nur der **einzelne** Schreib- oder Lesezugriff. Eine Sperre braucht aber *Lesen, Prüfen und Schreiben* als **eine** Einheit. Versucht man das mit normalen Befehlen, entsteht eine **Race Condition**:

| Zeit | Thread 1 | Thread 2 | `busy` |
|---|---|---|---|
| 1 | liest `busy` → 0 (frei) | | 0 |
| 2 | | liest `busy` → 0 (frei) | 0 |
| 3 | schreibt `busy = 1`, betritt den Abschnitt | | 1 |
| 4 | | schreibt `busy = 1`, betritt den Abschnitt | 1 |

Beide Threads haben „frei“ gelesen, bevor einer von ihnen „belegt“ schreiben konnte – **beide sind im kritischen Abschnitt**. Genau diese Lücke zwischen Lesen und Schreiben schließen die speziellen Hardware-Befehle.
:::

#### Spezielle *atomare* Hardware-Befehle

Moderne Mikroprozessoren besitzen einen oder mehrere spezielle **Maschinenbefehle**, die Lesen und Schreiben in **einer** unteilbaren Operation ausführen. Während des Befehls ist der Speicherbus gesperrt, sodass kein anderer Prozessor dazwischenfunken kann:

| Befehl | Name | Wirkung |
|---|---|---|
| **TSL** | *Test and Set Lock* | Das **Lesen** des momentanen Wertes und das nachfolgende **Schreiben** des Speicherwortes auf den Wert **1** werden **atomar** durchgeführt. Der Befehl liefert den **alten** Wert zurück |
| **SWAP** | *Swap* | Die Inhalte **zweier Speicherworte** (typisch: ein Register und eine Speicherzelle) werden **atomar vertauscht** |


### 3.5.3 - Spin-Lock mittels TSL

Ein **Spin-Lock** ist eine Sperre, bei der ein wartender Thread in einer Schleife immer wieder versucht, die Sperre zu bekommen – er „dreht sich“ (*spin*), bis es klappt. Die Sperrvariable `busy` hat zwei Werte: **0 = frei**, **1 = belegt**.

**Pseudocode aus der Vorlesung:**

```java
public class MutualExclusionTSL {

    // Eintrittsprotokoll
    public static void enterMutex(Integer busy) {
        // busy should initially be set to 0
        Integer local;
        do
            local = TSL(busy);   // atomar: alten Wert lesen, busy := 1
        while (local == 1);      // war belegt → weiter versuchen (spin)
    }

    // Austrittsprotokoll
    public static void exitMutex(Integer busy) {
        busy = 0;                // Sperre freigeben
    }

} // MutualExclusionTSL
```

**So funktioniert das Eintrittsprotokoll:**

- `TSL(busy)` liefert den **alten** Wert von `busy` und setzt `busy` gleichzeitig auf 1
- War der alte Wert **0**, war die Sperre frei – und **wir** haben sie soeben auf 1 gesetzt. Die Schleife endet, der Thread betritt den kritischen Abschnitt
- War der alte Wert **1**, hält ein anderer Thread die Sperre. Unser Schreiben der 1 hat nichts verändert (es stand ja schon 1 drin). Die Schleife läuft weiter und probiert es erneut
- Das **Austrittsprotokoll** braucht keinen Spezialbefehl: Ein einfaches, atomares Schreiben von `busy = 0` genügt

<svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"760px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-tsl" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
    <marker id="arr-tsl-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#c0392b"/>
    </marker>
    <marker id="arr-tsl-green" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#27ae60"/>
    </marker>
  </defs>

  {/* Protokoll-Beschriftung */}
  <text x="245" y="46" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a5c8c">Eintrittsprotokoll enterMutex(busy)</text>
  <line x1="20" y1="54" x2="470" y2="54" stroke="#2176AE" strokeWidth="1" strokeDasharray="3 3"/>
  <text x="710" y="46" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#555">Austritt</text>
  <line x1="670" y1="54" x2="750" y2="54" stroke="#999" strokeWidth="1" strokeDasharray="3 3"/>

  {/* Start */}
  <rect x="20" y="100" width="100" height="40" rx="20" fill="#f5f5f5" stroke="#555" strokeWidth="1.5"/>
  <text x="70" y="124" textAnchor="middle" fontSize="11.5" fill="#333">Eintritt</text>
  <line x1="122" y1="120" x2="168" y2="120" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-tsl)"/>

  {/* TSL */}
  <rect x="170" y="100" width="160" height="40" rx="4" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.8"/>
  <text x="250" y="124" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">local = TSL(busy)</text>
  <text x="250" y="88" textAnchor="middle" fontSize="9.5" fill="#1a5c8c">atomar: alten Wert lesen, busy := 1</text>
  <line x1="332" y1="120" x2="348" y2="120" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-tsl)"/>

  {/* Entscheidung */}
  <polygon points="350,120 410,90 470,120 410,150" fill="#fff8e1" stroke="#e67e22" strokeWidth="1.8"/>
  <text x="410" y="124" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#333">local == 1?</text>

  {/* nein → kritischer Abschnitt */}
  <line x1="472" y1="120" x2="508" y2="120" stroke="#27ae60" strokeWidth="1.8" markerEnd="url(#arr-tsl-green)"/>
  <text x="490" y="110" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1a6b3c">nein</text>
  <text x="490" y="166" textAnchor="middle" fontSize="9.5" fill="#1a6b3c">alter Wert 0:</text>
  <text x="490" y="178" textAnchor="middle" fontSize="9.5" fill="#1a6b3c">Sperre war frei,</text>
  <text x="490" y="190" textAnchor="middle" fontSize="9.5" fill="#1a6b3c">gehört jetzt uns</text>

  <rect x="510" y="100" width="130" height="40" rx="4" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.8"/>
  <text x="575" y="124" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#1a6b3c">kritischer Abschnitt</text>
  <line x1="642" y1="120" x2="668" y2="120" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-tsl)"/>

  {/* Austritt */}
  <rect x="670" y="100" width="80" height="40" rx="4" fill="#f5f5f5" stroke="#555" strokeWidth="1.5"/>
  <text x="710" y="124" textAnchor="middle" fontSize="11.5" fontWeight="bold" fill="#333">busy = 0</text>

  {/* ja → Schleife */}
  <path d="M 410 152 L 410 210 L 250 210 L 250 144" stroke="#c0392b" strokeWidth="1.8" fill="none" markerEnd="url(#arr-tsl-red)"/>
  <text x="422" y="180" fontSize="10" fontWeight="bold" fill="#922b21">ja</text>
  <text x="330" y="226" textAnchor="middle" fontSize="10" fill="#922b21">alter Wert 1: Sperre belegt → erneut versuchen</text>
  <text x="330" y="242" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#c0392b">Spin: aktives Warten (Busy Waiting)</text>

  <line x1="20" y1="264" x2="740" y2="264" stroke="#ddd" strokeWidth="1"/>
  <text x="380" y="282" textAnchor="middle" fontSize="11" fill="#555">busy = 0: frei  ·  busy = 1: belegt  ·  TSL liefert den alten Wert und setzt busy in derselben Operation auf 1</text>
</svg>

**Ablauf mit zwei Threads:**

| Zeit | Thread 1 | Thread 2 | `busy` |
|---|---|---|---|
| 1 | `TSL(busy)` → alter Wert **0** ⇒ betritt den Abschnitt | | 1 |
| 2 | im kritischen Abschnitt | `TSL(busy)` → alter Wert **1** ⇒ spin | 1 |
| 3 | im kritischen Abschnitt | `TSL(busy)` → **1** ⇒ spin | 1 |
| 4 | `busy = 0` (Austritt) | | 0 |
| 5 | | `TSL(busy)` → alter Wert **0** ⇒ betritt den Abschnitt | 1 |

Anders als beim naiven Lesen-Prüfen-Schreiben kann hier **nie** ein zweiter Thread zwischen das Lesen und das Schreiben rutschen – genau einer bekommt die 0 zurück.

**Vorteile:**

- Spin-Lock **funktioniert bei Multiprozessorsystemen**
  -  TSL sperrt Speicherbus während des Befehls – im Gegensatz zur Unterbrechungssperre
- Durch **Parametrisierung** mit verschiedenen globalen Variablen (je eine `busy`-Variable pro Datenstruktur) kann gegenseitiger Ausschluss auf **bestimmte** kritische Abschnitte eingeschränkt werden. 
  - Threads, die an unterschiedlichen Daten arbeiten, behindern sich nicht

**Nachteile:**

- **Busy Waiting:** 
  - Wartender Thread verbraucht Prozessorzeit, ohne etwas Sinnvolles zu tun
- **Nicht fair ⇒ Starvation möglich:** 
  - Keine Warteschlange. 
  - Wird die Sperre frei, gewinnt der Thread, der zufällig als Nächster `TSL` ausführt
- Wird der aktuell im kritischen Abschnitt befindliche Thread durch Scheduler unterbrochen droht **Verklemmungsgefahr**
  - Round-Robin: es geht Prozessorzeit verloren
  - Prioritätenbasiert: Prozessor vergibt keine Zeit mehr an im kritischen Bereich befindlichen Thread/Prozess, es kommt zum Deadlock (Worst case)

:::info Unterbrechungssperre und Spin-Lock im Vergleich
| Kriterium | Unterbrechungssperre | Spin-Lock (TSL) |
|---|---|---|
| Funktioniert auf Multiprozessorsystemen | ❌ nein | ✅ ja |
| Wartestrategie | keine (Wechsel unmöglich) | aktives Warten (Busy Waiting) |
| Selektiv für einzelne Datenstrukturen | ❌ sperrt alles | ✅ eine Variable pro Abschnitt |
| Benötigt privilegierten Modus | ✅ ja | ❌ nein (TSL ist ein normaler Befehl) |
| Geeignet für | kurze Abschnitte im Kern, Einprozessor | kurze Abschnitte im Kern, Multiprozessor; Baustein für Semaphore |
:::

## 3.6 - Das Semaphor-Konzept

 Das **Semaphor** behebt beide Schwächen des Spin-Locks: Wartende Threads werden **blockiert** (statt zu spinnen) und in einer **Warteschlange** verwaltet.

### 3.6.1 - Semaphor-Definition

- Eingeführt von **Dijkstra** (derselbe wie beim Banker's Algorithm)
- Ein Semaphor ist ein **Objekt**, auf dem **genau zwei atomare Operationen** existieren: **p** und **v**
    - Die Namen stammen aus dem Niederländischen: *p* = *proberen* (versuchen, prüfen), *v* = *verhogen* (erhöhen). In anderen Quellen heißen sie auch *wait/signal*, *down/up* oder *acquire/release*
- Interne Komponenten eines Semaphors `sem`:

| Komponente | Bedeutung |
|---|---|
| `sem.ctr` | **Wert** (Zähler) des Semaphors |
| `sem.queue` | **Warteschlange** für Prozesse bzw. Threads, die am Semaphor warten |

### 3.6.2 - Wirkungsweise der Operationen

```text
p:  ctr--;   if (ctr < 0)  { warten; }
v:  ctr++;   if (ctr <= 0) { einen Wartenden aufwecken; }
```

- **p (Eintritt):** Der Zähler wird um 1 verringert. Ist er danach **negativ**, war kein „Durchgang“ mehr frei – der aufrufende Thread wird in `sem.queue` eingereiht und **blockiert** (Zustand *Blocked*, vgl. Abschnitt 2.1). Er verbraucht dabei **keine** Prozessorzeit
- **v (Austritt):** Der Zähler wird um 1 erhöht. Ist er danach immer noch **kleiner oder gleich 0**, war er vor der Erhöhung negativ – es wartet also mindestens ein Thread. Einer davon wird aus `sem.queue` genommen und **aufgeweckt** (Zustand *Ready*)
- Beide Operationen müssen **atomar** sein, da `ctr` und `queue` selbst kritische Daten sind – die kurze Sperre schützt nur die wenigen Befehle von p und v, nicht den langen kritischen Abschnitt der Anwendung

:::info Blocked und wieder Ready – wer weckt den Thread?
- **p** (bzw. `acquire`) versetzt einen Thread, der nicht laufen soll, in den Zustand **Blocked**. Er steht dem Scheduler damit nicht mehr zur Verfügung und verbraucht keine Rechenzeit
- Wieder aufgerufen wird er **nicht durch einen Interrupt** (wie ein Thread, der auf E/A wartet), sondern durch einen **System-Call**: Der Thread, der **v** (bzw. `release`) aufruft, bittet damit den Kern, den nächsten Wartenden aus `sem.queue` zu nehmen und wieder auf **Ready** zu setzen
- Der Übergang Blocked → Ready wird beim Semaphor also aktiv von einem **anderen Thread** angestoßen, nicht von der Hardware
:::

**Der Wert des Semaphors lässt sich wie folgt interpretieren:**

| `ctr` | Bedeutung |
|---|---|
| **positiv** | Verbleibende Anzahl der Aufrufe von **p**, die **ohne zu warten** durchkommen (freie „Durchgänge“) |
| **0** | Alle Durchgänge sind belegt, aber niemand wartet |
| **negativ** | Der **Betrag** entspricht der **Anzahl der am Semaphor Wartenden** |

**Beispiel:** Ein Semaphor mit Startwert 1 und drei Threads, die nacheinander in denselben kritischen Abschnitt wollen:

| Schritt | Aufruf | `ctr` danach | Wirkung | `queue` |
|---|---|---|---|---|
| 0 | – (Start) | 1 | ein Durchgang frei | leer |
| 1 | T1: p | 0 | T1 betritt den Abschnitt | leer |
| 2 | T2: p | −1 | T2 wird blockiert | T2 |
| 3 | T3: p | −2 | T3 wird blockiert | T2, T3 |
| 4 | T1: v | −1 | ctr ≤ 0 ⇒ T2 wird geweckt und betritt den Abschnitt | T3 |
| 5 | T2: v | 0 | ctr ≤ 0 ⇒ T3 wird geweckt und betritt den Abschnitt | leer |
| 6 | T3: v | 1 | ctr > 0 ⇒ niemand wartet, Abschnitt ist frei | leer |

<svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"760px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-sem" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#333"/>
    </marker>
  </defs>

  {/* Bereiche */}
  <rect x="110" y="60" width="630" height="70" fill="#e8f5e9" fillOpacity="0.5"/>
  <rect x="110" y="130" width="630" height="120" fill="#fdecea" fillOpacity="0.5"/>
  <text x="735" y="70" textAnchor="end" fontSize="9.5" fill="#1a6b3c">positiv: freie Durchgänge</text>
  <text x="735" y="244" textAnchor="end" fontSize="9.5" fill="#922b21">negativ: |ctr| = Anzahl Wartende</text>

  {/* Achsen */}
  <line x1="90" y1="250" x2="90" y2="50" stroke="#333" strokeWidth="1.5" markerEnd="url(#arr-sem)"/>
  <line x1="90" y1="130" x2="740" y2="130" stroke="#333" strokeWidth="1.2" strokeDasharray="4 3"/>
  <text x="78" y="84" textAnchor="end" fontSize="11" fill="#555">1</text>
  <text x="78" y="134" textAnchor="end" fontSize="11" fill="#555">0</text>
  <text x="78" y="184" textAnchor="end" fontSize="11" fill="#555">−1</text>
  <text x="78" y="234" textAnchor="end" fontSize="11" fill="#555">−2</text>
  <text x="60" y="150" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333" transform="rotate(-90, 60, 150)">sem.ctr</text>

  {/* Ereignisse oben */}
  <text x="205" y="44" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">T1: p</text>
  <text x="300" y="44" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">T2: p</text>
  <text x="395" y="44" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">T3: p</text>
  <text x="490" y="44" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">T1: v</text>
  <text x="585" y="44" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">T2: v</text>
  <text x="680" y="44" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#333">T3: v</text>
  <line x1="205" y1="50" x2="205" y2="250" stroke="#ccc" strokeWidth="1"/>
  <line x1="300" y1="50" x2="300" y2="250" stroke="#ccc" strokeWidth="1"/>
  <line x1="395" y1="50" x2="395" y2="250" stroke="#ccc" strokeWidth="1"/>
  <line x1="490" y1="50" x2="490" y2="250" stroke="#ccc" strokeWidth="1"/>
  <line x1="585" y1="50" x2="585" y2="250" stroke="#ccc" strokeWidth="1"/>
  <line x1="680" y1="50" x2="680" y2="250" stroke="#ccc" strokeWidth="1"/>

  {/* Verlauf */}
  <path d="M 110 80 L 205 80 L 205 130 L 300 130 L 300 180 L 395 180 L 395 230 L 490 230 L 490 180 L 585 180 L 585 130 L 680 130 L 680 80 L 740 80" stroke="#2176AE" strokeWidth="2.5" fill="none"/>
  <circle cx="205" cy="130" r="4" fill="#2176AE"/>
  <circle cx="300" cy="180" r="4" fill="#c0392b"/>
  <circle cx="395" cy="230" r="4" fill="#c0392b"/>
  <circle cx="490" cy="180" r="4" fill="#27ae60"/>
  <circle cx="585" cy="130" r="4" fill="#27ae60"/>
  <circle cx="680" cy="80" r="4" fill="#2176AE"/>

  {/* Wirkung */}
  <text x="205" y="274" textAnchor="middle" fontSize="10" fill="#1a5c8c">T1 betritt</text>
  <text x="300" y="274" textAnchor="middle" fontSize="10" fill="#922b21">T2 blockiert</text>
  <text x="395" y="274" textAnchor="middle" fontSize="10" fill="#922b21">T3 blockiert</text>
  <text x="490" y="274" textAnchor="middle" fontSize="10" fill="#1a6b3c">T2 geweckt</text>
  <text x="585" y="274" textAnchor="middle" fontSize="10" fill="#1a6b3c">T3 geweckt</text>
  <text x="680" y="274" textAnchor="middle" fontSize="10" fill="#1a5c8c">frei</text>

  {/* Warteschlange */}
  <text x="150" y="300" textAnchor="end" fontSize="10.5" fontWeight="bold" fill="#333">sem.queue:</text>
  <text x="205" y="300" textAnchor="middle" fontSize="10.5" fill="#555">leer</text>
  <text x="300" y="300" textAnchor="middle" fontSize="10.5" fill="#555">[T2]</text>
  <text x="395" y="300" textAnchor="middle" fontSize="10.5" fill="#555">[T2, T3]</text>
  <text x="490" y="300" textAnchor="middle" fontSize="10.5" fill="#555">[T3]</text>
  <text x="585" y="300" textAnchor="middle" fontSize="10.5" fill="#555">leer</text>
  <text x="680" y="300" textAnchor="middle" fontSize="10.5" fill="#555">leer</text>

  <line x1="20" y1="322" x2="740" y2="322" stroke="#ddd" strokeWidth="1"/>
  <text x="380" y="340" textAnchor="middle" fontSize="11" fill="#555">Semaphor mit Startwert 1: p senkt den Zähler, v erhöht ihn – unter 0 zählt er die Wartenden</text>
</svg>

### 3.6.3 - Gegenseitiger Ausschluss mit Semaphoren

Es wird ein Semaphor mit dem **Startwert 1** verwendet, und der kritische Abschnitt wird mittels **p** und **v** umschlossen:

```java
Semaphore mutex = new Semaphore(1);   // Startwert 1: genau ein Thread darf hinein

p(mutex);                 // Eintritt: ctr 1 → 0; jeder weitere Aufrufer wird blockiert
// ... kritischer Abschnitt ...
v(mutex);                 // Austritt: ctr wieder erhöhen bzw. nächsten Wartenden wecken
```

- Der erste Thread kommt durch (ctr wird 0), alle weiteren werden bei **p** blockiert, bis der Inhaber **v** aufruft – **genau ein** Thread ist im Abschnitt
- Ein Semaphor mit Startwert 1 nennt man auch **binäres Semaphor** oder **Mutex**
- Mit einem **Startwert n > 1** dürfen bis zu **n Threads gleichzeitig** hinein – nützlich für die Betriebsmittelverwaltung aus Abschnitt 3.1.1, z.B. n gleichartige Drucker (*zählendes Semaphor*)

:::tip Semaphor vs. Spin-Lock
| Kriterium | Spin-Lock (TSL) | Semaphor |
|---|---|---|
| Warten | aktiv (Busy Waiting) | **blockiert**, keine Prozessorzeit |
| Fairness | keine, Starvation möglich | Warteschlange, bei FIFO fair |
| Lange kritische Abschnitte | ungeeignet | geeignet |
| User-Space | nur als Baustein | ✅ direkt nutzbar |
| Mehrere Durchgänge (n > 1) | ❌ | ✅ zählendes Semaphor |

**Semaphore in Java:** Das Konzept steht als `java.util.concurrent.Semaphore` bereit – die Operationen heißen `acquire()` (p) und `release()` (v).
- Die Java-Implementierung **basiert nicht auf TSL** bzw. dem Spin-Lock aus Abschnitt 3.5.3, sondern nutzt einen **eigenen Mechanismus** der JVM
- `acquire()` setzt Threads, die nicht laufen sollen, auf **Blocked**. Wieder aufgerufen werden sie über einen **System-Call** (ausgelöst durch `release()`), **nicht** über einen Interrupt
:::
