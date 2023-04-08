import React from "react";
import Image from "next/image";
import Styles from "@/styles/home_card.module.css";

export const HomeCard = ({ heading, text, pic }) => {
    return (
        <div className={Styles.card}>
            <div className="flex">
                <div className="font-bold text-xl text-black mb-2 mt-4 flex-1 w-32 ps-5">{heading}</div>
                <Image className="flex-1 w-32" src={pic} alt={heading} width={50} height={50} />
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base  mb-4 ">{text}</p>
                <button class="relative inline-flex items-center  justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-black-900 rounded-lg group bg-gradient-to-br from-purple-600 to-purple-500 group-hover:from-purple-200 group-hover:to-purple-100 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span class="relative px-5 py-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                        Explore
                    </span>
                </button>
            </div>
        </div>
    );
};

