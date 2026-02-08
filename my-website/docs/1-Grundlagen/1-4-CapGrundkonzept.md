# 1.4 - Grundkonzept von Cap

## 1.4.1 - Grundbausteine von Cap

Cap besetht aus einer Reihe von Bausteinen, die zusammen ein Framework darstellen. Zu den wichtigsten Frameworks zählen die Core Data Services(CDS), Service-Runtimes für Node.js und Java, Plattform integrations und Command-Line Interfaces (CLI).

### 1.4.1.1 - Core Data Services

:::info
Im folgenden Abschnitt wird die grundlegende Rolle der Core Data Services in einem CAP Projekt erläutert. Die genaue Funktionsweise sowie die Art und Weise, wie man Core Data Services formuliert, sind in Kapitel _2. Core Data Services_ festgehalten.
:::

Die Core Data Services werden im Kontext von Rap immer wieder als Rückrat des gesamten Projekts beschrieben. Es handelt sich dabei um eine _deklarative Domänensprache (DSL)._ Das bedeutet, man definiert hier nicht die eigentliche technische Umsetzung von Datenbanken, sondern viel mehr, was man schlussendlich _haben möchte._
In Cap stellt die CDS eine Art "Single Point of Truth" dar. Einmal definiert, generiert CAP aus ihnen automatisch

- Die physischen Datenbanktabellen (SQL)
- Die OData-Schnittstellen (Services; siehe 1.4.1.2 - OData Schnittstellen)
- Die Metadaten für die Benutzeroberfläche (meist Fiori Elements)

#### Die Ebenen der Core Data Services

##### Data Modelling `db/`

Hier liegt das Datenmodell, typischerweise als `schema.cds` bezeichnet. Es beinhaltet in der Regel die Entitätsfestlegungen (Tabellen), Beziehungen (Associations/Compositions) und Datentypen fest.

##### Service Definitions `srv/`

Hier wird festgelegt, welche Daten nach außen sichtbar sein sollen - Dies bedeutet, man kann Entitäten aus dem Datenmodell filtern, umbenennen oder nur für bestimmte Rollen (read-only) freigeben.

**Wichtig: Ein Service in CAP ist immer eine Art Sicht auf ein Datenmodell.**

##### Annotations `app/`

Mit Annotationen, beginnend mit einem _@_, lassen sich Daten aufbereiten. Dies ermöglicht z.B. die Festlegung, dass es sich bei einem bestimmten Feld um eine E-Mail-Adresse handelt oder wie eine Tabell in einer SAP Fiori-App sortiert werden soll.

:::info
Alternativ können Annotations auch direkt im Service mitdefiniert werden, dies wird jedoch meist schnell unübersichtlich.
:::

#### Die wichtigesten Vorteile
- **Plattform-Adaptiv:** Das in CDS geschriebene Modell wird von Cap automatisch passend übersetzt, sodass es unabhängig davon läuft, ob man SAP HANA, PostgreSQL oder SQLite verwendet.
- **Wiederverwendbarkeit:** SAP liefert viele vordefinierte Typen und Aspekte mit (z. B. cuid für automatische IDs oder managed für Zeitstempel), die einfach in das Modell importiertiert werden können.

### 1.4.1.2 - OData Schnittstellen
