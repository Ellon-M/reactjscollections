// the props passed into BlogList need to be received in this function
// we grab the different properties in props and store them in variables
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return ( 
       <div className="blog-list">
           <h2>{title}</h2>
           {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p> Written by { blog.author }</p>
          </div>
            ))} 
       </div>
     );
}
 
export default BlogList;