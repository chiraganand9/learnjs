let score = "Chirag"; // 55, 55zyn, null, undefined, true

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "55" => 55
// "55xyn" => NaN
// true => 1; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "chirag" => true

let someNumber = 15091992

let stringSomeNumber = String(someNumber)
// console.log(stringSomeNumber);
// console.log(typeof stringSomeNumber);

// ++++++++++++++++++++++ Operations ++++++++++++++++++

let value = 9
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Chirag"
let str3 = str1+str2;

//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

/* Learn more about ToPrimitive from ECMAscript docs and HC english video*/
//console.log((3 + 4) *5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1=num2=num3 = 2+2;

let gameCounter=100; 
++gameCounter;  //learn prefix and postfix from MDN Docs
console.log(gameCounter);
