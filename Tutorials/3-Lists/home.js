// outputting lists
import { useState } from 'react';

const Home = () => {
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // we use the js map method which cycles through an array
    // the function cycles through each blog in the array blogs
    // When we output a list, using the map method, each root element in the template must have a key property. React uses this key property to keep track of each item in the DOM as it outputs so if data changes at any point, react can keep track
    // Otherwise react cannot distinguish btwn list items in the DOM
    // the key is normally the id property for each item since it must be unique
    return (
        <div className="home">

            {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p> Written by { blog.author }</p>
          </div>
            ))}
            
        </div>
    );
}
 
export default Home;