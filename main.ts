let col = 0
let row = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() == 128) {
            row = randint(0, 4)
            col = randint(0, 10)
        }
    }
    if (led.point(col, row)) {
        led.unplot(0, 0)
        led.plot(col + 1, row)
    }
})
