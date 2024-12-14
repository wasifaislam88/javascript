// String
console.log('********** String **********');

const country1 = 'Bangladesh'
const country2 = 'Bang la   desh'
const division = "Somewhere"
const district = `Secret`
const thana = new String('AbcThana')


console.log(country1);// Bangladesh
console.log(country2);// Bang la desh
console.log(division);// Somewhere
console.log(district);// Secret
console.log(thana);// [String: 'AbcThana']

console.log(typeof country1);//string
console.log(typeof country2);//string
console.log(typeof division);//string
console.log(typeof district);//string
console.log(typeof thana);//object

console.log(country1.length)//10
console.log(country2.length)//14

console.log(country2[0]);//B
console.log(country2[1]);//a
console.log(country2[2]);//n
console.log(country2[3]);//g
console.log(country2[4]);//              (output faka thake)
console.log(country2[5]);//l

/* 
string is immutble --> not changable 
country1[0] = 'a2zb' // B er poriBorte a2zb diye change hobe na
console.log(country1);//bangladesh (no change)
but array is muttable. that means array is changable
orthat evbe change korte chaile array use korte hobe. string e chenge kora jai na
*/






console.log('############### extra off topic #################')

var firstName = 'John';
var secondName = ' Doe';
var fullName1 = firstName + secondName;
console.log(fullName1); //John Doe (as a string)

var num1 = 50;
var num2 = '10';
console.log(num1 + num2); //5010 (as a string)

console.log('**************************')
console.log(80 + '20');//output: 8020  (number + string = string)
console.log('80'-20);//output: 60    (number - string = number if boht number charecter)
console.log('80'/20);//output: 4     (number / string = number if both number charecter)
console.log('80'*20);//output: 1600  (number * string = number if both number charecter)
//here if use ' ' then + work as concatenation 
//here if use ' '  then - * / work as number 


