import Image from "next/image";
import image1 from "../../src/assets/nature1.jpeg"
const BlogCard = ({title,i,tag1,tag2}) => {
    return ( 
        <div className="flex flex-col bg-white shadow-xl my-5 w-11/12 transition-all hover:-translate-y-1 max-h-[400px] max-w-[320px] box-border">
            <img
                            key={i}
                            src={`https://picsum.photos/200?random=${i+8}`}
                            alt={`Post ${i}`}
                            className="h-36"
        
                        />
               <h2 className="text-lime-600 text-xs ps-2 py-1">
                Popular
               </h2>
               <hr class=" my-2  bg-gray-100 border-1 dark:bg-gray-400 "></hr>
               <h1 className="text-orange-400 font-medium break-word px-2 py-2">
                {title}
               </h1>
               <hr class="my-2 bg-gray-200 border-1 dark:bg-gray-400 px-4"></hr>
               <div className="flex flex-col md:flex-row gap-2 py-2">
               <p className="text-gray-500 font-light text-xs px-2 mb-1" >+Explore</p>
                <p className="text-gray-500 hidden md:inline font-sm text-xs bg-gray-100 rounded-lg px-2 mb-1">{tag1}</p>
                <p className="text-gray-500 hidden md:inline font-sm text-xs bg-gray-100 rounded-lg px-2  mb-1">{tag2}</p>
               </div>
        </div>
     );
}
 
export default BlogCard;