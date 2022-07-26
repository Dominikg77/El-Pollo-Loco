let canvas;
let world;
let keyboard = new Keyboard();
let playMusic1 = new Audio('audio/music1.mp3');
playMusic1.volume = 0.3;
let playMusic2 = new Audio('audio/music2.mp3');
playMusic2.volume = 0.3;
let musicOn = false;


function init() {
    canvas = document.getElementById(`canvas`);
    world = new World(canvas, keyboard);

    document.getElementById(`startBtn`).classList.remove(`trans`);
    document.getElementById(`startBtn`).classList.add(`d-none`);
    document.getElementById('start_end_screen').classList.add('gameplaying');


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
    if (event.keyCode == 68) {
        keyboard.D = true;
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
    if (event.keyCode == 68) {
        keyboard.D = false;
    }
});



function music1() {
    if (musicOn == false) {
        musicOn = true;
    } else {
        musicOn = false;
    }
    playMusicFunction1();
}



function music2() {
    if (musicOn == false) {
        musicOn = true;
    } else {
        musicOn = false;
    }
    playMusicFunction2();
}



function playMusicFunction1() {
    if (musicOn == true) {
        playMusic1.play();
    }
    if (musicOn == false) {
        playMusic1.pause();
    }
}


function playMusicFunction2() {
    if (musicOn == true) {
        playMusic2.play();
    }
    if (musicOn == false) {
        playMusic2.pause();
    }
}