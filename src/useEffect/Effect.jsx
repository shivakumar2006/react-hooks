import React, { useState, useEffect } from 'react'; 
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Effect = () => {

    const [ count, setCount ] = useState(0);
    
    const Navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => prev + 1); // countinuously update state...
        }, 1000)

        return () => clearInterval(interval); // clean the state...
    }, []);

    const handlePrevClick = () => {
        Navigate("/ref");
    }

    const handleNextClick = () => {
        Navigate("/reducer");
    }

    return (
        <div className='w-screen h-screen bg-blue-950 text-white flex flex-col justify-center items-center'>
            <h1 className='text-8xl'>useEffect</h1>
            <div className='text-center mt-5'>
                <h1>useEffect is use for the add or remove something like api fetching data,<br />DOM manipulation  like continuous numbers.</h1>
            </div>
            <div className='text-8xl my-10'>
                {count}
            </div>
            <h1>Automatically change numbers using useEffect hook</h1>
            <div className='w-42 h-12 my-5 bg-gray-200 rounded-2xl flex justify-center items-center'>
                <button
                    className='w-40 h-10 bg-indigo-500 text-white border-indigo-800 border-3 rounded-2xl hover:bg-indigo-700'
                    onClick={() => setCount(0)}
                >
                    ResetCount
                </button>
            </div>

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

export default Effect;
