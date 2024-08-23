//Activity to create a class on Vehicle

class Vehicle {
  constructor(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    console.log(
      `${this.manufacturer} made ${this.model} made in the year ${this.year}. The fuel type is ${this.fuelType}`
    );
  }
}

class Car extends Vehicle {
  constructor(manufacturer, model, year, fuelType) {
    super(manufacturer, model, year); //Super refers to parent class that all three property takes from parent
    //we don't need to manulally type it here ... this is called inheritance
    this.fuelType = fuelType;
  }

  getCarInfo() {
    console.log(
      `${this.manufacturer} made ${this.model} in the year ${this.year}. The fuel type is ${this.fuelType}`
    );
  }
}

let car = new Car("Chevrolet", "Beat", 2011, "Diesel");
car.getCarInfo();
