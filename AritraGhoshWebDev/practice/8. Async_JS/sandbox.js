// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);
// making it reusable
const getTodos = (callback) => {
    const request = new XMLHttpRequest(); // XML => older data format used much before JSON arrived

    // track the progress of request
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200) { // 4 => request is complete, 200 => success
            // console.log(request.responseText);
            callback(undefined, request.responseText);
        }
        else if(request.readyState === 4) {
            // console.log('could not fetch the data');
            callback('could not fetch data', undefined);
        }


    }); // fires everytime the state change in the request - 4 different phases of request

    // We don't know when the request is complete
    // https://jsonplaceholder.typicode.com/todos/ - gives fake data
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // setting up the request --- type of request, end-point
    request.send();
}

console.log(1);
console.log(2);
console.log(3);
console.log(4);

//convention - error, data
getTodos((err, data) => {
    console.log('callback fired');
    if(err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

console.log(5);
console.log(6);
console.log(7);
console.log(8);
