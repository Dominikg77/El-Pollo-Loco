let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    canvas = document.getElementById(`canvas`);
    world = new World(canvas, keyboard);

    console.log(`My Character is`, world.character);

}

document.addEventListener("keydown", (event) => {
    if (event.keyCode == 39) {
        keyboard.Right = true;
    }
    if (event.keyCode == 37) {
        keyboard.Left = true;
    }

    if (event.keyCode == 38) {
        keyboard.Up = true;
    }
    if (event.keyCode == 40) {
        keyboard.Down = true;
    }
    if (event.keyCode == 32) {
        keyboard.Space = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.keyCode == 39) {
        keyboard.Right = false;
    }
    if (event.keyCode == 37) {
        keyboard.Left = false;
    }

    if (event.keyCode == 38) {
        keyboard.Up = false;
    }
    if (event.keyCode == 40) {
        keyboard.Down = false;
    }
    if (event.keyCode == 32) {
        keyboard.Space = false;
    }
});