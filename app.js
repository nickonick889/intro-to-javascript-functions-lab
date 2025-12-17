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
    return Math.round(a*(b/100));
}
console.log('Exercise 7 Result:', calculateTip(2, 20));

// Excersie 8
function convertTemperature(a, b){
    if (b === 'C') {
        return (a*(9/5)) +32 ; 
        } else if (b === 'F') {
            return (a-32) * (5/9)
            }
        }

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

// Excersie 9
function basicCalculator(a, b, c) {
    if   (c === "add") {
        return (a+b);
    } else if (c === "subtract") {
        return (a-b);
    } else if (c === "multiply") {
        return (a*b);
    } else if (c === "divide") {
        return (a/b);
    }
}
    
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


// Exercise 10 
const calculateGrade = (z) => {
    if (z >= 90) {
        return 'A';
    } else if (z >= 80 && z <=89) {
        return 'B';
    } else if (z >= 70 && z <=79) {
        return 'C';
    } else if (z >= 60 && z <=69) {
        return 'D';
    } else if (z <= 59) {
        return 'F';
    }
}
console.log('Exercise 10 Result:', calculateGrade(85));

// Exercise 11 
const createUsername = (a, b) => {
    const x = a.slice(0,3);
    const y = b.slice(0,3);
    const z = a.length + b.length;
    return `${x}${y}${z}`
}
console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

// Exercise 12 
function numArgs(...) {
    const numArgs = arguments.length ;
}
console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));