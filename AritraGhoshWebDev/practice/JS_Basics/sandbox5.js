// Objects - some properties & behaviour
// object literals
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }  
    ],
    login() {
        console.log('The user logged in');
    },
    logout() {
        console.log('The user logged out');
    },
    // arrow function is not used here because JS does not bind the 'this' keyword to arrow functions, so it would not work as expected in this context.
    logBlogs() {
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};
console.log(user);
console.log(user.name);
console.log(user['name']); // efficient
const key = 'email';
console.log(user[key]);
user.login();
user.logBlogs();
user.logout();

































