class DrawableObject {
    x = 120;
    y = 280;
    heigth = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image(); // <img id="image">" ist das selbe wie Image()
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = `5`;
            ctx.strokeStyle = `blue`;
            ctx.rect(this.x, this.y, this.width, this.heigth);
            ctx.stroke();
        }
    }


    /**
     * 
     * @param {Array} arr -[`img/image1.png`,`img/image2.png`....] 
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}