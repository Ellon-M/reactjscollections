
import Navbar from './Navbar';
import Home from './Home';

// Root Component -- The first component that gets rendered to the DOM and it sits at the very top of our application


// Nest the components(Navbar and Home) into the root component
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content"> 
      <Home/>
      
      </div>
    </div>
  );
}

export default App;