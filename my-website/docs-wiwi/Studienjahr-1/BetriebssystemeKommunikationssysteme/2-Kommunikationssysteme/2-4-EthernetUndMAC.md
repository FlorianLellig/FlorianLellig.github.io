# 2.4 Ethernet und MAC-Frame

## 2.4.1 Ethernet (CSMA/CD) LAN-Protokoll

Die Kommunikation erfolgt immer zwischen Sender und Empfänger - jedoch kann es dazu kommen, das zwei Entgeräte genau gleichzeitig über dieselbe Leitung senden möchten. Da eine Leitung immer nur eine Übertragung ermöglicht, sieht das LAN-Protokoll gewisse Mechanismen zur reibungslosen Kommunikation vor. Man spricht von Carrier Sense Multiple Access with Collision Detection (CSMA/CD)

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme8.png)

:::warning
Die Grafik zeigt die Signalausbreitung fälschlicherweise vom Sender aus nur in eine Richtung an - tatsächlich breitet sie sich aber entlang der Verbindung in alle Richtungen aus.
:::

### Schritt 1 - Carrier Sense

- **Listen before Talking:** _Lauschen auf der Leitung_ bis der Kanal als frei gilt. Erst dann wird gesendet.

### Schritt 2 - Collision Detection

- Tritt ein, wenn zwei Kanäle **exakt gleichzeitig versuchen zu senden.**
- **Mithören der Sendung** (Listen while Talking) und eventuelles **Abbrechen des eigenen Sendevorgangs** bei Erkennung einer Collision. 

### Schritt 3 - Backoff Algorithm
- Bezeichnet die **Wiederholungsstrategie für eine kollisionsbehaftete Sendung.** 
    - Beide Sender versuchen die Versendung nach einer **zufallsbedingten Zeit** erneut


## 2.4.2 MAC-Frame
- Ein MAC-Frame (Medium-Access-Control-Frame) ist eine **strukturierte Dateneinheit** im Kommunikationsschichtenmodell.
- Hat eine Größe von **64 bis 1518 Byte _exklusiv des Preambel-Teils_**

### Aufbau des MAC-Frames

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme9.png)

| **Bezeichnung**            | **Länge**    | **Beschreibung**                                                                                                                                               |
|----------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Preamble                   | 8 Byte       | Wird von der Elektronik zur Synchonisation benötigt                                                                                                            |
| Destination-Adress         | 6 Byte       | Ziel-MAC-Adresse (Gibt an, an welchen Ziel-Netzwerkadapter adressiert werden soll)                                                                             |
| Source-Adress              | 6 Byte       | Sender-MAC-Adresse (Eindeutige Kennung des Absenders)                                                                                                          |
| Type                       | 2 Byte       | Gibt an, welches Protokoll in den Nutzdaten steckt (z. B. IPv4 oder IPv6). So weiß der Empfänger, wie er die Daten weiterverarbeiten muss.                     |
| Protocol Data Unit (PDU)   | 46-1500 Byte | Beinhaltet die Daten höherer Schichten, z.B. TCP/IP Daten                                                                                                      |
| Frame Check Sequence (FCS) | 4 Byte       | Eine Prüfsumme. Der Empfänger berechnet den Wert neu; stimmt er nicht mit dem im Feld überein, wurde das Paket beim Transport beschädigt und wird weggeworfen. |

:::tip
Ergänzung zu Preamble:
- 10101010 10101010 10101010 10101010 10101010 10101010 10101010 101010**11**
- Synchonisationsbits ("11", am Ende) signalisieren den Beginn des Frames
:::

### Aufbau einer MAC-Adresse

- Eine MAC Adresse setzt sich im Wesentlichen aus **sechs zweistelligen Hexadezimalcodes** zusammen
    - Beispiel: "10:00:5A:3F:01:2C"
- Zusammensetzung:
    - **Byte 1 bis 3:** Manufacturer ID (Geben an, um welchen Hersteller es sich handelt)
    - **Byte 4 bis 6:** Adapter ID (Eine einzigartige ID des Adapters, die in Kombination mit der Manufacturer ID nur ein mal existiert)

### Besondere MAC Adressen

#### Unicast
- Eins-zu-Eins Adressierung
    - Sender schickt Daten an genau EINEN spezifischen Empfänger
- Die MAC-Adresse ist dabei die Adresse des jew. Gerätes

#### Multicast
- Eins-zu-Mehreren Adressierung
    - Sender schickt Daten an eine Gruppe von Empfängern
- Die MAC Adresse

#### Broadcast
- Eins-zu-Alle Adressierung
    - Sender schickt Daten an ALLE möglichen Empfänger
- Die MAC-Adresse  lautet FF:FF:FF:FF:FF:FF
    - Alle Bits haben den Wert 1.
