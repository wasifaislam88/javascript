//B10M22
//Google it for more detaisl way
const today = new Date()
console.log(today);// 2024-09-09T19:39:23.406Z

const date = new Date('2026-10-09')
console.log(date.getMonth());// 9
console.log(date.getDay());// 5

// year month date hour minute second milisecond
//2091,0 but output 2091-1 that means 0 index e january, 1 index e month 2
// B10M22.7
const specificDate = new Date(2091,0,26,4,55,44,1)
console.log(specificDate);//2091-01-25T22:55:44.001Z
specificDate.setMonth(10)
console.log(specificDate.toLocaleDateString());//11/26/2091
console.log(specificDate.toLocaleDateString('en-GB'));//26/11/2091






