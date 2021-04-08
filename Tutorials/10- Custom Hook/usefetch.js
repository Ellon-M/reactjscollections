// custom hook
// custom hooks always have to start with the word use, otherwise they won't work
// we also have to update all the state properties in this hook itself

import {useState, useEffect} from 'react';

// we pass the url as a parameter for useFetch
const useFetch = (url) => {

// since we are creating a custom fetch hook that can be used to fetch any kind of data, we change the blogs to data
// we also have to change the endpoint since it won't always be the same
    //const[blogs, setBlogs] = useState(null);
    const[data, setData] = useState(null)
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
// we pass the url also as a dependancy to useEffect so that means whenever the url changes its going to re-run this function so it gets data for the endpoint
    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res. ok) {
                 throw Error("Could not fetch data");
            }
            return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
            setIsPending(false);
           setError(err.message);
        })
     }, [url]);
     
     // we have to return some values from the hook
     // we return the hook properties
     return {data, isPending, error}
}

export default useFetch;