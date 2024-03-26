import { useEffect, useState } from "react";
import { getBlogs } from "../utils/localStorage";
import SingleBlogs from "./SingleBlogs";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        const storedBlog = getBlogs();
        setBlogs(storedBlog)
    },[]);
    const deleteBlog = (id) =>{
		deleteBlog(id);
        const storedBlog = getBlogs();
        setBlogs(storedBlog)
	}
    return (
        <div className="border-2 p-1 grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-14">
            {
                blogs.map((blog,index) =><SingleBlogs  deleteBlog={deleteBlog} key={index} blog={blog} deletable={true}></SingleBlogs>)
            }
        </div>
    );
};

export default Bookmarks;