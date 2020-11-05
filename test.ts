basic.forever(function () {
    serial.writeLine("" + (SI1145.readInfraRed()))
    serial.writeLine("" + (SI1145.readLight()))
    serial.writeLine("" + (SI1145.readUltraVioletIndex()))
    basic.pause(500)
})
