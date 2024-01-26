/*
public = methods that can be called any where at anytime
private = methods that can only be called by other methods
protected = methods that can be called by other methods in this class or by methods in child classes 
*/

class Vehicle {
  //   color: string = "red";
  //   constructor(color: string) {
  //     this.color = color;
  //   }

  constructor(public color: string) {} // shortcut of top comment

  protected honk(): void {
    console.log("honk honk");
  }
}

const vehicle = new Vehicle("blue");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color); // referrence of Vehhicle constructor
  }
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(3, "red");
console.log(car.wheels);
console.log(car.color);
// car.startDrivingProcess();
