// sfc - stateless functional component

import {useState, useEffect} from 'react';
import BlogList from './BLogList';
import useFetch from './useFetch';

const Home = () => {

    //we could use arrays for destructuring but using objects the order of variables doesn't matter
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

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

    // const [blogs, setBlogs] = useState(null);
    // const [isPending, setIsPending] = useState(true);
    // const [error, setError] = useState(null);
    // const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(name);
    // }, [name]);
    // [] ensures useEffect runs once after 1st initial render

    /* useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    // console.log(res);
                    if(!res.ok)
                        throw Error('could not fetch the data');

                    return res.json();
                })
                .then((data) => {
                    // console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    // console.log(err.message);
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    }, []); */

    return (
        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button> */}

            {/* props to send data from parent component to child component -   1. makes it reusable, 
                2. data can be used in home component if needed */}

            {/* {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> } */}
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs!"/> */}

            {/* <button onClick={(() => setName('luigi'))}>Change Name</button>
            <p>{name}</p> */}

        </div>
    );
}
 
export default Home;