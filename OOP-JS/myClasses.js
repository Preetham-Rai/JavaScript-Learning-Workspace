//All about classes in javascript

class Person {
  //Parent class - the main blueprint
  constructor(name, id, city) {
    //constructor is a special keyword that is used to initialize new object
    this.name = name;
    this.id = id;
    this.city = city;
  }

  showInfo() {
    console.log(
      `${this.name} lives in ${this.city} and the special id is ${this.id}`
    );
  }
}
//Inheritance
class User extends Person {} //An user extends all the methods from class Person
class User1 extends Person {} //User1 also extends method from parent class

const newPerson = new Person("Preetham", 23, "Banglore");
newPerson.showInfo();

let sandy = new User("Sandeep", 123, "Banglore");
sandy.showInfo();
let vil = new User1("Vilas", 1234, "Banglore");
vil.showInfo();
