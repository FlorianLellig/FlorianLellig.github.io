# 1.2.1 - Einstieg

Stellen wir uns vor, wir versuchen ein Programm zu schreiben, welches darauf abzielt, handschriftlich geschriebene Zahlen innerhalb eines dafür vorgesehenen Feldes zu erkennen. 
Dies wirkt auf den ersten Blick vielleicht wie eine einfache Aufgabe, jedoch wird man schnell beim Implementierungsprozess feststellen müssen, dass die praktische Umsetzung eines solchen Algorithmus mit herkömmlicher deterministischer Programmierweise durchaus eine Herausforderung darstellt und unter umständen nicht nachhaltig gelöst werden kann.

Um nun trotzdem in der Lage zu sein, handschriftlich festgehaltene Texte in maschinell verarbeitbaren Output umzuwandeln wurde sich in wesentlichen Teilen an den durch die Natur über Jahrtausende entwickelten Ausätzen und Herangehensweisen orientiert - dem menschlichen Gehirn.

## Der biologische Hintergrund - Wie verarbeiten Menschen (visuelle) Reize?
Die meisten Menschen können, ohne direkte Herausforderung, erkennen, ob es sich um was für eine Zahl es sich bei handschriftlich geschriebenen Werten handelt - selbst wenn diese unleserlich geschrieben ist. Grund dafür ist der sogenannte visuelle Kortex des menschlichen Gehirns, der mit über 200 Millionen Kortex-Neuronen ausgestattet ist. Diese Kortex-Neuronen sind dabei Milliardenfach verbunden - immer repräsentativ um die jeweils aufgenommenen Reize des Auges weiter zu verarbeiten. Eine solche Verkettung von Neuronen wird als neuronales Netz bezeichnet.

## Perceptrons - das "veraltete" artificial Neuron

Bei Perceptrons handelt es sich im wesentlichen um _artificial Neurons (künstliche Neuronen)_, entwickelt durch den amerikanischen Psychologen [Frank Rosenblatt](https://en.wikipedia.org/wiki/Frank_Rosenblatt) in den 1950er bis 1960er Jahren. Obwohl das Modell als _artificial Neuron_ oft als veraltet gilt und in gängier Praxis oft durch das sogenannte _Sigmoid Neuron_ abgelößt wurde, stellt es einen guten Einstieg in das Thema dar.

![Picture](/documents/artificialIntelligence/perceptrons.png)

Der auf dem Beispiel gezeigte Perceptron besteht aus drei Inputs: $x_1$, $x_2$ und $x_3$ - in der Realität kann es allerdings auch aus deutlich mehr Inputs bestehen (Auch weniger Inputs sind möglich).

Um die einzelnen Inputs nach Wichtigkeit zu bewerten, führte Rosenblatt sogenannte _weights_ (dt. Gewichte) an den jeweiligen Pfeilen zum Perceptron ein, um diesen eine Wichtigkeit zuzuweisen ($w_1, w_2, w_3, ...$). 

Um nun den Wert des eigentlichen Perceptrons zu bestimmen, führte er folgenden algebraischen Ansatz ein:

$$
\text{output} = \begin{cases} 0 & \text{if } \sum_j w_j x_j \leq \text{threshold} \\ 1 & \text{if } \sum_j w_j x_j > \text{threshold} \end{cases}
$$

:::tip
_threshold_ (dt. Schwelle) ist eine Art "magischer Kipppunkt", bei dem der Output-Wert des Perceptrons von 1 zu 0 oder von 0 zu 1 umschwingt. 
:::