# 2.2 (Physikalische) Übertragungsmedien

Im folgenden werden die Übertragungsmedien in Leitergebundene und NICHT-Leitergebundene Übertragungsmedien unterteilt

## 2.2.1 Leitergebundene Übertragungsmedien

Leitergebundene Übertragungsmedien umfassen alle Übertragungsmedien, die aus einer physischen Verbindung bestehen (Kabel).

### 2.2.1.1 Nicht metallische Leiter

#### Lichtwellenleiter

Ein Lichtwellenleiter ist _leitergebundenes, nicht-metallisches Übertragungsmedium_. Die Übertragung erfolgt mittels _Lichtsignale innerhalb eines Kerns_, der mit einem Manel umgeben ist.

Sie sind dabei aufgrund der Verwendung von Licht als Übertragungsmedium sowohl _komplett Abstrahlungsarm (kein Störungsverursacher)_, als auch _immun gegen hochfrequente und elektromagnetische Einstrahlung_.

Sie sind im Vergleich zu Kupferkablen ebenfalls dünner, flexibler und (deutlich) kostengünstiger.

### 2.2.1.2 Metallische Leiter

#### Koaxialkabel

Ein Koaxialkabel besteht aus einem Kupferkern, der durch Plastik, ein Staniol oder Drahtgeflecht und anschließend erneut Plastik abgeschirmt ist. Man kennt es typischerweise von Satellitenschüsselverbindungen und/oder Kabeldeutschland (Heute Vodafone Kabel Internet) Verbindungen.

Koaxialkabel besitzen einen Wellenwiederstand (typischerweise zwischen 50 und 93 Ohm), der auf den Wiederstandsbelag des Kabels angepasst werden muss, sodass es keine Reflexionen gibt.

#### "Verdrillte" Kupferkabel


![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme2.png)

Verdrillte Kuperkabel, auch genannt twisted pair cable, bestehen aus jeweils paarweise "verdrillten", isolierten Kupferadern. Das Verdrillen soll elektrische Interferenzen (elektromagnetische Störungen) vermeiden.

##### STP-Kabel (Shielded Twisted Pair Cable)

Bei STP-Kabeln sind die verdrillten Adern zusätzlich zur jeweiligen Isolation noch einmal gemeinsam abgeschirmt - meist durch eine Folie zur Reduktion der Nebensprechdämpfung.

Zusätzlich dazu gibt es noch einen weiteren äußeren gemeinsamen Magnetgeflechtschirm, der äußere Störeinwirkungen reduziert.

##### UTP Kabel (Unshielded Twisted Pair Cable)

Die einzelnen Adern sind beim UTP-Kabel nicht einzeln abgeschirmt, weshalb sie nur im arbeitsplatznahen Bereich eingesetzt werden sollten.

Ein S/UTP-Kabel verfügt nur über einen gemeinsamen Außenschirm.



## 2.2.2 LeiterUNgebundene Übertragungsmedien

Leiterungebundene Übertragungsmedien umfassen grundsätzlich alle Übertragungsmedien, die nicht direkt auf physischen (Kabel-)Verbindungen aufbauen.

### 2.2.2.1 Funk

comming soon...

### 2.2.2.2 Ultraschall

comming soon...

### 2.2.2.3 Infrarot

comming soon...


## 2.2.3 RJ-45 Connector

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme3.png)

Der RJ-45 Stecker ist der weltweit standardisierte Stecker für Datenübertragung in lokalen Netzwerken. Er besteht aus 8-Connector-Pins, wovon die folgenden Pins für Datenübertragung geeignet sind.

- Pin 1 - TX+
- Pin 2 - TX-
- Pin 3 - RV+
- Pin 6 - RV-

:::info
Damit eine korrekte Datenübertragung über die jeweiligen Pins möglich ist, muss der "Senden" Kanal beim Empfänger auf dem "Empfangen" Kanal ankommen. Daher müssen die Kabel (bzw. der Anschluss) entweder verdreht sein, oder es muss ein Switch oder ein anderes Gerät vorhanden sein, was die Signale Interpretiert bzw. die Kanäle intern tauscht. 
:::

### 2.2.3.1 PoE - Power over Ethernet

Power over Ethernet ist ein Verfahren, bei dem die standardmäßiug nicht genutzten Adern im RJ-45 Connector zur Stromversorgung eines Gerätes genutzt weden können. Dabei gilt:

- Pin 4 - V+
- Pin 5 - V+
- Pin 7 - V-
- Pin 8 - V-

Je nachdem was für ein Standard verwendet wird, kann theoretisch bis zu 100 Watt Stromversorung über den Ethernet Stecker möglich sein (IEEE 802.3bt (PoE++ / 4PPoE)).
