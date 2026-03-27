# 2.3 Netzwerktypologien

Netzwerktypologien beschreiben grundsätzlich, wie das Kommunikationsnetz aufgebaut ist.

## 2.3.1 Bezeichnungen von Netzwerken

|            | **Bezeichnung**          | **Reichweite**            | **Beispiele**            |
|------------|--------------------------|---------------------------|--------------------------|
| PAN-System | Pesonal-Area-Network     | bis zu 10 Meter           | Kopfhörer                |
| LAN-System | Local-Area-Network       | 10 Meter bis 10 Kilometer | Lokales Netzwerk Zuhause |
| MAN-System | Metropolean-Area-Network | 10 bis 100 Kilometer      |                          |
| WAN-System | Wide-Area-Network        | 10 bis 1000 Kilometer     | DSL-Netzwerke, Funknetze |
| GAN-System | Global-Area-Network      | weltweit                  | Starlink                 |

## 2.3.2 Netzwerktypologiesysteme

### BUS-Typologie

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme4.png)

- Alle Geräte sind an einem Kabel angeschlossen - man spricht von einer linearen Übertragung.
- Bei der Datenübertragung hören alle Geräte zu, aber nur das adressierte Gerät verarbeitet.

### Stern-Typologie

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme5.png)

- Fällt eine Verbindung aus, so bleibt das Netzwerk trotzdem weiterhin nutzbar
- Durch den Switch im Zentrum kann der Datenverehr gut geregelt werden, um Kollisionen zu vermeiden

### Ring-Typologie

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme6.png)

- Daten wernden von Gerät zu Gerät in einer Richtung weitergeleitet, daher gibt es keine Kollisionen
- Fällt ein System aus, ist die Kommunikation unterbrochen
- Schwer erweiterbar

### Maschen-Typologie

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme7.png)

- Jedes Gerät ist mit mehreren Geräten im Netzwerk, meist allen anderen Geräten, verbunden.
- Hohe Ausfallsicherheit
- Hoher Verkabelungsaufwand und Komplexität

### Hybride Typologien

Hybride Typologien sind Kombinationen verschiedener Typologien zu einem größeren System. Es können z.B. zwei Stern-Typologien mit einer BUS-Typologie verbunden werden.