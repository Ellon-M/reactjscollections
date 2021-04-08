// Using state
// Clicking a button that will change the name given

import { useState } from 'react';

const Home = () => {
 // let name = 'Mario';

 // Using the state hook
 // hooks in react always start with the word use
 // The useState hook provides us a way to make a reactive value
 // it has to be imported from the react library

 // we use array destructuring to store the values that the hook returns to us 
 // We store two values. The first being the initial value before state, and the second is the function that will be used to change that value

 const [name, setName] = useState('Mario');

    const handleClick = () => {
      // if we simply just change the variable name from Mario to something else in this function, it would change, and console.logging the name would confirm that, but it will not change the original name in the template 
      // That is because the name defined at the top, is not reactive, meaning it doesn't trigger react to re-render the template

      // using the state hook
      setName('Omar'); // reactive value
    }
    
    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Don't click me</button>
            <p>{name}</p>
        </div>
    );
}
 
export default Home;