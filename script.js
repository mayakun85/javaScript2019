/*var firstName = 'Denys';
console.log(firstName);

var lastName = 'Polulyakh';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Driver';
console.log(job);

Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23; */

//Variable mutation and type coercion
/*
var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/*Math operators
var year, yearDenys, yearKris;
now = 2019;
ageDenys = 34;
ageKris = 33;

yearDenys = now - ageDenys;
yearKris = now - ageKris;

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);
*/

/*Logical operators
var denysOlder = ageKris < ageDenys;
console.log(denysOlder);
*/

/*typeof operator
console.log(typeof denysOlder);
console.log(typeof ageDenys);
var x;
console.log(typeof x); 
*/

/*Operator precedence
var now = 2019;
var yearDenys = 1985;
var fullAge  = 21;

//Multiple operators
var isfullAge = now  - yearDenys >= fullAge;
console.log(isfullAge);

//Grouping
var ageDenys = now - yearDenys;
var ageKris = 33;
var average = (ageDenys + ageKris) / 2;
console.log(average);

//Multiple assignments 
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/
/* MY RESOLVED CODE
var heightMark = 190;
var massMark = 90;

var heightJohn = 187;
var massJohn = 85;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than Johns\'s? ' + markHigherBMI);
*/

var firstName = 'Denys';
var civilStatus = 'single';

if (civilStatus === 'single') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)))');
}





