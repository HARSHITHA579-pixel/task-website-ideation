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