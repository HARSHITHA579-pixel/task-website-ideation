// Arrays

let ninjas = ['shaun', 'ryu', 'chun-li'];
ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// Array Methods

// array to string with delimiter as parameter
let result = ninjas.join('-');
console.log(result);

result = ninjas.indexOf('chun-li');
console.log(result);

result = ninjas.concat(['ken', 'crystal']);
console.log(result);

// returns length of new array
result = ninjas.push('dyson');
console.log(result);

// pops off last element and returns it
result = ninjas.pop();
console.log(result);

// unintentional assignment of value
let age;
console.log(age, age+3, 'the age is ${age}');

// intentional 
let age = null;
console.log(age, age+3, 'the age is ${age}');


// Boolean
age = 25;
console.log(age == 25);
console.log(age == 20);
console.log(age > 20);
console.log(age < 30);
console.log(age != 44);
console.log(age <= 25);
console.log(age >= 25);

// loose comparison (different types can still be equal)
let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun'); // case-sensitive
console.log(name > 'crystal'); // s > c
console.log(age == '25');

// strict comparison (different types cannot be equal)
console.log(age === 25);
console.log(age === '25');
console.log(age !== '25');


// Type Conversion
let score = '100';
score = Number(score);
console.log(score+1);
console.log(typeof score);

let result = String(1000);
console.log(result, typeof result);

result = Boolean(100);
console.log(result, typeof result);

result = Boolean(0);
console.log(result, typeof result);

result = Boolean('0');
console.log(result, typeof result);

result = Boolean('');
console.log(result, typeof result);
