interface IVehicle {
    drive() : void;
    honk() : void;
}

abstract class Vehicle implements IVehicle {
    speed : number;
    constructor(speed : number){
        this.speed = speed;
    }
    honk():void {
        console.log( "Driving at " + this.speed + " km/h");
    }
    drive(){}

}

class Car extends Vehicle {
    constructor(speed : number){
        super(speed);
    }
    honk() {
        console.log("beep beep!")
    }
}

class Bicycle extends Vehicle{
    constructor(speed : number){
        super(speed);
    }   
    honk(){
        console.log("ring ring!")
    }
}

let car1 : Car = new Car(100);
let car2 : Car = new Car(120);
let bicycle1 : Bicycle = new Bicycle(10);
let bicycle2 : Bicycle = new Bicycle(15);
let bicycle3 : Bicycle = new Bicycle(20);
let vehicle : IVehicle[] = [car1, car2, bicycle1, bicycle2, bicycle3];
for (let v in vehicle){
    if (typeof v['honk'] === 'function'){
        v['honk']();
    }
    
    vehicle[v].drive();
}