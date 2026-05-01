# 2.8 Routing & TCP/UDP

## Routing

### Router - Komponenten/Funktionen
- Router kann mehrere verschiedene Interfaces von verschiedenen physikalischen Netzwerken haben (Ethernet, DSL, Fiber, WLAN, ...)
- Router wird über die MAC Adresse adressiert
- Für Router hat nur die Netzwerk ID (Net-ID) der IP-Adresse Relevanz
- Nutzt Routing-Algorithmus für bestmöglichen Pfad zum Zielnetz
- Kommunikation zwischen Knoten erfolgt durch Link-Level-Protocol (Typ 2 - Connection oriented)

### Router - Konfiguration
- Router hat für jedes angeschlossene Netz eine IP-Adresse

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme22.png) 

:::warning
Die eigentliche Workstation kennt den Weg zum Ziel nicht - dies kennt lediglich der Router.
:::

## TCP/UDP
:::tip
TCP und UDP sind Protokolle zum Datenaustausch zwischen zwei Geräten. Sie arbeiten auf dem Transport-Layer im TCP/IP Modell
:::

### TCP - Protocol
- TCP = Transmission-Control-Protocol
- Connection-oriented Protocol (Link-Level-Service Type 2)
    - Sehr zuverlessig
    - Sicherung der Datenübertragung
    - Verbindung wird inkl. 3-Way-Handshake aufgebaut
:::note
TCP sind u.a. übergeordnet: FTP, HTTP, SMTP, ...
:::

### UDP - Protocol
- UDP = User-Datagram Protocol
- Connection-less Protocol (Link-Level-Service Type 1)
    - Schneller als TCP
    - Unzuverlässiger (da verbindungslos)
    - Das Protokoll verlagert Fehlerkontrolle, etc. auf ein übergeordnetes Protokoll

:::note
UDP sind u.a. übergeordnet: VoIP, Video, NFS, ...
:::

### Ports
- Ports sind "zwischen" Application Layer und Transport Layer
- Kümmern sich darum, Daten an die richtige Applikation weiterzuleiten
    - Ermöglichen ein Unterscheiden von verschiedenen Prozessen
- Port Nummmern sind 1 bis 65535
- Mittels `Netstat-n` lässt sich die Portnutzung (unter Windows) anzeigen

#### Well-Known-Ports
:::tip
Alle Ports von 1 bis 1024 sind für Well-Known-Ports reserviert
:::

| Port Nr. | Protokoll |
| :--- | :--- |
| 21 | FTP |
| 23 | Telnet |
| 25 | SMTP |
| 53 | DNS |
| 80 | HTTP |
| 443 | HTTPS |
| 445 | MS-Dataservice |
| 993 | IMAP (Mail verschl.) |
| 995 | POP3 (Mail verschl.) |

#### Registrierte Ports
:::tip
Alle Ports von 1025 bis 49151 sind Registered Ports. Sie können bei Bedarf von Anwendungsherstellern für eigene Protokolle registriert werden.
:::

#### Dynamische Ports
:::tip 
Die restlichen Ports bis 65535 sind Dynamic Ports - sie sind nicht registriert und können dementsprechend variabel eingesetzt werden.
:::


## Zusammenfassung - Ablauf einer Kommunikation im TCP/IP Modell

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme23.png) 