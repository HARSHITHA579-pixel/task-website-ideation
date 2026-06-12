// for loops
const names = ['shaun', 'mario', 'luigi']
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// while loops
let i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// do while loops
i = 5;
do {
    console.log('Value of i is: ', i);
    i++;
} while(i < 5);

// if statements
const age = 25;
if(age > 20) {
    console.log('You are over 20');
}

// if else statements
if(age > 30) {
    console.log('You are over 30');
} else {
    console.log('You are under 30');
}

// else if statements
if(age > 30) {
    console.log('You are over 30');
} else if(age > 20) {
    console.log('You are over 20 but not over 30');
} else {
    console.log('You are not over 20');
}