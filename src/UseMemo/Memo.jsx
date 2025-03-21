import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

const Memo = () => {
  const [count, setCount] = useState(0);
  const Navigate = useNavigate();

  const expensiveCalculations = useMemo(() => {
    console.log("Calculating sum...");
    let sum = 0;
    for (let i = 0; i <= 1000000; i++) {
      sum += i;
    }
    return sum;
  }, []); // Cached on initial render

  const handlePrevClick = () => {
    Navigate("/reducer");
  }

  const handleNextClick = () => {
    Navigate("/reactmemo")
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <p>Expensive calculation result: {expensiveCalculations}</p>
      <button 
        className='w-40 h-10 mt-5 bg-red-500 border-black rounded-2xl text-white hover:bg-red-700 cursor-pointer'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button className='w-40 h-10 mt-5 bg-red-500 border-black rounded-2xl text-white hover:bg-red-700 cursor-pointer'
        onClick={() => setCount(0)}
      >
        Reset
      </button>
      <p>Count: {count}</p>

      <div className='w-screen flex justify-between items-center px-20 mt-10'>
                      <div className='w-50 h-17 rounded-2xl bg-gray-200 text-black flex flex-col justify-center items-center'>
                          <p>useRef page</p>
                          <button 
                              className='w-40 h-10 mx-5 rounded-2xl text-white bg-indigo-500 hover:bg-hover-700 space-x-2 flex justify-center items-center cursor-pointer'
                              onClick={handlePrevClick}
                          >
                              <FaCaretLeft />
                              Prev page
                          </button>
                      </div>
                      <div className='w-50 h-17 rounded-2xl bg-gray-200 text-black flex flex-col justify-center items-center'>
                          <p>useReducer page</p>
                          <button 
                              className='w-40 h-10 mx-5 rounded-2xl text-white bg-indigo-500 hover:bg-indigo-700 flex justify-center items-center space-x-2 cursor-pointer'
                              onClick={handleNextClick}
                          >
                              Next page
                              <FaCaretRight />
                          </button>
                      </div>
                  </div>
    </div>
  )
}

export default Memo;
