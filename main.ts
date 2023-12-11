input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        # # . . .
        # . # . .
        # # . . .
        # . # . .
        # # . . .
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        `)
})
for (let index = 0; index < 2; index++) {
    music.playMelody("B F G F G A B C5 ", 125)
    basic.showLeds(`
        # # . # #
        # . . # .
        . . . . .
        # . . . #
        . # # # .
        `)
}
