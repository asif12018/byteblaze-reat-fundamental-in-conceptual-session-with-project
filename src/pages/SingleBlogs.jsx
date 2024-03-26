/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import notFound from '../assets/404.jpg';
import moment from 'moment';
moment().format();

const SingleBlogs = ({blog,deletable, deleteBlog}) => {
    
    const {id, title,description,readable_publish_date,cover_image,published_at,tags} = blog;
    
	
	
    
    return (
       <>
	   <Link to={deletable || `/blogs/${id}`} className={deletable ? "ease-in duration-300 border-2  border-primary hover:border-secondary border-opacity-30 ":"ease-in duration-300 border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 relative"}>
        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline ">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || notFound} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-black">{title}</h3>
					<span className="text-xs text-black">{published_at}</span>
					<p className="text-black">{description}</p>
				</div>
				
			</a>
			{deletable && <div onClick={()=>deleteBlog(id)} className="absolute bg-primary p-2 rounded-full"><MdDelete size={30}  className="text-secondary group-hover:text-primary"/></div>}
			</Link>
			
             
			</>
    );
};


export default SingleBlogs;