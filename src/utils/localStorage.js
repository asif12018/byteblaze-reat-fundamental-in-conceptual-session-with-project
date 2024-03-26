import toast from "react-hot-toast";

const getBlogs = () =>{
    let blogs = localStorage.getItem('blogs');
    if(blogs){
        return JSON.parse(blogs)
    }
    return [];
}
//save to local storage
const saveToLocal = (blog) =>{
    const localBlog = getBlogs();
    localBlog.push(blog);
    localStorage.setItem('blogs',JSON.stringify(localBlog));
    toast.success('Blog Bookmarked Successfully')
}
//delete from local storage
const deleteBlog = id =>{
    let localBlog = getBlogs();
    const remaining = localBlog.filter(b=> b.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('blog removed from bookmark')
}

export {getBlogs,saveToLocal,deleteBlog}