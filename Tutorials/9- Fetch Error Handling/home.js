// fetch error handling

import { useState, useEffect } from 'react';
import BlogList from './BlogList';

// output the error ron the broswer with state
const Home = () => {

    const[blogs, setBlogs] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    // check if the resource is not okay
    // throw an error
    // this is when faulty endpoints are used
useEffect(() => {
   fetch('http://localhost:8000/blogs')
   .then(res => {
       if(!res. ok) {
            throw Error("Could not fetch data");
       }
       return res.json();
   })
   .then(data => {
     setBlogs(data);
     setIsPending(false);
     setError(null);
   })
   //connection to the server error
   .catch(err => {
       setIsPending(false);
      setError(err.message);
   })
}, []);

    return (
        <div className="home">
        {isPending && <div> Loading... </div>}
        {error && <div> { error } </div>}
        {blogs && <BlogList blogs = {blogs} title={"These are the blogs"}/>}
        </div>
    );
}
 
export default Home;