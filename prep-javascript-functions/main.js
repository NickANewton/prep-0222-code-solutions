function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return '"Hello ' + name + '!"';
}

var greeting = getGreeting('World');
console.log('greeting', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var resultAM = addAndMultiplyBy5(10, 5);
console.log('result Add and Multiply', resultAM);

function mulitplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var resultAD = mulitplyAndDivideBy5(35, 10);
console.log('result Multiply and Divide', resultAD);

function subractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subractTwoNumbers(22, 7);
console.log('result Subtract', subtract);

function getCircleCircumference(radius) {
  return (2 * Math.PI) * radius;
}

var circumference = getCircleCircumference(5);
console.log('result Circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var name = getFullName('Juan', 'Ramirez');
console.log('name', '"' + name + '"');

function cube(number) {
  return Math.pow(number, 3);
}

var resultCube = cube(5);
console.log('result Cube', resultCube);
