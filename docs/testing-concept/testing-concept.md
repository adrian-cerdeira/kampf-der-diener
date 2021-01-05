# Testkonzept

## Testvorgehen

Das Karma Testing Tool verwendet Jasmine, was ein JavaScript-Testframework ist,
dass eine Softwareentwicklungspraxis namens Behavior-Driven Development, kurz BDD, unterstützt.
Es ist eine spezielle Variante der testgetriebenen Entwicklung (TDD).

Jasmine und BDD im Allgemeinen versuchen, Tests in einem für Menschen lesbaren Format zu beschreiben,
damit nicht-technische Personen verstehen können, was getestet wird.
Selbst wenn Sie technische Lesetests im BDD-Format durchführen, ist es viel einfacher zu verstehen, was los ist.

Hier ein Beispiel eines Funktionstest:

```javascript
describe('Hello world', () => { (1)
  it('says hello', () => { (2)
    expect(helloWorld()) (3)
        .toEqual('Hello world!'); (4)
  });
});
```

## Testbeschreibung

1. `describe` Funktion definiert die komplette Testumgebung, welche Sammlung getestet wird
2. `it` Funktion beschriebt einen einzelnen Testspezifikation
3. `expect` Funktion erwartet den eigentlichen Lösung und Ausdruck des Tests
4. `toEqual` Funktion definiert die Lösung des erwarteten Tests
5. `beforeEach` Funktion wird einmalig definiert, dort werden die Testvorbereitung (z.B. Klasseninitialisierung) definiert

## Testfälle

TODO MARIO noch

## Start Testing

> Siehe [CONTRIBUTING.md](../CONTRIBUTING.md) bei Abschnitt **Start Test**.
