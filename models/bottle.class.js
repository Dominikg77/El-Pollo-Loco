class Bottle extends DrawableObject {

    y = 360;
    width = 40;
    height = 60;

    constructor() {
        super().loadImage('./img/6.botella/2.Botella_enterrada1.png');
        this.x = 350 + Math.random() * 1200;
    }

}