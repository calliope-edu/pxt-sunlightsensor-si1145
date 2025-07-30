You will find the English ReadMe at the end of the document.

# SI1145 Sonnenlichtsensor MakeCode-Erweiterung

Eine MakeCode-Erweiterung zum Auslesen von UV-, sichtbaren und Infrarot-Lichtwerten des **SI1145 Sonnenlichtsensors** über den Grove-Konnektor A0 (I2C) am Calliope mini.

---

## 🧩 Installation

So fügst du die Erweiterung in MakeCode hinzu:

1. Öffne dein MakeCode-Projekt ([MakeCode Editor](https://makecode.calliope.cc/)).
2. Klicke auf das Zahnrad-Symbol ⚙️ → **Erweiterungen**.
3. Füge folgende URL ein und wähle die Erweiterung aus:  
   [`https://github.com/calliope-edu/pxt-sunlightsensor-si1145`](https://github.com/calliope-edu/pxt-sunlightsensor-si1145)

---

## 🔌 Hardware-Anschluss

Der **SI1145** Sensor kommuniziert über I2C. Am Calliope mini kann dafür der **A0 Grove-Anschluss** verwendet werden.

| SI1145 Pin | Anschluss am Calliope mini   |
|------------|------------------------------|
| VIN        | 3.3V / 5V                    |
| GND        | GND                          |
| SDA        | SDA                          |
| SCL        | SCL                          |

> **Hinweis:** Stelle sicher, dass dein Sensormodul für 3,3 V oder 5 V geeignet ist – abhängig von der Spannung deines Boards.

---

## 🧪 Beispielcode (Blöcke)

```blocks
basic.forever(function () {
    si1145.updateData()
    serial.writeLine("UV-Index anzeigen: " + si1145.readUV())
    serial.writeLine("Lichtstärke anzeigen: " + si1145.readVisible())
    serial.writeLine("Infrarotstärke anzeigen: " + si1145.readIR())
    basic.pause(1000)
})
```



# SI1145 Sunlight Sensor MakeCode Extension

A MakeCode extension for reading UV, visible, and IR light levels from the **SI1145 sunlight sensor** using Grove connector A0 (I2C) on the Calliope mini.

---

## 🧩 Installation

To add this extension in MakeCode:

1. Open your MakeCode project ([MakeCode Editor](https://makecode.calliope.cc/)).
2. Click on the gear icon ⚙️ → **Extensions**.
3. Paste the following URL and select the extension:  
   `[https://github.com/calliope-edu/pxt-sunlightsensor-si1145](https://github.com/calliope-edu/pxt-sunlightsensor-si1145)`

---

## 🔌 Hardware Connection

The **SI1145** sensor communicates via I2C. On the Calliope mini, you can use the **A0 Grove connector**.

| SI1145 Pin | Calliope mini Connection     |
|------------|------------------------------|
| VIN        | 3.3V / 5V                    |
| GND        | GND                          |
| SDA        | SDA                          |
| SCL        | SCL                          |

> **Note:** Make sure your sensor module is 3.3V or 5V tolerant depending on your board's voltage level.

---

## 🧪 Example Code (Blocks)

```blocks
basic.forever(function () {
    si1145.updateData()
    serial.writeLine("Show ultraviolet index: " + si1145.readUV())
    serial.writeLine("Show light intensity: " + si1145.readVisible())
    serial.writeLine("Show infrared intensity: " + si1145.readIR())
    basic.pause(1000)
})
```

## License

MIT
