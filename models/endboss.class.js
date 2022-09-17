class Endboss extends MovableObject {

    height = 450;
    width = 400;
    y = 10;
    energy = 110;
    contactWithCharacter = false;

    IMAGES_ANGRY = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];

    IMAGES_WALKING = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png',
    ];

    IMAGES_HURTING = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];

    IMAGES_DEAD = [
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        './img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
    ];


    constructor() {
        super().loadImage('./img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png');
        this.x = 2100;
        this.loadImages(this.IMAGES_ANGRY);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15;
        this.animate();
    }


    /**
     * This function is used to apply damage to the endboss.
     */
    endbossHurt() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        }
        let intervallId = setInterval(() => {
            this.playAnimation(this.IMAGES_HURTING);
        }, 410);
        setTimeout(() => {
            clearInterval(intervallId);
        }, 1000);
    }


    /**
     * This function is used to show the endscreen, if the endboss is dead and the player wins.
     */
    showEndScreen() {
        setTimeout(() => {
            document.getElementById('canvas').classList.add('d-none');
            document.getElementById('endScreen').classList.remove('d-none');
        }, 1000);
    }


    /**
     * This function is used to let the endboss walk.
     */
    letEndbossWalk() {
        this.contactWithCharacter = true;
    }


    /**
     * This function is used to animate the dead of the endboss and end the game.
     */
    endbossDies() {
        let intervallId = setInterval(() => {
            this.playAnimation(this.IMAGES_DEAD);
        }, 100);

        setTimeout(() => {
            clearInterval(intervallId);
            document.getElementById('canvas').classList.add('d-none');
            document.getElementById('startScreen').classList.add('d-none');
            document.getElementById('endScreen').classList.remove('d-none');
        }, 1200);
    }


    /**
     * This function is used to  let the endboss walk left.
     */
    endbossMoveLeft() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }


    /**
     * This function is used to animate the movement of the endboss.
     */
    animate() {
        setInterval(() => {
            if (this.isHit == false) {
                this.playAnimation(this.IMAGES_ANGRY);
            }
            if (this.contactWithCharacter == true) {
                this.playAnimation(this.IMAGES_WALKING);
                this.endbossMoveLeft();
            }
        }, 360);

    }
}