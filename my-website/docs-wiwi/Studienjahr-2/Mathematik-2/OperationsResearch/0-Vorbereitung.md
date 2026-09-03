# 0. Vorbereitung: Lineare Gleichungssysteme
 
> Grundlagen, die vor dem Einstieg in die Lineare Optimierung sitzen sollten.
> Kernthema: der Gauß-Algorithmus und die drei möglichen Lösungsfälle.
 
---
 
## 0.1 Warum dieses Kapitel
 
Lineare Gleichungssysteme (LGS) sind die Rechenmaschine, auf der die spätere
Optimierung aufsetzt. Die Nebenbedingungen eines linearen Optimierungsproblems
werden in der Form `Ax ≤ b` bzw. nach Umformung als Gleichungssystem `Ax = b`
geschrieben — also exakt als LGS.
 
Der entscheidende Punkt für später: Wenn ein LGS **mehr Variablen als
Gleichungen** hat, gibt es nicht eine einzige Lösung, sondern eine ganze
Lösungsschar mit freien Parametern. Genau diese freie Wahl der Parameter ist der
**Optimierungsspielraum** — der Raum, in dem später nach der besten Lösung
gesucht wird.
 
Ohne sicheren Gauß gibt es keine saubere Optimierung.
 
---
 
## 0.2 Grundbegriffe und Matrixform
 
Ein LGS mit `m` Gleichungen und `n` Unbekannten:
 
```
a₁₁x₁ + a₁₂x₂ + … + a₁ₙxₙ = b₁
a₂₁x₁ + a₂₂x₂ + … + a₂ₙxₙ = b₂
   ⋮
aₘ₁x₁ + aₘ₂x₂ + … + aₘₙxₙ = bₘ
```
 
Kompakt in Matrixform:
 
```
A · x = b
```
 
| Symbol | Bedeutung | Dimension |
|---|---|---|
| `A` | Koeffizientenmatrix | m × n |
| `x` | Vektor der Unbekannten | n × 1 |
| `b` | Vektor der rechten Seite | m × 1 |
 
Zum Rechnen schreibt man nur die Zahlen auf — als **erweiterte
Koeffizientenmatrix** `(A | b)`:
 
```
⎛ 1   1   1 │  6 ⎞
⎜ 2   3  -1 │  5 ⎟
⎝ 1  -1   2 │  5 ⎠
```
 
Der senkrechte Strich ist reine Lesehilfe und hat keine mathematische Bedeutung.
 
---
 
## 0.3 Erlaubte Zeilenumformungen
 
Diese drei Operationen ändern die **Lösungsmenge nicht**. Darauf beruht das
gesamte Verfahren:
 
1. Zwei Zeilen vertauschen
2. Eine Zeile mit einer Zahl ≠ 0 multiplizieren
3. Zu einer Zeile das Vielfache einer anderen Zeile addieren

**Nicht erlaubt:** 
- Eine Zeile mit 0 multiplizieren (vernichtet Information)
- Spalten vertauschen, ohne die Variablenzuordnung mitzuführen
---
 
## 0.4 Der Gauß-Algorithmus
 
**Ziel:** die erweiterte Koeffizientenmatrix in *Zeilenstufenform* bringen —
unterhalb der Diagonale stehen nur Nullen.
 
### Vorwärtselimination
 
1. Wähle in der ersten Spalte eine Zeile mit einem Eintrag ≠ 0. Dieser Eintrag
   heißt **Pivotelement**, die Zeile **Pivotzeile**.
2. Addiere passende Vielfache der Pivotzeile zu allen darunterliegenden Zeilen,
   sodass in der Pivotspalte darunter überall 0 steht.
3. Gehe eine Spalte und eine Zeile weiter und wiederhole, bis keine Zeile mehr
   übrig ist.
> **Sonderfall:** Ist das Pivot zufällig 0, tausche mit einer darunterliegenden
> Zeile, die dort einen Eintrag ≠ 0 hat. Gibt es keine solche Zeile, ist die
> Spalte fertig und die Stufe rutscht eine Spalte weiter nach rechts. Genau das
> erzeugt später die freien Variablen.
 
### Rückwärtseinsetzen
 
Von der untersten nicht-leeren Zeile nach oben die Variablen nacheinander
ausrechnen.
 
---
 
## 0.5 Die drei Lösungsfälle — geometrisch
 
Bei zwei Variablen ist jede Gleichung eine Gerade in der Ebene. Die Lösungsmenge
ist der Schnitt aller Geraden. Dafür gibt es genau drei Möglichkeiten:
 
<svg width="100%" viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" role="img">
  <title>Die drei Lösungsfälle eines linearen Gleichungssystems</title>
  <desc>Drei Panels zeigen zwei Geraden: sich schneidend (eine Lösung), parallel (keine Lösung) und deckungsgleich (unendlich viele Lösungen).</desc>
  <text x="135" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="currentColor">Eine Lösung</text>
  <rect x="45" y="50" width="180" height="150" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/>
  <line x1="60" y1="180" x2="210" y2="70" stroke="#378ADD" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="60" y1="90" x2="210" y2="190" stroke="#D85A30" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="124" cy="133" r="4" fill="#378ADD"/>
  <text x="135" y="222" text-anchor="middle" font-family="sans-serif" font-size="12" fill="currentColor" fill-opacity="0.7">Geraden schneiden sich</text>
 
  <text x="340" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="currentColor">Keine Lösung</text>
  <rect x="250" y="50" width="180" height="150" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/>
  <line x1="265" y1="160" x2="415" y2="70" stroke="#378ADD" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="265" y1="195" x2="415" y2="105" stroke="#D85A30" stroke-width="1.5" stroke-linecap="round"/>
  <text x="340" y="222" text-anchor="middle" font-family="sans-serif" font-size="12" fill="currentColor" fill-opacity="0.7">Geraden sind parallel</text>
 
  <text x="545" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="500" fill="currentColor">Unendlich viele</text>
  <rect x="455" y="50" width="180" height="150" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"/>
  <line x1="470" y1="175" x2="620" y2="80" stroke="#378ADD" stroke-width="4" stroke-linecap="round"/>
  <line x1="470" y1="175" x2="620" y2="80" stroke="#D85A30" stroke-width="1.5" stroke-dasharray="6 6" stroke-linecap="round"/>
  <text x="545" y="222" text-anchor="middle" font-family="sans-serif" font-size="12" fill="currentColor" fill-opacity="0.7">Geraden fallen zusammen</text>
</svg>
 
Bei drei Variablen sind es Ebenen im Raum, bei mehr Variablen Hyperebenen. Das
Prinzip bleibt identisch.
 
> **Merksatz:** Es gibt nie genau zwei oder genau fünf Lösungen. Entweder keine,
> genau eine, oder unendlich viele.
 
---
 
## 0.6 Den Fall in der Stufenform ablesen
 
Nach der Vorwärtselimination lässt sich der Fall direkt aus der Stufenform
bestimmen. Dabei ist:
 
- `n` = Anzahl der Variablen
- `r` = Anzahl der Zeilen, die nicht komplett Null sind (= **Rang** von `A`)

| Beobachtung in der Stufenform | Fall |
|---|---|
| Eine Zeile der Form `0 0 … 0 │ c` mit `c ≠ 0` | **Keine Lösung** (Widerspruch `0 = c`) |
| Kein Widerspruch und `r = n` | **Genau eine Lösung** |
| Kein Widerspruch und `r < n` | **Unendlich viele**, mit `n − r` freien Parametern |
 
Formuliert über den Rang:
 
```
lösbar            ⟺  Rang(A) = Rang(A|b)
eindeutig lösbar  ⟺  Rang(A) = Rang(A|b) = n
```
 
> **Reihenfolge beachten:** Erst auf Widerspruchszeilen prüfen, dann Stufen
> zählen. Andernfalls zählt man Stufen in einem System, das gar keine Lösung hat.
 
---
 
## 0.7 Durchgerechnete Beispiele
 
Bewusst dreimal fast dasselbe System, um zu zeigen, wie wenig sich ändern muss.
 
### 0.7.1 Fall A — genau eine Lösung
 
```
 x₁ +  x₂ +  x₃ =  6
2x₁ + 3x₂ -  x₃ =  5
 x₁ -  x₂ + 2x₃ =  5
```
 
```
⎛ 1   1   1 │  6 ⎞
⎜ 2   3  -1 │  5 ⎟   Z2 → Z2 − 2·Z1
⎝ 1  -1   2 │  5 ⎠   Z3 → Z3 − 1·Z1
 
⎛ 1   1   1 │  6 ⎞
⎜ 0   1  -3 │ -7 ⎟
⎝ 0  -2   1 │ -1 ⎠   Z3 → Z3 + 2·Z2
 
⎛ 1   1   1 │  6 ⎞
⎜ 0   1  -3 │ -7 ⎟
⎝ 0   0  -5 │-15 ⎠
```
 
Rückwärtseinsetzen:
 
```
-5x₃ = -15        →  x₃ = 3
 x₂ - 3·3 = -7    →  x₂ = 2
 x₁ + 2 + 3 = 6   →  x₁ = 1
```
 
**Lösung:** `(x₁, x₂, x₃) = (1, 2, 3)`, Rang `r = 3 = n`.
 
Probe in Zeile 2: `2·1 + 3·2 − 3 = 5` ✓
 
### 0.7.2 Fall B — keine Lösung
 
Dritte Gleichung ersetzt durch `3x₁ + 4x₂ = 12`:
 
```
⎛ 1   1   1 │  6 ⎞
⎜ 2   3  -1 │  5 ⎟   Z2 → Z2 − 2·Z1
⎝ 3   4   0 │ 12 ⎠   Z3 → Z3 − 3·Z1
 
⎛ 1   1   1 │  6 ⎞
⎜ 0   1  -3 │ -7 ⎟
⎝ 0   1  -3 │ -6 ⎠   Z3 → Z3 − Z2
 
⎛ 1   1   1 │  6 ⎞
⎜ 0   1  -3 │ -7 ⎟
⎝ 0   0   0 │  1 ⎠
```
 
Die letzte Zeile behauptet `0 = 1`. **Widerspruch → keine Lösung.**
 
*Anschaulich:* Auf der linken Seite ist Zeile 3 exakt die Summe von Zeile 1 und
Zeile 2 (`1+2=3`, `1+3=4`, `1−1=0`). Rechts müsste dann `11` stehen, es steht
aber `12`. Die Gleichung passt strukturell zu den anderen, widerspricht ihnen
aber in der rechten Seite.
 
### 0.7.3 Fall C — unendlich viele Lösungen
 
Dasselbe System, aber mit der verträglichen rechten Seite `11`:
 
```
⎛ 1   1   1 │  6 ⎞
⎜ 0   1  -3 │ -7 ⎟
⎝ 0   0   0 │  0 ⎠
```
 
Kein Widerspruch, aber `r = 2 < 3 = n` → `n − r = 1` freier Parameter.
 
**Vorgehen:** Spalten mit Stufen-Pivot (hier Spalte 1 und 2) gehören zu den
*abhängigen* Variablen, die übrigen Spalten (hier Spalte 3) sind *frei*.
 
Setze `x₃ = t`:
 
```
Zeile 2:  x₂ - 3t = -7          →  x₂ = 3t - 7
Zeile 1:  x₁ + (3t - 7) + t = 6 →  x₁ = 13 - 4t
```
 
**Lösungsmenge in Parameterform:**
 
```
⎛x₁⎞   ⎛ 13 ⎞       ⎛ -4 ⎞
⎜x₂⎟ = ⎜ -7 ⎟ + t · ⎜  3 ⎟ ,   t ∈ ℝ
⎝x₃⎠   ⎝  0 ⎠       ⎝  1 ⎠
```
 
Geometrisch eine Gerade im ℝ³: ein fester Punkt plus ein Richtungsvektor.
Für `t = 3` ergibt sich wieder `(1, 2, 3)` aus Fall A.
 
---
 
## 0.8 Rang statt Zeilenanzahl
 
Häufig gelesene Faustregeln zum Verhältnis von `n` (Variablen) und
`m` (Gleichungen):
 
| Verhältnis | Erwartung |
|---|---|
| `n = m` | in der Regel genau eine Lösung |
| `n < m` | überbestimmt, häufig unlösbar |
| `n > m` | `(n − m)`-parametrige Lösungsschar |
 
**Wichtige Einschränkung:** Diese Regeln gelten nur bei **linear unabhängigen
Zeilen**. Fall C in 0.7.3 hatte formal 3 Gleichungen und 3 Variablen, aber eine
redundante Zeile — es blieb trotzdem ein freier Parameter.
 
> Maßgeblich ist immer der **Rang**, nie die bloße Zeilenanzahl.
 
Ebenso gilt: Überbestimmt heißt nicht automatisch unlösbar. Eine zusätzliche
Gleichung, die mit den übrigen verträglich ist, verändert die Lösungsmenge
schlicht nicht.
 
---
 
## 0.9 Variante: Gauß-Jordan
 
Beim normalen Gauß wird nur **unterhalb** des Pivots eliminiert, danach folgt
Rückwärtseinsetzen.
 
Beim **Gauß-Jordan-Verfahren** wird zusätzlich **oberhalb** des Pivots
eliminiert, sodass in der Pivotspalte am Ende eine `1` und sonst nur Nullen
stehen:
 
```
Neue Pivotzeile = Alte Pivotzeile / Pivotelement
Neue Zeile      = Alte Zeile − (Koeffizient in Pivotspalte) · Neue Pivotzeile
```
 
Der zweite Schritt ist nichts anderes als Zeilenumformung Nr. 3 aus Abschnitt
0.3. Ergebnis ist die *reduzierte* Zeilenstufenform, in der die Lösung direkt in
der `b`-Spalte ablesbar ist — kein Rückwärtseinsetzen nötig.
 
Höherer Rechenaufwand, dafür tabellarisch schematisierbar. Diese Variante wird in
späteren Kapiteln benötigt.
 
---
 
## 0.10 Typische Fehlerquellen
 
| Fehler | Gegenmaßnahme |
|---|---|
| Vorzeichenfehler beim Subtrahieren | Bewusst als Addition von `(−2)·Pivotzeile` rechnen statt als Subtraktion |
| Pivot ist 0 | Zeilen tauschen; gibt es keine passende Zeile, rutscht die Stufe eine Spalte weiter |
| Rechenfehler bleibt unbemerkt | Probe in **allen** Ausgangsgleichungen, nicht nur in der zuletzt verwendeten |
| Falsche freie Variable gewählt | Frei sind genau die Spalten **ohne** Stufen-Pivot |
| Brüche verrechnet | Zeilen dürfen durchmultipliziert werden — sauber notieren statt im Kopf umformen |
 
---
 
## 0.11 Übungen
 
Bestimme jeweils die Lösungsmenge und ordne den Fall zu.
 
**(a)**
 
```
2x₁ +  x₂ = 8
 x₁ + 2x₂ = 6
```

<details>
  <summary>Lösung (a)</summary>

  Eindeutig lösbar: `(x₁, x₂) = (10/3, 4/3)`.
  Rang `r = 2 = n`, kein Widerspruch.

</details>
 
**(b)**
 
```
 x₁ + 2x₂ + 3x₃ = 4
2x₁ + 4x₂ + 6x₃ = 8
 x₁ +  x₂ +  x₃ = 2
```

<details>
  <summary>Lösung (b)</summary>

  Unendlich viele Lösungen. Zeile 2 ist das Doppelte von Zeile 1 und damit
  redundant, es bleibt ein freier Parameter:

  ```
  x₃ = t,   x₂ = 2 - 2t,   x₁ = t
  ```

</details>
 
**(c)**
 
```
x₁ + x₂      = 3
     x₂ + x₃ = 4
x₁      + x₃ = 5
x₁ + x₂ + x₃ = 7
```

<details>
  <summary>Lösung (c)</summary>

  **Keine Lösung — das System ist widersprüchlich (inkonsistent).**

  Addition der ersten drei Gleichungen ergibt:

  ```
  (x₁+x₂) + (x₂+x₃) + (x₁+x₃) = 3 + 4 + 5
  2(x₁ + x₂ + x₃) = 12
  x₁ + x₂ + x₃ = 6
  ```

  Gleichung (4) behauptet aber `x₁ + x₂ + x₃ = 7`. Das ist ein direkter Widerspruch
  zu den Gleichungen (1)–(3) → **keine Lösung**.

  In der Stufenform erschiene eine Zeile der Form `0 0 0 │ 1`, was `0 = 1` bedeutet.

</details>
 
---
 
## 0.12 Zusammenfassung
 
- Ein LGS wird als erweiterte Koeffizientenmatrix `(A | b)` notiert und mit drei
  erlaubten Zeilenumformungen bearbeitet.
- Der Gauß-Algorithmus bringt es in Zeilenstufenform; danach folgt
  Rückwärtseinsetzen.
- Drei Fälle: keine Lösung (Widerspruchszeile), genau eine Lösung (`r = n`),
  unendlich viele Lösungen (`r < n`, mit `n − r` Parametern).
- Entscheidend ist der Rang, nicht das Verhältnis von Zeilen zu Spalten.
- Die freien Parameter im Fall `r < n` sind der Spielraum, in dem später
  optimiert wird.


---
---


## 0.13 Weitere Übungen

Bestimme jeweils die vollständige Lösungsmenge und ordne den Fall zu
(genau eine Lösung / keine Lösung / unendlich viele Lösungen).
Bei unendlich vielen Lösungen: Parameterform angeben.

### Gruppe 1 — zwei Variablen

**(1)**

```
3x₁ - 2x₂ = 4
 x₁ + 4x₂ = 6
```

<details>
  <summary>Lösung (1)</summary>

  Zeilen tauschen, damit oben eine 1 steht:

  ```
  ⎛ 1   4 │ 6 ⎞
  ⎝ 3  -2 │ 4 ⎠   Z2 → Z2 − 3·Z1

  ⎛ 1    4 │   6 ⎞
  ⎝ 0  -14 │ -14 ⎠
  ```

  `-14x₂ = -14 → x₂ = 1`, dann `x₁ = 6 − 4 = 2`.

  **Lösung:** `(x₁, x₂) = (2, 1)`, Rang `r = 2 = n`.

</details>

**(2)**

```
 2x₁ - 4x₂ =  6
-3x₁ + 6x₂ =  5
```

<details>
  <summary>Lösung (2)</summary>

  ```
  ⎛  2  -4 │ 6 ⎞
  ⎝ -3   6 │ 5 ⎠   Z2 → Z2 + 1,5·Z1

  ⎛ 2  -4 │  6 ⎞
  ⎝ 0   0 │ 14 ⎠
  ```

  Widerspruchszeile `0 = 14`. Die linken Seiten sind Vielfache voneinander,
  die rechten Seiten passen nicht dazu. Zwei parallele Geraden.

  **Keine Lösung.**

</details>

**(3)**

```
  x₁ - 3x₂ =  2
-2x₁ + 6x₂ = -4
```

<details>
  <summary>Lösung (3)</summary>

  ```
  ⎛  1  -3 │  2 ⎞
  ⎝ -2   6 │ -4 ⎠   Z2 → Z2 + 2·Z1

  ⎛ 1  -3 │ 2 ⎞
  ⎝ 0   0 │ 0 ⎠
  ```

  Zeile 2 war exakt das `(−2)`-fache von Zeile 1 — keine neue Information.
  `r = 1 < 2 = n` → ein freier Parameter. Setze `x₂ = t`:

  ```
  ⎛x₁⎞   ⎛ 2 ⎞       ⎛ 3 ⎞
  ⎝x₂⎠ = ⎝ 0 ⎠ + t · ⎝ 1 ⎠ ,   t ∈ ℝ
  ```

  Beide Gleichungen beschreiben dieselbe Gerade. **Unendlich viele Lösungen.**

</details>

### Gruppe 2 — drei Variablen

**(4)**

```
2x₁ +  x₂ -  x₃ =  3
 x₁ -  x₂ + 2x₃ =  5
3x₁ + 2x₂ +  x₃ = 10
```

<details>
  <summary>Lösung (4)</summary>

  Zeile 2 nach oben tauschen (Pivot = 1 spart Brüche):

  ```
  ⎛ 1  -1   2 │  5 ⎞
  ⎜ 2   1  -1 │  3 ⎟   Z2 → Z2 − 2·Z1
  ⎝ 3   2   1 │ 10 ⎠   Z3 → Z3 − 3·Z1

  ⎛ 1  -1   2 │  5 ⎞
  ⎜ 0   3  -5 │ -7 ⎟
  ⎝ 0   5  -5 │ -5 ⎠   Z3 → Z3 / 5

  ⎛ 1  -1   2 │  5 ⎞
  ⎜ 0   3  -5 │ -7 ⎟
  ⎝ 0   1  -1 │ -1 ⎠   Z2 ↔ Z3 tauschen, dann weiter
  ```

  Aus der letzten Zeile: `x₂ = x₃ − 1`, eingesetzt in `3x₂ − 5x₃ = −7`
  ergibt `3x₃ − 3 − 5x₃ = −7 → x₃ = 2`.

  Dann `x₂ = 1` und `x₁ = 5 + 1 − 4 = 2`.

  **Lösung:** `(x₁, x₂, x₃) = (2, 1, 2)`, Rang `r = 3 = n`.

  Probe Zeile 3: `3·2 + 2·1 + 2 = 10` ✓

</details>

**(5)**

```
 x₁ + 2x₂ -  x₃ =  3
2x₁ + 3x₂ +  x₃ =  7
3x₁ + 5x₂        = 10
```

<details>
  <summary>Lösung (5)</summary>

  ```
  ⎛ 1   2  -1 │  3 ⎞
  ⎜ 2   3   1 │  7 ⎟   Z2 → Z2 − 2·Z1
  ⎝ 3   5   0 │ 10 ⎠   Z3 → Z3 − 3·Z1

  ⎛ 1   2  -1 │ 3 ⎞
  ⎜ 0  -1   3 │ 1 ⎟
  ⎝ 0  -1   3 │ 1 ⎠   Z3 → Z3 − Z2

  ⎛ 1   2  -1 │ 3 ⎞
  ⎜ 0  -1   3 │ 1 ⎟
  ⎝ 0   0   0 │ 0 ⎠
  ```

  Zeile 3 war die Summe der ersten beiden — redundant.
  `r = 2 < 3 = n` → ein Parameter. Setze `x₃ = t`:

  ```
  -x₂ + 3t = 1              →  x₂ = 3t - 1
  x₁ + 2(3t - 1) - t = 3    →  x₁ = 5 - 5t
  ```

  ```
  ⎛x₁⎞   ⎛  5 ⎞       ⎛ -5 ⎞
  ⎜x₂⎟ = ⎜ -1 ⎟ + t · ⎜  3 ⎟ ,   t ∈ ℝ
  ⎝x₃⎠   ⎝  0 ⎠       ⎝  1 ⎠
  ```

  Probe Zeile 2: `2(5−5t) + 3(3t−1) + t = 7` ✓  **Unendlich viele Lösungen.**

</details>

**(6)**

```
 x₁ +  x₂ + 2x₃ =  4
2x₁ -  x₂ +  x₃ =  1
4x₁ +  x₂ + 5x₃ = 12
```

<details>
  <summary>Lösung (6)</summary>

  ```
  ⎛ 1   1   2 │  4 ⎞
  ⎜ 2  -1   1 │  1 ⎟   Z2 → Z2 − 2·Z1
  ⎝ 4   1   5 │ 12 ⎠   Z3 → Z3 − 4·Z1

  ⎛ 1   1   2 │  4 ⎞
  ⎜ 0  -3  -3 │ -7 ⎟
  ⎝ 0  -3  -3 │ -4 ⎠   Z3 → Z3 − Z2

  ⎛ 1   1   2 │ 4 ⎞
  ⎜ 0  -3  -3 │-7 ⎟
  ⎝ 0   0   0 │ 3 ⎠
  ```

  Widerspruch `0 = 3`. Die Widerspruchszeile entsteht erst im letzten Schritt —
  deshalb immer vollständig eliminieren, bevor man das Ergebnis beurteilt.

  **Keine Lösung.**

</details>

### Gruppe 3 — Sonderformen

**(7) Homogenes System** (rechte Seite komplett Null)

```
 x₁ + 2x₂ + 3x₃ = 0
2x₁ +  x₂ + 3x₃ = 0
3x₁ + 3x₂ + 6x₃ = 0
```

*Zusatzfrage:* Warum kann ein homogenes System nie unlösbar sein?

<details>
  <summary>Lösung (7)</summary>

  ```
  ⎛ 1   2   3 │ 0 ⎞
  ⎜ 2   1   3 │ 0 ⎟   Z2 → Z2 − 2·Z1
  ⎝ 3   3   6 │ 0 ⎠   Z3 → Z3 − 3·Z1

  ⎛ 1   2   3 │ 0 ⎞
  ⎜ 0  -3  -3 │ 0 ⎟
  ⎝ 0  -3  -3 │ 0 ⎠   Z3 → Z3 − Z2

  ⎛ 1   2   3 │ 0 ⎞
  ⎜ 0  -3  -3 │ 0 ⎟
  ⎝ 0   0   0 │ 0 ⎠
  ```

  `r = 2 < 3 = n` → ein Parameter. Setze `x₃ = t`:

  ```
  -3x₂ - 3t = 0        →  x₂ = -t
  x₁ + 2(-t) + 3t = 0  →  x₁ = -t
  ```

  ```
  ⎛x₁⎞       ⎛ -1 ⎞
  ⎜x₂⎟ = t · ⎜ -1 ⎟ ,   t ∈ ℝ
  ⎝x₃⎠       ⎝  1 ⎠
  ```

  **Zusatzfrage:** Rechts stehen überall Nullen. Zeilenumformungen erzeugen
  daraus nur wieder Nullen — eine Widerspruchszeile `0 = c` mit `c ≠ 0` ist
  unmöglich. Außerdem ist `x = 0` immer eine (triviale) Lösung. Ein homogenes
  System hat also entweder nur die triviale Lösung oder unendlich viele — nie keine.

  **Unendlich viele Lösungen.**

</details>

**(8) Überbestimmt** — 4 Gleichungen, 3 Variablen

```
 x₁ + x₂ + x₃ = 6
 x₁ - x₂ + x₃ = 2
 x₁ + x₂ - x₃ = 0
2x₁ + x₂ + x₃ = 7
```

<details>
  <summary>Lösung (8)</summary>

  Direkte Kombination der ersten drei Zeilen:

  ```
  Z1 − Z2:  2x₂ = 4   →  x₂ = 2
  Z1 − Z3:  2x₃ = 6   →  x₃ = 3
  aus Z1:   x₁ = 6 − 2 − 3 = 1
  ```

  **Lösung:** `(x₁, x₂, x₃) = (1, 2, 3)`, Rang `r = 3 = n`.

  Kontrolle in Zeile 4: `2·1 + 2 + 3 = 7` ✓

  Das System ist überbestimmt, aber die vierte Zeile ist verträglich und liefert
  keine neue Information. Überbestimmt heißt nicht automatisch unlösbar.

</details>

**(9) Vier Variablen**

```
 x₁ +  x₂ +  x₃ +  x₄ =  4
 x₁ + 2x₂ + 3x₃ + 4x₄ = 10
2x₁ + 3x₂ + 4x₃ + 5x₄ = 14
```

<details>
  <summary>Lösung (9)</summary>

  ```
  ⎛ 1   1   1   1 │  4 ⎞
  ⎜ 1   2   3   4 │ 10 ⎟   Z2 → Z2 − Z1
  ⎝ 2   3   4   5 │ 14 ⎠   Z3 → Z3 − 2·Z1

  ⎛ 1   1   1   1 │ 4 ⎞
  ⎜ 0   1   2   3 │ 6 ⎟
  ⎝ 0   1   2   3 │ 6 ⎠   Z3 → Z3 − Z2

  ⎛ 1   1   1   1 │ 4 ⎞
  ⎜ 0   1   2   3 │ 6 ⎟
  ⎝ 0   0   0   0 │ 0 ⎠
  ```

  Stufen-Pivots in Spalte 1 und 2 → `x₃` und `x₄` sind frei.
  `r = 2`, `n = 4` → `n − r = 2` Parameter. Setze `x₃ = s`, `x₄ = t`:

  ```
  x₂ = 6 - 2s - 3t
  x₁ = -2 + s + 2t
  ```

  ```
  ⎛x₁⎞   ⎛ -2 ⎞       ⎛  1 ⎞       ⎛  2 ⎞
  ⎜x₂⎟ = ⎜  6 ⎟ + s · ⎜ -2 ⎟ + t · ⎜ -3 ⎟ ,   s, t ∈ ℝ
  ⎜x₃⎟   ⎜  0 ⎟       ⎜  1 ⎟       ⎜  0 ⎟
  ⎝x₄⎠   ⎝  0 ⎠       ⎝  0 ⎠       ⎝  1 ⎠
  ```

  Probe Zeile 2 mit `s = t = 0`: `-2 + 12 = 10` ✓  **Unendlich viele Lösungen (zwei Parameter).**

</details>

**(10) Fallunterscheidung mit Parametern**

Für welche Werte von `a` und `b` hat das System genau eine, keine bzw.
unendlich viele Lösungen?

```
 x₁ + 2x₂ = 3
2x₁ + a·x₂ = b
```

<details>
  <summary>Lösung (10)</summary>

  ```
  ⎛ 1   2 │ 3 ⎞
  ⎝ 2   a │ b ⎠   Z2 → Z2 − 2·Z1

  ⎛ 1     2   │   3   ⎞
  ⎝ 0   a - 4 │ b - 6 ⎠
  ```

  Alles hängt an der letzten Zeile `(a − 4)·x₂ = b − 6`:

  | Bedingung | Fall | Lösung |
  |---|---|---|
  | `a ≠ 4` (b beliebig) | genau eine Lösung | `x₂ = (b−6)/(a−4)`, `x₁ = 3 − 2x₂` |
  | `a = 4` und `b = 6` | unendlich viele | `x₂ = t`, `x₁ = 3 − 2t` |
  | `a = 4` und `b ≠ 6` | keine Lösung | Widerspruch `0 = b − 6` |

  Ob ein Widerspruch entstehen *kann*, entscheidet die linke Seite (`a`).
  Ob er tatsächlich entsteht, entscheidet die rechte Seite (`b`). Das ist genau
  der Unterschied zwischen `Rang(A)` und `Rang(A|b)`.

</details>