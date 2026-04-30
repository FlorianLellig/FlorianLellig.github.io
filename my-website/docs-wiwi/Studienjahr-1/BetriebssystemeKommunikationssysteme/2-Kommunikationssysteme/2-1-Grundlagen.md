# 2.1 Grundlagen

## 2.1.1 Netzwerk - Basics

:::info
Ein Netzwerk besteht aus mindestens zwei Teilnehmern/Systemen, die miteinander verbunden sind und Daten austauschen können. Man unterscheidet zwischen:
1. **Peer-to-Peer:** Zwei _gleichberechtigte Teilnehmer_, die _ohne dedezierten Server_ kommunizieren 
2. **Client-Server:** Ist ein _hierarchisches Konzept_, das mithilfe eines _Servers den Clients Dienste zur Verfügung stellt_.
:::

## 2.1.2 Referenzmodelle

Referenzmodelle ermöglichen es, gewisse _einheitliche Standards für die Kommunikation zwischen verschiedenen Teilnehmern festzulegen_. Sie sind essenziell, um _hardwareübergreifende Kommunikation über verschiedene Hersteller hinweg_ zu ermöglichen. Bevor sie exisitert haben, war eine Kommunikation zwischen unterschiedlichen Herstellern ohne Übersetzungshardware quasi unmöglich.

### TCP/IP Schichtenmodell

:::info
TCP/IP steht für _Transmission Control Protocol/Internet Protocol_. Es ist eine Kommunikationsarchitektur.

**Das TCP/IP-Modell hat sich durchgesetzt und wird bis heute verwendet - Es wird daher im Folgenden näher erklärt.**
:::

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme1.svg)




#### 1. Schicht - Network Interface Layer

Der Network-Interface-Layer stellt die _unterste Ebene des TCP/IP-Modells dar_ - Hier arbeiten unter anderem Switches und andere Hardware Komponenten.

Hier werden ebenfalls **alle relevanten Parameter definiert, die in einem Physischen Netzwerk zur Verbindungsherstellung über verschiedene Medien wichtig ist** - Diese Parameter sind elektrisch, mechanisch und funktional. Die Kommunikation erfolgt über _physikalische Netzwerkprotokolle._

#### 2. Schicht - Internet Layer

Der Internet Layer stellt die Verbindungen im logischen Netzwerk zwischen Server und Clients im und über das Internet zur Verfügung.
- Hier arbeiten Router
- Es wird fast ausschließlich IP (Internet Protocol) verwendet
    - Dient der Adressierung, dem Routing, etc.

#### 3. Schicht - Transport Layer

Der Transport Layer stellt die End-zu-End Verbindungen zwischen Anwendungen über den Internet Layer her, um verschlüsselten Datenaustausch zu ermöglichen.

#### 4. Schicht - Application Layer

Der Application Layer stellt alle Dienste und Funktionen für Benutzerinteraktionen im Kontext zwischen Netzwerk und Softwareanwendungen bereit. 



### OSI Schichtenmodell
:::info
OSI steht für _Open System Internetconnect_. Es ist ein theoretisches Referenzmodell, was in den frühen 80er Jahren entwicklet worden ist.
:::

## 2.1.3 Funktionsweise der Kommunikation über Netzwerke

Die Funktionsweise der Kommunikation über Netzwerke wird maßgeblich **vom sogenannten Manchaster Coding im Ethernet Protokoll** definiert.

### Manchester-Coding

Das Manchester Coding ist eine Technik, mit der **im klassischen Ethernet eine Kommunikation durchgeführt** wird. Statt eine `111` durch drei überdeckende, hochsummierende 1er zu realisieren wird der sogenannte **Flankenwechsel** zur Werteidentifikation genutzt. 

Die Besonderheit: Bei der Übertragung eines Bits wird dieser zuerst invertiert übertragen, sprich eine _null wird als eins_ und eine _eins als null_ übertragen. Später wird dann der eigentliche Bit mithilfe eines Potenzialunterschieds der Sprannung realisiert. Man unterteilt den BIt also quasi in zwei Hälften. Es gilt:
- **Erste Hälfte des Bits:** Dient zur Vorbereitung (hier wird der eigentliche Bit invertiert)
    - Dieser Flankenwechsel dient ebenfalls der Identifizierung eines Taktes zur Synchonisation (siehe Kapitel "Synchonisation")
- **Die Mitte des Bits:** Hier erfolgt ein Sprung - der sogenannte _Flankenwechsel_
    - Von _low_ zu _high_: Darstellung einer logischen "1"
    - Von _high_ zu _low_: Darstellung einer logischen "0"
- **Zweite Hälfte des Bits:** Puffer zwischen Flankensprung und dem nächsten Invertierungsprozess.

Im Folgenden sieht man ein Beispeil des Manchester Codings für die Bitfolge `100110`

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme10.svg)

#### Idle Betrieb
Die Erkennung von Zuständen erfolgt durch **Potenzialunterschiede**. Erfolgt kein Potenzialunterschied zwischen 0,75 und 1,25 Bitzeiten NACH dem letzten Flankenwechsel, also zwischen dem invertierten beginnenden Zustand von Bit 2 und dem Endzustand des Bit 2, dann wird dies vom Empfänger als Idle Zustand gewertet.

### Synchonisation
Synchronisation bezeichnet im allgemeinen die **zeitliche Abstimmung von Vorgängen** - sie sollen dabei **zeitgleich** oder in einer (im Protokoll festgelegten) Reihenfolge **ablaufen**. 

Im Kontext von technischen Kommunikationssystemen führt eine fehlerhafte Abstimmung von Takten schon bei minimalen Unterschieden zu Problemen bei der Feststellung, ob es sich bei einem Bit einer 0-er Folge um den 7. oder 8. Bit handelt.

Die Synchonisation bedeutet also:
- Der Empfänger muss genau **wissen, wann ein Bit anfängt und wann es aufhört**
- Er muss seinen **internen Takt daran anpassen**, um eine korrekte Interpretation der Daten zu ermöglichen

Im Kontext des **Manchester Coding** bedeutet dies, dass der **Flankenwechsel zwischen den Bits als Taktgeber** funkgiert.

## Höhere Protokolle

- Bei höheren Protokollen (auf höheren Ebenen) muss sichergestellt werden, dass die zu übertragenden Daten korrekt übertragen werden
    - Erfolgt durch Fehlerkontrolle, Flusskontrolle und Überlastkontrolle

### Fehlerkontrolle

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme17.png)

- Prinzip des Acknowledgements
    - Werden Daten durch den Empfänger erhalten, bestätigt er diesen Erhalt

:::note
Aufbauend darauf gibt es verschiedene Kommunikationsarten --> Siehe Unterpunkt `Kommunikationsarten`
:::

### Flusskontrolle

- Stellt sicher, dass der Sender nicht zu schnell Sendet (Rücksichtsname auf den Empfänger)
- Realisiert durch Wert im Acknowledgement, der signalisiert, wie viele Daten noch gesendet werden können

### Überlastkontrolle
- Stellt sicher, dass nicht aufgrund von Netzüberlastung Daten verlohren gehen

## Kommunikationsarten

### Connectionless (Link-Level-Service)
Es werden direkt Daten gesendet (Ohne Acknowledgement)

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme18.png)

### Connection-oriented (Link-Level-Service)

Es werden Acknowledgements verwendet.

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme19.png)

:::tip
Im Kontext von Connection-oriented als Link-Level-Service wird der sog. **3-Way-Handshake** verwendet.
- Dient dem Verbindungsaufbau

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme20.png)
:::