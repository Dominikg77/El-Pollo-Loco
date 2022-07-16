class Endboss extends MovableObject {

    y = 55;
    heigth = 400;
    width = 250;
    IMAGES_WALKING = [
        `img/4_enemie_boss_chicken/2_alert/G5.png`,
        `img/4_enemie_boss_chicken/2_alert/G7.png`,
        `img/4_enemie_boss_chicken/2_alert/G8.png`,
        `img/4_enemie_boss_chicken/2_alert/G9.png`,
        `img/4_enemie_boss_chicken/2_alert/G10.png`,
        `img/4_enemie_boss_chicken/2_alert/G11.png`,
        `img/4_enemie_boss_chicken/2_alert/G12.png`
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]); // von der übergeordneten Classe eine Funktion aufrufen 
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2000;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 300);
    }

}