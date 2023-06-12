//How do we assign a value to a variable?//
let Variable = 3;
  console.log(Variable)

//How do we change the value of a variable?
Variable = 10;
  console.log(Variable)

//How do we assign an existing variable to a new variable?
let x = Variable;
  console.log(x)

console.log('')

//Create a variable called firstVariable
//Assign it the value of the string "Hello World"
let firstVariable = "My World";
 console.log(firstVariable)

//Change the value of this variable to some number

firstVariable = 3
  console.log(firstVariable)
//Store the value of firstVariablein a new variable called secondVariable

let secondVariable = firstVariable;
  console.log(secondVariable)
//Change the value of secondVariableto any string.
secondVariable = "Hi"
//What is the value of firstVariable?
console.log(firstVariable);
//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated
let yourName = "Amna";
let greeting ='Hello, my name is ' + yourName;
console.log(greeting);

//C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || (false || true));
console.log(true || true)
console.log(e === 'Kevin');
console.log(a < b && b < c);
console.log(a < b && b < c);   // Result: true
console.log(a * a === d);      // Result: true
console.log(48 =='48');       // Result: true


function minusOne(num) {
    let result = num - 1;
    console.log(result);
  }
  
  minusOne(100);
  
  console.log('')
  
  function makeSentance (par1, par2, par3) {
    let sentance = par1 + '' + par2 + '' + par3 +'.';
    return sentance
  }
  let par1 = "'Oh boy,";
  let par2 = "do I want chimichangas";
  let par3 = "or what?'"
  
  let sentance = makeSentance (par1, par2, par3)
  console.log(sentance)
  
  console.log('')
  
  function getLastElement(arr) {
    let lastElement = arr[arr.length - 1]
    console.log(lastElement)
  }
  getLastElement([1, 2, 3, 4, 5, 6]);     
  getLastElement(['a', 'b', 'c']);          
  getLastElement([[1, 2, 3], [4, 5, 6]]);  