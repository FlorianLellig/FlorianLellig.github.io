# 2.1.1 - Conceptual Definition Language (CDL)

:::info
Die Conceptual Definition Language ist ein wesentlicher Bestandteil der Core Data Services, der sich mit der Definition von Modellen beschäftigt.
:::

## 2.1.1 - Namensräume und Modularisierung

:::note
**Bestandteile des Abschnittes**

- `namespace` zur Erstellung von Namensräumen
- `using` als Lösung zum Import
  :::

Namensräume verhindern Konflikte in komplexen Systemen und strukturieren das Projekt analog zu Java-Packages. Ein Namensraum wird mit dem Schlüsselwort `namespace` deklariert.

```sql
namespace sap.capire.bookshop;
```

Um bestehende Definitionen wiederzuverwenden, nutzt CDS die `using`-Direktive. Diese erlaubt es, Typen, Entitäten oder Aspekte aus anderen Dateien oder NPM-Modulen zu importieren.

```sql
using { managed, cuid, Country } from '@sap/cds/common';
```

:::tip
Das Modul @sap/cds/common ist hierbei von zentraler Bedeutung, da es Standard-Definitionen liefert, die die Interoperabilität zwischen verschiedenen CAP-Anwendungen sicherstellen. Der Compiler sucht diese Module in den node_modules-Ordnern des Projekts.
:::

## 2.1.2 - Datentypen in CDL


| CDS Typ | Beschreibung | ANSI SQL Entsprechung |
| :--- | :--- | :--- |
| `UUID` | Universell eindeutiger Identifikator (RFC 4122) | NVARCHAR(36) |
| `String(length)` | Zeichenkette mit definierter Länge (Standard: 255) | NVARCHAR |
| `Integer` | 32-Bit Ganzzahl | INTEGER |
| `Int64` | 64-Bit Ganzzahl für große Zahlenbereiche | BIGINT |
| `Decimal(p, s)` | Festkommazahl mit Präzision p und Skala s | DECIMAL |
| `Double` | Gleitkommazahl | DOUBLE |
| `Boolean` | Wahrheitswert (true, false, null) | BOOLEAN |
| `Date` | Datumsangabe (JJJJ-MM-TT) | DATE |
| `Timestamp` | Zeitstempel mit Mikrosekunden-Präzision | TIMESTAMP |
| `LargeString` | Große Textmengen (CLOB) | NCLOB |
| `LargeBinary` | Binärdaten (BLOB) | BLOB |

## 2.1.3
