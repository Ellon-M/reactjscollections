// functions as props
// deleting blogs
// we don't want to directly edit the blogs prop..
// we define the delete function inside the home component so we can interact with the actual data directly

// Here we are invoking the handleDelete function that was defined inside the parent home component
const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;

    return ( 
       <div className="blog-list">
           <h2>{title}</h2>
           {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{ blog.title }</h2>
            <p> Written by { blog.author }</p>
            <button onClick={() => 
              handleDelete(blog.id)
            }>Delete Blog</button>
          </div>
            ))} 
       </div>
     );
}
 
export default BlogList;