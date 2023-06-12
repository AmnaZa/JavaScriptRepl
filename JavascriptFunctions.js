//1.

function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return  x >= y ? x : y;
  }
}


console.log(maxOfTwoNumbers(3, 9));

console.log('')

//2.

function maxOfThree (x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
};

console.log(maxOfThree(3, 9, 8));

console.log('')


//3.

function isCharAVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(char);
}
console.log(isCharAVowel('r'));

console.log('')

//4.

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(sumArray([2, 4, 5]));

console.log('')

//5.

function multiplyArray(numbers) {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  return product;
}
console.log(multiplyArray([2, 4, 5]));

console.log('')

//6.


function numArgs(...args) {
  return args.length;
};

console.log(numArgs(1, 2, 3, 4, 5, 6));

console.log('')


//7.

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString('rockstar'));

console.log('')


//8.

function longestStringInArray(strings) {
  let maxLength = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maxLength) {
      maxLength = strings[i].length;
    }
  }
  return maxLength;
};

console.log(longestStringInArray(['say', 'hello', 'in', 'the', 'morning']));

console.log('')


//9.

function stringsLongerThan(strings, length) {
  const result = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > length) {
      result.push(strings[i]);
    }
  }
  return result;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // Output: ["hello", "morning"]


