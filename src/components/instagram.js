/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { RiBookmark3Fill } from "react-icons/ri";
import { BsFillGridFill, BsFillPersonFill } from "react-icons/bs";

const InstagramProfile = () => {
    return (
        <div className="">
            <div className="flex justify-center align-middle mt-10">
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
            <div className="flex justify-center gap-4 mt-1 text-sm text-gray-800">
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
            <div className="flex justify-center mt-6">
                <button className="bg-blue-500 text-white py-2 px-5 rounded">
                    Follow
                </button>
            </div>
            <div className=" flex justify-center mt-5">
                <div>

                    {[...Array(4)].map((_, i) => (
                        <img
                            key={i}
                            src={`https://picsum.photos/200?random=${i}`}
                            alt={`Post ${i}`}
                            className=""
                        />
                    ))}
                </div>
                <div>

                    {[...Array(4)].map((_, i) => (
                        <img
                            key={i}
                            src={`https://picsum.photos/200?random=${i+8}`}
                            alt={`Post ${i}`}
                            className=""
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InstagramProfile;