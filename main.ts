let 左スピード = 0
let 右スピード = 0
function 左モーター (スピード: number) {
    左スピード = スピード
    if (左スピード >= 0) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    // 正転のリミット
    if (左スピード > 1023) {
        左スピード = 1023
    }
    // 逆転のリミット
    if (左スピード < -1023) {
        左スピード = -1023
    }
    // ブレーキ
    if (左スピード == 0) {
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else {
        pins.analogWritePin(AnalogPin.P15, Math.abs(左スピード))
    }
}
function 右モーター (スビード: number) {
    右スピード = スビード
    if (右スピード >= 0) {
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
    // 正転のリミット
    if (右スピード > 1023) {
        右スピード = 1023
    }
    // 逆転のリミット
    if (右スピード < -1023) {
        右スピード = -1023
    }
    // ブレーキ
    if (右スピード == 0) {
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        pins.analogWritePin(AnalogPin.P13, Math.abs(右スピード))
    }
}
basic.forever(function () {
    serial.writeValue("x", sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.MicroSeconds
    ))
    basic.pause(1000)
})
