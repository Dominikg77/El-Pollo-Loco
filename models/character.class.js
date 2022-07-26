class Character extends MovableObject {
    heigth = 280;
    y = 80; //160
    speed = 4.0;
    IMAGES_WALKING = [
        `img/2_character_pepe/2_walk/W-21.png`,
        `img/2_character_pepe/2_walk/W-22.png`,
        `img/2_character_pepe/2_walk/W-23.png`,
        `img/2_character_pepe/2_walk/W-24.png`,
        `img/2_character_pepe/2_walk/W-25.png`,
        `img/2_character_pepe/2_walk/W-26.png`
    ];

    IMAGES_JUMPING = [
        `img/2_character_pepe/3_jump/J-31.png`,
        `img/2_character_pepe/3_jump/J-31.png`,
        `img/2_character_pepe/3_jump/J-32.png`,
        `img/2_character_pepe/3_jump/J-33.png`,
        `img/2_character_pepe/3_jump/J-34.png`,
        `img/2_character_pepe/3_jump/J-35.png`,
        `img/2_character_pepe/3_jump/J-36.png`,
        `img/2_character_pepe/3_jump/J-37.png`,
        `img/2_character_pepe/3_jump/J-38.png`,
        `img/2_character_pepe/3_jump/J-39.png`
    ];

    IMAGES_DEAD = [
        `img/2_character_pepe/5_dead/D-51.png`,
        `img/2_character_pepe/5_dead/D-52.png`,
        `img/2_character_pepe/5_dead/D-53.png`,
        `img/2_character_pepe/5_dead/D-54.png`,
        `img/2_character_pepe/5_dead/D-55.png`,
        `img/2_character_pepe/5_dead/D-56.png`,
        `img/2_character_pepe/5_dead/D-57.png`

    ];

    IMAGES_HURT = [
        `img/2_character_pepe/4_hurt/H-41.png`,
        `img/2_character_pepe/4_hurt/H-42.png`,
        `img/2_character_pepe/4_hurt/H-43.png`,
    ];

    world;
    walking_sound = new Audio(`audio/walking2.mp3`)

    constructor() { // wird zuerst ausgeführt
        super().loadImage(`img/2_character_pepe/2_walk/W-21.png`); // von der übergeordneten Classe eine Funktion aufrufen 
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.Right && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.Left && this.x > 0) {
                this.moveleft();
                this.otherDirection = true;
                this.walking_sound.play();
            }

            if (this.world.keyboard.Up && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {

            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.Right || this.world.keyboard.Left) {
                    //Walk animation
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 50);
    }

    jump() {
        this.speedY = 25;
    };

    /**
     * This function is used to return, that a movable object is colliding to the character or not.
     */
    characterIsColiding(mo) {
        return this.x + this.width > mo.x &&
            (this.y + this.characterHeightSubtraction) + (this.height - this.characterHeightSubtraction) > mo.y &&
            this.x < mo.x &&
            (this.y + this.characterHeightSubtraction) < mo.y + mo.height;
    }
}