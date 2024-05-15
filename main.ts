input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Fahren = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Fahren = 0
})
let JoystickY = 0
let JoystickX = 0
let Fahren = 0
radio.setGroup(1)
basic.forever(function () {
    JoystickX = pins.analogReadPin(AnalogPin.C16)
    JoystickY = pins.analogReadPin(AnalogPin.C17)
    JoystickX = Math.round(Math.map(JoystickX, 1, 1023, -100, 100))
    JoystickY = Math.round(Math.map(JoystickY, 1, 1023, 100, -100))
    radio.sendValue("G", JoystickX)
    radio.sendValue("R", JoystickY * -1)
    radio.sendValue("F", Fahren)
})
