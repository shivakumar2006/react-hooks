import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { MdArrowRight } from "react-icons/md";

const State = () => {

    const [ count, setCount ] = useState(0);
    const Navigate = useNavigate();

    const handleClick = () => {
        Navigate("./ref");
    }

    return (
        <>
            <div className='w-full h-50 text-5xl flex justify-center items-center'>
                COUNT; the count is&nbsp;
                <div className='text-gray-500'>
                    {count}
                </div>
            </div>
            <div className='w-100 h-50 mx-131 flex justify-evenly items-center'>
                <button 
                    className='w-30 h-10 bg-indigo-500 text-white rounded-2xl border-0 hover:bg-indigo-700 cursor-pointer' 
                    onClick={() => setCount(count + 1)}>
                        Increment
                </button>
                <button 
                    className='w-30 h-10 bg-indigo-500 text-white rounded-2xl border-0 hover:bg-indigo-700 cursor-pointer' 
                    onClick={() => setCount(count - 1)}>
                        Decrement
                </button>
            </div>
            <div className="my-30 flex justify-center items-center h-0">
                <div className="h-40 my- flex flex-col items-center gap-5 p-5">
                <span className="w-[200px] h-10 flex items-center justify-center">
                    check useRef
                </span>
                <button
                    onClick={handleClick} 
                    className="w-40 h-10 border-0 bg-indigo-500 rounded-2xl text-white flex justify-center items-center gap-1 pl-4 hover:bg-indigo-700 cursor-pointer">
                    Next page 
                    <MdArrowRight size={35} />
                </button>
            </div>
</div>

        </>
    )
}

export default State;