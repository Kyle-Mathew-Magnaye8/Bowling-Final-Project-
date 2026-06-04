/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle and DJ
 * Created on: Jun 2026
 * This program will move the conveyor belt for exactly 4 seconds when Button A is pressed.
*/

// Setup
basic.showIcon(IconNames.Happy)
robotbit.MotorStopAll()

// button a
input.onButtonPressed(Button.A, function () {
    // Show that it is running
    basic.showIcon(IconNames.Surprised)

    // Starts the conveyor belt to move forward
    robotbit.StpCarMove(40, 48)

    // Wait for 4 second while it is moves
    basic.pause(4000)

    // Stops the conveyor belt completeler
    robotbit.MotorStopAll()

    // Reset icon
    basic.showIcon(IconNames.Happy)
})
