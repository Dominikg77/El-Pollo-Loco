class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud()
    ];
    backgroundObjects = [
        new backgroundObject(`img/5_background/layers/air.png`, 0),
        new backgroundObject(`img/5_background/layers/3_third_layer/1.png`, 0),
        new backgroundObject(`img/5_background/layers/2_second_layer/1.png`, 0),
        new backgroundObject(`img/5_background/layers/1_first_layer/1.png`, 0)
    ];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext(`2d`);
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }
    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);

        this.ctx.translate(-this.camera_x, 0);

        let self = this
        requestAnimationFrame(function() { //hier wird die Draw methode so häuig aufgerufen, wie es die Graik Karte zulässt (immer wieder)
            self.draw(); // requet muss eine Funktion rein geschrieben werden, die wird ausgelösst wenn alles drüber fertg gezeichnet ist 
            // in dieser Funktion funktioniert das Wort This nicht deswegen haben wir hier eine Varbiable zugewissen
        });
    };


    addObjectsToMap(objekt) {
        objekt.forEach(o => {
            this.addToMap(o);
        }); // wir führen dies für jedes Element aus
    }


    addToMap(mo) {
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0); // breite angeben
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1; // x kordiante umdrehen
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.heigth);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }
}