import { useState } from 'react';
import DateBtn from './datepicker';
// import "react-datetime/css/react-datetime.css"
function FormCard() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleIncrement2 = () => {
        setCount2(count2 + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    }; 
    const handleDecrement2 = () => {
        setCount2(count2 - 1);
    }; 


    return (
        <div className="max-w-xl bg-white m-5 min-h-[450px] flex flex-col justify-around p-4 ">
            <div className='flex flex-col w-40 sm:w-full sm:flex-row justify-around'>
                <h1 className='text-sm text-gray-800 self-center'>Select Passengers</h1>
                <div className='mx-2'>
                    <p className='text-gray-400 text-sm font-bold'>Adults<span className='text-gray-400 text-xs font-light'>{"(Above 1 year)"}</span></p>
                    <div className='rounded bg-gray-200 flex justify-around w-26 box-border'>
                        <button onClick={handleDecrement} className='px-4 mx-0 w-14 h-12 box-border text-3xl active:text-red-500 transition-all'>-</button>
                        <span className='bg-white px-6 py-2 box-border'>{count}</span>
                        <button onClick={handleIncrement} className='px-4 mx-0 w-14 h-12 box-border text-2xl active:text-green-500 transition-all'>+</button>
                    </div>

                </div>
                <div>
                    <p className='text-gray-400 text-sm font-bold'>Infants<span className='text-gray-400 text-xs font-light'>{"(Below 12 months)"}</span></p>
                    <div className='rounded bg-gray-200 flex justify-around box-border'>
                        <button onClick={handleDecrement2} className='px-4 mx-0 w-14 h-12 box-border text-3xl active:text-red-400 transition-all'>-</button>
                        <span className='bg-white px-6 py-2'>{count2}</span>
                        <button onClick={handleIncrement2} className='px-4 mx-0 w-14 h-12 box-border text-2xl active:text-green-500 transition-all'>+</button>
                    </div>

                </div>
            </div>
            <hr class="h-px my-4 bg-gray-200 border-0 " />
            <div className='mt-1'>
                <h1>Select Trips{"(s)"}</h1>
                <h1>Trip 1 <span><hr class="h-px my-1 bg-gray-200 border-0 " /></span></h1>
                <div className='flex flex-col md:flex-row justify-around gap-3'>
                    <div>
                        <p className='font-light text-sm text-gray-500'>From</p>
                        <select id="countries" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 transition-all">
                            <option className='text-gray-500' selected>Choose a country</option>
                            <option className='text-gray-500' value="US">United States</option>
                            <option className='text-gray-500' value="CA">Canada</option>
                            <option className='text-gray-500' value="FR">France</option>
                            <option className='text-gray-500' value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <p className='font-light text-sm text-gray-500'>To</p>
                        <select id="countries" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 ">
                            <option className='text-gray-500' selected>Choose a country</option>
                            <option className='text-gray-500' value="US">United States</option>
                            <option className='text-gray-500' value="CA">Canada</option>
                            <option className='text-gray-500' value="FR">France</option>
                            <option className='text-gray-500' value="DE">Germany</option>
                        </select>
                    </div>
                </div>
                    <div className='flex flex-col justify-items-center my-2'>
                        <h1 className='self-center text-sm font-light text-gray-500'>Date of Journey</h1>
                        <DateBtn className="self-center"/>
                    </div>
                    <hr class="h-px my-2 bg-gray-200 border-0 " />
            </div>
                <h1 className='text-green-600 font-xl font-medium text-center'>ADD ROUND TRIP</h1>
                <button className='bg-green-600 text-white w-40 -mb-10 self-center h-10 transition-all hover:text-lg hover:border hover:border-black hover:border-2'>SEARCH</button>
        </div>
    );
}

export default FormCard;
