// click events

const Home = () => {
    
    // event will be logged on the console
    const handleClick = (e) => {
       console.log(e);
    }
    
    // if our function takes in arguments
    const handleClickAgain = (name, e) => {
        console.log(e.target);
    }
    // note we don't call handleclick() with brackets since we don't want to invoke the function. We want to set a reference such that when the user clicks on it, the function is called
    // With the second button. We are simply creating an anonymous function, and when the user clicks the button its going to fire the function
    // With that we can wrap our handleClickAgain function in an anonymous function (which isn't firing) and when the button is clicked, it fires the anonymous function and invokes the handleClickAgain function that passes in the name
    // As for the event, the anonymous function gets access to the event. It is then passed in as an arguement, at any position. It is second in our case

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Don't click me</button>
            <button onClick={() => {}}>Please don't click me</button>
            <button onClick={(e) => 
              handleClickAgain('Mario', e)
            }>Pretty please don't click me</button>

        </div>
    );
}
 
export default Home;