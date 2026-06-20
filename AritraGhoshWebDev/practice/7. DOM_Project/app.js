let form = document.getElementById('input-form');
let list = document.getElementById('list');
let filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// delete item event
list.addEventListener('click', removeItem)

// filter event
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('add-item');

    // create new li element
    let li = document.createElement('li');
    li.className = 'item';
    li.appendChild(document.createTextNode(newItem.value));
    li.appendChild(document.createTextNode(" "));

    // delete button
    let delBtn = document.createElement('button');
    delBtn.className = 'delete';
    delBtn.appendChild(document.createTextNode('X'));
    li.appendChild(delBtn);
    list.appendChild(li);
}

// remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            let li = e.target.parentElement;
            list.removeChild(li);
        }
    }
}

// filter items
function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let items = list.getElementsByTagName('li');
    Array.from(items).forEach(item => {
        if(item.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}