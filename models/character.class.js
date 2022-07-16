class Character extends MovableObject {
    heigth = 280;
    y = 160;
    speed = 2.0;
    IMAGES_WALKING = [
        `img/2_character_pepe/2_walk/W-21.png`,
        `img/2_character_pepe/2_walk/W-22.png`,
        `img/2_character_pepe/2_walk/W-23.png`,
        `img/2_character_pepe/2_walk/W-24.png`,
        `img/2_character_pepe/2_walk/W-25.png`,
        `img/2_character_pepe/2_walk/W-26.png`
    ];
    world;

    constructor() { // wird zuerst ausgeführt
        super().loadImage(`img/2_character_pepe/2_walk/W-21.png`); // von der übergeordneten Classe eine Funktion aufrufen 
        this.loadImages(this.IMAGES_WALKING);
        this.animate();

    }

    animate() {

        setInterval(() => {

            if (this.world.keyboard.Right) {
                this.x += this.speed;
                this.otherDirection = false;
            }

            if (this.world.keyboard.Left) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {

            if (this.world.keyboard.Right || this.world.keyboard.Left) {

                //Walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length; // let i= 0% 6; // i = 0, 1, 2, 3, 4, 5 und dann wieder 0
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);
    }

    jump() {

    };
}