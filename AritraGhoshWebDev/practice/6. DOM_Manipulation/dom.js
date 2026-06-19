// EXAMINE THE DOM //

// console.dir(document);
// console.log(document.all);
// console.log(document.forms[0]);
// console.log(document.links);
// onsole.log(document.images);

// SELECTORS
// getElementByID()
console.log(document.getElementById('output-list'));

// getElementsByClass()
let items = document.getElementsByClassName('item');
console.log(items);

// getElementsByTagName()
let containers = document.getElementsByTagName('div');
console.log(containers);

// querySelector()
let header = document.querySelector('#main-header');
let lastItem = document.querySelector('.item:nth-child(3)');
lastItem.style.color = 'blue';

// querySelectorAll()
items = document.querySelectorAll('.item');
console.log(items); // we can run array functions on nodelist

// TRAVERSING THE DOM //
let itemList = document.querySelector('#list'); 

// parent 
console.log(itemList.parentNode);
console.log(itemList.parentElement);

// child
console.log(itemList.childNodes); // with text nodes - Node List
console.log(itemList.firstChild); // useless
console.log(itemList.lastChild); // useless
console.log(itemList.children); // only elements - HTML Collection
console.log(itemList.firstElementChild);
console.log(itemList.lastElementChild);

itemList.children[1].style.backgroundColor = 'yellow';

// sibling
console.log(itemList.nextSibling); // useless
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling); // useless
console.log(itemList.previousElementSibling);

// createElement
let newDiv = document.createElement('div');
// class
newDiv.className = 'hello';
// id
newDiv.id = 'hello1';
// atttribute
newDiv.setAttribute('title', 'Hello Div');
// text node
let textNode = document.createTextNode('Hello World');
// append
newDiv.appendChild(textNode);
console.log(newDiv);
let heading = document.querySelector('h1');
newDiv.style.fontSize = '100px';
header.insertBefore(newDiv, heading);
