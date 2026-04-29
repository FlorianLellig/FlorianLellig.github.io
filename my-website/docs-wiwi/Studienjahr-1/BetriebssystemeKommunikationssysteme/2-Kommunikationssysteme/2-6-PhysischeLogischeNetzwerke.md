# 2.6 Physische/Logische Netzwerke

Netzwerke können in physische und in logische Netzwerke unterteilt werden:

## 2.6.1 Physisches Netzwerk
- Das Physische Netzwerk arbeitet auf dem **Network interface Layer**, sprich der untersten Ebene des TCI/IP Schichtenmodells
- Besteht aus **physikalischen Übertragungsmedien** (z.B. Kupfer, Glasfaser oder Funk) und einem **Übertragungsprotokoll** (Ethernet, WAN, WLAN, DSL, LTE, etc.)
- Die Adressen der Workstations im LAN sind die sog. **MAC-Adressen** (Media Access Control Adressen)

## 2.6.2 Logisches Netzwerk
- Das logische Netzwerk arbeitet auf dem **Internet Layer** sprich der zweituntersten Ebene des TCI/IP Schichtenmodells
- Protokoll: _Internet Protocol, kurz IP_ (früher IPX oder Apple Talk)
    - Die vergebenen logischen Adressen sind abhängig vom Netzwerkprotokoll
    - Heute fast ausschließlich nutzung des IP (Internet Protcol).

## 2.6.3 Netzwerkkomponenten

Man unterscheidet bei Netzwerkkomponenten zwischen Komponenten zur Verbindungsherstellung auf logischer Ebene (Internet Layer) und physischer Ebene (Network Interface Layer).


### Verbindungen auf logischer Ebene

Zur Verbindungsherstellung auf logischer Ebene werden typischerweise Router verwendet.
- Nutzen das Internet-Protocoll zur Vergabe von IP-Adressen 
- Arbeitet auf logischer Ebene im **Internet Layer**

### Verbindungen auf physischer Ebene

Zur Verbindungsherstellung auf physischer Ebene werden Bridges, Switches und WLAN-Access-Points verwendet
- Nutzen **Übertragungsprotokolle** wie z.B. Ethernet, etc.
- Arbeiten auf physischer Ebene im **Network Interface Layer**

#### Switching
- Unter Switching versteht man das **Weiterleiten von Frames ziwshcen zwei Ports eines Switches** mit einer hohen Geschwindigkeit
- Switch verbindet LANs oder Endgeräte auf dem Network Interface Layer.
- Grundeigenschaften des Switchings:
    - **Switching (eng.) = Schalten**; d.h. eine Übertragung wird entsprechend exklusiv geschaltet
    - Switch kann **mehrere Verbindungen gleichzeitig parallel schalten**
    - Switching erfordert Adressautwertung (Erfolgt im LAN über die MAC-Adresse)
    - **Voll-Duplex Übertragung** möglich, da jede Station eigene Verbindung hat
        - Voll-Duplex = jede Station kann gleichzeitig senden und empfangen
    - Sind sehr **schnell**


##### Switch - Adressen lernen
- Switches lernen Adressen der angeschlossen Geräte über die **MAC-Source Adressen aus den von dem Sender versendeten MAC-Frame**
    - D.h. ein Switch lernt die angeschlossenen Geräte ausschließlich über den Absender von MAC Frames kennen
    - Switch merkt sich die gelernten angeschlossenen Geräte für maximal 300 Sekunden (Ageing Timer)
    - Hier ein Rollenspiel was das Adressenlernen verdeutlicht:  [Download](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/RollenspielSwitching.pdf)

##### Switch - Transparent Switching
- Transparent Switching bedeutet, dass **Sender und Empfänger NICHT von der Existenz von Switches bescheid wissen**

:::tip
Switches bieten oft sogenannte **VLANs**, sprich Virtual LANs an:
- Bei VLAN werden die vorhandenen Ports eines Switches gruppiert aufgeteilt (Unterteiliung in seperate "Broadcast Domains")
![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme14.png)
-  D.h. Datenframes können ihr VLAN nicht verlassen und nur zwischen den jeweils im VLAN verfügbaren Stationen versendet werden
- Funktionsweise:
    - Das MAC-Frame wird um den sog. VLAN Tag ergänzt:
    ![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme15.png)
    - Ein VLAN Tag ist ein zusätzliches Protokoll-Feld im Ethernet Frame
        - Sie existieren ausschließlich in:
            - Switches
                - Hineweis: Jeder Switch arbeitet grundsätzlich mit einem default-VLAN, das um weitere, eindeutig nummerierte VLANs erweitert werden kann
            - Verbindungsleitungen zwischen zwei verschiedenen Switches (siehe Abb. bezogen auf VLAN 1)
            - Zwischen Switch und Devices, die VLAN-Tagging unterstützen (z.B. VoIP Telefone)
- Ermöglicht LAN-Kommunikation und gleichzeitige VoIP-Telefonie über EINEN einheitlichen Switch (der allerdings zwei virtuelle LANs simuliert)
:::


