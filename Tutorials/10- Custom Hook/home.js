// custom hooks
// externalise the fetch to its own different file, and function
import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    // importing our custom hook
    // we name the data as blogs in this component 
    const {data: blogs, isPending, error} = useFetch('  http://localhost:8000/blogs');

    return (
        <div className="home">
        {isPending && <div> Loading... </div>}
        {error && <div> { error } </div>}
        {blogs && <BlogList blogs = {blogs} title={"These are the blogs"}/>}
        </div>
    );
}
 
export default Home;