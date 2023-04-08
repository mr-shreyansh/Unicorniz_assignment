import React, { useState } from 'react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css"

const DateBtn = () => {
    return (
        <>
            <div className='w-58 self-center'>
                <Datetime value={"DD/MM/YYYY"} className=" shadow border relative text-sm text-gray-400 h-10 p-2 w-64 rounded-lg box-border" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="relative left-52 -top-8 w-6 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>

            </div>

        </>
    );
}

export default DateBtn;