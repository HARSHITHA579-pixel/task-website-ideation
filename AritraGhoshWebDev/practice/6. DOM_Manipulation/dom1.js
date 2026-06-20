// EVENT LISTENER //
let button = document.getElementById('button');
// button.addEventListener('click', buttonClick);

function buttonClick(e) {
    console.log("Button clicked");
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);
    console.log(e.type);
    // wrt to window
    console.log(e.clientX); 
    console.log(e.clientY);
    // wrt element
    console.log(e.offsetX);
    console.log(e.offsetY);
    // alt, ctrl, shift + click
    console.log(e.altKey);
    console.log(e.ctrlKey);
    console.log(e.shiftKey);
}

// other types of events
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);

let box = document.getElementById('box');
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // fires when enters inner element
// box.addEventListener('mouseout', runEvent); // fires when leaving the inner element
box.addEventListener('mousemove', runEvent); 

let inputText = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

// inputText.addEventListener('keydown', runEvent);
// inputText.addEventListener('keyup', runEvent);
// inputText.addEventListener('keypress', runEvent);
// inputText.addEventListener('focus', runEvent);
// inputText.addEventListener('blur', runEvent);
// inputText.addEventListener('cut', runEvent);
// inputText.addEventListener('paste', runEvent);
inputText.addEventListener('input', runEvent);

let select = document.querySelector('select');
select.addEventListener('change', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log(`Event Type: ${e.type}`);
    box.style.backgroundColor = `rgb(${e.offsetX%256}, ${e.offsetY%256}, 50)`;

    console.log(e.target.value);
}

