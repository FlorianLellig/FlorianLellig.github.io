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
