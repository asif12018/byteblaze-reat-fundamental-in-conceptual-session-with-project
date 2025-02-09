
import Loader from "../components/Loader";
import SingleBlogs from "./SingleBlogs";
import { useLoaderData, useNavigation } from "react-router-dom";


const Blogs = () => {
	// using navigation hook to use loader
    const navigation = useNavigation();
    const blogs = useLoaderData();
	//adding condition to use loader
    if(navigation.state == 'loading') return <Loader></Loader>
    return (
        <div>
            <section className="text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
			<img src={blogs[0].cover_image}alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-black">{blogs[0].title}</h3>
				<span className="text-xs text-black">{blogs[0].published_at}</span>
				<p className="text-black">{blogs[0].description}</p>
			</div>
		</a>


		<div className="border-2 p-1 grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

			{
                blogs.map((blog,index) =><SingleBlogs key={index} blog={blog}></SingleBlogs>)
            }
			
			
			
			
			
		</div>



		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400">Load more posts...</button>
		</div> */}
	</div>
</section>
        </div>
    );
};

export default Blogs;