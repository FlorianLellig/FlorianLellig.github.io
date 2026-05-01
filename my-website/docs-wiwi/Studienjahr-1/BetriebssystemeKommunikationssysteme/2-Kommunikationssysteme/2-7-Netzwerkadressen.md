# 2.7 Netzwerkaufbau und Adressen

## Grundlagen
Man unterscheidet zwischen zwei verschiedenen Netzwerkadressen:
- Physische Netzwerkadressen
    - MAC-Adresse (arbeiten auf Network interface Layer)
    - Ist im MAC Frame unter `Destination-Adress` und `Source-Adress` in Verwendung
- Logische Netzwerkadressen
    - zu 99% IP-Adressen
    - Arbeiten auf Internet Layer
        - Sind dementsprechend Teil des `Data`-Teils des MAC-Frames
            - `Source-Network-Adress`
            - `Destination-Network-Adress`

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme21.png) 

## IPv4-Adressen

### Aufbau
- Die IP-Adresse besteht aus zwei Teilen, der Net-ID und der Host-ID
    - Net-ID wird von Routern verwendet um Packete durch Netz zu routen
    - Host-ID wird von Hosts verwendet

#### Unterschiedliche Netzwerk-Klassen
- Netzklassen geben an, wie groß Net-ID und der Host-ID Teil sein soll

| **Netzwerkklasse** | **Bereich der Klasse**       | **Anteil Netz-/Host-ID** |
|--------------------|------------------------------|--------------------------|
| A                  | 0-127 (ersten Bits 0...)     | XXX.---.---.---          |
| B                  | 128-191 (ersten Bits 10...)  | XXX.XXX.---.---          |
| C                  | 192-223 (ersten Bits 110...) | XXX.XXX.XXX.---          |
| D                  | ab 224 (ersten Bits 1110...) | Sonderfall....           |

:::tip
- "X" --> Signalisiert den Net-ID Teil
- "-" --> Signalisiert den Host-ID Teil

**Sonderfälle:**
- Private Adressen werden nicht im Internet geroutet:
    - 192.xxx.xxx.xxx oder 10.xx.xxx.xxx
- Host-Adresse = 0 referenziert "dieses Netz"
- Host-Adresse alle Bits auf 1 --> Broadcast-Adresse
:::

### IPv4-Subnetting
- Subnetting unterteilt größere IP-Netzwerke in mehrere Kleine Netzwerke
- Durch Subnetting wird der Teil, der zu Netz-ID und Host-ID gehören neu zugeordnet

#### Subnetzmaske
- Bitmaske, die angibt, wie groß der Anteil an Bits einer IP-Adresse ist, der für Netz- oder Host-IDs verwendet werden soll

:::warning
Eine Subnetzmaske ist von Links bis zu einem bestimmten Punkt eine durchgängige Folge an 1ern.
Fehlt zwischendurch eine 1, ist die Subnetzmaske ungültig
:::

:::warning
Das Bilden von Subnetzen muss man üben
:::

### Beziehung zwischen MAC-Frame und IP-Adressen durch ARP
- Möchte man eine Station erreichen hat man i.d.R. nur eine IP-Adresse (oder URl)
    - Um nun eine MAC-Adresse für den Network Interface Layer zu erhalten nutzt man das Adress-Resolution-Protocol (ARP)
- Ziel des ARPs ist das Herausfinden der MAC Adresse der Destination

#### Funktionsweise des ARPs
1. Sendestation sendet einen MAC-Broadcast an alle Geräte
    - Ziel-Adresse: FF:FF:FF:FF:FF:FF
    - Inhalt: "Ich suche die Zieladresse mit der Station xxx.xxx.xxx.xxx"
2. Station, die die jew. IP-Adresse erkannt hat schickt eine Antwort mit ihrer Mac-Adresse zurück
3. MAC-Adresse wird in dem ARP-Cache (temp. Speicher im Hauptspeicher) hinterlegt.
    - Lässt sich mit `arp -a` anzeigen.

### Network Adress Translation (NAT)
- Adressübersetzung zwischen zwei Netzwerken

#### Gründe für NAT
- Private IP-Adressen werden nicht geroutet und müssen daher vom Router ins öffentliche Netz übersetzt werden
    - Greift in allen LAN's und WLAN's in privaten Haushalten
    - In Firmen, die keine offiziellen IP-Adress-Ranges mehr erhalten haben
    - In Testumgebungen

#### Funktionsweise von NAT

1. Router ersetzt die private Adresse des Hosts im MAC-Frame durch seine öffentliche Adresse
2. Sendet das modifizierte MAC-Frame in seinem Namen an die Destination

:::warning
NAT verändert nur die IP-Adressen, sprich die `Source-network-Adress` und die `Destination-Network-Adress`. Die tatsächlichen MAC Adressen von für den Network Interface Layer werden dann durch den Router gefüllt.
- `Source-Adresse`: MAC-Adresse des Routers
- `Destination-Adresse`: Sobald das außerhalb von lokalem Netzwerk liegt greifen andere Routing-Mechanismen.
:::

