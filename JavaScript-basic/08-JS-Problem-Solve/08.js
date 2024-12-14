/**************************************
 * MY NAME IS JOHN, I LOVE JAVASCRIPT *
 **************************************/

function showInfo(info) {
  const result = "My name is " + person.name + " i love " + person.language;
  return result;
}

const person = {
  name: "John",
  language: "javascript",
};

const x = showInfo(person);
console.log(x);

console.log("**********  **********");

/******************************************
 * INPUT name: john, address:earth AND OUTPUT john@earth.com *
 ******************************************/

const person1 = {
  name: "john",
  address: "earth",
};
function createEmail(info) {
  if (typeof info !== "object") {
    return "invalid object";
  }
  const result = info.name + "@" + info.address + ".com";
  return result;
}

const y = createEmail(person1);
console.log(y);

console.log("**********  **********");

/******************************************************************************
 * YOUR MONTHLY EXPENSES, HOUSE RENT 5000, FOOD EXPENSES 3000, HAND EXPENSES 2000.
 * HOW MUCH YOU HAVE IN SAVINGS AT THE END OF THE MONTH BASED ON YOUR INCOME? *
 *****************************************************************************/

function calculateSavings(income) {
  if (typeof income !== "number") {
    return "invalid input";
  }
  const hoursRent = 5000;
  const mealCost = 3000;
  const otherCost = 2000;
  const totalExpenses = hoursRent + mealCost + otherCost;

  if (totalExpenses > income) {
    return "Earn more.....!";
  }

  const savings = income - totalExpenses;

  return savings;
}

const savings = calculateSavings(7000);
console.log(savings); // Output: Earn more.....!

console.log("**********  **********");

/********************************************
 * COUNT HOW MANY BOOLEAN VALUE IN AN ARRAY *
 ********************************************/

const arr = [3, 2, true, "hello", false, 34, true, { name: "john" }];

function contBoolean(array) {
  if (!Array.isArray(arr)) {
    return "please provbide valid array";
  }

  let count = 0;
  for (let item of array) {
    if (typeof item === "boolean") {
      count++;
    }
  }
  return count;
}

const result = contBoolean(arr);
console.log(result); //output: 3

console.log("**********  **********");

/*
bus = 50 ta sit full hole 1 ta kore bus jabe
after bus... micro
micro = 15 ta sit full hole 1 ta kore micro jabe
after micro... rickshaw
rickshaw cost 20 taka per person



total member jodi 234 jon hoy tahole 
4 ta bus e 200 jon
2 ta micro te 30 jon
finally rickshaw te 4 jon member jabe 
rickshaw cost 20 taka hole 4*20=80
final answer = 80 taka 

*/

function rickshawVara(peoples) {
  const bus = 50;
  const micro = 15;
  const rickshawCost = 20;

  const remainAfterBus = peoples % bus;

  const remainAfterMicro = remainAfterBus % micro;

  return remainAfterMicro * rickshawCost;
}

console.log(rickshawVara(234)); // output: 80

console.log("**********  **********");

const person11 = {
  name: "John doe",
  honors: 40,
  hsc: 30,
  isFFfamily: true,
};

const person22 = {
  name: "Tony Stark",
  honors: 45,
  hsc: 32,
  isFFfamily: false,
};

/************************************************************************************
 * TOTAL 80 HOLE JOB CONFARM FREEDOM FIGHTER FAMILY MEMBER HOLE 20% MARKS ADD HOBE. *
 ************************************************************************************/

function jobSelection(info) {
  if (typeof info !== "object") {
    return "invalid input";
  }
  let total_marks = info.honors + info.hsc; // here must use let. not constant

  if (info.isFFfamily) {
    total_marks = total_marks + total_marks * 0.2;
  }

//   console.log(total_marks);
  if (info.isFFfamily && total_marks >= 80) {
    return "Aho vatija aho... chakri to tomari...!";
  } else if (info.isFFfamily && total_marks < 80) {
    return "bad luck vatija.. next time...!";
  } else if (!info.isFFfamily && total_marks >= 80) {
    return "you got the job... ";
  } else if (!info.isFFfamily && total_marks < 80) {
    return "Rajakaar rajakaar...!";
  }

//   OR
  // if(total_marks >= 80){
  //     return "You got the job"
  // }
  // else{
  //     return 'You failed'
  // }
}




console.log(jobSelection(person11)); //Output: Aho vatija aho... chakri to tomari...!
console.log(jobSelection(person22)); //Output: Rajakaar rajakaar...!

// OR
// console.log(jobSelection(person11)); //Output: You got the job
// console.log(jobSelection(person22)); //Output: You failed
