// fetch api

// previously used old xml http requests object, now using new & quicker way using native fetch api built into the language

// fetch ( argument(endpoint-to-api-or-local-resource) ) -- returns a promise
// response obj & err obj
fetch('todos/luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json(); // gets us the data and parses it - returns a promise
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});
// promise is rejected only when we get a network error / we can't reach the api for some reason - so we need to check for status (404)