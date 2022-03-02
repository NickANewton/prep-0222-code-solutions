const person = {
  firstName: 'Nick',
  lastName: 'Newton',
  hobby: 'gaming'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName + '.';
console.log("The person's name is:", fullName);

person.job = 'unemployed';
console.log("The person's current job is:", person.job + '.');

person.previousJob = 'Regional Sales Manager';
console.log("The person's previous job is:", person.previousJob + '.');

console.log(person);
