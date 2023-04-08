import BlogCard from "@/components/blog_card";
import InstagramProfile from "@/components/instagram";

const Blogpage = () => {
    return ( 
      <div>

        <p className="ms-4 my-2 text-gray-400 font-bold">Home <span className="text-gray-900">{">"} Blog</span></p>
        <div className="grid grid-cols-1 lg:grid-cols-[10fr,4fr]">
  
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 px-5 grid-flow-row gap-2 place-content-around justify-items-center ">
            <BlogCard className="transition-all hover:scale-125 " i={1} tag1={"Best Beaches"} tag2={"Travel"} title={"& Must Try Local Experiences in Andamam"}/>
            <BlogCard className="transition-all hover:scale-125 " i={2} tag1={"Money"} tag2={"Travel"} title={"Top ten Andaman local street foods"}/>
            <BlogCard className="transition-all hover:scale-125 " i={3} tag1={"Things To Do"} tag2={"Travel"} title={"Top ten Andaman schools to study"}/>
            <BlogCard className="transition-all hover:scale-125 " i={4} tag1={"Holiday ideas"} tag2={"Travel"} title={"The best hotels and Restraunts in Andaman"}/>
            <BlogCard className="transition-all hover:scale-125 " i={5} tag1={"Water sports"} tag2={"Travel"} title={"WWE Performance center in Andaman for fighters"}/>
            <BlogCard className="transition-all hover:scale-125 " i={6} tag1={"Best Hotels"} tag2={"Travel"} title={"List of 5 Most Corrupt people of Andaman"}/>
            <BlogCard className="transition-all hover:scale-125 " i={9} tag1={"Hospitals"} tag2={"Travel"} title={"Best Night Clubs in Andaman"}/>
            <BlogCard className="transition-all hover:scale-125 " i={8} tag1={"Top Hotels"} tag2={"Travel"} title={"Cheapest Cap service in Andaman"}/>
            <BlogCard className="transition-all hover:scale-125 " i={7} tag1={"Eleswhere"} tag2={"Travel"} title={"Top 7 Malls in Andaman For you"}/>
        </div>
          
          <div className="w-full bg-white">
            <InstagramProfile/>
          </div>

        </div>
        </div>
     );
}
 
export default Blogpage;