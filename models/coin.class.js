class Coin extends MovableObject {
    width = 100;
    height = 100;

    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.x = 300 + Math.random() * 2000;
        this.y = 120 + Math.random() * 50;
    }
}