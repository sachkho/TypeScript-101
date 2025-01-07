var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(speed) {
        this.speed = speed;
    }
    Vehicle.prototype.honk = function () {
        console.log("Driving at " + this.speed + " km/h");
    };
    Vehicle.prototype.drive = function () { };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(speed) {
        return _super.call(this, speed) || this;
    }
    Car.prototype.honk = function () {
        console.log("beep beep!");
    };
    return Car;
}(Vehicle));
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(speed) {
        return _super.call(this, speed) || this;
    }
    Bicycle.prototype.honk = function () {
        console.log("ring ring!");
    };
    return Bicycle;
}(Vehicle));
var car1 = new Car(100);
var car2 = new Car(120);
var bicycle1 = new Bicycle(10);
var bicycle2 = new Bicycle(15);
var bicycle3 = new Bicycle(20);
var vehicle = [car1, car2, bicycle1, bicycle2, bicycle3];
for (var v in vehicle) {
    vehicle[v].honk();
    vehicle[v].drive();
}
