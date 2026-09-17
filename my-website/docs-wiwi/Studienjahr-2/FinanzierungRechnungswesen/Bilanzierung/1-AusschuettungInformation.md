# 1. Ausschüttungsbemessungs- und Informationsfunktion
:::info Aufbau der Dokumentation
Die jeweiligen Überkapitel (links angezeigt) stellen alle eine schrittweise Erläuterung des Jahresabschlusses dar - Das Modul Bilanzierung stellt eine Komponente dieses Jahresabschlusses dar und baut demnach darauf auf.
:::


## 1.1 - Rechtliche Regulierungen
Der Jahresabschluss ist im HGB entsprechend reguliert. Die folgenden Paragraphen sind von Relevanz:

### 1.1.1 - **§ 238 HGB** verpflichtet zur Buchführung
> nur ein kurzer Fact

### **§ 240 HGB** verpflichtet demnach zum Inventar
- Inventar gibt detailierten Einblick in die genauen Inventarbestände, darunter z.B. 
  - alle einzelnen Maschinen und deren jew. Menge
  - Kredite (Fremdkapital) als einzelne Positionen
- Inventar muss jedes Jahr erstellt werden
- _In der Bilanz steht nur jeweils das Konto, nicht aber deren Zusammensetzung - das Inventar ist demnach eine Art Add-On_

### 1.1.2 - **§ 242 HGB** verpflichtet zur Aufstellung eines Jahresabschlusses

- Alle Kaufläute (laut § 242 Abs. 3 HGB):
  - Erstellen eines Jahresabschluss bestehend aus:
    - **Bilanz**
    - **GuV (Gewinn- und Verlustrechnung)**
  - Ergänzung bei Kapitalgesellschaften (laut § 264 Abs. 1 HGB)
    - **Anhang** (erläutert einzelne Positionen in der Bilanz und GuV)

### 1.1.3 - **§ 246ff. HGB** legt Ansatzvorschriften für Aktivierung/Passivierung fest
> Pflicht Wahlrecht; Verbot einen Aktiv oder Passivfall aufzunehmen in die Bilanz (und wenn ja mit wieviel Euro; Aktivierung und Passivierungsvorschriften)

### 1.1.4 - **§§ 252 ff. HGB** legt Bewertungsvorschriften fest
>???

### 1.1.5 - **§§ 266 HGB** legt das Bilanzierungsschema fest

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-2/Bilanzierung/Bilanzierung1.png)

:::info
Der Rechnungsabgrenzungsposten wird im späteren Verlauf der Vorlesung thematisiert und hat nichts mit Anlage & Umlauf zu tun.
:::

## 1.2 - Erfolgsneutralität und -wirksamkeit

### 1.2.1 - Erfolgsneutralität
Eine Zahlung gilt als _erfolgsneutral_, wenn sie **ausschließlich die Bilanz berührt**.
- Beispiel:
  - _"Kauf eines Grundstücks gegen Barzahlung (100.000€)"_
  - Grundstücke AN Kasse - 100.000€

### 1.2.2 - Erfolgswirksam
Eine Zahlung gilt als _erfolgswirksam_, wenn sie **sowohl Bilanz als auch GuV berührt**.
- Beispiel:
  - _"Zahlungen von Gehältern (10.000€)"_
  - _Gehälter_ ist ein **Aufwendungskonto**
  - Gehälter AN Bank - 10.000€

## 1.3 - Reinvermögen
- Synonym für Eigenkapital
- Wichtige Größe des Jahresabschlusses
$$
\def\arraystretch{1.3}
\begin{array}{rl}
  & \;\text{Bargeld} \\
+ & \;\text{Sichtguthaben} \\ \hline
= & \;\text{Zahlungsmittel} \\
+ & \;\text{Forderungen} \\
- & \;\text{Verbindlichkeiten} \\ \hline
= & \;\text{Geldvermögen} \\
+ & \;\text{Sachvermögen} \\ \hline
= & \;\text{Reinvermögen}
\end{array}
$$

:::tip
Zahlungsmittel sowie Geldvermögen können manipuliert werden - diese Manipulation wird jeweils unterschiedlich genannt:
- Auf **Zahlungsmittel** kann eine _Ein**gabe** und/oder eine Aus**gabe** erfolgen_
- Auf **Geldvermögen** kann eine _Ein**nahme** und/oder eine Ent**nahme** erfolgen_
:::

## 1.4 - Perioden- und Totalerfolg

### 1.4.1 - Periodenerfolg
- Periodenerfolg ist definiert als Veränderung des Reinvermögens in einem bestimmten _Periodenzeitraum_
- Es gilt:
$$
\def\arraystretch{1.3}
\begin{array}{rl}
& \;\text{Endbestand des Reinvermögens} \\ 
- & \;\text{Anfangsbestand des Reinvermögens} \\
+ & \;\text{Entnahmen} \\
- & \;\text{Einlagen} \\ \hline
= & \;\text{Periodenerfolg} \\
\end{array}
$$

- Bei Entnahmen/Einlagen handelt es sich um sogenannte **Selbstentnahmen bzw. Selbsteinlagen**.
  - Buchungssatz: Eigenkapital AN Bank - [Betrag]€
  - Problem: dies verschiebt die Bilanz bzw. das Eigenkapital und **verfälscht damit den Gewinn**
    - Damit der finale Gewinn stimmt müssen Privateinnahmen/-entlagen hinzugerechnet bzw. abgezogen werden, sodass der finale Gewinn stimmt
    - D.h. **Einlagen und Entnahmen sind erfolgsneutral.**

:::danger Manipulation des Periodenerfolgs
Aufgrund der in HGB festgehaltenen Wahlrechte gibt es die Möglichkeit, den Periodenerfolg zu beeinflussen.

- **Beispiel - Abschreibung als Wahlrecht (hier über 5 Jahre)**
  - Bei unterschiedlicher Abschreibungsmethode verändern sich die Periodenergebnisse

**Um also eine vergleichbare Grundlage zu schaffen benötigt es noch eine weitere Möglichkeit, den Erfolg anzugeben, den _Totalerfolg_**
:::

:::note Weiteres Beispiel
_Der Gesellschafter B der B&I OHG zahlt, wie im Gesellschaftsvertrag vereinbart, 100.000 € in die Gesellschaftskasse. Die Zahlungsmittel der OHG erhöhen sich. Die Erhöhung des Reinvermögens ist nicht Gewinn, sondern Einlage._
:::

### 1.4.2 - Totalerfolg
- Totalerfolg ist die **Veränderung des Reinvermögens über die gesamte Lebenszeit eines Unternehmens** (d.h von Gründung bis Schließung)
- Totalerfolg wird berechnet als die **Quersumme über alle Periodenerfolge**
  - Demnach gleicht sich Totalerfolg über den gesmaten Zeitraum aus
- Alternative Berechnungen:
    1. **$\text{Totalerfolg}=\text{Summe der Erträge} - \text{Summe der Aufwendungen}$**
    2. **$\text{Totalerfolg}=\text{Summe der Einzahlungen} - \text{Summe der Auszahlungen}$**

:::tip Ergänzung zum Beispiel aus 1.5.1:
- **Abschreibung als Wahlrecht (hier über 5 Jahre)**
  - Die gewählte Abschreibungsmethode ist egal, über den Gesamtzeitraum ergibt sich immer die Gesamtsumme
:::

:::note Weiteres Beispiel
_Die OHG beschafft eine Computeranlage, die voraussichtlich fünf Jahre genutzt wird, für 10.000 € gegen Barzahlung. Die Anschaffung verändert das Reinvermögen nicht. In den folgenden fünf Jahren schreibt die OHG die Anlage mit jeweils 2.000 € ab. Dieser Betrag ist Aufwand, und in dieser Höhe verringert sich (später) das Reinvermögen.
_
> Es gilt: Abschreibung ist ein Aufwand -> Erfolgswirksame Buchung
:::

## 1.5 - Warum Jahresabschluss?

### 1.5.1 - Grundlagen

Der Jahresabschluss dient der **Rechenschaft**. Diese gliedert sich in zwei Teilfunktionen:

<svg viewBox="0 0 740 360" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:"740px",display:"block",margin:"1rem auto",fontFamily:"sans-serif"}}>

  {/* Verbindungslinien */}
  <line x1="370" y1="66" x2="190" y2="126" stroke="#555" strokeWidth="1.5"/>
  <line x1="370" y1="66" x2="565" y2="126" stroke="#555" strokeWidth="1.5"/>
  <line x1="190" y1="168" x2="125" y2="228" stroke="#555" strokeWidth="1.5"/>
  <line x1="190" y1="168" x2="255" y2="228" stroke="#555" strokeWidth="1.5"/>

  {/* Ebene 1: Rechenschaft */}
  <rect x="295" y="26" width="150" height="40" rx="4" fill="#dbeeff" stroke="#2176AE" strokeWidth="2"/>
  <text x="370" y="51" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1a5c8c">Rechenschaft</text>

  {/* Ebene 2 links: Gewinnanspruchsermittlung (hervorgehoben) */}
  <rect x="65" y="126" width="250" height="42" rx="4" fill="#dbeeff" stroke="#2176AE" strokeWidth="2.5"/>
  <text x="190" y="152" textAnchor="middle" fontSize="12.5" fontWeight="bold" fill="#1a5c8c">Gewinnanspruchsermittlung (II.)</text>

  {/* Ebene 2 rechts: Informationsvermittlung */}
  <rect x="445" y="126" width="240" height="42" rx="4" fill="#f5f5f5" stroke="#999" strokeWidth="1.5"/>
  <text x="565" y="152" textAnchor="middle" fontSize="12.5" fill="#555">Informationsvermittlung (III.)</text>

  {/* Ebene 3: Ausschüttung und Besteuerung */}
  <rect x="65" y="228" width="120" height="42" rx="4" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.8"/>
  <text x="125" y="254" textAnchor="middle" fontSize="12.5" fill="#1a6b3c">Ausschüttung</text>
  <rect x="195" y="228" width="120" height="42" rx="4" fill="#e8f5e9" stroke="#27ae60" strokeWidth="1.8"/>
  <text x="255" y="254" textAnchor="middle" fontSize="12.5" fill="#1a6b3c">Besteuerung</text>

  {/* Legende */}
  <line x1="20" y1="316" x2="720" y2="316" stroke="#ddd" strokeWidth="1"/>
  <text x="370" y="334" textAnchor="middle" fontSize="11" fill="#555">Die Rechenschaft teilt sich in Gewinnanspruchsermittlung und Informationsvermittlung auf</text>
  <text x="370" y="350" textAnchor="middle" fontSize="11" fill="#555">Die Gewinnansprüche gliedern sich wiederum in Ausschüttung und Besteuerung</text>
</svg>

- Der Jahresabschluss erfüllt zwei hauptsächliche Zwecke:
    - Informationen übermitteln
    - Gewinn bestimmen
        - Gewinn für Besteuerung ermitteln (nicht teil dieser Vorlesung)
        - Ausschüttung
            - _Wie viel kann ich an meine Gesellschafter ausschütten?_
            - **Ausschüttungsbemessungsfunktion**

### 1.5.2 - Ausschüttungsbemessungsfunktion
- Die Ausschüttungsbemessungsfunktion ist **Teil der Gewinnanspruchsermittlung (II.)**
- Ausschüttung fließt aus Unternehmen ab
- Ausschüttung kann nur bei (Jahres-)Überschuss ausgezahlt werden (gesetzlich festgehalten)
  - Bringt Probleme mit sich:

:::warning Gläubiger-Eigner-Konflikt
- Laut HGB haben Gläubiger **immer** Vorrang, d.h. Fremdkapitalsgeber (z.B. Banken) bekommen IMMER zuerst ihre Zinsen, etc.
  - Zahlungen fallen zu Lasten des Eigenkapitals an (bei Personengeselschaften auch ggf. zu Lasten des Privatvermögens)
- Falls wenn nach Zinszahlungen, etc. kein Gewinn mehr da ist darf keine Privatentnahme erfolgen
  - Eine Auszahlung von Fremdkapital an Eigner ist unzulässig
:::

:::danger Für Kapitalgesellschaften:
- Es greift das **Prinzip der Norminalkapitalserhaltung**
  - d.h. es wird ein **Betrag** festgelegt, **der nicht an die Eigner zurückfließen darf**
    - Bei AG: 50.000€
    - Bei GmbH: 25.000€