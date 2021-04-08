// making programmatic redirects
// using the useHistory hook
import { useState } from "react";
import { useHistory } from 'react-router-dom';


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    // invoke the useHistory hook
    // this have methods that we can use to either go back through history, go forward through history and redirecting.. 
    //
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author };
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
           console.log('New blog added!');
           setIsPending(false);

               // going back through history one step
               // history.go(-1);

               // if we wanted to go forward we would use a positive integer instead

               // for redirects
               // redirects to homepage
               history.push('/');
        })

    }
     
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title:
                </label>
                <input type="text"
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:
                </label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:
                </label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
     );
}
 
export default Create;