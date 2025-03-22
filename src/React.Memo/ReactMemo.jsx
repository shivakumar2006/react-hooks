import React, { useState } from 'react';
import Count from './Count';
import { useNavigate } from 'react-router-dom';
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

const ReactMemo = () => {

    const [ count, setCount ] = useState(0);
    const Navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <p className='text-5xl mb-5'>{count}</p>
        <button 
            className='w-50 h-15 bg-indigo-500 rounded-2xl text-white text-2xl hover:bg-indigo-700 cursor-pointer'
            onClick={() => setCount(count + 1)}
        >
            Increment++
        </button>
        <button 
            className='w-50 h-15 mt-5 bg-indigo-500 rounded-2xl text-white text-2xl hover:bg-indigo-700 cursor-pointer'
            onClick={() => setCount(0)}
        >
            Reset
        </button>

        <Count />

        <div className='w-screen flex justify-between items-center px-20 mt-10'>
            <div className='w-50 h-17 rounded-2xl bg-gray-200 text-black flex flex-col justify-center items-center'>
                <p>useMemo page</p>
                <button 
                    className='w-40 h-10 mx-5 rounded-2xl text-white bg-indigo-500 hover:bg-hover-700 space-x-2 flex justify-center items-center cursor-pointer'
                    onClick={() => Navigate("/memo")}
                >
                    <FaCaretLeft />
                    Prev page
                </button>
            </div>
            <div className='w-50 h-17 rounded-2xl bg-gray-200 text-black flex flex-col justify-center items-center'>
                <p>useCallback page</p>
                <button 
                    className='w-40 h-10 mx-5 rounded-2xl text-white bg-indigo-500 hover:bg-indigo-700 flex justify-center items-center space-x-2 cursor-pointer'
                    onClick={() => Navigate("/callback")}
                >
                    Next page
                    <FaCaretRight />
                </button>
            </div>
        </div>
    </div>
  )
}

export default ReactMemo;