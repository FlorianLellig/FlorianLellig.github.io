# 3. Speicherbasierte Synchonisation

## 3.1 - Wiederkehrende Synchronisationsprobleme

Ausgangslage für funktionierendes Threading ist die korrekte Handhabung von sogenannten **Synchronisationsproblemen**. Diese entstehen immer dann, wenn mehrere Prozesse oder Threads gleichzeitig auf gemeinsame Ressourcen zugreifen. Sie treten i.d.R. als eines der folgenden Szenarien auf:

### 3.1.1 - Betriebsmittelverwaltung

**Betriebsmittel** sind physische oder logische Ressourcen eines Systems (z.B. Drucker, Scanner, Festplatten, Netzwerkverbindungen), die von Prozessen oder Threads angefordert und exklusiv genutzt werden müssen.

- Es gibt nur eine **begrenzte Anzahl** gleichartiger Betriebsmittel, die jedoch von mehreren Prozessen oder Threads gleichzeitig benötigt werden
- Solange ein Betriebsmittel belegt ist, kann es kein anderer Prozess verwenden – alle Wartenden **blockieren**, bis es wieder freigegeben wird
- **Problem:** Zu viele gleichzeitige Anfragen führen zu langen Wartezeiten oder im schlimmsten Fall zu einem **Deadlock** (gegenseitiges Warten ohne Fortschritt)

### 3.1.2 - Erzeuger-Verbraucher-Problem

Beim **Erzeuger-Verbraucher-Problem** (engl. *Producer-Consumer Problem*) gibt es zwei Arten von Akteuren, die über einen gemeinsamen **Puffer** kommunizieren:

- **Erzeuger** (*Producer*): Produzieren Daten und legen diese im Puffer ab
- **Verbraucher** (*Consumer*): Entnehmen Daten aus dem Puffer und verarbeiten sie

Dabei entstehen zwei Synchronisationsbedingungen:

1. **Puffer leer:** Verbraucher müssen warten, wenn noch keine Daten vorliegen
2. **Puffer voll:** Erzeuger müssen warten, wenn der Puffer keine freie Kapazität mehr hat

**Ziel:** Erzeuger und Verbraucher müssen so koordiniert werden, dass weder auf leere noch auf volle Puffer unkontrolliert zugegriffen wird.

### 3.1.3 - Leser-Schreiber-Problem

Beim **Leser-Schreiber-Problem** greifen mehrere Prozesse oder Threads gleichzeitig auf dieselben Daten zu – manche nur lesend, andere schreibend.

- **Mehrere Leser gleichzeitig** sind unproblematisch, da sie die Daten nicht verändern
- **Schreibzugriffe** hingegen erfordern **exklusiven Zugriff** – während ein Schreiber aktiv ist, darf weder ein anderer Schreiber noch ein Leser auf die Daten zugreifen

**Problem:** Ohne Koordination können Leser veraltete oder inkonsistente Daten lesen, während ein Schreiber gerade ändert. Es gibt zwei klassische Varianten:
- **Leser bevorzugt:** Solange Leser vorhanden sind, warten Schreiber – kann zu **Schreiber-Verhungern** (*Writer Starvation*) führen
- **Schreiber bevorzugt:** Schreiber erhalten Vorrang – kann zu **Leser-Verhungern** führen

## 3.2 - Begriffliches

### 3.2.1 - Kritische Daten
Kritische Daten sind Daten, die **von Prozessen oder Threads gemeinsam benutzt werden**. Diese Daten sind von nebenläufigen Zugriffen gefärdet - man riskiert Dateninkonsistenz.

### 3.2.2 - Kritischer Abschnitt (Critical Section)
Ein Kritischer Abschnitt (eng. *Critical Section, Critical Region*) ist ein Code-Abschnitt, in dem auf die kritischen Daten zugegriffen wird. Diese zu einer bestimmten Menge Kritischer Daten gehörendenn Code-Abschnitte dürfen im Allgemeinen nicht in beliebiger zeitlicher Überlappung ausgeführt werden. Sollte dies allerdings doch notwendig sein, muss dabei die Einhaltung gewisser *Synchonisationsbedingungen* und damit die Konsistenz kritischer Daten gewährleistet sein

## 3.3 - Deadlock (Verklemmung)
- Zustand der Verklemmung, bei dem mehrere Prozesse bzw. Threads gegenseitig aufeinander warten
    - _Zyklische Wartesituation_
    - Keiner kommt weiter weil alle gegenseitig aufeinander warten
    - Lässt sich nur schwer lösen
- Keiner kann in verarbeitung fortfahren, daher kommt das in Ausführung befindliche Programm zum Stillstand
- Deadlocks im Betriebssystemkern können zu unkontrolliertem Verhalten von diesem führen

:::tip Lösungsansatz
Ein Deadlock lässt sich i.d.R. **nur schwer lösen**, daher empfielt es sich Programme so zu bauen, dass solche Verklemmungen garnicht erst entstehen. Eine Mögliche Verklemmung kann bereits visuell Herausgearbeitet werden.  
:::

### 3.3.1 - Wartegraphen

Ein **Wartegraph** (engl. *Wait-for Graph*) ist ein gerichteter Graph, der die Warte- und Belegungsbeziehungen zwischen Prozessen/Threads und Betriebsmitteln visualisiert. Damit lässt sich ein Deadlock erkennen: **Ein Zyklus im Wartegraphen bedeutet einen Deadlock.**

Der Graph besteht aus zwei Knotentypen und zwei Kantentypen:

| Element | Darstellung | Bedeutung |
|---|---|---|
| Prozess / Thread | Kreis `( )` | Ein aktiver Ausführungskontext |
| Betriebsmittel | Rechteck `[ ]` | Eine Ressource (z.B. Drucker, Lock) |
| Kante Prozess → Betriebsmittel | gerichteter Pfeil | Prozess **wartet** auf dieses Betriebsmittel |
| Kante Betriebsmittel → Prozess | gerichteter Pfeil | Betriebsmittel ist von diesem Prozess **belegt** |

**Beispiele:**

![Bild](/documents/Wirtschaftsinformatik/Studienjahr-2/Advanced-IT/Wartegraphen.png)

- **(a) Belegung:** Prozess **A** hält Betriebsmittel **R** — Kante geht von R nach A
- **(b) Warten:** Thread **B** wartet auf Betriebsmittel **S** — Kante geht von B nach S
- **(c) Deadlock:** D wartet auf U, U ist von C belegt, C wartet auf T, T ist von D belegt → **geschlossener Zyklus = Deadlock**

:::info Zyklus = Deadlock
Sobald im Wartegraphen ein Zyklus entsteht, befinden sich alle beteiligten Prozesse in einer Verklemmung – keiner kann fortfahren, da alle auf einen der anderen warten.
:::

### 3.3.2 - Bedingungen für Deadlocks

#### Bedingung 1 - Exklusivität
- Auch genannt: _Mutual exclusion condition_
- Mindestens zwei Betriebsmittel können nur exklusiv benutzt werden

#### Bedingung 2 - Nachforderung
- Auch genannt: _wait for condition_
- Prozesse, die schon Betriebsmittel belegt haben, können weitere Betriebsmittel anfordern

#### Bedingung 3 - Nichtentziehbarkeit
- Auch genannt: _no preemption condition_
- Die belegten Betriebsmittel können den Prozessen nicht entzogen werden

:::danger
Ein Deadlock liegt vor, falls folgende Situation auftritt:
- **Zyklisches Verhalten (circular wait condition)**
- Es gibt eine Folge von P0 , ... , Pn−1 derart, dass für i = 0, ... , n-1 gilt:
    - Pi hat ein Betriebsmittel angefordert, das P(i +1) MOD n belegt hat.

> Was heißt das mh? 
:::

