// The process of reaching into the DOM and getting a refeence of node - Querying into the DOM
// to select one
let para = document.querySelector('p');
console.log(para);
para = document.querySelector('.error');
console.log(para);
para = document.querySelector('div.error');
console.log(para);
// to select multiple
// not an array but a nodelist with indexing and forEach applicable
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);
});

/* const errors = document.querySelectorAll('.error');
errors.forEach(error => {
    console.log(error);
}); */

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);

// get elements by their tag name
const paras2 = document.getElementsByTagName('p');
console.log(paras2);

// --------------------------------------

para = document.querySelector('p');
console.log(para.innerText);
para.innerText = 'ninjas are awesome';
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
});

let content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML += '<h2>This is a new heading</h2>';

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

// --------------------------------------

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: green');
msg.innerText = 'This is a success message';

//setAttribute overwrites the property
title.style.margin = '50px';
title.style.fontSize = '60px';

// --------------------------------------
// change class

content = document.querySelector('p');
console.log(content.classList);
content.classList.remove('success')
content.classList.add('error');


