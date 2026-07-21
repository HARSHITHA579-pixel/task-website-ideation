// sfc - stateless functional component

import {useState} from 'react';

const Home = () => {

    // let name = 'mario'; // the variable over here is not reactive
    // to make it reactive we use hook - useState
    const [name, setName] = useState('mario'); // can use any data-type
    const [age, setAge] = useState(25);
    // const handleClick = (e) => {
    //     console.log('hello, ninjas', e);
    // }
    // const handleClickAgain = (name, e) => {
    //     console.log('hello'+name, e.target);
    // }
    const handleClick = () => {
        // name = 'luigi';
        // console.log(name);
        setName('luigi');
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button> */}
        </div>
    );
}
 
export default Home;