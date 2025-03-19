import React from 'react';
import { useReducer } from 'react';
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const reducer = (state, action) => {
    console.log(state, action);

    if(action.type === "INCREMENT") {
        return state + 1;
    }
    if(action.type === "DECREMENT") {
        return state - 1;
    }
    if(action.type === "RESET") {
        return state = 0;
    }
}


const Reducer = () => {

    const [ count, dispatch ] = useReducer(reducer, 0);
    const Navigate = useNavigate();

    const handlePrevClick = () => {
        Navigate("/effect");
    }

    const handleNextClick = () => {
        Navigate("/memo");
    }

    return (
        <div className='w-screen h-screen bg-blue-950 text-white flex flex-col justify-center items-center'>
            <h1 className='my-5 text-8xl'>useReducer</h1>
            <div className='text-8xl'>
                {count}
            </div>
            <div className='w-150 flex justify-between items-center'>
            <button
                className='w-40 h-10 my-5 bg-indigo-500 text-white rounded-2xl hover:bg-indigo-700 cursor-pointer'
                onClick={() => dispatch({ type: "INCREMENT"})}
            >
                Increment ++
            </button>
            <button className='w-40 h-10 my-5 bg-indigo-500 text-white rounded-2xl hover:bg-indigo-700 cursor-pointer'
                onClick={() => dispatch({ type: "RESET"})}
            >
                Reset
            </button>
            <button 
                className="w-40 h-10 bg-indigo-500 text-white rounded-2xl hover:bg-indigo-700 cursor-pointer"
                onClick={() => dispatch({ type: "DECREMENT"})}
            >
                Decrement --
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

export default Reducer;