class Cloud extends MovableObject {
    y = 10;
    width = 500;
    heigth = 250;

    constructor() { // wird zuerst ausgeführt
        super().loadImage(`img/5_background/layers/4_clouds/1.png`); // von der übergeordneten Classe eine Funktion aufrufen 
        this.x = Math.random() * 500; // bei Variablen braucht es kein super() // Math.random gibt eine Zahl von 0-1 heraus deshalb mal 500
        this.animate();
    };

    animate() {
        this.moveleft();
    }

}