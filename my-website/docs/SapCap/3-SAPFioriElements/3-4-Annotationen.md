---
sidebar_position: 34
---

# 3.4 - UI-Anpassungen mit Annotations

In SAP Cap werden Benutzeroberflächen nicht manuell programmiert, sondern deklarativ über Metadaten beschrieben. Das Framework übersetzt diese CDS-Annotationen in OData-V4-Vokabulare, welche die SAP Fiori Elements Templates (List Report, Object Page) zur Laufzeit interpretieren.

## 3.2.1 - Grundlagen

### Platzierung der Metadaten

Bevor man in die Syntax einsteigt, muss die Platzierung der Metadaten geklärt werden. Cap bietet hier zwei Hauptwege:

- **In-line Annotationen:** Direkt im Domänenmodell (`db`) oder in der Service-Definition (`srv/`). Dies macht lediglich Sinn, sollten nur einfache Felder und diese nur selten genutzt werden.
- **Separation of Concerns (Empfehlung):** Die Auslagerung von UI-Annotationen in eine seperate `annotations.cds`-Datei sorgt für ein saubereres Datenmodell und trennt Geschäftslogik von Layout-Informationen.
  - Syntax-Beispiel für die Auslagerung:

    ```sql
    using { CatalogService.Books } from './cat-service';

    annotate Books with @(
        UI.LineItem : [... ]
    );
    ```

:::warning
Die Verwendung von In-Line-Annotations führt in der Regel zu Übersichtsproblemen und struktureller Unklarheit.
:::

## 3.2.2 - Element-Ebene: Bezeichnungen und Semantik

### Alternative Bezeichnungen von Labeln mit `title`

Definition von menschenlesbaren Labels, die in der UI anstelle der technischen Feldnamen angezeigt werden.

```sql
annotate Books with {
    title   @title : 'Buchtitel';       //Einfaches Label, was in der UI später sichtbar ist
}
```

### Adaptive Bezeichnungen als Text-Replacement mit `@Common.Text`

Ziel ist das Ersetzen von z.B. einer Autor-ID durch den eigentlichen Autornamen.

```sql
annotate Books with {
    author @Common.Text : author.name @Common.TextArrangement : #TextFirst;
}
```

:::tip
`@Common.TextArrangement : #TextFirst` bestimmt die Anzeigereihenfolge:

- `#TextFirst` &rarr; "Stephen King(123)"
- `#TextLast` &rarr; "(123) Stephen King"
- `#TextOnly` &rarr; "Stephen King"
- `#TextSeperate` &rarr; Text und ID in seperaten Spalten
  :::

:::warning
Voraussetzung dafür, das diese Form von Text-Replacement funktioniert, ist, dass sowohl die richtige Datengrundlage vorliegt, als auch diese entsprechend mit Assoziationen im Schema festgehalten ist.
:::

### Währungsfeld-Verknüpfung mit `@Mesures.ISOCurrency`

Ziel ist die Darstellung von Geldbeträgen mit Währung: **"19.99 EUR"** statt "19.99". Zusätzlich dazu ermöglicht `@Mesures.ISOCurrency` auch eine automatische Währungsformatierung (Dezimalstellen, Tausendertrennzeichen).

```sql
annotate Books with {
    price @Measures.ISOCurrency : currency_code;
};
```

oder

```sql
annotate Books with {
    price @(
        Measures.ISOCurrency : currency_code,
        title : 'Preis'
    );
};
```

:::warning
Damit die Umsetzung erfolgt muss ein `currency_code`-Feld in der jeweiligen Datengrundlage vorhanden sein. Des weiteren müssen die Currency-Codes dem ISO Standard entsprechen.
:::

## 3.2.3 - List Report (Suchen und Ergebnistabelle)

### Filter festlegen und anzeigen mit `@UI.SelectionFields`

Mit `@UI.SelectionFields` werden die Felder, die als Filter über der Tabelle erscheinen, definiert.

```sql
annotate Books with @(
  UI.SelectionFields : [
    title,
    author_id,
    genre
  ]
);
```

### Ergebnistabelle - Spalten festlegen mit `@UI.LineItem`

Mit `@UI.LineItem` lassen sich die Spalten der Tabelle festlegen.

```sql
annotate Books with @(
  UI.LineItem :
);
```

## 3.2.4 - Object Page (Detailansicht)

### Header gestalten mit `@UI.HeaderInfo`

Der Header stellt den oberen Bereich der Object Page dar.

```sql
annotate Books with @(
  UI.HeaderInfo : {
    TypeName       : 'Buch',
    TypeNamePlural : 'Bücher',
    Title          : { Value : title },
    Description    : { Value : author.name },
    TypeImageUrl   : 'sap-icon://course-book'
    //Weitere...
  }
);
```

#### Titel und Typ

Singular- und Pluralname der Entität.

```sql
// === TITEL & TYP ===
TypeName : 'Spieler',                    // Singular-Name der Entität
TypeNamePlural : 'Spieler',              // Plural-Name der Entität
Title : {                                // Haupttitel (z.B. Name des Datensatzes)
    $Type : 'UI.DataField',
    Value : PlayerName
},
Description : {                          // Untertitel/Beschreibung
    $Type : 'UI.DataField',
    Value : ID                           // oder kombinierte Felder
}
```

#### Bilder

Sowohl statische als auch dynamische Bilder können integriert werden.

```sql
// === BILDER ===
TypeImageUrl : 'sap-icon://person-placeholder',  // Statisches Icon/Bild für den Typ
ImageUrl : CharacterImageUrl,                     // Dynamisches Bild pro Datensatz

Initials : {                              // Initialen (falls kein Bild)
    $Type : 'UI.DataField',
    Value : PlayerName                    // z.B. erste Buchstaben
}
```

:::warning
Der Paramenter `ImageUrl` bezieht sich hierbei auf eine _Spalte_ der Tabelle.
:::

#### Alternative Informationen

Zur Sicherstellung der Barrierefreiheit.

```sql
// === ZUSÄTZLICHE INFOS ===
TypeImageAlt : 'Spieler Avatar',          // Alt-Text für TypeImageUrl
ImageAlt : 'Character Bild'               // Alt-Text für ImageUrl
```

### Header getalten mit Key-Performance-Indicators (KPIs)

Key Performance Indicators sind aufbereitete Werte, die im Header unterhalb des Titels, etc. angezeigt werden. Um ein KPI-Wert zu integrieren, muss dieser zuerst erstellt und anschließend den sogenannten HeaderFacets hinzugefügt werden. 

#### Einfacher KPI-Wert:
```sql
annotate service.Spieler with @(
    
    // DataPoint definieren
    UI.DataPoint #Gesamtpunktzahl : {
        $Type : 'UI.DataPointType',
        Value : Gesamtpunktzahl,
        Title : 'Gesamtpunktzahl'
    },
    
    // Im Header platzieren
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'KPI_Punkte',
            Target : '@UI.DataPoint#Gesamtpunktzahl'
        }
    ]
);
```

#### KPI mit Zielwert (Target) und Fortschrittsanzeige
```sql
annotate service.Spieler with @(
    
    UI.DataPoint #Punktefortschritt : {
        $Type : 'UI.DataPointType',
        Value : Gesamtpunktzahl,
        Title : 'Punktefortschritt',
        TargetValue : 2000,              // Zielwert
        Visualization : #Progress        // Fortschrittsbalken
    },
    
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'KPI_Fortschritt',
            Target : '@UI.DataPoint#Punktefortschritt'
        }
    ]
);
```

:::tip
Folgende Visualizations sind Verfügbar:
```sql
Visualization : #Number       // Nur Zahl
Visualization : #BulletChart  // Balkendiagramm mit Zielwert
Visualization : #Progress     // Fortschrittsbalken
Visualization : #Rating       // Sterne-Bewertung
Visualization : #Donut        // Kreisdiagramm
```
:::


#### KPI mit Kritikalität (farbige Ampel-Logik)
```sql
annotate service.Spieler with @(
    
    UI.DataPoint #DurchschnittlichePlatzierung : {
        $Type : 'UI.DataPointType',
        Value : DurchschnittlichePlatzierung,
        Title : 'Ø Platzierung',
        
        // Kritikalität definieren
        Criticality : {
            $Type : 'UI.CriticalityType',
            // Grün (3) wenn <= 1.0, Gelb (2) wenn <= 2.0, sonst Rot (1)
            $If : [
                { $Le : [{ $Path : 'DurchschnittlichePlatzierung' }, 1.0 ] },
                3,  // Positive (grün)
                { $Le : [{ $Path : 'DurchschnittlichePlatzierung' }, 2.0 ] },
                2,  // Critical (gelb)
                1   // Negative (rot)
            ]
        },
        CriticalityRepresentation : #WithIcon  // Zeigt farbiges Icon
    },
    
    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'KPI_Platzierung',
            Target : '@UI.DataPoint#DurchschnittlichePlatzierung'
        }
    ]
);
```

:::tip
Folgende Criticality Werte sind verfügbar:
```sql
Criticality : 0  // Neutral (grau)
Criticality : 1  // Negative (rot)
Criticality : 2  // Critical (gelb/orange)
Criticality : 3  // Positive (grün)
Criticality : 5  // Information (blau) - SAP UI5 spezifisch
```
:::

#### KPI mit Trend (seigend/fallend)
```sql
annotate service.Spieler with @(
    
    UI.DataPoint #PunkteTrend : {
        $Type : 'UI.DataPointType',
        Value : Gesamtpunktzahl,
        Title : 'Punkte (Trend)',
        
        // Trend-Pfeil
        TrendCalculation : #StrongUp,  
        // Optionen: #StrongUp, #Up, #Sideways, #Down, #StrongDown
    },

    UI.HeaderFacets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'KPI_Gesamtpunktzahl',
            Target : '@UI.DataPoint#PunkteTrend'
        }
    ]
);
```

### Object-Page gliedern mit `@UI.Facets`
```sql
annotate Spieler with @(
    // Definieren, wie ein einzelnes Facet als FieldGroup aussehen soll (was es beinhalten soll)
    UI.FieldGroup #Stats : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Durchschnittliche Platzierung',
                Value : DurchschnittlichePlatzierung,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Gesamtpunktzahl',
                Value : Gesamtpunktzahl,
            },
        ]
    },

    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet2',
            Label : 'Stats',
            Target : '@UI.FieldGroup#Stats',
        },
        // Hier können weitere, vorher mit UI.Fieldgroup definierte Facets hinzugefügt werden.
    ]
)
```

:::tip
Über Facets lassen sich neben einfachen Daten auch andere Elemente wie zum Beispiel Diagramme (`$Type : 'UI.ChartDefinitionType'`) einbinden.
:::

## 3.2.5 - Value Helps (Wertehilfen)
```sql
annotate Books with {
  author @(
    Common.ValueList : {
      Label          : 'Autoren auswählen',
      CollectionPath : 'Authors',
      Parameters     :
    }
  );
}
```

## 3.2.6 - Verhaltenssteuerung (Capabilities)

Annotationen zur Einschränkung von Benutzeraktionen.

```sql
// Entitätsebene: Löschen verbieten
annotate Books with @Capabilities : {
  DeleteRestrictions : { Deletable : false }
};

// Feldebene: Feld schreibgeschützt machen
annotate Books with {
  ID @readonly;
  stock @mandatory;
};
```