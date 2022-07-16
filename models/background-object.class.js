class backgroundObject extends MovableObject {

    width = 720;
    heigth = 480;

    constructor(imagePath, x, ) {
        super().loadImage(imagePath);
        this.y = 480 - this.heigth; //(y Koordinate = 480 - heigth)
        this.x = x;
    }

}