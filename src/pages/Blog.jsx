/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useNavigation, useParams } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { getBlogs, saveToLocal } from "../utils/localStorage";


const Blog = () => {
    const blog = useLoaderData();
    const { id, title, description, readable_publish_date, cover_image, published_at, reading_time_minutes, comments_count,
        public_reactions_count
    } = blog;
    const handleBookmark = blog =>{
        const localBlog = getBlogs();
        const isExist = localBlog.find(blogx => blogx.id == blog.id);
        if(!isExist){
            saveToLocal(blog);
        }
    }
    
    const [tabIndex, setTabIndex] = useState(0)
    
    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 ">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
                        <p className="text-sm">{reading_time_minutes} min read</p>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {
                            public_reactions_count}</p>
                    </div>

                </div>


                {/* this is nested nav */}



                <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  ">
                    <Link to={''} onClick={()=>setTabIndex(0)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex == 0 ? 'border border-b-0 ':'border-b'}rounded-t-lg`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Content</span>
                    </Link>
                    <Link to={`author`}  onClick={()=>setTabIndex(1)}  className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex == 1 ? 'border border-b-0 ':'border-b'}rounded-t-lg`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Author</span>
                    </Link>
                    {/* bookmark button */}

                    <div onClick={()=>handleBookmark(blog)} className="transition bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden">
                    <MdBookmarkAdd size={20} className="text-secondary"/>
                    </div>
                </div>
                

                {/* end of nested */}


                <div className="">
                    <p>{description}</p>
                </div>
                <Outlet></Outlet>
            </article>
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 ">#MambaUI</a>
                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 ">#TailwindCSS</a>
                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 ">#Angular</a>
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Related posts</h4>
                    <ul className="ml-4 space-y-1 list-disc">
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;