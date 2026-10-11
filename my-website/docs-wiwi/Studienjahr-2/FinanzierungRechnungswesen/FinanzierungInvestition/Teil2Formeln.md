# Teil 2 - Formeln
:::note
Alle Formeln aus den Vorlesungsunterlagen, gruppiert nach Kapitel. Die Aufgaben dazu stehen in [Teil 3 - Aufgaben](./Teil3Aufgaben.md).
:::

## 2.1 - Außenfinanzierung durch Eigenkapital

### Bezugsrecht

| Größe | Formel |
|---|---|
| Bezugsverhältnis | $\text{BV} = \dfrac{\text{Grundkapital}_{\text{alt}}}{\text{Erhöhungskapital}}$ |
| Wert des Bezugsrechts | $\text{BR} = \dfrac{K_{\text{alt}} - K_{\text{neu}}}{\text{BV} + 1}$ |
| Mischkurs (Mittelkurs) | $M = \dfrac{\text{BV} \cdot K_{\text{alt}} + K_{\text{neu}}}{\text{BV} + 1}$ |

mit: $K_{\text{alt}}$ = Kurs der alten Aktie, $K_{\text{neu}}$ = Bezugspreis (Ausgabekurs) der jungen Aktie

### Kapitalerhöhung (weitere wichtige Formeln)

| Größe | Formel |
|---|---|
| Anzahl neuer Aktien | $\text{Neue Aktien} = \dfrac{\text{Erhöhungskapital}}{\text{Nennwert}}$ |
| Bank (Zahlungsmittelzufluss) | $\text{Bank} = \text{Anzahl neue Aktien} \cdot \text{Bezugspreis}$ |
| Grundkapital (Zugang) / gez. Kapital | $\text{Grundkapital} = \text{Anzahl neue Aktien} \cdot \text{Nennwert}$ |
| Kapitalrücklage (Zugang) | $\text{Kapitalrücklage} = \text{Anzahl neue Aktien} \cdot (\text{Bezugspreis} - \text{Nennwert})$ |

## 2.2 - Außenfinanzierung durch Fremdkapital

### Bankkredite

| Größe | Formel |
|---|---|
| Zinsen pro Jahr | $\text{Zinsen} = \text{Kreditbetrag} \cdot i$ |
| Zinsen gesamt | $\text{Zinsen}_{\text{gesamt}} = \text{Zinsen pro Jahr} \cdot n$ |

### Annuitätendarlehen

$$
e = K_0 \cdot \frac{q^n \cdot (q - 1)}{q^n - 1} = K_0 \cdot \text{KWF}
$$

mit: $e$ = Annuität, $K_0$ = Darlehensbetrag (Barwert), $i$ = Zinssatz, $q = 1 + i$, $n$ = Laufzeit in Jahren, KWF = Wiedergewinnungsfaktor

### Tilgungsplan (alle Darlehensarten)

| Spalte | Formel |
|---|---|
| Zinsen | $\text{Restschuld}_{\text{Jahresanfang}} \cdot i$ |
| Zahlbetrag | $\text{Zinsen} + \text{Tilgung}$ |
| Restschuld Jahresende | $\text{Restschuld}_{\text{Jahresanfang}} - \text{Tilgung}$ |

| Darlehensart | Tilgung pro Jahr |
|---|---|
| Annuitätendarlehen | $e - \text{Zinsen}$ |
| Festdarlehen | $0$, im letzten Jahr komplett $K_0$ |
| Abzahlungsdarlehen | $\dfrac{K_0}{n}$ |

## 2.3 - Selbstfinanzierung

| Größe | Formel |
|---|---|
| Offene Selbstfinanzierung | $\text{Gewinn} - \text{Ausschüttung}$ |
| Stille Reserve | $\text{Marktwert} - \text{Buchwert}$ |
