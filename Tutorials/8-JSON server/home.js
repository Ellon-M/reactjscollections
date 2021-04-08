// using JSON server
// we use the json server as a fake db in this case
// fetching data using useEffect
// we have the empty dependancy in the useEffect hook thus the fetch function will only run once when the component first renders
import { useState, useEffect } from 'react';
import BlogList from './BlogList';

// conditonal loading message (when/if fetch takes time)

const Home = () => {
    // set the initial value of the state to null
    // then afterwards setBlogs will set the state to the current state after fetching the data from the json file
    const[blogs, setBlogs] = useState(null);

    //loading... 
    const[isPending, setIsPending] = useState(true);

    // fetch request
    // returns to us a promise
    // with a response that parses the json into a javascript object
    // the return also becomes a promise since it takes time to do
    // this then gets the data
    // setBlogs function sets the data from the json file to the blogs property
useEffect(() => {
   fetch('http://localhost:8000/blogs')
   .then(res => {
       return res.json()
   })
   .then(data => {
     setBlogs(data);
     setIsPending(false);
   })
}, []);

// the initial value of blogs is null therefore until the blogs prop has the data, it will bring an error
// we add the curly braces around bloglist and add some conditional templating using logical and.. (&&)
// curly braces enable us to write javascript code inside the jsx syntax
// How logical 'and' works is that if the first condition evaluates to false, the next condition is overlooked. If the first condition is true, it moves on to evaluate the second one
    return (
        <div className="home">
        {isPending && <div> Loading... </div>}
        {blogs && <BlogList blogs = {blogs} title={"These are the blogs"}/>}
        </div>
    );
}
 
export default Home;