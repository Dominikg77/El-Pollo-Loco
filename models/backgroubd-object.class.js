class BackgroundObject extends MovableObject {

    width = 719.9;
    height = 480;
    constructor(imagePath, x, y) {

        super().loadImage(imagePath);
        this.x = x;
        this.y = y;
    }
}