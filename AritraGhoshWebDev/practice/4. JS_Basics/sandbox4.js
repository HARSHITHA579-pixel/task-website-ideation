// function declaration - js hoists it on the top of the file i.e. you can declare the function anywhere and access it from anywhere
function greet() {
    console.log('hello there');
}

// function expression - hoisting is not supported here
const speak = function(name='human', time='day') //prameters 
{
    console.log(`good ${time}, ${name}!`);
};

/* const calcArea = function(radius) {
    return 3.14*radius**2;
}; */

// arrow function
const calcArea = radius => 3.14*radius**2;


greet();
speak('mario', 'morning'); // arguments
const area = calcArea(5);
console.log(area);

// ----------------------------------
const a_greet = () => 'hello world';
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i]*(1+tax);
    }
    return total;
};

console.log(bill([10, 15, 30], 0.2));
 
// methods - associated with object
console.log('hello'.toUpperCase());

// callbacks & foreach
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    console.log(value);
});


// forEach
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

people.forEach((person, index) => {
    console.log(index, person);
});

const ul = document.querySelector('.people');
let html = ``;
people.forEach((person) => {
    html += `<li style="color:purple">${person}</li>`;
});

ul.innerHTML = html;