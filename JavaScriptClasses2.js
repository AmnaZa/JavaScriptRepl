class Governor {
    static greet() {
      console.log('hi');
    }
  
    static state = 'Maryland';
    static age = 40;
  
    static slogan() {
      console.log('Vote for me!');
    }
  }
  console.log(Governor);
  Governor.greet();
  (Governor.slogan());
  
  console.log('')
  
  class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  
    introduce() {
      console.log(`My name is ${this.name}, I am ${this.age} years old, and I am ${this.gender}.`);
    }
  
    performWork() {
      console.log(`I am performing my work.`);
    }
  }
  
  class PostalWorker extends Person {
  
    deliverMail() {
      console.log(`${this.name} is delivering mail.`);
    }
  
    sortMail() {
      console.log(`${this.name} is sorting mail.`);
    }
  }
  
  class Chef extends Person {
    cook() {
      console.log(`${this.name} is cooking.`);
    }
  
    prepareIngredients() {
      console.log(`${this.name} is preparing ingredients.`);
    }
  }
  
  const john = 'john';
  const postalWorker1 = new PostalWorker(john, 30, 'Male');
  const postalWorker2 = new PostalWorker('Sarah', 35, 'Female');
  postalWorker2.name = "stew"
  const chef1 = new Chef('Michael', 40, 'Male');
  const chef2 = new Chef('Emily', 45, 'Female');
  
  postalWorker1.sayHello();
  postalWorker1.introduce();
  postalWorker1.performWork();
  postalWorker1.deliverMail();
  postalWorker1.sortMail();
  console.log('')
  postalWorker2.sayHello();
  postalWorker2.introduce();
  postalWorker2.performWork();
  postalWorker2.deliverMail();
  postalWorker2.sortMail();
  console.log('')
  chef1.sayHello();
  chef1.introduce();
  chef1.performWork();
  chef1.cook();
  chef1.prepareIngredients();
  console.log('')
  
  chef2.sayHello();
  chef2.introduce();
  chef2.performWork();
  chef2.cook();
  chef2.prepareIngredients();
  
  console.log(postalWorker2.name)