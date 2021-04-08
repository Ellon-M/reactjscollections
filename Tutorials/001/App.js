import './App.css';


// Root component

// The syntax used is known as JSX, and in the background a transplier called babel converts all the jsx code to html, then renders it to the DOM
// JSX uses camelCase unlike html.. eg: className

function App() {
  // we can define strings, numbers,arrays, but not objects, since react cannot return them 
   const title = 'Welcome to the blog';
   const likes = 500;
   const link = "http://google.com";
   
   // we wrap them in curly braces so react knows that they are dymanic values
   // we can also use these dymamic values as attribute values in element tags
  return (
    <div className="App">
      <div className="content"> 
      <h1> {title} </h1> 
      <p> Liked {likes} times </p>
      <p> {[1,2,3,4,5]} </p>
      <p> {Math.random() * 10} </p>
      <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;