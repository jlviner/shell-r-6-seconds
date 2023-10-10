input.onButtonPressed(Button.A, function () {
    StartTime = input.runningTime()
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    StopTime = input.runningTime()
    basic.showIcon(IconNames.No)
    basic.showNumber((StopTime - StartTime) / 1000 - 6)
})
let StopTime = 0
let StartTime = 0
basic.showIcon(IconNames.Happy)
