// props
import { useState } from 'react';
import BlogList from './BlogList';


// props will pass the blogs data from Home to BlogList
// props enhance reusability

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // we pass a property name to the Bloglist component
    // The blogs are being passed to the BlogList component as props
    // We can pass in as many props as we like
    return (
        <div className="home">
        <BlogList blogs = {blogs} title={"These are the blogs"}/>
        </div>
    );
}
 
export default Home;