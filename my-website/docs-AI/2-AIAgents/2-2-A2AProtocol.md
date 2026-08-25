# 2.2. Agent2Agent Protocol

Das Agent2Agent Protocol (kurz: A2A Protocol) ist ein Protokoll für standardisierte Kommunikation verschiedener Agents. Es ist ein (mittlerweile) offenes Protokoll, welches von der Linux Foundation entprechend angenommen wurde. Ziel ist es, Zusammenarbeit, Authentifikation und Kommunikation zwischen Agents zu ermöglichen und zu vereinfachen.

## Grundlagen

In einem Ökosystem, in dem Agenten mit unterschiedlichen Frameworks, Programmiersprachen oder von verschiedenen Anbietern entwickelt werden können, bietet der A2A eine gemeisame Sprachen und ein gemeinsames Interaktionsmodell.

Grundsätzlich sind in einem Request mehrere Akteuere involviert:
1. **User:** Der User stellt den ersten, initialen Request.
2. **Client Agent:** Auch A2A Client genannt. Der Client Agent agiert und reagiert auf die Anfragen des Users und kontaktiert auf Basis dessen andere, ggf. mehrere Agents, sogenannte Remote-Agents. 
3. **Remote Agent:** Auch genannt A2A Server. Hier werden Anfragen weiterverarbeitet. Die Kommunikation zwischen Remote und Client Agent erfolgt über A2A Protocol.

### Schritt 1 - Discovery
Damit Agents kommunizieren können ist es essenziell, dass diese überhaupt von gegenseitiger Existenz wissen.
Um eine solche Existenz wissentlich zu machen arbeiten Remote Agents mit sogenannten Agent Cards (oder auch Agent Descriptor genannt), welche beschreibt, welche Inputs der Remote Agent entgegennimmt, wie diese verarbeitet werden und was der Output ist.

:::tip
Eine _Agent Card_ ist ein JSON-Metadatendokument, das von einem A2A-Server veröffentlich wurd und dessen Identität, Fähigkeiten, Kompetenzen, etc. beschreibt. Eine solche Agent-Card sieht in der Praxis so aus: 
```JSON
{
  "name": "InvoiceProcessingAgent",
  "description": "Agent zur automatisierten Verarbeitung, Prüfung und Ablage von Eingangsrechnungen.",
  "version": "1.2.0",
  "provider": {
    "organization": "ExampleCorp GmbH",
    "url": "https://www.examplecorp.de"
  },
  "url": "https://agents.examplecorp.de/a2a/invoice",
  "preferredTransport": "JSONRPC",
  "additionalInterfaces": [
    {
      "transport": "GRPC",
      "url": "grpc://agents.examplecorp.de:50051"
    },
    {
      "transport": "HTTP+JSON",
      "url": "https://agents.examplecorp.de/v1/invoice"
    }
  ],
  "capabilities": {
    "streaming": true,
    "pushNotifications": true,
    "stateTransitionHistory": true
  },
  "authentication": {
    "schemes": ["Bearer"],
    "credentials": "OAuth2, Token via https://auth.examplecorp.de/token"
  },
  "defaultInputModes": ["text", "file"],
  "defaultOutputModes": ["text", "data"],
  "skills": [
    {
      "id": "extract-invoice-data",
      "name": "Rechnungsdaten extrahieren",
      "description": "Extrahiert strukturierte Daten (Betrag, Datum, Positionen) aus PDF- oder Bild-Rechnungen.",
      "tags": ["ocr", "invoice", "extraction"],
      "inputModes": ["file"],
      "outputModes": ["data"]
    },
    {
      "id": "validate-invoice",
      "name": "Rechnung prüfen",
      "description": "Prüft Rechnungen gegen Bestelldaten und meldet Abweichungen.",
      "tags": ["validation", "compliance"],
      "inputModes": ["data"],
      "outputModes": ["text", "data"]
    }
  ],
  "documentationUrl": "https://docs.examplecorp.de/agents/invoice"
}
```
- **Name/Description:** Beschreibt den Agent und dessen Funktionalitäten
- **Endpunkt-URL:** Zentrale Voraussetzung jeder Interaktion; beschreibt dem Client-Agent, wohin kommuniziert werden soll (Adresse des Agents). Die Kommunikation muss über HTTP(S) erreichbar sein.
- **Transportprotokoll(prefferedTransport/additionalInterfaces):** Hier wird festgelegt, wie genau kommuniziert wird - eines der dort aufgeführten Transports müssen vom Client unterstützt werden.
- **Authentication:** Hier wird definiert, welche Sicherheitsverfahren der Agent verlangt. Um Schutz vor unbefungtem Zugriff zu bieten, muss der Client die nötigen Credentials besitzen, sonst wird der Zugriff abgelehnt.
- **Skills:** Beschreiben konkret die Fähigkeiten des Agenten - dies ist die Basis für _Discovery_, da andere Agenten/Clients den passenden Agenten anhand der Skills auswählen.
- weitere...
:::

### Schritt 2 - Authentication
Die Authentifikation erfolgt über ein Security Scheme, welches in der Agent Card integriert ist. Nach erfolgreicher Authentication ist der Remote Agent für eine Authorization verantwortlich, die es dem Client Agent ermöglicht, entsprechende Dienste zu beansruchen.

![Picture](/documents/artificialIntelligence/AuthenticationAgents.png)

### Schritt 3 - Communication
Nach erfolgreicher Authentication und Authorization durch Client- und Remote Agent kann nun der Client Agent seine eigentliche Aufgabe weitergeben - diese Weiterreichung der Aufgabe erfolgt über ein JSON-RPC 2.0 Format (gesendet über HTTPS).
Bei erfolgreicherm Ereichen der Task beim Remote Agent beginnt dieser, die Aufgabe zu verarbeiten, er hat ebenso die Möglichkeit, bei Bedarf weitere Informationen beim Client Agent anzufragen.
Wenn die Aufgabe Abgeschlossen ist wird die Kommunikation durch den Remote Agent mittels finaler Antwort und generiertem Artefakt (Output, kreiert durch den Agent).
Sollte eine Aufgabe für den Remote Agent mehr Zeit beanspruchen, besteht die Möglichkeit eines Streamings mit ServiceSendEvents (SSE), um dem Client Agent StatusUpdates über den Bearbeitungsfortschritt zu senden.

![Picture](/documents/artificialIntelligence/CommunicationAgents.png)


:::note
Dank dem A2A-Protokoll ist eine Kommunikation unter Privacy-Aspekten möglich - Die Agents können kommmunizieren, ohne ihren vollständigen Kontext/Inhalt zu offenbaren.
:::


_-Quelle: IBM Technology ([https://www.youtube.com/watch?v=Tud9HLTk8hg](https://www.youtube.com/watch?v=Tud9HLTk8hg))_


## Transport und Format
