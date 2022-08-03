class Coin extends DrawableObject {

    width = 100;
    height = 100;

    constructor() {
        super().loadImage('./img/8.Coin/Moneda2.png');
        this.x = 300 + Math.random() * 2000;
        this.y = 30 + Math.random() * 50;
    }
}