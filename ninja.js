class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100; // Asignando un valor predeterminado de salud
        this.speed = 3; // Asignando un valor predeterminado de velocidad
        this.strength = 3; // Asignando un valor predeterminado de fuerza
    }

    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

// Ejemplo de uso:
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName(); // "Hyabusa"
ninja1.showStats(); // "Name: Hyabusa, Strength: 3, Speed: 3, Health: 100"
ninja1.drinkSake();
ninja1.showStats(); // "Name: Hyabusa, Strength: 3, Speed: 3, Health: 110"
