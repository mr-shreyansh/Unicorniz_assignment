import Image from "next/image";
import React from "react";

const InfoCard = ({i}) => {
  return (
    <div className="relative flex flex-row  shadow-lg overflow-hidden w-72 h-22 my-8 rounded-xl hover:-translate-y-1 cursor-pointer transition-all">
       <div><img src={`https://picsum.photos/200?random=${i}`} alt="random"/></div>
       <div className="flex flex-col justify-around ">
       <hr class="h-px my-1 bg-gray-200 border-0 " />
        <p className="text-sm text-orange-500 ps-3">
            Lorem ipsum sit consectet adipisicing elit. Quisquam
        </p>
        <hr class="h-px my-1 bg-gray-200 border-0 " />
        <h2 className="text-xs font-light text-gray-700 ps-3">
            ＋Explore
        </h2>
       </div>
    </div>
  );
};

export default InfoCard;
