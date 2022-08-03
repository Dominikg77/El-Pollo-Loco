/**
 * This function is used to displays correctly in the browser Opera.
 */

function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerHeight < 480) {
            newHeight = window.innerHeight;
            document.getElementById('canvas').style.height = `${newHeight}px`;
        }
    } else {
        document.getElementById('canvas').style.height = `100%`;
    }
}

let canvas;
let world;
let keyboard = new Keyboard();
let playMusic1 = new Audio('audio/music1.mp3');
let playMusic2 = new Audio('audio/music2.mp3');
let musicOn = false;


/**
 * This function is used to start the game.
 */
function init() {
    canvas = document.getElementById('canvas');
    initlevel();
    world = new World(canvas, keyboard);
    start();
}


/**
 * This function is used to show the canvas and remove the startscreen.
 */
function start() {
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('btn').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('left').classList.remove('d-none');
    document.getElementById('right').classList.remove('d-none');
    document.getElementById('jump').classList.remove('d-none');
    document.getElementById('throw').classList.remove('d-none');
}


/**
 * This function is used to toggle the infobox.
 */
function info() {
    document.getElementById('infoBox').classList.toggle('d-none');
}


/**
 * This function is used to track which keys are pressed.
 */
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});


/**
 * This function is used to track which keys are released.
 */
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});


/**
 * This function is used to track the walk-left button on mobile screen.
 */
function touchDownLeft() {
    keyboard.LEFT = true;
}


/**
 * This function is used to track the release of the walk-left button on mobile screen.
 */
function touchUpLeft() {
    keyboard.LEFT = false;
}


/**
 * This function is used to track the walk-right button on mobile screen.
 */
function touchDownRight() {
    keyboard.RIGHT = true;
}


/**
 * This function is used to track the release of the walk-right button on mobile screen.
 */
function touchUpRight() {
    keyboard.RIGHT = false;
}


/**
 * This function is used to track the jump button on mobile screen.
 */
function touchDownJump() {
    keyboard.UP = true;
}


/**
 * This function is used to track the release of the jump button on mobile screen.
 */
function touchUpJump() {
    keyboard.UP = false;
}


/**
 * This function is used to track the throw-bottle button on mobile screen.
 */
function touchDownThrow() {
    keyboard.SPACE = true;
}


/**
 * This function is used to track the release of the throw-bottle button on mobile screen.
 */
function touchUpThrow() {
    keyboard.SPACE = false;
}


/**
 * This function is used to toggle the music 1.
 */
function music1() {
    if (musicOn == false) {
        musicOn = true;
    } else {
        musicOn = false;
    }
    playMusicFunction1();
}


/**
 * This function is used to toggle the music 2.
 */
function music2() {
    if (musicOn == false) {
        musicOn = true;
    } else {
        musicOn = false;
    }
    playMusicFunction2();
}


/**
 * This function is used to play the music 1.
 */
function playMusicFunction1() {
    if (musicOn == true) {
        playMusic1.play();
    }
    if (musicOn == false) {
        playMusic1.pause();
    }
}


/**
 * This function is used to play the music 2.
 */
function playMusicFunction2() {
    if (musicOn == true) {
        playMusic2.play();
    }
    if (musicOn == false) {
        playMusic2.pause();
    }
}