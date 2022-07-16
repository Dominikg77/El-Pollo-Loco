class Chicken extends MovableObject {

    y = 355;
    heigth = 80;
    width = 100;
    IMAGES_WALKING = [
        `img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`,
        `img/3_enemies_chicken/chicken_normal/1_walk/2_w.png`,
        `img/3_enemies_chicken/chicken_normal/1_walk/3_w.png`

    ];


    constructor() { // wird zuerst ausgeführt
        super().loadImage(`img/3_enemies_chicken/chicken_normal/1_walk/1_w.png`); // von der übergeordneten Classe eine Funktion aufrufen 
        this.x = 200 + Math.random() * 500; // bei Variablen braucht es kein super() // Math.random gibt eine Zahl von 0-1 heraus deshalb mal 500
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    };

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length; // let i= 0% 6; // i = 0, 1, 2, 3, 4, 5 und dann wieder 0
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 250);
        this.moveleft();
    }


}