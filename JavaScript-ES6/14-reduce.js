// p = previous = accumulator
// c = current

const numbers = [1, 2, 3, 4, 5]
const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total)

const sum = numbers.reduce((p, c) => p + c, 0)
console.log(sum)

//sob upadan niye kichu akta kaz kore

/* 
p = previous = accumulator
c = current
reduce() ekhane () bracket er moddhe minimum 2 ta jinis/parameter dite hobe
akta initial value jemon ei example e 0 use kora hoyeche, 
arekta holo callback function.
callback function er moddhe 2 ta parameter dite hobe... ei exampleE  p and c use parameter hisebe use kora hoyeche
*/



/*
reduce sob upadan re niye kichu akta kore return kore
ei example er explain: inital value = 0 so p = 0, then (p=0) + (c=1) = (p=1)
then (p=1) + (c=2) = (p=3)... ebave cholte thakbe.. and last answer 15 return korbe



Summation Process:
Iteration 1: p = 0, c = 1, so p + c = 0 + 1 = 1
Iteration 2: p = 1, c = 2, so p + c = 1 + 2 = 3
Iteration 3: p = 3, c = 3, so p + c = 3 + 3 = 6
Iteration 4: p = 6, c = 4, so p + c = 6 + 4 = 10
Iteration 5: p = 10, c = 5, so p + c = 10 + 5 = 15

*/


// Reduce niye more explore korte hobe with example.. ekhon just basic jene rakhlam