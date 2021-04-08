// using snippets
// type sfc.. creates a stateless functional component
// the double curly braces in style are one to show that it is a dynamic value and two.. to show that it is a JS object
// inside the braces we can pass in our key-value pairs
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
             <a href="/">Home</a>
             <a href="/create" style= {{
                 color: "white",
                 backgroundColor: '#f1356d',
                 borderRadius: '8px'
             }}>
                 New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;