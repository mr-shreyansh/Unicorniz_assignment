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
        <div className="max-w-xl bg-white m-5 min-h-[400px] flex flex-col justify-around p-4 border border-2 rounded-lg border-purple-400">
            <div className='flex flex-col w-40 sm:w-full sm:flex-row justify-around'>
                <h1>Select Passengers</h1>
                <div>
                    <p className='text-gray-400 font-bold'>Adults<span className='text-gray-400 text-xs font-light'>{"(Above 1 year)"}</span></p>
                    <div className='rounded bg-gray-300 flex justify-around box-border'>
                        <button onClick={handleDecrement} className='px-4 mx-0 w-12 h-12 box-border'>-</button>
                        <span className='bg-white px-6 py-2'>{count}</span>
                        <button onClick={handleIncrement} className='px-4 mx-0 w-12 h-12 box-border'>+</button>
                    </div>

                </div>
                <div>
                    <p className='text-gray-400 font-bold'>Infants<span className='text-gray-400 text-xs font-light'>{"(Below 12 months)"}</span></p>
                    <div className='rounded bg-gray-300 flex justify-around box-border'>
                        <button onClick={handleDecrement2} className='px-4 mx-0 w-12 h-12 box-border'>-</button>
                        <span className='bg-white px-6 py-2'>{count2}</span>
                        <button onClick={handleIncrement2} className='px-4 mx-0 w-12 h-12 box-border'>+</button>
                    </div>

                </div>
            </div>

            <div className=''>
                <h1>Select Trips{"(s)"}</h1>
                <h1>Trip 1 <span><hr class="h-px my-1 bg-gray-200 border-0 " /></span></h1>
                <div className='flex flex-col md:flex-row justify-around gap-3'>
                    <div className=''>
                        <p>From</p>
                        <select id="countries" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 ">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <p>To</p>
                        <select id="countries" class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 ">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div>
                        <h1>Date of Journey</h1>
                        <DateBtn className="" />
                    </div>

                </div>
                <h1 className='text-green-600 font-xl font-medium text-center'>ADD ROUND TRIP</h1>
            </div>
                <button className='bg-green-600 text-white w-40 self-center rounded-lg'>SEARCH</button>
        </div>
    );
}

export default FormCard;
