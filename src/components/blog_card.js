import Image from "next/image";
import image1 from "../../src/assets/nature1.jpeg"
const BlogCard = ({title,i}) => {
    return ( 
        <div className="flex flex-col bg-white shadow-xl my-5 w-11/12">
            <img
                            key={i}
                            src={`https://picsum.photos/200?random=${i+8}`}
                            alt={`Post ${i}`}
                            className="h-40"
        
                        />
               <h2 className="text-lime-600 ps-2 py-2">
                Popular
               </h2>
               <hr class=" my-2  bg-gray-100 border-1 dark:bg-gray-400 px-2"></hr>
               <h1 className="text-orange-400 font-medium break-word px-2 py-2">
                {title}
               </h1>
               <hr class="my-2 bg-gray-200 border-1 dark:bg-gray-400 px-4"></hr>
               <p className="text-gray-500 font-light text-xs px-2" >+Explore</p>
               <div className="flex gap-2 py-2">
                <p className="text-gray-500 font-medium text-xs px-2">Things To Do</p>
                <p className="text-gray-500 font-medium text-xs px-2">Local Experience</p>
               </div>
        </div>
     );
}
 
export default BlogCard;