function login() {
const user = document.getElementById("username").value.trim();
const pass = document.getElementById("password").value.trim();
if (user === "" || pass === "") {
document.getElementById("error").textContent = "All fields required";
return;
}
localStorage.setItem("loggedIn", "true");
window.location.href = "Proj.html";
}


const form = document.getElementById("contactForm")
const errorMsg = document.getElementById("errorMsg")

if (form) {
form.addEventListener("submit", function(e) {
e.preventDefault()

const name = document.getElementById("name").value.trim()
const email = document.getElementById("email").value.trim()
const subject = document.getElementById("subject").value.trim()
const content = document.getElementById("content").value.trim()
const emPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

if (name === "") {
errorMsg.textContent = "Name cannot be empty"
return
}

if (!emPat.test(email)) {
errorMsg.textContent = "Enter a valid email address"
return
}

if (subject === "") {
errorMsg.textContent = "Subject cannot be empty"
return
}

if (content === "") {
errorMsg.textContent = "Content cannot be empty"
return
}

errorMsg.style.color = "green"
errorMsg.textContent = "Form Submitted!"

form.reset()
})
}

const items = [
{
id:1,
title:"The Catcher in the Rye",
price:10,
image:"book1.jpg"
},
{
id:2,
title:"The Boy in the Striped Pajamas",
price:10,
image:"book2.jpg"
},
{
id:3,
title:"The Complete Harry Potter Collection",
price:40,
image:"book3.jpg"
},
{
id:4,
title:"Three Men on a Boat",
price:20,
image:"book4.jpg"
},
{
id:5,
title:"The Fault in our Stars",
price:20,
image:"book5.jpg"
}
]

const grid = document.getElementById("values")
const cartVal = document.getElementById("cartVal")
function getCart() {
return JSON.parse(localStorage.getItem("cart")) || []
}

function saveCart(cart) {
localStorage.setItem("cart", JSON.stringify(cart))
}

function removeItem(index) {
let cart = getCart()

cart.splice(index, 1)   // remove item at index

saveCart(cart)
renderCart()
updateCartCount()
}

function showBooks(bookList)
{
if(!grid) return
grid.innerHTML=""
bookList.forEach(book=>{
const listing = document.createElement("div")
listing.className="itemdet"
listing.innerHTML=`
<a href="book${book.id}.html" class="book-link">
<img src="${book.image}">
<div class="title">${book.title}</div>
<div class="price">$${book.price}</div>
</a>
<button onclick="addToCart(${book.id})">Add to Cart</button>
`
grid.appendChild(listing)
}
)
}

function addToCart(id){
let cart = getCart()
const book = items.find(item => item.id === id)
cart.push(book)
saveCart(cart)
updateCartCount()
}

function updateCartCount() {
let cart = getCart()
if(cartVal)
{
cartVal.textContent = cart.length
}
}

const SI=document.getElementById("search")
if(SI)
{
SI.addEventListener("input",function(){
const value = this.value.toLowerCase()
const filtered = items.filter(book =>
book.title.toLowerCase().includes(value)
)
showBooks(filtered)
}
)
}
const cartItemsDiv = document.getElementById("cartItems")
const totalDiv = document.getElementById("total")

function renderCart() {
if (!cartItemsDiv) return

let cart = getCart()
cartItemsDiv.innerHTML = ""
let total = 0

if (cart.length === 0) {
cartItemsDiv.innerHTML = "<p>No Items Added Yet</p>"
if (totalDiv) totalDiv.textContent = ""
return
}

cart.forEach((book, index) => {
total += book.price

const div = document.createElement("div")
div.className = "itemdet"

div.innerHTML = `
<h3>${book.title}</h3>
<p>Price: $${book.price}</p>
<button onclick="removeItem(${index})">Remove</button>
`

cartItemsDiv.appendChild(div)
})

if (totalDiv) {
totalDiv.textContent = "Total: $" + total
}
}
showBooks(items)
renderCart()
updateCartCount()

