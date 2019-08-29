/**************************
* Variables and data types
*/

/*
var firstName ='John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/


/************************************
* Variable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutaation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/************************************
* Basic operators
*/
/*
var now, yearJohn, yearMark,ageJohn,ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - 28;
yeatMark = now - 33;

console.log(yearJohn);
console.log(yeatMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Logical operator

var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator

console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
console.log(typeof x);
*/

/************************************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge); 

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);
 
// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More operators
x = x * 2;
//x * = 2;
console.log(x);

x = x + 1;
//x + = 1;
x++;
*/

/************************************
* Challenge 1
*/
/*
var massMark, massJohn, heightJohn, heightMark;
massJohn = 90;
heightJohn = 1.90;

massMark = 105;
heightMark = 1.85;

var bmiJohn = massJohn / heightJohn^2;
var bmiMark = massMark / heightMark^2;

var higherBMI = bmiJohn < bmiMark;

console.log('Is Mark\'s BMI higher than John\'s? ' + higherBMI);
*/

/************************************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + 'is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}


var isMarried = true;
if (isMarried) {
	console.log(firstName + 'is married!');
} else {
	console.log(firstName + ' will hopefully marry soon :)');
}


// Challenge 1 with if / else
var massMark, massJohn, heightJohn, heightMark;
massJohn = 90;
heightJohn = 1.90;

massMark = 105;
heightMark = 1.85;

var bmiJohn = massJohn / heightJohn^2;
var bmiMark = massMark / heightMark^2;

if (bmiJohn > bmiMark) {
	console.log('John\'s BMI is higher than Mark\'s.');
} else if (bmiJohn < bmiMark) {
	console.log('Mark\'s BMI is higher than John\'s.');
} else {
	console.log('Mark and John have the same BMI.');
}
*/

/************************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
	console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
	console.log(firstName + ' is a teenager.');
} else if(age >= 20 && age < 30) {
	console.log(firstName + ' is a young man.');
} else {
	console.log(firstName + ' is a man.');
}
*/

/************************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 25;

// Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch Statement
var job = 'instructor';
switch (job) {
	case 'teacher':
	case 'instructor':
		console.log(firstName + ' teaches kids how to code.');
		break;
	case 'driver':
		console.log(firstName + ' drives an uber in Lisbon.');
		break;
	case 'designer':
		console.log(firstName + ' designs beautiful websites.');
		break;
	default:
		console.log(firstName + ' does something else.');
}

// another switch
switch (true) {
	case (age < 13):
		console.log(firstName + ' is a boy.');
		break;
	case (age >= 13 && age < 20):
		console.log(firstName + ' is a teenager.');
		break;
	case (age >= 20 && age < 30):
		console.log(firstName + ' is a young man.');
		break;
	default:
		console.log(firstName + ' is a man.');
}
*/
/************************************
* trithy and Falsy values and equality operators
*/

// falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0) {
	console.log('Variable is defined');
} else {
	console.log('Variable has NOT been defined');
}

//Equality operators

if(height === '23') {
	console.log('The == operator does type coercion!');
}




