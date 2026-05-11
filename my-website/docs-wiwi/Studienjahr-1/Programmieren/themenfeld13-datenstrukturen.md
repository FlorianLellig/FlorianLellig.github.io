# Themenfeld 13 - Datenstrukturen/Algorithmen

Bei Datenstrukturen handelt es sich grundsätzlich um spezielle Formate zum Organisieren, Speichern und Verwalten von Daten in einem Computer. Sie zielen i.d.R. auf einen effizienten Zugriff und Modifikation ab.

## Listen

### ArrayListen
Arraylisten wurden bereits im Kapitel 3 (Erstes Semester) thematisiert.

### Einfach Verkettete Listen (Linked List)

#### Grundlagen

Eine verkettete Liste ist eine Liste bestehend aus mehreren unabhängig voneinander existierenden Elementen, sogenannten Nodes, die lediglich mithilfe von Verknüpfungen in Beziehung zueinander gesetzt werden. 

![Picture](/documents/Wirtschaftsinformatik/Studienjahr-1/Programmieren-2/linkedlist.svg)

#### Grundgerüst mit Node

```java
package EigeneVersuche.ForGithub;

public class MyLinkedList<E> {

    Node<E> firstNode = null;
    int size = 0;


    private class Node<E> {
        E value = null;
        Node<E> nextNode = null;

        Node(E value) {
            this.value = value;
        }

        void setNextNode(Node<E> nextNode) {
            this.nextNode = nextNode;
        }

        Node<E> getNextNode() {
            return nextNode;
        }

        E getValue()  {
            return this.value;
        }

    }
}
```

:::tip
Die Node stellt das Fundament der Linked-List dar - ohne sie würde das Prinzip mit diesem Ansatz nicht aufgehen.
:::

#### Hinzufügen einer `printList`-Methode:
```java
    void printList() {
        Node<E> currentNode = firstNode;
        while (currentNode != null) {
            System.out.print(currentNode.getValue() + ", ");
            currentNode = currentNode.getNextNode();
        }
        System.out.println();
    }
```

#### Hinzufügen einer `add`-Methode
```java
    void add(E value) {
        if (firstNode == null) {
            this.firstNode = new Node<E>(value);
            this.size += 1;
            return;
        }
        Node<E> currentNode = firstNode;
        while (currentNode.getNextNode() != null) {
            currentNode = currentNode.getNextNode();
        }
        this.size += 1;
        currentNode.setNextNode(new Node<E>(value));
    }
```

#### Hinzufügen einer `remove`-Methode
```java
    boolean remove(E value) {
        Node<E> currentNode = firstNode;
        if (currentNode == null) {
            return false;
        }
        if (currentNode.getValue().equals(value)) {
            firstNode = currentNode.getNextNode();
            size -= 1;
            return true;
        }

        Node<E> secondNode = currentNode.getNextNode();

        while (secondNode != null) {
            if (secondNode.getValue().equals(value)) {
                currentNode.setNextNode(secondNode.getNextNode());
                size -= 1;
                return true;
            }
            currentNode = secondNode;
            secondNode = secondNode.getNextNode();
        }
        return false;
    }
```

#### Hinzufügen einer `getSize`-Methode
```java
    int getSize() {
        return this.size;
    }
```

### Doppelt verkettete Listen (Double-Linked List)

### Queue
:::note
Es gibt mehrere Möglichkeiten eine Queue umzusetzen. Im Folgenden wird als Grundlage die Linked-List herangezogen
:::
