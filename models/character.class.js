class Character extends MovableObject {

    IMAGES_WALKING = [
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    IMAGES_JUMPING = [
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png'
    ];

    IMAGES_HURTING = [
        './img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];

    IMAGES_DEAD = [
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];

    IMAGES_IDLE = [
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
        './img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png'
    ];

    world;
    speed = 4.5;
    walkingSound = new Audio('audio/pepe_runing.mp3');
    hitSound = new Audio('audio/hit.mp3');
    jumpSound = new Audio('audio/jump.mp3');


    constructor() {
        super().loadImage('./img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURTING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_IDLE);
        this.applyGravity();
        this.animate();
    }


    /**
     * This function is used to animate the images and movement of the character.
     */
    animate() {
        setInterval(() => {
            this.animateMovement();
        }, 1000 / 60);

        setInterval(() => {
            this.animateImages();
        }, 120);
    }


    /**
     * This function is used to animate the images of the character.
     */
    animateImages() {
        this.hitSound.volume = 0.65;
        this.jumpSound.volume = 0.65;
        if (this.isDead()) {
            this.characterDies();
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURTING);
            this.hitSound.play();
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
            this.jumpSound.play();
        } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
        } else {
            setTimeout(() => {
                this.playAnimation(this.IMAGES_IDLE);
            }, 6000);
        }

    }



    /**
     * This function is used to animate the movement of the character.
     */
    animateMovement() {
        this.walkingSound.pause();
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.characterWalkesRight();
        }
        if (this.world.keyboard.LEFT && this.x > 0) {
            this.characterWalkesLeft();
        }
        if (this.world.keyboard.UP && !this.isAboveGround()) {
            this.jump();
        }
        this.world.camera_X = -this.x + 100;
    }


    /**
     * This function is used to let the character walk right.
     */
    characterWalkesRight() {

        this.moveRight();
        this.otherDirection = false;
        this.walkingSound.play();
    }


    /**
     * This function is used to let the character walk left.
     */
    characterWalkesLeft() {

        this.moveLeft();
        this.otherDirection = true;
        this.walkingSound.play();
    }


    /**
     * This function is used to let the character die.
     */
    characterDies() {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            document.getElementById('canvas').classList.add('d-none');
            document.getElementById('startScreen').classList.add('d-none');
            document.getElementById('youLostScreen').classList.remove('d-none');
        }, 800);
    }


    /**
     * This function is used to let the character jump.
     */
    jump() {
        this.speedY = 30;
    }

}