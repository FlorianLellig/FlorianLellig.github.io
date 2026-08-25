# 2.1. Was ist ein AI Agent?

## Grundlagen

Ein AI-Agent (dt. KI Agent) ist ein eigentständiges Computerprogramm, das seine Umgebung wahrnimmt, eigenständig Pläbe erstellt und Handlungen ausführt, um ein bestimmtes Ziel zu erreichen.

Im Gegensatz zu traditioneller Software, die im wesentlichen mit genau definiertem Input arbeitet und dementsprechend bei Unklarheiten abstürzt, bieten AI Agents eine agiler Art und Weise, mit Anfrangen umzugehen, für die dieser nicht _primär_ vorgesehen ist. 

Für einen AI Agenten gibt es in diesem Kontext bestimmte Eigenschaften:
1. **Preception:** Die Fähigkeit, Eingaben unabhängig ihres Typs (Text, Daten, Informationen) zu verstehen
2. **Reasoning:** Die Fähigkeit, sich durch Probleme "durchzudenken", Optionen auszuarbeiten und auszuwerten.
3. **Action:** Die Fähigkeit, Aufgaben auszuführen, APIs zu kontaktieren, Kontent zu generieren oder mit anderen Systemen zu interagieren.
4. **Learning:** Die Fähigkeit, aus Feedback zu lernen und dieses umzusetzen.

:::info
Im Herzen der Agents stehen Large Language Models - es gibt Agents ihre artificial _intelligence_.
Es verarbeitet die gestellten Anfragen mittels Tokenization, Processing und Prediction, um den wahrscheinlichsten Output zu liefern.
Innerhalb der SAP werden diese Agent-Anfragen über den AI Core geleitet, um Verbindung mit LLMs herzustellen. 
:::

## Multi-Agent Kommunikation (A2A Protocol)
_A2A-Protocol_ steht für Agent to Agent Protocol und ist ein offener standard der die Kommunikation zwischen Agenten vereinheitlichen soll. Dies umfasst auch das gegenseitige Wahrnehmen von Agenten.

Die Kommunikation erfolgt über JSON Files:
- Jeder Agent besetzt einen Agent-Descriptor (`/.wellknown/agent.json`), in welchem beschrieben wird, was Fähigkeiten, Eingaben und die damit gelieferten Ausgaben sind - Vergleichbar zu einer Business Card


_Details siehe in 2.2. A2A Protocol_

## Skills

Skills stellen eine vorgefertigte, bereits erstellte Hilfestellung für z.B. einen Coding-Assistent dar. Innherlab der SAP werden die für die Entwicklung eines Agents relevanten Skills mittels SAP Application Foundation bereitgestellt. Skills sind typischerweise nicht Bestandteil eines deployten Agents.
Im folgenden ist eine Liste von bereitgestellten Skills, die beim erstellen eines Agents im SAP Kontext wichtig sind.

| Skill | Beschreibung |
|---|---|
| `sap-agent-bootstrap` | Erstellt neue Agent-Projekte mit allen notwendigen Dateien, Konfigurationen und der richtigen Projektstruktur. |
| `sap-agent-instrumentation` | Fügt Telemetrie und Observability mit Traces, Metrics und strukturiertem Logging hinzu. |
| `sap-agent-run-local` | Hilft beim lokalen Testen des Agents mit korrektem Environment-Setup und Konfiguration. |
| `sap-agent-test-remote` | Testet deployten Agenten in Canary- oder Produktionsumgebungen mit Assertions. |
| `sap-project-structure` | Validiert die Projektstruktur gegen Best Practices und schlägt Verbesserungen vor. |
| `sap-sdk-python-*` | Mehrere Skills zur Integration von SDK-Modulen: Telemetrie, Audit Log, Object Store, Destinations. |