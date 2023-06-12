class Hamster {
    constructor(name) {
      this.owner = "";
      this.name = name;
      this.price = 15;
    }
  
    wheelRun() {
      console.log("squeak squeak");
    }
  
    eatFood() {
      console.log("nibble nibble");
    }
  
    getPrice() {
      return this.price;
    }
  }
  
  class Person {
    constructor(name) {
      this.name = name;
      this.age = 0;
      this.weight = 0;
      this.mood = 0;
      this.hamsters = [];
      this.bankAccount = 0;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}!`);
    }
  
    eat() {
      this.weight++;
      this.mood++;
    }
  
    exercise() {
      this.weight--;
    }
  
    ageUp() {
      this.age++;
      this.weight++;
      this.mood--;
      this.bankAccount += 10;
    }
  
    buyHamster(hamster) {
      this.hamsters.push(hamster);
      this.mood += 10;
      this.bankAccount -= hamster.getPrice();
      hamster.owner = this.name;
    }
  }
  
  // Example usage:
  let timmy = new Person("Timmy");
  timmy.ageUp();
  timmy.ageUp();
  timmy.ageUp();
  timmy.ageUp();
  timmy.ageUp();
  
  for (let i = 0; i < 5; i++) {
    timmy.eat();
  }
  
  for (let i = 0; i < 5; i++) {
    timmy.exercise();
  }
  
  timmy.age += 4;
  
  let gus = new Hamster("Gus");
  timmy.buyHamster(gus);
  
  timmy.age += 6;
  
  for (let i = 0; i < 2; i++) {
    timmy.eat();
  }
  
  for (let i = 0; i < 2; i++) {
    timmy.exercise();
  }
  
  console.log(`Timmy's age: ${timmy.age}`);
  console.log(`Timmy's weight: ${timmy.weight}`);
  console.log(`Timmy's mood: ${timmy.mood}`);
  
  console.log(`Gus's owner: ${gus.owner}`);
  
  class Dinner {
    constructor(appetizer, entree, dessert) {
      this.appetizer = appetizer;
      this.entree = entree;
      this.dessert = dessert;
    }
  }
  
  class Chef {
    makeDinner(appetizer, entree, dessert) {
      return new Dinner(appetizer, entree, dessert);
    }
  }
  
  // Example usage:
  let chef = new Chef();
  let dinner1 = chef.makeDinner("Salad", "Chicken", "Cake");
  let dinner2 = chef.makeDinner("Soup", "Steak", "Ice Cream");
  let dinner3 = chef.makeDinner("Nachos", "Tacos", "Churros");
  
  console.log(dinner1);
  console.log(dinner2);
  console.log(dinner3);
  