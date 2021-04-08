import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // handle delete

    const handleDelete = (id) => {
    // filter the blogs array
    // the filter function does not change the array, it returns a new one based on it
    // we return true if the blog id does not match the id of the deleted blog
    // The new array is then stored in newBlogs
    const newBlogs = blogs.filter(blog => blog.id !== id );

    // then we want to set the blogs with the setBlogs function so that it corresponds to the newBlogs
    setBlogs(newBlogs);

    }

    // we pass the handleDelete function as a prop
    // create a prop called handleDelete and set it equal to the handleDelete function
    return (
        <div className="home">
        <BlogList blogs = {blogs} title={"These are the blogs"} handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;