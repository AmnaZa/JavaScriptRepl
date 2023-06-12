class Cat {
    constructor(name, age, color) {
      this.name = name;
      this.age = age;
      this.color = color;
    }
  
    eat(food) {
      console.log(`${this.name} is eating ${food}.`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
  
    meow() {
      console.log(`${this.name} says meow!`);
    }
  }
  
  // Create instances of the Cat class
  const cat1 = new Cat("Grumpy", 3, "gray");
  const cat2 = new Cat("Socks", 4, "black");
  
  // Log the properties of both instances
  console.log(cat1);
  console.log(cat2);
  
  // Invoke methods from both instances
  cat1.eat("fish");
  cat1.sleep();
  cat1.meow();
  
  cat2.eat("tuna");
  cat2.sleep();
  cat2.meow();
  
  console.log('')
  console.log('')
  console.log('')
  
  class Pirate {
    constructor(name, age, nationality) {
      this.name = name;
      this.age = age;
      this.nationality = nationality;
    }
  
    sayHello() {
      console.log(`Arr! Ahoy there, matey! My name be ${this.name}`);
    }
  
    drinkRum() {
      console.log(`${this.name} says, "Yo ho ho and a bottle of rum!"`);
    }
  
    plunder() {
      console.log(`${this.name} shouts, "Avast ye! Prepare to be plundered!"`);
    }
  }
  
  // Instantiate two arrays of Pirates
  const jollyRoger = [
    new Pirate("Captain Hook", 45, "British"),
    new Pirate("Long John Silver", 55, "English"),
    new Pirate("Anne Bonny", 30, "Irish")
  ];
  
  const blackPearl = [
    new Pirate("Jack Sparrow", 40, "English"),
    new Pirate("Barbossa", 50, "Spanish"),
    new Pirate("Elizabeth Swann", 35, "British")
  ];
  
  // Loop over each array and print the properties of each pirate
  jollyRoger.forEach(pirate => {
    console.log(`Name: ${pirate.name}`);
    console.log(`Age: ${pirate.age}`);
    console.log(`Nationality: ${pirate.nationality}`);
    console.log('---');
  });
  
  blackPearl.forEach(pirate => {
    console.log(`Name: ${pirate.name}`);
    console.log(`Age: ${pirate.age}`);
    console.log(`Nationality: ${pirate.nationality}`);
    console.log('---');
  });
  