/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiBookmark3Fill } from "react-icons/ri";
import { BsFillGridFill, BsFillPersonFill } from "react-icons/bs";

const InstagramProfile = () => {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row lg:flex-col justify-around">
                <div className="flex justify-center align-middle self-center mt-10 md:mt-0 lg:mt-10">
                    <img
                        src="https://picsum.photos/200"
                        alt="profile picture"
                        className="rounded-full w-10 h-10 border-2 border-red-500"
                    />
                    <div className="text-center mt-1 mx-2">
                        <h1 className="text-sm font-bold">John Doe</h1>
                        <p className="text-gray-500 text-xs">@johndoe</p>
                    </div>
                </div>
                <div className="flex justify-center gap-4 mt-1 text-sm self-center text-gray-800">
                    <div className="flex flex-col items-center">
                        <span className="font-bold">210</span>
                        <span className="font-light">Posts</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold">15k</span>
                        <span className="font-light">Followers</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold">231</span>
                        <span className="font-light">Following</span>
                    </div>
                </div>
                <div className="flex justify-center mt-6 md:mt-0 lg:mt-6">
                    <button className="bg-blue-500 text-white py-2 px-5 rounded">
                        Follow
                    </button>
                </div>
            </div>
            <div className=" flex justify-center mt-5">
                <div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-black bg-opacity-0 hover:bg-opacity-100">
                        <img
                            src={`https://picsum.photos/200?random=${1}`}
                            alt={`Post ${1}`}
                            className="relative hover:opacity-30 hover: transition-all duration-200 ease-in-out"
                        >
                        </img>
                        <img
                            src={`https://picsum.photos/200?random=${2}`}
                            alt={`Post ${2}`}
                            className="relative hover:opacity-30 hover: transition-all duration-200 ease-in-out"
                        >
                        </img>
                        <img
                            src={`https://picsum.photos/200?random=${3}`}
                            alt={`Post ${3}`}
                            className="relative hover:opacity-30 hover: transition-all duration-200 ease-in-out"
                        >
                        </img>
                        <img
                            src={`https://picsum.photos/200?random=${4}`}
                            alt={`Post ${4}`}
                            className="relative hover:opacity-30 hover: transition-all duration-200 ease-in-out"
                        >
                        </img>


                    </div>


                </div>
                <div>


                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 bg-black bg-opacity-0 hover:bg-opacity-100">
                        <img
                            src={`https://picsum.photos/200?random=${5}`}
                            alt={`Post ${5}`}
                            className="relative hover:opacity-30 hover: transition-all duration-200 ease-in-out"
                        >
                        </img>
                        <img
                            src={`https://picsum.photos/200?random=${6}`}
                            alt={`Post ${6}`}
                            className="relative hover:opacity-30 hover: transition-all duration-200 ease-in-out"
                        >
                        </img>
                        <img
                            src={`https://picsum.photos/200?random=${7}`}
                            alt={`Post ${7}`}
                            className="relative hover:opacity-30 hover: transition-all duration-200 ease-in-out"
                        >
                        </img>
                        <img
                            src={`https://picsum.photos/200?random=${8}`}
                            alt={`Post ${8}`}
                            className="relative hover:opacity-30 hover: transition-all duration-200 ease-in-out"
                        >
                        </img>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default InstagramProfile;