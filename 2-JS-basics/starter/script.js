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

/*
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
*/

/************************************
* Challenge 2
*/
/*
var averrageScoreJohn = (97 + 134 + 105) / 3;
var averrageScoreMark = (116 + 94 + 123) / 3;
var averrageScoreMary = (97 + 134 + 105) / 3;
console.log(averrageScoreJohn, averrageScoreMark, averrageScoreMary);

switch(true) {
	case (averrageScoreJohn > averrageScoreMark) && (averrageScoreJohn > averrageScoreMary):
		console.log('John Team wins in average score with ' + averrageScoreJohn + ' points.');
		break;
	case (averrageScoreMark > averrageScoreJohn) && (averrageScoreMark > averrageScoreMary):
		console.log('Mark Team wins in average score with ' + averrageScoreMark + ' points.');
		break;
	case (averrageScoreMary > averrageScoreJohn) && (averrageScoreMary > averrageScoreMark):
		console.log('Mary Team wins in average score with ' + averrageScoreMary + ' points.');
		break;
	case (averrageScoreJohn == averrageScoreMark) && (averrageScoreJohn > averrageScoreMary || averrageScoreMark > averrageScoreMary):
		console.log('There is a draw between John\'s team and Mark\'s team with a score of ' + averrageScoreJohn + ' points.');
		break;
	case (averrageScoreJohn == averrageScoreMary) && (averrageScoreJohn > averrageScoreMark || averrageScoreMary > averrageScoreMark):
		console.log('There is a draw between John\'s team and Mary\'s team with a score of ' + averrageScoreJohn + ' points.');
		break;
	case (averrageScoreMark == averrageScoreMary) && (averrageScoreMark > averrageScoreJohn || averrageScoreMary > averrageScoreJohn):
		console.log('There is a draw between Mark\'s team and Mary\'s team with a score of ' + averrageScoreMark + ' points.');
		break;
	case averrageScoreJohn == averrageScoreMark == averrageScoreMary:
		console.log('There is a draw with a score of' + averrageScoreMary + ' points.');
		break;	
	
}
*/
/************************************
* Functions
*/
/*
function calculateAge(birthYear) {
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	
	if (retirement > 0) {
		console.log(firstName + ' retires in ' + retirement + ' years.');
	} else {
		console.log(firstName + ' is already retired');
	}
	
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/************************************
* Functions Statements and Expressions
*/
/*
//Function Expression
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver': 
			return firstName + ' drives a uber in Lisbon';
		case 'designer':
			return firstName + ' designs beautiful websites';
		default:
			return firstName + ' does something else.';
			
	}
}

console.log(whatDoYouDo('teacher', 'John'));
*/

/************************************
* Arrays
*/
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);
*/
/************************************
* Challenge 3
*/
/*
var bills = [124, 48, 268];
var tip, bill, percentage;

function tipCalculator(bill){
	if( bill < 50 ) {
		percentage = .2;
	} else if (bill >= 50 && bill < 200) {
		percentage = .15;
	} else {
		percentage = .1;
	}
	return tip = bill * percentage;
}

//for (i=0; i<3; i++){
//	if( bills[i] < 50 ) {
//		tip[i] = bills[i] * .2;
//		finalBills[i] = bills[i] + tip[i];
//	} else if (bills[i] >= 50 && bills[i] < 200) {
//		tip[i] = bills[i] * .15;
//		finalBills[i] = bills[i] + tip[i];
//	} else {
//		tip[i] = bills[i] * .1;
//		finalBills[i] = bills[i] + tip[i];
//	}
//}


//console.log(tip);
//console.log(finalBills);



var tips = [tipCalculator(bills[0]), 
			tipCalculator(bills[1]), 
			tipCalculator(bills[2])];

var finalBills = [bills[0] + tipCalculator(bills[0]), 
				  bills[1] + tipCalculator(bills[1]), 
				  bills[2] + tipCalculator(bills[2])];

console.log(tips);
console.log(finalBills);

*/
/************************************
* Objects and properties
*/
/*
// Object literal
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object Syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = "1969";
jane['lastName'] = 'Smith';
console.log(jane);
*/

/************************************
* Objects and methods
*/
/*
var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1995,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		this.age = 2018 - this.birthYear;
	}
};

//john.age = john.calcAge();
john.calcAge();
console.log(john);
*/

/************************************
* Challenge 4
*/

var john = {
	fullName: 'John Smith',
	height: 1.82,
	mass: 85,
	calcBMI: function() {
		this.bmi = this.mass / ((this.height)^2);
		return this.bmi;
	}
};

var mark = {
	fullName: 'Mark Doe',
	heigth: 1.90,
	mass: 88,
	calcBMI: function() {
		this.bmi = this.mass / ((this.height)^2);
		return this.bmi;
	}
};

console.log(john.calcBMI());
console.log(mark.calcBMI());

if (john.bmi < mark.bmi) {
	console.log(mark.fullName + ' BMI is ' + john.bmi + ' and is bigger than ' + john.fullName);
} else if (john.bmi > mark.bmi) {
	console.log(john.fullName + ' BMI is ' + john.bmi + ' and is bigger than ' + mark.fullName)
} else {
	console.log(john.fullName + ' and ' + mark.fullName + 'have the same BMI of ' + john.bmi);
}

