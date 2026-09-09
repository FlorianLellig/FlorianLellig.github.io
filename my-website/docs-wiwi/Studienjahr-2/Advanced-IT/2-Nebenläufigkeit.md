# 2. Nebenläufigkeit

## 2.1 - Begriffe

#### Programm
- Direkt auf dem Prozessor ausführbare Folge von Maschinenbefehlen
- Passiv, da es sich erstmal nur um eine Beschreibung von einer Abfolge von Maschinenbefehlen handelt

#### Prozess
- Ist die **Bereitstellung einer Ausführungsumgebung** für Programme
- Aktiv, da hier Programme direkt ausgeführt werden
- Prozesse sind der Hardware nicht bekannt
- Prozesse laufen in eigenem Speicher bzw. haben einen eigenen Adressraum
    - Adressraum getrennt, damit sich verschiedene Prozesse nicht gegenseitig in die Quere kommen

| Zustand | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                              |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ready   | Zustand eines Prozesses, wenn er bereit zur Bearbeitung/Verarbeitung durch den Prozessor ist                                                                                                                                                                                                                                                                                                              |
| Running | Zustand eines Prozesses, wenn er aktiv in Prozessorzeit ist und gerade bearbeitet/verarbeitet wird. Pro Prozessorkern kann nur ein Prozess im _running_-Status sein                                                                                                                                                                                                                                       |
| Blocked | Zustand eines Prozesses, wenn er vorerst nicht weiter verarbeitet werden kann.<br/>- Dies kann z.B. an dem Warten auf eine Benutzereingabe liegen.<br/>- Beispiel: Lesen/Ändern auf der Festplatte (Während File I/O verarbeitet wird, wird Rechenzeit durch den Zustand Blocked freigegeben)<br/>- Prozess verweilt im Zustand _Blocked_, bis er mittels Interrupt (z.B. durch File I/O getriggert) herausgerufen wird |

<svg viewBox="0 0 660 365" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"660px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-proc" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
  <ellipse cx="330" cy="80" rx="90" ry="40" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="330" y="86" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">Running</text>
  <ellipse cx="110" cy="265" rx="80" ry="36" fill="#fdecea" stroke="#c0392b" strokeWidth="2"/>
  <text x="110" y="271" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#922b21">Blocked</text>
  <ellipse cx="540" cy="265" rx="80" ry="36" fill="#e8f5e9" stroke="#27ae60" strokeWidth="2"/>
  <text x="540" y="271" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a6b3c">Ready</text>
  <path d="M 255 108 Q 138 178 162 233" stroke="#555" strokeWidth="1.8" fill="none" markerEnd="url(#arr-proc)"/>
  <text x="172" y="172" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">1</text>
  <path d="M 406 106 Q 528 172 516 231" stroke="#555" strokeWidth="1.8" fill="none" markerEnd="url(#arr-proc)"/>
  <text x="507" y="167" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">2</text>
  <path d="M 488 237 Q 425 158 386 112" stroke="#555" strokeWidth="1.8" fill="none" markerEnd="url(#arr-proc)"/>
  <text x="452" y="190" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">3</text>
  <path d="M 190 265 L 460 265" stroke="#555" strokeWidth="1.8" fill="none" markerEnd="url(#arr-proc)"/>
  <text x="325" y="255" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#333">4</text>
  <line x1="20" y1="318" x2="640" y2="318" stroke="#ddd" strokeWidth="1"/>
  <text x="30" y="336" fontSize="11" fill="#555">① Prozess blockiert – wartet auf Eingabe / I/O</text>
  <text x="360" y="336" fontSize="11" fill="#555">③ Scheduler vergibt Prozessorzeit</text>
  <text x="30" y="356" fontSize="11" fill="#555">② Scheduler entzieht Prozessorzeit (Präemption)</text>
  <text x="360" y="356" fontSize="11" fill="#555">④ Eingabe verfügbar (Interrupt)</text>
</svg>


#### Multi Processing System
- System, das mehrere Prozesse gleichzeitig **laden** kann
- Ebenfalls für die Bereitstellung von Adressräumen verantwortlich
    - Jedem Prozess wird ein eigener Adressraum zugeordnet. Diese sind voneinander getrennt

#### Time-Sharing System
- Auch **Prozessor-Multiplexing** genannt
- Prozesse werden in sehr kurzen Intervallen (ms-Bereich) alternierend ausgeführt
- Prozesse werden auf Einprozessorsystem scheinbar parallel abgearbeitet
    - **Pseudoparallelität**
- Betriebssystem kümmert sich um alles (Ressourcenmanagement, Zeitmanagement, etc.)

:::info
**Beispiel für sequenziellen Ablauf (ohne Nebenläufigkeit):**

<svg viewBox="0 0 730 420" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"730px",display:"block",margin:"0.5rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-q2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#666"/>
    </marker>
  </defs>
  <text x="80" y="20" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#333">Clients</text>
  <rect x="225" y="25" width="495" height="390" rx="6" fill="#e8eef5" stroke="#b0c4d8" strokeWidth="1.2"/>
  <text x="665" y="52" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">Server</text>
  <rect x="18" y="36" width="120" height="120" rx="6" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
  <circle cx="78" cy="96" r="46" fill="#fdecea" stroke="#c0392b" strokeWidth="2"/>
  <rect x="18" y="174" width="120" height="120" rx="6" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
  <circle cx="78" cy="234" r="46" fill="#fdecea" stroke="#c0392b" strokeWidth="2"/>
  <rect x="18" y="312" width="120" height="120" rx="6" fill="#f5f5f5" stroke="#ccc" strokeWidth="1"/>
  <circle cx="78" cy="372" r="46" fill="#fdecea" stroke="#c0392b" strokeWidth="2"/>
  <text x="370" y="158" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">Auftrags-</text>
  <text x="370" y="174" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1a5c8c">Queue</text>
  <rect x="305" y="180" width="130" height="55" fill="white" stroke="#2176AE" strokeWidth="1.8"/>
  <line x1="331" y1="180" x2="331" y2="235" stroke="#2176AE" strokeWidth="1"/>
  <line x1="357" y1="180" x2="357" y2="235" stroke="#2176AE" strokeWidth="1"/>
  <line x1="383" y1="180" x2="383" y2="235" stroke="#2176AE" strokeWidth="1"/>
  <line x1="409" y1="180" x2="409" y2="235" stroke="#2176AE" strokeWidth="1"/>
  <circle cx="610" cy="207" r="95" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="610" y="202" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a5c8c">Server-</text>
  <text x="610" y="220" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a5c8c">Prozess</text>
  <line x1="138" y1="96" x2="303" y2="190" stroke="#666" strokeWidth="1.8" markerEnd="url(#arr-q2)"/>
  <line x1="138" y1="234" x2="303" y2="207" stroke="#666" strokeWidth="1.8" markerEnd="url(#arr-q2)"/>
  <line x1="138" y1="372" x2="303" y2="224" stroke="#666" strokeWidth="1.8" markerEnd="url(#arr-q2)"/>
  <line x1="437" y1="207" x2="513" y2="207" stroke="#666" strokeWidth="1.8" markerEnd="url(#arr-q2)"/>
</svg>

- Server arbeitet sequenziell, d.h. er kann immer nur einen Prozess verarbeiten
    - Um mehrere Aufträge zu sichern arbeitet Server mit einer Queue
- Egal wie viele Kerne der Prozessor gibt, ohne Nebenläufigkeit wird immer nur mit einem Prozess gearbeitet
- **Nachteil**: Prozessor arbeitet mit niedrigem Durchsatz
    - Multi-Core-Architekturen werden nicht genutzt
    - Durch häufige Prozesswechsel kommt es zu längeren Wartezeiten

:::


## 2.2 - Scheduling von Prozessen

### 2.2.1 - Round Robin
- Time-Sharing Verhalten mittels **Zeitscheiben**
- Timer-Interrupt unterbrocht Prozess bei Zeitüberschreitung und versetzt ihn in Status _Ready_
- Prinzip: **FiFo** - First in first out Warteschlange
- **Wichtig:** Prozessor darf nicht leer laufen
    - Daher: Lehrlaufprozess, aka. Idle-Prozess (No-Operations)
        - Damit nie nichts zu tun ist

### 2.2.2 - Prioritätengesteuert
- Auch genannt: _preemptive_
- [...]

### 2.2.3 - Kombination
- [...]

:::info
#### Time Sharing - Wann kommt es zu Prozesswechseln?
- Nach Ablauf der Zeitscheibe
- Immer dann, wenn ein aktiver Prozess warten muss, z.B. bei
    - Synchrone E/A
    - Explizitem Wartebefehl
    - Seitenfehler
        - Speicher ist grundsätzlich in verschiedene Kacheln unterteilt, welche vom Betriebssystem immer vollständig gefüllt werden
        - Seite = Prozessdatensatz, der genau in eine solche Kachel passt
        - Wenn Seiten nicht mehr passen weil keine Kacheln mehr zur Verfügung stehen landen diese im Swap
        - Seitenfehler: Zugriffsversuch auf eine Seite, die im Swap liegt
            - Triggert weiteren Prozess und ursprünglicher Prozess geht auf Blocked

<br/>

#### Time Sharing - Verschiedene Sichten
Time Sharing wird von verschiedenen Blickwinkeln unterschiedlich wargenommen:
1. **Hardwaresicht:** Ablauf eines (!) Programm Counters in dem unterschiedliche Prozesse (mit potenziell unterschiedlicher Laufzeit aufgrind von Priorisierung) ablaufen
2. **Entwicklungssicht:** Entwickelnde sehen nur den Programm Counter des eigenen Programm s und entwickeln diesen mit
3. **Prozessorsicht:** Der Prozessor verteilt seine Zeit(-scheiben) auf unterschiedliche Prozesse. 

<svg viewBox="0 0 880 345" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"880px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-sv" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#555"/>
    </marker>
    <marker id="arr-sv2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2176AE"/>
    </marker>
  </defs>

  {/* Panel (a): Ein Program Counter */}
  <rect x="75" y="48" width="70" height="48" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <rect x="75" y="96" width="70" height="48" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <rect x="75" y="144" width="70" height="48" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <rect x="75" y="192" width="70" height="48" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="110" y="78" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a5c8c">A</text>
  <text x="110" y="126" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a5c8c">B</text>
  <text x="110" y="174" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a5c8c">C</text>
  <text x="110" y="222" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a5c8c">D</text>
  <path d="M 73 50 C 43 50 43 94 73 94 C 43 94 43 142 73 142 C 43 142 43 190 73 190 C 43 193 50 240 50 250" stroke="#555" strokeWidth="1.5" fill="none" markerEnd="url(#arr-sv)"/>
  <text x="110" y="30" textAnchor="middle" fontSize="10" fill="#555">Ein Program Counter</text>
  <line x1="110" y1="33" x2="105" y2="46" stroke="#555" strokeWidth="1"/>
  <text x="153" y="152" textAnchor="start" fontSize="10" fill="#555">Process</text>
  <text x="153" y="164" textAnchor="start" fontSize="10" fill="#555">switch</text>
  <text x="110" y="278" textAnchor="middle" fontSize="12" fill="#555">(a)</text>

  {/* Panel (b): Vier Program Counter */}
  <text x="375" y="26" textAnchor="middle" fontSize="10" fill="#555">Four program counters</text>
  <circle cx="375" cy="48" r="3" fill="#555"/>
  <line x1="375" y1="51" x2="297" y2="148" stroke="#555" strokeWidth="1.4" markerEnd="url(#arr-sv)"/>
  <line x1="375" y1="51" x2="337" y2="148" stroke="#555" strokeWidth="1.4" markerEnd="url(#arr-sv)"/>
  <line x1="375" y1="51" x2="377" y2="148" stroke="#555" strokeWidth="1.4" markerEnd="url(#arr-sv)"/>
  <line x1="375" y1="51" x2="417" y2="148" stroke="#555" strokeWidth="1.4" markerEnd="url(#arr-sv)"/>
  <rect x="279" y="150" width="36" height="44" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="297" y="165" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">A</text>
  <line x1="297" y1="169" x2="297" y2="188" stroke="#2176AE" strokeWidth="1.4" markerEnd="url(#arr-sv2)"/>
  <rect x="319" y="150" width="36" height="44" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="337" y="165" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">B</text>
  <line x1="337" y1="169" x2="337" y2="188" stroke="#2176AE" strokeWidth="1.4" markerEnd="url(#arr-sv2)"/>
  <rect x="359" y="150" width="36" height="44" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="377" y="165" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">C</text>
  <line x1="377" y1="169" x2="377" y2="188" stroke="#2176AE" strokeWidth="1.4" markerEnd="url(#arr-sv2)"/>
  <rect x="399" y="150" width="36" height="44" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <text x="417" y="165" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a5c8c">D</text>
  <line x1="417" y1="169" x2="417" y2="188" stroke="#2176AE" strokeWidth="1.4" markerEnd="url(#arr-sv2)"/>
  <text x="375" y="220" textAnchor="middle" fontSize="12" fill="#555">(b)</text>

  {/* Panel (c): Sicht des Prozessors */}
  <line x1="548" y1="48" x2="548" y2="268" stroke="#555" strokeWidth="1.5"/>
  <line x1="548" y1="268" x2="862" y2="268" stroke="#555" strokeWidth="1.5" markerEnd="url(#arr-sv)"/>
  <text x="538" y="94" textAnchor="end" fontSize="12" fontWeight="bold" fill="#1a5c8c">D</text>
  <line x1="540" y1="90" x2="548" y2="90" stroke="#555" strokeWidth="1"/>
  <text x="538" y="149" textAnchor="end" fontSize="12" fontWeight="bold" fill="#1a5c8c">C</text>
  <line x1="540" y1="145" x2="548" y2="145" stroke="#555" strokeWidth="1"/>
  <text x="538" y="204" textAnchor="end" fontSize="12" fontWeight="bold" fill="#1a5c8c">B</text>
  <line x1="540" y1="200" x2="548" y2="200" stroke="#555" strokeWidth="1"/>
  <text x="538" y="259" textAnchor="end" fontSize="12" fontWeight="bold" fill="#1a5c8c">A</text>
  <line x1="540" y1="255" x2="548" y2="255" stroke="#555" strokeWidth="1"/>
  <text x="518" y="170" textAnchor="middle" fontSize="11" fill="#555" transform="rotate(-90, 518, 170)">Prozess</text>
  <text x="710" y="290" textAnchor="middle" fontSize="11" fill="#555">Zeit →</text>
  <line x1="568" y1="255" x2="593" y2="255" stroke="#2176AE" strokeWidth="5" strokeLinecap="round"/>
  <line x1="601" y1="200" x2="626" y2="200" stroke="#2176AE" strokeWidth="5" strokeLinecap="round"/>
  <line x1="634" y1="145" x2="659" y2="145" stroke="#2176AE" strokeWidth="5" strokeLinecap="round"/>
  <line x1="667" y1="90" x2="692" y2="90" stroke="#2176AE" strokeWidth="5" strokeLinecap="round"/>
  <line x1="700" y1="255" x2="725" y2="255" stroke="#2176AE" strokeWidth="5" strokeLinecap="round"/>
  <line x1="733" y1="200" x2="758" y2="200" stroke="#2176AE" strokeWidth="5" strokeLinecap="round"/>
  <line x1="766" y1="145" x2="791" y2="145" stroke="#2176AE" strokeWidth="5" strokeLinecap="round"/>
  <line x1="799" y1="90" x2="824" y2="90" stroke="#2176AE" strokeWidth="5" strokeLinecap="round"/>
  <text x="710" y="308" textAnchor="middle" fontSize="12" fill="#555">(c)</text>

  <line x1="20" y1="318" x2="860" y2="318" stroke="#ddd" strokeWidth="1"/>
  <text x="440" y="335" textAnchor="middle" fontSize="10.5" fill="#555">(a) Program Counter  ·  (b) konzeptuelles Modell  ·  (c) Sicht des Prozessors</text>
</svg>

:::

## 2.3 - Threads
- Thread (engl.) = Faden
    - _Thread of Execution_
- Ausgangslage: Multi-Processing bringt einige Probleme mit sich!
    - Eine Anwendung die gerne Parallel wäre kann sich nicht den selben Adressraum teilen (Jeder Prozess hat eigenen Adressraum)
    - Bei klassischem Prozesswechsel muss Hardware Cache invalidiert werden:
        - Bei Prozesswechsel wird vor dem Wechsel der Cache des letzten Prozesses auf invalid gesetzt, sodass der nächste Prozess weiß das er Daten aus dem Hauptspeicher laden muss
>Als Lösungsprinzip kommen Threads zum Einsatz
- Threads **ermöglichen Nebenläufigkeit innerhalb eines Threads**
    - Mehrere nebenläufige Kontrollflüsse innerhalb _eines Adressraums_
    - Hardware-Caches müssen nicht invalidiert werden
    - Keine System Calls nötig um Dateien zu teilen

:::warning
Die hier thematisierten Threads haben **nichts mit Threads als CPU-Spec zu tun**
- Bei Hardware bedeuten Threads das es _einfach_ mehrere Registersätze gibt, sodass weniger aus dem Hauptspeicher geladen werden muss.
:::

### 2.3.1 - Multi-Processing und Multi-Threading im Vergleich

<svg viewBox="0 0 870 400" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"870px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-mt" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#555"/>
    </marker>
  </defs>

  <text x="435" y="27" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1a5c8c">Multi-Processing vs. Multi-Threading</text>

  <!-- User space bracket (left) -->
  <line x1="30" y1="50" x2="30" y2="278" stroke="#888" strokeWidth="1"/>
  <line x1="30" y1="50" x2="40" y2="50" stroke="#888" strokeWidth="1"/>
  <line x1="30" y1="278" x2="40" y2="278" stroke="#888" strokeWidth="1"/>
  <text x="10" y="164" textAnchor="middle" fontSize="11" fill="#555" transform="rotate(-90, 10, 164)">User space</text>

  <!-- Kernel space bracket (left) -->
  <line x1="30" y1="280" x2="30" y2="343" stroke="#888" strokeWidth="1"/>
  <line x1="30" y1="280" x2="40" y2="280" stroke="#888" strokeWidth="1"/>
  <line x1="30" y1="343" x2="40" y2="343" stroke="#888" strokeWidth="1"/>
  <text x="10" y="311" textAnchor="middle" fontSize="11" fill="#555" transform="rotate(-90, 10, 311)">Kernel space</text>

  <!-- Panel (a): Multi-Processing -->
  <rect x="48" y="48" width="355" height="295" rx="3" fill="white" stroke="#bbb" strokeWidth="1.5"/>
  <line x1="48" y1="278" x2="403" y2="278" stroke="#bbb" strokeWidth="1.5"/>
  <rect x="49" y="279" width="353" height="63" fill="#f5f5f5"/>
  <text x="225" y="315" textAnchor="middle" fontSize="13" fill="#555">Kernel</text>

  <!-- Process 1 labels + arrows (panel a) -->
  <text x="138" y="65" textAnchor="middle" fontSize="11" fill="#333">Process 1</text>
  <line x1="138" y1="68" x2="138" y2="123" stroke="#555" strokeWidth="1" markerEnd="url(#arr-mt)"/>
  <text x="225" y="65" textAnchor="middle" fontSize="11" fill="#333">Process 2</text>
  <line x1="225" y1="68" x2="225" y2="123" stroke="#555" strokeWidth="1" markerEnd="url(#arr-mt)"/>
  <text x="312" y="65" textAnchor="middle" fontSize="11" fill="#333">Process 3</text>
  <line x1="312" y1="68" x2="312" y2="123" stroke="#555" strokeWidth="1" markerEnd="url(#arr-mt)"/>

  <!-- Circle 1: cx=138, cy=165, r=40 -->
  <circle cx="138" cy="165" r="40" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <path d="M 111 165 C 116 156 122 156 128 165 C 134 174 140 174 146 165 C 152 156 158 156 165 165" stroke="#1a5c8c" strokeWidth="2" fill="none"/>

  <!-- Circle 2: cx=225, cy=165, r=40 -->
  <circle cx="225" cy="165" r="40" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <path d="M 198 165 C 203 156 209 156 215 165 C 221 174 227 174 233 165 C 239 156 245 156 252 165" stroke="#1a5c8c" strokeWidth="2" fill="none"/>

  <!-- Circle 3: cx=312, cy=165, r=40 -->
  <circle cx="312" cy="165" r="40" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>
  <path d="M 285 165 C 290 156 296 156 302 165 C 308 174 314 174 320 165 C 326 156 332 156 339 165" stroke="#1a5c8c" strokeWidth="2" fill="none"/>

  <!-- Thread label with arrows pointing at thread wavy lines (panel a) -->
  <text x="225" y="245" textAnchor="middle" fontSize="11" fill="#333">Thread</text>
  <line x1="212" y1="230" x2="141" y2="172" stroke="#555" strokeWidth="1" markerEnd="url(#arr-mt)"/>
  <line x1="225" y1="230" x2="225" y2="172" stroke="#555" strokeWidth="1" markerEnd="url(#arr-mt)"/>
  <line x1="238" y1="230" x2="309" y2="172" stroke="#555" strokeWidth="1" markerEnd="url(#arr-mt)"/>

  <text x="225" y="368" textAnchor="middle" fontSize="12" fill="#555">(a)</text>

  <!-- Panel (b): Multi-Threading -->
  <rect x="456" y="48" width="285" height="295" rx="3" fill="white" stroke="#bbb" strokeWidth="1.5"/>
  <line x1="456" y1="278" x2="741" y2="278" stroke="#bbb" strokeWidth="1.5"/>
  <rect x="457" y="279" width="283" height="63" fill="#f5f5f5"/>
  <text x="598" y="315" textAnchor="middle" fontSize="13" fill="#555">Kernel</text>

  <!-- Process label + arrow (panel b) -->
  <text x="598" y="65" textAnchor="middle" fontSize="11" fill="#333">Process</text>
  <line x1="598" y1="68" x2="598" y2="91" stroke="#555" strokeWidth="1" markerEnd="url(#arr-mt)"/>

  <!-- Large circle: cx=598, cy=165, r=72 -->
  <circle cx="598" cy="165" r="72" fill="#dbeeff" stroke="#2176AE" strokeWidth="1.5"/>

  <!-- 3 thread wavy lines inside big circle -->
  <path d="M 546 148 C 557 137 568 137 580 148 C 592 159 603 159 615 148 C 627 137 638 137 650 148" stroke="#1a5c8c" strokeWidth="2" fill="none"/>
  <path d="M 546 165 C 557 154 568 154 580 165 C 592 176 603 176 615 165 C 627 154 638 154 650 165" stroke="#1a5c8c" strokeWidth="2" fill="none"/>
  <path d="M 546 182 C 557 171 568 171 580 182 C 592 193 603 193 615 182 C 627 171 638 171 650 182" stroke="#1a5c8c" strokeWidth="2" fill="none"/>

  <!-- 3 upward arrows + Thread label (panel b) -->
  <line x1="578" y1="252" x2="578" y2="185" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-mt)"/>
  <line x1="598" y1="252" x2="598" y2="176" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-mt)"/>
  <line x1="618" y1="252" x2="618" y2="150" stroke="#555" strokeWidth="1.2" markerEnd="url(#arr-mt)"/>
  <text x="598" y="268" textAnchor="middle" fontSize="11" fill="#333">Thread</text>

  <text x="598" y="368" textAnchor="middle" fontSize="12" fill="#555">(b)</text>

  <!-- Bottom legend -->
  <line x1="20" y1="376" x2="850" y2="376" stroke="#ddd" strokeWidth="1"/>
  <text x="435" y="393" textAnchor="middle" fontSize="11" fill="#555">(a) Drei Prozesse mit je einem Thread  ·  (b) ein Prozess mit drei Threads</text>
</svg>

### 2.3.2 - Was gehört zu einem Thread?
- Zustand (Running, Ready, Blocked)
- Program-Counter
- Stack
    - ???
- Register (zum Halten des momentanen Funktionszustand)
    - ???

### 2.3.3 - Anwendungsbeispiele

#### Textverarbeitung durch Threads
- Aufgabenaufteilung der Textverarbeitung in Threads, beispielsweise:
    1. Thread für Eingabeverarbeitung der Tastatur
    2. Thread für Textformatierung
    3. Thread für Dateispeicherung
- Vorteil: Die Threads können unabhängig voneinander Laufen und arbeiten - somit miss man z.B. nicht auf einen Drucker bzw. den Speicherprozess im hintergrund (dauerhaft) warten

#### Multi-Threaded Webserver
Quelle: Vorlesungsskript Advanced IT - Prof. Dr. Pagnia 

![Multi-Threaded Webserver Prozessmodell](/documents/Wirtschaftsinformatik/Studienjahr-2/Advanced-IT/WebServerProcess.png)

### 2.3.4 - Unterschiedliche Threadtypen

#### User Level Threads
- Verwaltungsstruktur der einzelnen Threads befindet sich **innerhalb des Prozesses**
    - Besitzen eine Thread-Tabelle pro Prozess
- Prozess wird einem Kern zugeordnet, d.h. **pro Prozess kann nur ein Thread parallel laufen**
    - Bei zwei Prozessen mit (jew.) zwei Threads werden nur zwei Kerne genutzt

<svg viewBox="0 0 760 480" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"760px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>
  <defs>
    <marker id="arr-ult" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#333"/>
    </marker>
  </defs>
  <rect x="72" y="38" width="592" height="366" rx="3" fill="#e8e8ef" stroke="#333" strokeWidth="1.8"/>
  <rect x="72" y="273" width="592" height="131" fill="#dddde8"/>
  <line x1="72" y1="273" x2="664" y2="273" stroke="#333" strokeWidth="1.5"/>
  <path d="M 65 40 Q 55 40 55 50 L 55 148 Q 55 158 45 158 Q 55 158 55 168 L 55 261 Q 55 271 65 271" fill="none" stroke="#333" strokeWidth="1.5"/>
  <text x="9" y="151" fontSize="12" fill="#333">User</text>
  <text x="9" y="166" fontSize="12" fill="#333">space</text>
  <path d="M 65 275 Q 55 275 55 285 L 55 329 Q 55 339 45 339 Q 55 339 55 349 L 55 393 Q 55 403 65 403" fill="none" stroke="#333" strokeWidth="1.5"/>
  <text x="5" y="332" fontSize="12" fill="#333">Kernel</text>
  <text x="9" y="347" fontSize="12" fill="#333">space</text>
  <circle cx="234" cy="158" r="97" fill="#e8e8ef" stroke="#333" strokeWidth="1.8"/>
  <path d="M 202 196 C 194 179 210 162 202 145 C 194 128 210 112 202 95" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M 223 196 C 215 179 231 162 223 145 C 215 128 231 112 223 95" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M 246 196 C 238 179 254 162 246 145 C 238 128 254 112 246 95" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M 268 196 C 260 179 276 162 268 145 C 260 128 276 112 268 95" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  <rect x="166" y="207" width="136" height="34" fill="white" stroke="#333" strokeWidth="1.5"/>
  <rect x="272" y="207" width="30" height="34" fill="#c5c5d4" stroke="#333" strokeWidth="1"/>
  <line x1="272" y1="216" x2="302" y2="216" stroke="#333" strokeWidth="0.8"/>
  <line x1="272" y1="224" x2="302" y2="224" stroke="#333" strokeWidth="0.8"/>
  <line x1="272" y1="232" x2="302" y2="232" stroke="#333" strokeWidth="0.8"/>
  <circle cx="508" cy="155" r="87" fill="#e8e8ef" stroke="#333" strokeWidth="1.8"/>
  <path d="M 479 190 C 471 174 487 157 479 140 C 471 123 487 107 479 90" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M 505 190 C 497 174 513 157 505 140 C 497 123 513 107 505 90" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  <path d="M 532 190 C 524 174 540 157 532 140 C 524 123 540 107 532 90" fill="none" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
  <rect x="450" y="200" width="116" height="32" fill="white" stroke="#333" strokeWidth="1.5"/>
  <rect x="536" y="200" width="30" height="32" fill="#c5c5d4" stroke="#333" strokeWidth="1"/>
  <line x1="536" y1="209" x2="566" y2="209" stroke="#333" strokeWidth="0.8"/>
  <line x1="536" y1="217" x2="566" y2="217" stroke="#333" strokeWidth="0.8"/>
  <line x1="536" y1="225" x2="566" y2="225" stroke="#333" strokeWidth="0.8"/>
  <text x="255" y="345" fontSize="17" fill="#333" fontWeight="bold">Kernel</text>
  <rect x="542" y="290" width="75" height="46" fill="white" stroke="#333" strokeWidth="1.5"/>
  <line x1="542" y1="303" x2="617" y2="303" stroke="#333" strokeWidth="1"/>
  <line x1="542" y1="316" x2="617" y2="316" stroke="#333" strokeWidth="1"/>
  <line x1="542" y1="329" x2="617" y2="329" stroke="#333" strokeWidth="1"/>
  <text x="165" y="18" textAnchor="middle" fontSize="13" fill="#333" fontWeight="bold">Process</text>
  <line x1="165" y1="22" x2="196" y2="62" stroke="#333" strokeWidth="1.3" markerEnd="url(#arr-ult)"/>
  <text x="385" y="18" textAnchor="middle" fontSize="13" fill="#333" fontWeight="bold">Thread</text>
  <line x1="385" y1="22" x2="250" y2="80" stroke="#333" strokeWidth="1.3" markerEnd="url(#arr-ult)"/>
  <text x="105" y="427" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">Run-time</text>
  <text x="105" y="442" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">system</text>
  <path d="M 150 420 Q 178 348 196 243" fill="none" stroke="#333" strokeWidth="1.3" markerEnd="url(#arr-ult)"/>
  <text x="295" y="427" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">Thread</text>
  <text x="295" y="442" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">table</text>
  <line x1="295" y1="420" x2="285" y2="243" stroke="#333" strokeWidth="1.3" markerEnd="url(#arr-ult)"/>
  <text x="632" y="427" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">Process</text>
  <text x="632" y="442" textAnchor="middle" fontSize="12" fill="#333" fontWeight="bold">table</text>
  <path d="M 617 420 Q 598 378 580 334" fill="none" stroke="#333" strokeWidth="1.3" markerEnd="url(#arr-ult)"/>
</svg>


#### Kernel Level Threads
- Verwaltungsstruktur der einzelnen Threads befindet sich **innerhalb des Kernels**
    - Besitzen eine einzige Thread-Tabelle für alle Threads
    - Werden vom Betriebssystem verwaltet - durch u.a. System Calls
- Betriebssystemkern kennt alle Threads und kann diese auf alle zur Verfügung stehenden Kerne aufteilen
    - Mehrere Threads können somit durch den Kernel auf mehrere Prozessorkerne verteilt werden und sind nicht auf den Kern des Prozesses limitiert
- Kernel Level Threads sind als System-Calls Implementiert, daher:
    - z.B. Erzeugen eines KL-Threads vergleichsweise Teuer
    - Besser: Thread nicht beenden sindern recyclen und mit neuer Aufgabe versehen


>Hier kommt noch Bild hin

#### Vergleich User- und Kernel-Level Threads

| Kriterium | User-Level Threads (UL) | Kernel-Level Threads (KL) |
|---|---|---|
| **Betriebssystem-Unterstützung** | Funktionieren mit beliebigem BS — der Kernel weiß nichts von den Threads | Müssen vom BS implementiert sein |
| **System-Calls** | Thread-Operationen laufen **ohne System-Calls** im User-Space ab | Jede Thread-Operation erfordert einen System-Call → Overhead |
| **Effizienz** | ✅ Schneller, da kein System Call zum Thread-Wechsel nötig ist | ❌ Langsamer durch System-Call-Overhead |
| **Speicherverbrauch** | ✅ Kein BS-Speicher → sehr viele Threads erzeugbar | ❌ Jeder Thread belegt Kernel-Speicher → limitiert die Anzahl |
| **Scheduling-Strategie** | ✅ Pro Prozess individuell konfigurierbar | ❌ BS definiert eine globale Strategie für alle |
| **Blockierende Aktionen** (z. B. I/O, Seitenfehler) | ❌ Blockiert den **gesamten Prozess** mit allen seinen Threads | ✅ Nur der betroffene Thread wird blockiert, andere laufen weiter |
| **Parallelität auf mehreren Prozessoren** | ❌ Alle Threads eines Prozesses laufen auf **demselben Kern** | ✅ Threads können auf **verschiedenen Kernen** parallel laufen |


#### Hybrid Ansatz
- User-Level und Kernel Level Threads können kombiniert werden:
    - Mehrere User-Level Threads auf einem Kernel Level Thread

> Was war hier in dem Kontext nochmal synchrone und asynchrone E/A


### 2.3.5 - Threads in Java
- Threads in Java (der Klasse _Thread_) sind Kernel Level Threads

#### Wichtige Methoden der Klasse `Thread`

| Methode | Beschreibung |
|---|---|
| `public void run()` | Enthält den auszuführenden Code — wird beim Start des Threads aufgerufen |
| `public void start()` | Startet den Thread und ruft intern `run()` auf |
| `public static void sleep(int millisecs)` | Versetzt den **aufrufenden** Thread für die angegebene Zeit in den Schlafzustand |
| `public void join()` | Blockiert den Aufrufer, bis dieser Thread **vollständig fertig** ist |
| `public void join(int millisecs)` | Wie `join()`, aber maximal für die angegebene Zeit |
| `public static void yield()` | Der aufrufende Thread gibt die Prozessorkontrolle ab → Thread-Wechsel möglich |
| `public static void interrupt()` | Deblockiert einen bisher blockierten Thread |

:::warning
**Reihenfolge der Threads:**
- **Wichtig:** sollte man mehrere Threads hintereinander starten so ist die Reihenfolge in der diese gestartet worden sind **nicht automatisch die Reihenfolge in der sie fertig sind**
- Dies ist gut bei Threads mit unterschiedlicher Ausgabe (z.B. Countern) zu erkennen
- Außerdem:  Zwei Ausgaben werden nie ineinander liegen, da die Ausgabeeinheit sequenziell arbeitet
- **Beispiel** - Thread 1 gibt Namen nacheinander aus, Thread 2 zählt hoch.
```txt
Jannes
1
Felix
2
3
Finn
4
[...]
```
:::

#### Code-Beispiel mit `extends`

> **Szenario:** 5 Mitarbeiter bearbeiten gleichzeitig Bestellungen. Jeder braucht zufällig lang (0–1 s), dann meldet er sich fertig.
> Die Klasse erbt direkt von `Thread` — das Objekt **ist selbst** ein Thread und wird direkt gestartet.

```java
public class Mitarbeiter extends Thread {
    private int id;

    public Mitarbeiter(int id) {
        this.id = id;
    }

    @Override
    public void run() {
        try {
            Thread.sleep((int) (Math.random() * 1000)); // zufällige Bearbeitungszeit
        } catch (Exception e) {}
        System.out.println("Mitarbeiter " + id + ": Bestellung fertig!");
    }

    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            Mitarbeiter m = new Mitarbeiter(i);
            m.start(); // Thread direkt starten
        }
    }
}
```

#### Code-Beispiel mit `implements`

> **Szenario:** Gleiche Logik wie oben. Diesmal implementiert die Klasse `Runnable` — sie beschreibt **nur die Aufgabe**, der Thread wird separat erzeugt und bekommt das Runnable übergeben.

```java
public class Mitarbeiter implements Runnable {
    private int id;

    public Mitarbeiter(int id) {
        this.id = id;
    }

    @Override
    public void run() {
        try {
            Thread.sleep((int) (Math.random() * 1000)); // zufällige Bearbeitungszeit
        } catch (Exception e) {}
        System.out.println("Mitarbeiter " + id + ": Bestellung fertig!");
    }

    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            Mitarbeiter mitarbeiter = new Mitarbeiter(i); // Runnable-Objekt
            Thread t = new Thread(mitarbeiter);           // Thread bekommt Aufgabe übergeben
            t.start();
        }
    }
}
```

:::tip Wann welche Variante?
- **`extends Thread`** — einfacher, wenn die Klasse sonst nichts erben muss
- **`implements Runnable`** — flexibler, da Java nur Einfachvererbung erlaubt; Klasse kann gleichzeitig noch von einer anderen Klasse erben
:::

#### Plattformunabhängigkeit von Threads in Java
- Das Verhalten eines Programms mit Threads ist – wegen der Kernel-Level-Threads – leider nicht plattformunabhängig!
- Bereits _zwischen Unix und Windows Systemen_ - bzw. der VM für Java - gibt es bereits Unterschiede in der Bearbeitung von Threads:
  - VM von Unix-Systeme arbeiten mit _verdrängtem prioritätenbasierten Scheduling_
  - VM von Windows arbeitet mit _zeitscheibenbasiertem Scheduling_


:::danger
Auch wenn dies mehr Optimierungsspielraum für Unix-Systeme (aufgrund der Prioritätensetzung) ermöglicht kann dies auch zu Problemen führen:
- Sollte ein Thread mit hoher Priorität im _Running_-Status verweilen und keine Prozessorzeit freigeben, kann dies unter Umständen dazu führen das das Programm nicht weiterarbeiten kann und in diesem Zustand verweilt.
:::