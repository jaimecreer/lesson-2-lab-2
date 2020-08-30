function drawTriangle () {
    for (let row = 0; row <= 4; row++) {
        for (let column = 0; column <= row; column++) {
            led.plot(column, row)
        }
    }
}
function drawDiagonal2 () {
    for (let row = 0; row <= 4; row++) {
        led.plot(4 - row, row)
    }
}
function drawRow (row: number) {
    for (let column = 0; column <= 4; column++) {
        led.plot(column, row)
    }
}
function drawChecker () {
    for (let row = 0; row <= 4; row++) {
        for (let column = 0; column <= 4; column++) {
            if ((row + column) % 2 == 0) {
                led.plot(column, row)
            }
        }
    }
}
function drawTriangleV2 () {
    for (let row = 0; row <= 4; row++) {
        for (let column = 0; column <= 4; column++) {
            if (row + column <= 4) {
                led.plot(column, row)
            }
        }
    }
}
function drawSq () {
    for (let row = 0; row <= 4; row++) {
        for (let column = 0; column <= 4; column++) {
            led.plot(column, row)
        }
    }
}
function drawDiagonal () {
    for (let row = 0; row <= 4; row++) {
        led.plot(row, row)
    }
}
drawChecker()
