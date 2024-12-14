/*******************
 * SWAP USING TEMP *
 *******************/
let a = 5
let b = 10
let temp

temp = a
a = b
b = temp

console.log(a, b)


/*************************************************************************
 * SWAP USING DESTRUCTURING. DO GOOGLE ABOUT DESTRUCTURING FOR MORE INFO *
 *************************************************************************/
//WLINK:
//todo  https://www.ltvco.com/engineering/semicolon-javascript/?fbclid=IwY2xjawFMJkhleHRuA2FlbQIxMAABHQZZCbhfLeKf0tHvPm2gAEE_uJT3EVya26mxBjrj6sSR8QZ4hN0n9RoVgw_aem_I5kePgSbzdzSqU0qYIvuYQ

//IMPORTANT: let y = 7; ekhane must ; semiclone dite hobe. keno dity hobe tar details see wlink...

/*
In some cases, JavaScript requires semicolons.
In some cases you don't have to use semicolons.
JavaScript is a very smart language, because of which it has converted two lines into one line by not giving semicolon here.
He considered it an array for which reference was sought.
*/
let x = 5
let y = 7;// IMPORTANT: must ; semiclone dite hobe.....
[x, y] = [y, x]
console.log(x, y)