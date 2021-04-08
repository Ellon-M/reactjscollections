// useEffect dependancies

import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // new State
    const[name, setName] = useState("Mario");

    const handleDelete = (id) => {
 
    const newBlogs = blogs.filter(blog => blog.id !== id );
    setBlogs(newBlogs);
    }



 // we use dependancy arrays when we do not want to fire the useEffect hook on every single render- only on some
 // Its an array that we can pass to the hook as an arguement
   
useEffect(() => {
   console.log('Heyyy');
}, []);

// the empty dependancy array passed as a second arguement makes sure that the hook only runs on the initial render of the components, and if the state changes thereafter, it makes sure that the hook doesn't run



// adding actual dependancies on the array

// we want to run the function when the state changes at the beginning, but also only when we click the change name button, when the state of the name changes, and not the delete blogs button, when the blogs state change
// so the name becomes a dependancy which we add in the second arguement

useEffect(() => {
    console.log(name);
 }, [name]);


    return (
        <div className="home">
        <BlogList blogs = {blogs} title={"These are the blogs"} handleDelete={handleDelete}/>
        <button onClick={() => {
           setName("Luiz") 
        }}>Change Name</button>
        <p>{ name }</p>
        </div>
    );
}
 
export default Home;