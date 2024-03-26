/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import notFound from '../assets/404.jpg'
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData();
    const { id, title, description, readable_publish_date, cover_image, published_at, reading_time_minutes, comments_count,
        public_reactions_count,body_html
    } = blog;
    return (
        <div to={`/blogs/${id}`} className=" border-2   ">
        <div rel="noopener noreferrer" href="#" className=" mx-auto group ">
				<img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || notFound} />
				<div className=" space-y-2">
					<h3 className="text-2xl font-semibold  text-black">{title}</h3>
					<Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
				</div>
			</div>
            </div>
    );
};

export default Content;