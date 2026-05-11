---
sidebar_position: 3
---

# 1. Grundlagen

SAP CAP (Cloud Application Programmming Model) ist ein Framework von SAP, das vorgibt, wie eine Business-Applikation gebaut wird. Durch Definition was (Datenmodell + Services) wird die Grundlage gelegt - CAP generiert dann den Rest.

## 1.0.1 - Drei Schichten von CAP

```text
┌─────────────────────────────────┐
│  1. Domain Model (schema.cds)   │  ← Was gibt es?
├─────────────────────────────────┤
│  2. Service Definition (.cds)   │  ← Was darf man damit tun?
├─────────────────────────────────┤
│  3. Event Handlers (Java)       │  ← Was passiert dabei genau?
└─────────────────────────────────┘
```

### Domain Model
Hier werden die Entities - sprich die Datenbank-Tabellen - definiert. CAP nutzt diese um damit automatisch eine Tabellenstruktur (nach DDL) zu generieren. Lokal erfolgt dies aud einer SQLite, in production dann auf HANA.

### Service Definition
Hier wird definiert, welche Entities als API exponiert werden - sprich wie sie nach außen hin sichtbar sind. Die innerhalb einer Service-Definition aufgelisteten Entities werden damit als sog. API-Endpunkt erreichbar.

:::note
| schema.cds (intern, versteckt) |                   | service_definition.cds (öffentlich, als REST-API erreichbar) |
|--------------------------------|-------------------|--------------------------------------------------------------|
|                                | -- exponieren --> |                                                              |

Dies ermöglicht uns mehrere Datenmodelle zu erstellen, aber diese nur teilweise zu exponieren.
:::

CAP generiert aus diesen Service-Definitions nun vollständige OData v4 REST-Services und ermöglicht uns CRUD-Operationen (Create, Read, Update, Delete) direkt nutzen zu können.

### Event-Handlers
Die Event-Handler enthalten die Logik, die bei bestimmten Ereignissen greift - es ist das, was typischerweise unter Backend verstanden wird (Offiziell zählt alles, was sich im `/srv`-Ordner befindet zum Backend).

:::tip
Die genaue Nutzung von Java wird im Unterpunkt ***4. Java als Backend*** näher erläutert.
:::


## 1.0.2 - Ablauf eines Request
Bei einem Request durch einen User durchläuft dieser die wichtigsten Schichten von Client bis hin zum Backend und wieder zurück:

```text
Client (UI/Postman)
       │
       ▼
  OData Request: POST /odata/v4/CarbonService/Emissions
       │
       ▼
  @Before-Handler → Validierung
       │
       ▼
  @On-Handler (oder Standard-CRUD) → DB Insert
       │
       ▼
  @After-Handler → Nachbearbeitung
       │
       ▼
  Response zurück an Client
```

## 1.0.3 - Wichtige Befehle

Im Kontext von CAP-Java gibt es ein paar wichtige Befehle:

```bash
cds init my-carbon-app --add java   # Projekt anlegen
cds watch                            # Lokaler Dev-Server mit Hot-Reload
cds deploy --to sqlite              # Lokale DB erzeugen
cds compile srv/ --to edmx          # OData-Metadaten anzeigen
mvn spring-boot:run                 # Java-Server starten
```

