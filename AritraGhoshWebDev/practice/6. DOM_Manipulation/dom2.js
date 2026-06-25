// Objects
// Constructor function
class Car {
    constructor(maxSpeed, driver) {
        this.maxSpeed = maxSpeed;
        this.driver = driver;
        this.drive = function (speed, time) {
            console.log(speed * time);
        };
        this.logDriver = function () {
            console.log(`Driver name: ${this.driver}`);
        };
    }
}

/* let Car = function(maxSpeed, driver) {
        this.maxSpeed = maxSpeed;
        this.driver = driver;
        this.drive = function (speed, time) {
            console.log(speed * time);
        };
        this.logDriver = function () {
            console.log(`Driver name: ${this.driver}`);
        };
} */

let myCar = new Car(80, "Aritra");
myCar.logDriver();

// Date object
let date = new Date();
console.log(date);

let past = new Date(1545, 11, 2);
console.log(past);

let future = new Date(2545, 0, 26, 2, 10, 15);
console.log(future);


// Date Methods
let birthday = new Date(2005, 5, 26, 1, 29, 43);
// get the month of the date (0 - 11)
console.log(birthday.getMonth());
// get the full year (YYYY)
console.log(birthday.getFullYear());
// get the date of the month (1 - 31)
console.log(birthday.getDate());
// get the day of the week (0 - 6)
console.log(birthday.getDay());
// get the hour of the day (0 - 23)
console.log(birthday.getHours());
// get the number of milliseconds since 1 Jan 1970
console.log(birthday.getTime()); // useful for comparing dates


// to make sure no js is executed before html is loaded
window.onload = function() { // fires this function after all the HTML content is loaded - useful when the script link is at the head
    console.log("All contents are loaded.");
};