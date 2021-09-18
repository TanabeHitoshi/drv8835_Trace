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
function 右モーター (スピード: string) {
    右スピード = スピード
    if (左スピード >= 0) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
}
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
})
