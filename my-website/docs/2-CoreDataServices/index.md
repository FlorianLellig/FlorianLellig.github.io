# 2. Core Data Services (CDS)

:::info
Im folgenden Abschnitt wird die Anwendung der Core Data Services erläutert. Um den Bezug zwischen Core Data Servics und Cap zu verstehen, öffne Kapitel 1.4 Cap Grundkonzept.
:::

CDS verfolgt einen modellgetriebenen Ansatz und dient als "Single Source of Truth", aus der verschiedene Artefakte wie SQL-Tabellen, OData-Metadaten, Java-Schnittstellen und UI-Konfigurationen abgeleitet werden. In einem Java-Projekt werden die CDS-Modelle durch den Compiler in eine JSON-basierte Repräsentation, die Core Schema Notation (CSN), überführt, welche wiederum die Basis für die Generierung von typsicheren Java-Klassen bildet. Dieser Prozess reduziert den Bedarf an Boilerplate-Code drastisch und erlaubt es dem Entwickler, sich auf die Domänenlogik zu konzentrieren.
## CDS - Infrastruktur
Die CDS-Infrastruktur unterteilt sich primär in die **Conceptual Definition Language (CDL)** für die Definition von Modellen und die **CDS Query Language (CQL)** für den Datenzugriff. Während CDL die statische Struktur der Anwendung festlegt, ermöglicht CQL dynamische Abfragen, die weit über den Standard von SQL hinausgehen, indem sie Pfadausdrücke und tief verschachtelte Projektionen unterstützen.   
