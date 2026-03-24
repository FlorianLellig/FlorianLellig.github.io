# 2.1 - Grundlagen

## 2.1.1 Netzwerk - Basics

:::info
Ein Netzwerk besteht aus mindestens zwei Teilnehmern/Systemen, die miteinander verbunden sind und Daten austauschen können. Man unterscheidet zwischen:
1. **Peer-to-Peer:** Zwei _gleichberechtigte Teilnehmer_, die _ohne dedezierten Server_ kommunizieren 
2. **Client-Server:** Ist ein _hierarchisches Konzept_, das mithilfe eines _Servers den Clients Dienste zur Verfügung stellt_.
:::

## 2.1.2 Referenzmodelle

Referenzmodelle ermöglichen es, gewisse _einheitliche Standards für die Kommunikation zwischen verschiedenen Teilnehmern festzulegen_. Sie sind essenziell, um _hardwareübergreifende Kommunikation über verschiedene Hersteller hinweg_ zu ermöglichen. Bevor sie exisitert haben, war eine Kommunikation zwischen unterschiedlichen Herstellern ohne Übersetzungshardware quasi unmöglich.

### 2.1.2.1 TCP/IP Schichtenmodell

:::info
TCP/IP steht für _Transmission Control Protocol/Internet Protocol_. Es wurde in den 70er Jahren für das Arparnet (Vorläufer des Internets) entwickelt.

**Das TCP/IP-Modell hat sich durchgesetzt und wird bis heute verwendet - Es wird daher im Folgenden näher erklärt.**
:::

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme1.svg)


#### 1. Schicht - Network Interface Layer

Der Network-Interface-Layer stellt die _unterste Ebene des TCP/IP-Modells dar_ - Hier arbeiten unter anderem Switches und andere Hardware Komponenten.

Hier werden ebenfalls **alle relevanten Parameter definiert, die in einem Physischen Netzwerk zur Verbindungsherstellung über verschiedene Medien wichtig ist** - Diese Parameter sind elektrisch, mechanisch und funktional. Die Kommunikation erfolgt über _physikalische Netzwerkprotokolle._

#### 2. Schicht - Internet Layer

Der Internet Layer stellt die Verbindungen im logischen Netzwerk zwischen Server und Clients im und über das Internet zur Verfügung.

#### 3. Schicht - Transport Layer

Der Transport Layer stellt die End-zu-End Verbindungen zwischen Anwendungen über den Internet Layer her, um verschlüsselten Datenaustausch zu ermöglichen.

#### 4. Schicht - Application Layer

Der Application Layer stellt alle Dienste und Funktionen für Benutzerinteraktionen im Kontext zwischen Netzwerk und Softwareanwendungen bereit. 



### 2.1.2.2 OSI Schichtenmodell
:::info
OSI steht für _Open System Internetconnect_. Es ist ein theoretisches Referenzmodell, was in den frühen 80er Jahren entwicklet worden ist.
:::

