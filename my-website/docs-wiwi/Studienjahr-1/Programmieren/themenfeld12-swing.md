# Themenfeld 12 - Swing

Java Swing ist ein GUI-Toolkit, mit dem sich grafische Benutzeroberflächen für Desktop-Anwendungen erstellen lassen. Es ist Teil der Java Foundation Classes (JFC) und bietet eine umfangreiche Sammlung von Komponenten wie Buttons, Textfelder, Menüs, etc.

## Abgrenzung zwischen Swing und AWT

:::note
Swing basiert in wensentlichen Teilen auf AWT - daher ist die Einordunung bzw. Abgrenzung wichtig
:::

- **AWT** (Abstract Window Toolkit) ist der **Vorgänger von Swing**
    - Arbeitet ausschließlich mit **plattformspezifischen Implementierungen** der AWT-Klassen
        - D.h. sind **nicht direkt in Java implementiert**
        - AWT-Klassen **arbeiten dabei mit Peer-Klassen**, d.h. mit einem Partner auf Betriebssystemseite
        - Vorteil: **Sehr schnell**, da nicht in JVM ausgeführt
        - Nachteil: **Schlechtere Plattformunabhängigkeit**
    - Implementierungsform wird als Arbeiten mit **"Heavyweight components"** bezeichnet

- **Swing** arbeitet mit **"Lightweight components"**, d.h.
    - **Keine Peer-Klassen** auf Betriebssystemseite
    - Es werden **nur sehr wenige plattformspezifische GUI-Ressourcen** verwendet
    - Vorteil: deutlich **bessere Plattformunabhängigkeit**
    - Nachteil: **Langsamer als AWT**, da in JVM ausgeführt

:::tip
Trotz alledem basiert Swing in großen Teilen auf Klassen von AWT, die zur Vererbung genutzt werden:

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/Programmieren-2/swing.png)
:::

## JFrame

:::warning
Auch wenn der Name _JFrame_ eher mit dem eines Rahmens zur Anordnung bzw. Gruppierung assoziiert wird (wie es in anderen GUI-Toolkits üblich ist), wird die Klasse JFrame tatsächlich zum erzeugen etc. von Fenstern verwendet.
:::

### Aufbau eines JFrames

Ein Swing-Fenster mit JFrame besteht aus verschiedenen Ebenen:
1. **Root-Pane (hinterste Ebene)**: Hauptkomponente eines JFrames
2. **Layered Pane**
3. **Content Pane**: Neue Komponenten werden der Content Pane zugeordnet
4. **Glass Pane**

### Fenster erzeugen

```java
public class TestWindow extends JFrame {
    TestWindow() {
        super("Mein Fenster");          // Titel festlegen
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);    // Definieren, was beim Schließen passiert
        this.setVisible(true);                                  // Für den User als Sichtbar festlegen
        this.setSize(400, 300);                                 // Größe des Fensters festlegen
            // alternativ möglich mit setBounds(x, y, width, height)
            // pack() passt Fenstergröße an den Kontent an
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(()->{                        // Wird benötigt um das Fenster zu starten und über es zu mainloopen
            new LogonSwingWindow();
        });
    }
}
```

:::tip
in `this.setDefaultCloseOperation` können alternativ auch noch andere Konstanten übergeben werden:
- `WindowConstants.DO_NOTHING_ON_CLOSE` löst lediglich das Close-Event aus
- `WindowConstants.HIDE_ON_CLOSE` versteckt das Fenster
- `WindowConstants.DISPOSE_ON_CLOSE` zerstört den Frame
- `WindowConstants.EXIT_ON_CLOSE` beendet die Applikation
:::

## JPanel

:::note
JPanel beschreibt einen in anderen Sprachen typischerweise als Frame bezeichneten Container, der mehrere Elemente beinhalten kann.
:::

Panels stellen das Fundament des Layoutmanagers dar - daher sind sie unverzichtbar wenn man mit diesen arbeitet.

## Layoutmanager

Layout ermöglichen es, die konkrete Anordnung von Elementen eines Containers nach bestemmten Verfahren festzulegen und zu definieren. Die Prinzipien des Swing-Layoutmanagers lassen sich auf viele andere GUI Toolkits übertragen und wird z.B. auch in QT (mit z.B. pyQT verwendet).

Damit die korrekte Anordnung von Elementen funktioniert, muss man die Layoutmanager jeweils entweder einem JPanel oder dem "Root-Fenster" zuordnen.

Swing stellt mehrere verschiedene Layoutmanager zur Verfügung. Im Folgenden werden drei wesentliche davon vergestellt:

### FlowLayout
Das FlowLayout ermöglicht die Anordnung von Elementen von **links nach rechts**

<img src="/documents/Wirtschaftsinformatik/Studienjahr-1/Programmieren-2/swingFlowLayout.png" alt="Picture" width="50%" />

```java
public class FlowLayoutExample extends JFrame {

    FlowLayoutExample(){
        super("FlowLayout Example");

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
        this.setSize(300, 200);

        this.setLayout(new FlowLayout(FlowLayout.CENTER));

        this.add(new JLabel("Links"));
        this.add(new JLabel("Mitte"));
        this.add(new JLabel("Rechts"));

    }

    static void main(String[] args) {
        SwingUtilities.invokeLater(()->{
            new FlowLayoutExample();
        });
    }
}
```
:::tip
`this.setLayout(new FlowLayout(FlowLayout:CENTER));` gibt das Layout an.
- `new FlowLayout()` erzeugt das Layout und übergibt es dem übergeordneten Content Pane.
- `FlowLayout.CENTER` stellt ein Enum dar, was Information darüber gibt, wo sich die Inhalte anordnen sollen:
    - `FlowLayout.LEADING` Orientierung am Anfang der Leserichtung (gut im internationalen Kontext)
    - `FlowLayout.CENTER` Orientierung in der Mitte
    - `FlowLayout.TRAILING` Orientierung am Ende der Leserichtung (gut im internationalen Kontext)
    - `FlowLayout.LEFT` Orientierung Links
    - `FlowLayout.RIGHT` Orientierung Rechts
:::

### Border Layout
Das Border Leayout ermöglicht die Anordnung in 5 verschiedenen Bereichen, orientiert nach Himmelsrichtungen (NORTH, EAST, SOUTH, WEST und CENTER).

<img src="/documents/Wirtschaftsinformatik/Studienjahr-1/Programmieren-2/swingBorderLayout.png" alt="Picture" width="50%" />

```java
public class BorderLayoutExample extends JFrame {

    BorderLayoutExample() {
        super("BorderLayout Example");

        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
        this.setSize(300, 300);

        this.setLayout(new BorderLayout());

        this.add(new JLabel("North", SwingConstants.CENTER), BorderLayout.NORTH);   // SwingConstants.CENTER wird benötigt um Text mittig auszurichtigen
        this.add(new JLabel("East"), BorderLayout.EAST);
        this.add(new JLabel("South", SwingConstants.CENTER), BorderLayout.SOUTH);   // SwingConstants.CENTER wird benötigt um Text mittig auszurichtigen
        this.add(new JLabel("West"), BorderLayout.WEST);
        this.add(new JLabel("Center", SwingConstants.CENTER), BorderLayout.CENTER); // SwingConstants.CENTER wird benötigt um Text mittig auszurichtigen
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(()->{
            new BorderLayoutExample();
        });
    }
}
```

### Grid Layout
Grid ermöglicht das Anordnen Elementen in Zeilen und Spalten von links nach Rechts ähnlich zu einer Tabelle.

<img src="/documents/Wirtschaftsinformatik/Studienjahr-1/Programmieren-2/swingGridLayout.png" alt="Picture" width="50%" />

```java
public class GridLayoutExample extends JFrame {

    GridLayoutExample() {
        super("GridLayout Example");
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
        this.setSize(300,200);

        this.setLayout(new GridLayout(3, 2));

        this.add(new JLabel("Number 1"));
        this.add(new JLabel("Number 2"));
        this.add(new JLabel("Number 3"));
        this.add(new JLabel("Number 4"));
        this.add(new JLabel("Number 5"));
        this.add(new JLabel("Number 6"));
        //this.add(new JLabel("Number 7??"));
    }

    public static void main (String[] args) {
        SwingUtilities.invokeLater(()->{
            new GridLayoutExample();
        });
    }
}
```

:::warning
Werden mehr Elemente hinzugefügt als beim Layout erstellen festgelegt wurde (Elementanzahl > Reihenanzahl x Spaltenanzahl), dann öffnet sich standardmäßig eine neue Reihe.
:::