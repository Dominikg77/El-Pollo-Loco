class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new Statusbar();
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext(`2d`);
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }
    setWorld() {
        this.character.world = this;
    }
    run() {
        setInterval(() => {
            this.checkCollsition();
            this.checkThrowObjects();
        }, 100);
    }


    checkThrowObjects() {
        if (this.keyboard.Space) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollsition() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPrecentage(this.character.energy);
            }
        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); //Back
        // --- space fpr fixed object---
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0); //Forwards

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
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