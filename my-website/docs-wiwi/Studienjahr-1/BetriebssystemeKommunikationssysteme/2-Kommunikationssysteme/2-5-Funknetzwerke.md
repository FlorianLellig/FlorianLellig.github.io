# 2.5 Funknetzwerke

Funknetzwerke ermöglichen die Kommunikation (über weite Entfernungen), ohne das für sie physische Verbindungen via Kabel aufgebaut werden müssen.

## 2.5.1 Funkwellen

### Grundlagen

Eine Welle ist eine sich **räumlich ausbreitende periodische Veränderung (Schwingung) des Gleichgewichtzustands eines Systems**.
![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme11.png)

:::tip
- Frequenz beschreibt die **Schwingungsanzahl pro Sekunde**
    - Einheit: **Hertz** (Hz)
    - Bsp: 1 Schwingung pro Sekunde = 1 Hz
        - Das Bedeutet: Pro Sekunde bewegt sich die Funk- oder Lichtwelle mit Lichtgeschwindigkeit (300.000km/sec) vom Sender weg.
- Als Konsequenz unterscheidet sich die Wellenlänge abhängig von der Frequenz:
    - 1 Hz hat die eine Wellenlänge von _300.000 km_
    - 10 Hz hat die eine Wellenlänge von _30.000 km_
    - 1 kHz hat die eine Wellenlänge von _300 km_
    - 1 MHz hat die eine Wellenlänge von _300 m_
    - 100 MHz hat die eine Wellenlänge von _3 m_
    - 1 GHz hat die eine Wellenlänge von _30 cm_
:::


### Modulation

- Beschreibt in der Nachrichtentechnik den Vorgang, bei dem **ein zu übertragendes Nutzsignal ein Trägersignal verändert** _(moduliert)_.
    - Dadurch kann man auch **Signale** übertragen, **die sich eigentlich von der tatsächlichen Frequenz des Trägers unterscheiden**.
- Signal wird auf der Empfängerseite mittels **Demodulators** zurückgewonnen.

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme12.png)

:::tip
Ein Übertragungssignal entsteht durch Überlagerung verschiedener Signale. So werden die Folgenden Komponenten übereinandergelegt, um das Zielsignal zu bilden:
1. **Nutzsignal:** 
    - Dies sind die eigentlichen Daten, die übertragen werden sollen
    - Problem: Alleine haben sie meist eine zu geringe Frequenz zur effizienten Übertragung. 
2. **Carrier wave:** 
    - Auch Trägersignal genannt
    - Tellt das Basissignal dar, was zur Übertragung genutzt wird
:::

## 2.5.2 Wireless LAN (IEEE 802.11)

Wireless LAN ist ein Standard, der von der _IEEE_ in Arbeitsgruppe 802.11 entwickelt bzw. festgehalten wurde.

### Kommunikationsprotokoll - CSMA/CA

Das Carrier Sense Multiple Acces with Collision Avoidance ist ein Verfahren zur Kommunikation über Wireless LAN

#### Carrier Sense
- **Listen before talking:** Prüfen, ob das Trägermedium frei ist
    - Überwachung erfolgt durch jeden Teilnehmer
    - Eine Station darf nicht senden, wenn das Medium belegt ist

#### Multiple Access
- **Shared Medium:** Mehrere Teilnehmer benutzen ein gemeinsames Medium

#### Collision Avoidance
- Es existiert ein Algorithmus, der Colisionen versucht zu vermeiden
    - Wird die Leitung als frei wahrgenommen,sendet das Gerät nicht sofort, sondern warten noch eine zufällige Zeit. Nur wenn das Medium dann immernoch frei ist wird gesendet.
    - Sollte trotzdem eine Kollision entstehen oder das Medium ist belegt, greift der Backoff-Prozess
        - Bezeichnet die **Wiederholungsstrategie für eine kollisionsbehaftete Sendung**.
        - Beide Sender versuchen die Versendung nach einer **zufallsbedingten Zeit** erneut

:::warning
Wichtig: DAS Carrier Sense Multiple Access with **Collision Avoidance** unterscheidet sich von dem Carrier Sense Multiple Access with **Collision Detection** in kabelgebundenen Netzwerken - sie heißen zwar ähnlich, unterscheiden sich aber in den Feinheiten.
- Im kabelgebunden Netzwerk geht man davon aus das Kollisionen passieren
- Im WLAN versucht man von vornerein alles um Kollisionen zu vermeiden, da man sie während des Sendevorgangs nicht bemerken würde
:::

### Besonderheiten

- Die Nettobandbreite ist oft **deutlich niedriger**
    - Zwischen ca. 5Mbit/sec bei 11 Mbit Standard (802.11b) und ca. 4,8 Gbit/sec bei 9,6 Gbit Standard (802.11ax)
    - Es gibt viele Faktoren, die die Datenrate beeinflussen, darunter:
        - Verkehrsaufkommen im Netzwerk
        - Hindernisse
        - Nicht genutzte Zeitschlitze oder Kollisionen
        - **Daher spielt die Position von Sender und Empfänger eine wichtige Rolle**
- Nicht abhörsicher
- Es gibt drei Frequenzbänder, die ohne Lizens betrieben werden dürfen:
    - 902 - 928 MHz
    - 2,4 - 2,4835 GHz
    - 5GHz 

### Kanalanordnung

- Unter Kanalanordung versteht man im WLAN Kontext die **strategische Verteilung der verfügbaren Funkfrequenzen (Kanäle)** auf verschiedene WLAN-Router oder Access Points
    - Hauptziel ist die Vermeidung von Funkstörungen
    - Die Kanäle stellen dabei Bereiche dar, in denen eine Kommunikation stattfindet
        - Kanäle können sich allerdings aufgrund der Schmalheit überlappen was zur Nachbarkanalstörung führt.
- Optimale Lösung: Überlappungsfreie Kanäle (zum Beispiel Kanäle 1-6-11)
    - Überlappen sich die Signale trotzdem gegenseitig, wird dies durch CSMA/CA erkannt und es erfolgt ein gegenseitiges absprechen - dies beeinflusst allerdings die Geschwindigkeit
    - In 5 GHz gibt es deutlich mehr Kanäle, die sich nicht überlappen

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme13.png)

:::tip
Man kann sich die Kanäle wie zu schmal geratene Autobahnspuren vorstellen:
 - Die Autos auf den Spuren symbolisieren die Kommunikation - da die Spuren zu schmal sind können die Autos trotz vorhandener Spuren nicht direkt nebeneinander fahren.
 - Überlappungsfreie Kanäle bedeutet, das zwischen den Spuren mit Autos eine Spur freigelassen wird
:::

### WLAN - Typologien

#### Standard WLAN Typologie (Infrastructure Mode)

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme16.png)

- Mehrere Access-Points die auf unterschiedlichen Kanälen dasselbe Netzwerk mit der selben SSID bereitstellen


#### Roaming (Seemless Handover)

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/BetriebssystemeKommunikationssysteme/kommunikationssysteme16.png)

- Ist die Optimierung der Standard-Wlan Typologie
- Koordiniert vom Handy
    - Auch während der bereits bestehenden Verbindung wird weiterhin nach zusätzlichen Access-Points die die gleich SSID haben, geschaut
    - Sollte ein schnellerer Access Point zur Verfügung stehen wird die Verbindung dorthin übertragen

#### Wireless Repeater Typologie
- Repeater hat keine direkte (Kabel-) Verbindung zum Internet
- Damit die Kommunikation erfolgreich funktioniert müssen sich das Netzwerk vom Root und Repeater **zu mindestens 50% überlappen.** 

#### WLAN Mash
:::note
- Wechsel von WLAN-Funkzellen ist in einfachen WLAN-Netzwerken Aufgabe des Endgeräts
    - Bei mobilen Geräten stellt dies ggf. eine Schwachstelle dar
:::

- Bei Mesh-WLANS **greifen die Komponenten aktiv ein** und unterstützen die Endgeräte beim Übergang zu einer anderen WLAN-Funkzelle oder einem anderen Frequenzband
    - Besteht aus Access-Points mit direkter Verbindung zur Infrastruktur und zusätzlich Repeatern
- Meist funktionieren Mesh Netzwerke nur Problemlos bei Verwendung des **gleichen Herstellers für alle Komponenten** 

### Wireless Personal Area Networks (WPAN)
- Bluetooth zählt zu den sog. Wireless Personal Area Networks (WPAN)
- Begrenzte Reichweite (Nicht unbedingt nur ein Nachteil)
- Stromsparende Kommunikation
- Auch andere Kommunikationstypen möglich
    - Via Infrarot (Sichtverbindung erforderlich)
    - Via Funk (Bluetooth)


## 2.5.3 Mobilfunknetze

### Verschiedene Mobilfunknetze

Es gibt unterschiedliche Typen von Mobilfunknetzen:

| **Bezeichnung** | **Geschwindigkeit**            | **Bemerkung**                                                                      |
|-----------------|--------------------------------|------------------------------------------------------------------------------------|
| 1G              | Analog                         | Bezeichnung als A / B / C - Netz                                                   |
| GSM (2G)        | GPRS: 62kbit/s EDGE: 128kbit/s | _"Global System for mobile communication"_; soll ab Mitte 2028 abgeschaltet werden |
| UMTS (3G)       | 7,2 Mbit/s                     | Veraltet, seit 2021 außer Funktion                                                 |
| HSPDA (3,5G)    | 14,4 / 42 Mbit/s               | Veraltet, seit 2021 außer Funktion                                                 |
| LTE (4G)        | 100 - 150 Mbit/s               |                                                                                    |
| 5G              | 20 Gbit/s                      | theoretischer Wert                                                                 |
| 6G              | 1 Tbit/s                       | theoretischer Wert                                                                 |

:::tip
Im Mobilfunknetz wird (unabhängig von der Geschwindigkeit) mit 2 Watt von Mobilstationen und mit 20 bis 50 Watt von Basisstationen gesendet.
:::

#### 4G - Netz (LTE als Long Term Evolution)
- Ursprünglich geplant für den Anschluss ländlicher Gebiete über LTE-Router.
    - Geplant für datenintensive Aufgaben
- Anfangs noch recht teuer, da nur in hochpreisigen Smartphones verbaut
    - Heute in allen Smartphones integriert
- Reichweite: 3,5 bis 6,5 km

#### 5G - Netz
- Downstream theor. max. 20 Gbps / Upstream theor. max. 10 Gbps
- Extrem niedrige Latenzzeit ( ~1 msec )
- geringerer Energieverbrauch als 4G
- Kommunikation direkt zwischen Endgeräten
- Unterstützt hohe Dichte an Endgeräten
- Network Slicing 
    - Virtuelle Netze für unterschiedliche Anforderungen
    - hohe Geschwindigkeit Videostreaming oder geringe Latenz für Maschinenkommunikation
- Reichweite nur ca. 1 bis 3 km (es werden mehr Funkmasten benötigt)

#### 6G - Netz
- Deutlich höhere Übertragungsraten mit bis zu 1 TBit/s
- Frequenzbänder zwischen 95 Ghz und 3 Thz
    - Je höher die Funkfrequenz, desto kürzer die Reichweite
    - Nur 100 bis 320 Meter
- Fokus auf IoT und autonomes Fahren

### Adressierung und Identifikation im Mobilfunk

1. IMSI - International Mobile Subscriber Identity
    - Weltweit eindeutige Nummer zur Identifikation der SIM-Karte

2. IMEI - International Mobile Station Equipment Identity
    - Weltweit eindeutige Adresse des mobilen Endgeräts
    - Hardware Adresse (vergleichbar mit der MAC-Adresse)

3. CID - Cell Identifier
    - Weltweit eindeutige Nummern der Basisstation, die von dieser regelmäßig ausgestrahlt werden
    - „Adresse“ des Funkmastes und der Funkzelle (ähnlich MAC-Adresse)

4. MSRN - Mobile Station Roaming Number
    - temporäre, intern verwendete Nummer in einem fremden Netz

### Kommunikation mit dem Funknetz
- Die von Funkmasten versendeten Funkwellen können grundsätzlich von allen Funkmasten aufgefangen werden
    - Die CID (Cell Identifier; eindeutige Nummer der Basissation) und IMEI (International Mobile Station Equipment Identity) beschränken den Datenaustausch auf die zwei vorgesehenen Teilnehmer (Funkmast und Mobiles Endgerät)
        - Trotzdem kann jeder die Funkwellen empfangen

### Zellulare Mobilfunknetze
- Funknetzwerke haben grundsätzlich eine begrenzte Reichweite:
    - Faustformel:
        - **Auf freiem Feld:** Sendeleistung reduziert sich mit der 2en Potenz
        - **In der Stadt:** Sendeleistung reduziert sich mit der 4en Potenz
            - Doppelte Entfernung = Sechsfache Sendeleistung benötigt
- Lösung: viele kleine Funkzellen zur Gewährleistung der vollständigen Abdeckung
    - Sich überlappende Funkzellen dürfen sich aber nicht gegenseitig stören
    - Größe der Funkzellen unterscheiden sich aufgrund von Gegebenheiten

#### Funkzellen
- Funkzelle ist ein Bereich bestehend aus einer (vernetzten) Basisstation und (mehreren) Mobilen Teilnehmer(n).
- Zellgrößen unterscheiden sich abhängig vom Netztyp:
    - E-Netz
        - 6G: einige Hundert Meter
        - GSM: bis zu 35km
    - D-Netz
        - 6G: einige Hundert Meter
        - GSM: bis zu 8km
