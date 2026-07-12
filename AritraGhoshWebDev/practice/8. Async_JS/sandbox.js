// console.log(1);
// console.log(2);

// setTimeout(() => {
//     console.log('callback function fired');
// }, 2000);

// console.log(3);
// console.log(4);
// making it reusable
const getTodos = (resource, callback) => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest(); // XML => older data format used much before JSON arrived

        // track the progress of request
        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);

            if(request.readyState === 4 && request.status === 200) { // 4 => request is complete, 200 => success
                // console.log(request.responseText);
                // Takes JSON string and converts it into JS object
                const data = JSON.parse(request.responseText);

                // callback(undefined, data); // convention - error, data
                resolve(data);
            }
            else if(request.readyState === 4) {
                // console.log('could not fetch the data');
                // callback('could not fetch data', undefined);
                reject('error getting resource');
            }


        }); // fires everytime the state change in the request - 4 different phases of request

        // We don't know when the request is complete
        // https://jsonplaceholder.typicode.com/todos/ - gives fake data
    /*  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // setting up the request --- type of request, end-point */

        request.open('GET', resource); 
        request.send();
    });

};

getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved: ', data);
}).catch(err => {
    console.log('promise rejected: ', err);
});

console.log(1);
console.log(2);
console.log(3);
console.log(4);

//convention - error, data
// getTodos('todos/luigi.json', (err, data) => {
//     console.log('callback fired');
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }

//     getTodos('todos/mario.json', (err, data) => {
//         console.log('callback fired');
//         if(err) {
//             console.log(err);
//         }
//         else {
//             console.log(data);
//         }

//         getTodos('todos/shaun.json', (err, data) => {
//             console.log('callback fired');
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 console.log(data);
//             }
//         });
//     });
// });


// promise example

/* const getSomething = () => {

    // Promise is something that will basically take sometime to do and result in one of 2 outcomes - 1. Promise is resolved(getting requested data), 2. Promise is rejected(encountering error)
    // resolve & reject ae 2 built-in functions of Promise API
    return new Promise((resolve, reject) => {
        // fetch something
        resolve('some data');
        // reject('some error');
    });

} */

// then() will fire after getSomething() is executed - 1st parameter if resolved & 2nd parameter if rejected
// 1st format
/* getSomething().then((data) => {
    console.log('some data');
}, (err) => {
    console.log(err);
}); */

// 2nd method - better
/* getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

console.log(5);
console.log(6);
console.log(7);
console.log(8);
