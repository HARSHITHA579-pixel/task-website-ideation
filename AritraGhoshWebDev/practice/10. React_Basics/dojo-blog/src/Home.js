// sfc - stateless functional component

import {useState} from 'react';
import BlogList from './BLogList';

const Home = () => {

    // let name = 'mario'; // the variable over here is not reactive
    // to make it reactive we use hook - useState
    // const [name, setName] = useState('mario'); // can use any data-type
    // const [age, setAge] = useState(25);
    // const handleClick = (e) => {
    //     console.log('hello, ninjas', e);
    // }
    // const handleClickAgain = (name, e) => {
    //     console.log('hello'+name, e.target);
    // }
    // const handleClick = () => {
    //     // name = 'luigi';
    //     // console.log(name);
    //     setName('luigi');
    //     setAge(30);
    // }

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);

    return (
        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button> */}

            {/* props to send data from parent component to child component -   1. makes it reusable, 
                2. data can be used in home component if needed */}

            <BlogList blogs={blogs} title="All Blogs!"/>

        </div>
    );
}
 
export default Home;