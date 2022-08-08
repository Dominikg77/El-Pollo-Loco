class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 180;
    height = 250;
    width = 120;
    offsetTop = 0;
    offsetRight = 0;
    offsetBottom = 0;
    offsetLeft = 0;


    /**
     * This function is used to
     */
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById(..) <img id=".." src="..">
        this.img.src = path;
    }


    /**
     * This function is used to
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }


    /**
     * This function is used to draw the images.
     */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
            console.warn(`error`, e);
            console.log(`Colud not load image`, this.img.src);
        }
    }


    /**
     * This function is used to draw a frame around the objects.
     */
    // drawFrame(ctx) {
    //     if (this instanceof Character || this instanceof Chicken) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '3';
    //         ctx.strokeStyle = 'blue';
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     }
    // }

}