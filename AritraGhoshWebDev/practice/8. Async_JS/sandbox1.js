// fetch api

// previously used old xml http requests object, now using new & quicker way using native fetch api built into the language

// fetch ( argument(endpoint-to-api-or-local-resource) ) -- returns a promise
// response obj & err obj

/* fetch('todos/luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json(); // gets us the data and parses it - returns a promise
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
}); */

// promise is rejected only when we get a network error / we can't reach the api for some reason - so we need to check for status (404)

// async & wait - chain promises together in a much more clean & readable way

// set all our asynchronous code in one function & use the await keyword inside to chain promises together

// this function returns a promise
const getTodos = async () => {
    // await stalls JS until the promise is resolved and then assigns to response
    const response = await fetch('todos/luigi.json');
    // console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

// const test = getTodos();
// console.log(test); // <- test is a promise

console.log(1);
console.log(2);
console.log(3);
console.log(4);
getTodos()
    .then(data => console.log('resolved: ', data));
console.log(5);
console.log(6);
console.log(7);
console.log(8);