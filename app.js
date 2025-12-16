// Exercise 1  
const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

//Excercise 2 
const isAdult = (z) => {
    if (z => 18) {
    return 'Adult';
    } else {
        return 'minor';
    }
}

console.log('Exercise 2 Result:', isAdult(21));

// Exercise 3
const isCharAVowel = (q) => {
    if (q = 'a' || 'e' || 'i' || 'o' || 'u') {
        return 'True';
    } else {
        return 'False';
    }
    }

console.log('Exercise 3 Result:', isCharAVowel("a"));

// Exercise 4 
function generateEmail (name, domain) {
    return `${name}` + '@' + `${domain}`
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

// Exercise 5 
function greetUser (a, b) {
    if (b === 'morning') {
        return `Good morning, ${a}!` ;
    } else if (b === 'afternoon') {
        return `Good afternoon, ${a}!`;
    } else if (b === 'evening') {
        return `Good evening, ${a}!`;
    }
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

// Excercsie 6 
function maxOfThree (a,b,c){
   const largest = Math.max(a,b,c);
   return largest
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));

// Excersie 7
function calculateTip(a,b) {
    return (a*(b/100));
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

// Excersie 8
function convertTemperature()


// Excersie 9
function basicCalculator()
