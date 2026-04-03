# Interessante Anekdoten

Interessante Dinge, die in der Vorlesung hängengeblieben sind und ggf. interessant sein könnten (ich find sie cool).

## _"A philosophy of Software Design" ~ John Ousterhout_ 
Ein Buch was Greg uns empfohlen hat

## Silver Bullet
Die Annahme, dass ein verwendetes Mittel alle Probleme der Softwareentwicklung löst
- Beispiel: KI, Objektorientierte Programmierung

## Typen von Komplexität

### Essential Complexity
...ist die unvermeidbare Komplexität, die durch das eigentliche Thema und deren Problemstellung an sich entsteht. Sie ist oft nicht vermeidbar.
- Beispiel: Softwareentwicklung im betriebswirtschaftlichen Umfeld erfordert betriebswirtschaftliches Wissen - das ist die Essential complexity

### Accidential Complexity
...ist die vermeidbare Komplexität, die durch zu viele Konzepte auf zu kleinem Raum entsteht. Sie lässt sich in der Regel vermeiden. 
- Entstehung durch Entscheidungen, die ein Problem so überladen dass es größer wird 
    - Overengineering
- Lösungen, um dies zu vermeiden:
    1. **DRY**-Prinzip
        - "Don't repeat yourself"
    2. **Zergliedern** eines Projektes in verschiedene Problembereiche
        - Oftmals macht es Sinn, nach thematischer Problemdomäne zu gliedern
    3. **Sinnvolle Tools wählen**, die den Anforderungen entsprechen
    4. **Big ball of Mud** vermeiden
        - Komplexität, die sich im Laufe der Zeit entwickelt
        - Problemstellungen, die den _Big Ball of Mud_ vergrößern:
            - **Change Amplification** (Kleine Änderungen erfordern viele Anpassungen an vielen Orten)
            - **Cognitive Load**
            - **Unknown unknowns** (Man weiß nicht über Konsequenzen oder Wechselwirkungen bescheit)
        - Vermeidung mit **Refactoring** (Vereinfachung)
        