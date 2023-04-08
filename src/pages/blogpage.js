import BlogCard from "@/components/blog_card";
import InstagramProfile from "@/components/instagram";


const Blogpage = () => {
    return ( 
      <div>
        <p className="ms-4 my-2 text-gray-400 font-bold">Home <span className="text-gray-900">{">"} Blog</span></p>
        <div className="grid grid-cols-1 md:grid-cols-[10fr,4fr]">
  
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 px-5 grid-flow-row gap-2 place-content-around justify-items-center ">
            <BlogCard className="" i={1} title={"& Must Try Local Experiences in Andamam"}/>
            <BlogCard className="" i={2} title={"Top ten Andaman local street foods"}/>
            <BlogCard className="" i={3} title={"Top ten Andaman schools to study"}/>
            <BlogCard className="" i={4} title={"The best hotels and Restraunts in Andaman"}/>
            <BlogCard className="" i={5} title={"WWE Performance center in Andaman for fighters"}/>
            <BlogCard className="" i={6} title={"List of 5 Most Corrupt people of Andaman"}/>
            <BlogCard className="" i={9} title={"Best Night Clubs in Andaman"}/>
            <BlogCard className="" i={8} title={"Cheapest Cap service in Andaman"}/>
            <BlogCard className="" i={7} title={"Top 7 Malls in Andaman For you"}/>
        </div>
          
          <div className="w-full bg-white">
            <InstagramProfile/>
          </div>

        </div>
        </div>
     );
}
 
export default Blogpage;