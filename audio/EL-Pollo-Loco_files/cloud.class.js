class Cloud extends MovableObject {

    y = 30;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('./img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500;
        this.animate();
    }


    /**
     * This function is used to animate the movement of the clouds.
     */
    animate() {
        this.moveLeft();
    }
}