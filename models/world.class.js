class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext(`2d`);
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollision();
    }
    setWorld() {
        this.character.world = this;
    }
    checkCollision() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log(`Collision with Character, energei`, this.character.energy)
                }
            });
        }, 100);
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.statusBar);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coin);
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

            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0); // breite angeben
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1; // x kordiante umdrehen
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();

    }
}