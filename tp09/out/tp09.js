class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    honk() {
        console.log("Driving at " + this.speed + " km/h");
    }
    drive() { }
}
class Car extends Vehicle {
    constructor(speed) {
        super(speed);
    }
    honk() {
        console.log("beep beep!");
    }
}
class Bicycle extends Vehicle {
    constructor(speed) {
        super(speed);
    }
    honk() {
        console.log("ring ring!");
    }
}
let car1 = new Car(100);
let car2 = new Car(120);
let bicycle1 = new Bicycle(10);
let bicycle2 = new Bicycle(15);
let bicycle3 = new Bicycle(20);
let vehicle = [car1, car2, bicycle1, bicycle2, bicycle3];
for (let v in vehicle) {
    if (typeof v['honk'] === 'function') {
        v['honk']();
    }
    vehicle[v].drive();
}
//# sourceMappingURL=tp09.js.map