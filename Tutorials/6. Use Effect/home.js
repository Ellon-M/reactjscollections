// use Effect Hook
// It runs a function every render of the component
// A component renders initially after it loads and updates everything to the DOM, and it also renders everytime when the state changes
// So the useEffect hook is a way to run code after every render
//We import it, just like useState

import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
 
    const newBlogs = blogs.filter(blog => blog.id !== id );
    setBlogs(newBlogs);
    }


// useEffect hook in use
// it does what react calls side effects
// the function fires on every render, so eg, if the delete button is clicked and handleDelete is invoked, the template re-renders after useState and the useEffect hook is fired as a result
// Because of this, we have to be careful to avoid being in a continous loop of renders when changing the state in the useEffect hook
// This is because it fires after every change in state, and it would, in this case, be the function itself that triggers the change in state 
// So this continous triggers of the function, triggers continous re-renders, and you end up in a loop  
useEffect(() => {

})


    return (
        <div className="home">
        <BlogList blogs = {blogs} title={"These are the blogs"} handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;