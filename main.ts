input.onButtonPressed(Button.A, function () {
    if (radio_group == 9) {
        radio_group = 0
    } else {
        radio_group += 1
    }
    remote.setGroup(radio_group)
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == control.deviceSerialNumber()) {
        is_master = true
    } else {
        is_master = false
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
let is_master = false
let radio_group = 0
radio.setTransmitSerialNumber(true)
radio_group = 0
is_master = false
basic.forever(function () {
    remote.remoteControl()
    if (is_master) {
        basic.showString("M")
    } else {
        basic.showNumber(radio_group)
    }
})
