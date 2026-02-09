# 2.1.3 - Service Modellierung und Projektionen

In Cap werden Daten nicht direkt dargestellt, sondern über Services definiert. Die Service-Definition findet üblicherweise in der Serviceschicht, sprich in dem `srv/`-Ordner statt.

## 2.1.3.1 - Definition von Projektionen

Ein Service definiert eine Sicht auf das Schemamodell der Datengrundlage (aus dem `db/`-Ordner). Hierbei wird das Schlüsselwort `projection on`verwendet, welches eine 1:1 Abbildung oder eine Einschränkung der Basis-Entität ermöglicht.

```sql
service CatalogService {
    entity Books as projection on db.Books;
}
```

:::info
Oftmals existieren mehrere solcher Projections, abhängig von den Rollen, die man zur Verfügung stellen möchte. Üblicherweise wird `CatalogService` als Projection für User verwendet, es können aber auch Projections für Adminestratoren exisiteren. 
Dies ermöglicht relativ simpel unterschiedliche Funktionen auf Basis der gleichen Datengrundlage zu erstellen
:::

## 2.1.3.2 - Aktionen

Über die reine Datenabfrage hinaus können auch sog. Service Actions (`actions`) zum verändern von Daten definiert werden, um komplexe Geschäftslogik abzubilden. Diese werden dann im Java-Backend durch spezielle Event-Handler implementiert.