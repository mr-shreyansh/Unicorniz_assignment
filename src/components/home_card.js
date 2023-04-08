import React from "react";
import Image from "next/image";
import Styles from "@/styles/home_card.module.css";

export const HomeCard = ({ heading, text, pic }) => {
    return (
        <div className={Styles.card}>
            <div className="flex">

                <div className={`${Styles.grid1} font-bold text-sm text-black mb-2 mt-4 flex-1 w-32 ps-5`}>{heading}</div>
                <Image className={`${Styles.grid2}`} src={pic} alt={heading} width={80} height={100} />
            </div>
            <div className={`${Styles.grid3} px-6 py-4 flex flex-col`}>
                <p className="text-gray-700 text-xs  mb-4 ">{text}</p>
                <button class="outline outline-offset-1 outline-1 outline-purple-400 hover:bg-purple-400 transition-all mb-1">
                   
                        Explore
                   
                </button>
            </div>
        </div>
    );
};

