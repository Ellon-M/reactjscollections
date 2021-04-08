import { useState } from "react";

const Create = () => {

    // we want to keep track of user input/ what a user types in a field
    // we need to track the value that the user inputs into the field and store it in some state inside this component, so we can do something with that data later

    // we set the initial value of this to some empty string
    const [title, setTitle] = useState('');

    // we use the onChange event so that whenever the user tries to enter text into the title field, the state of the title that's passed into the value of the input also changes
    // we invoke setTitle, so we change the title when we change the input value
    // The input field targets the value of the its events and syncs it with the setTitle function which updates the state of the title from the initial empty string to whatever input the user gives
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form>
                <label>Blog Title:
                </label>
                <input type="text"
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:
                </label>
                <textarea required></textarea>
                <label>Blog Author:
                </label>
                <select>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;