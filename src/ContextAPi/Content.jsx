import React, { useContext } from 'react'
import { BioContext } from './Context'
import { useNavigate } from 'react-router-dom';
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

const Content = () => {

    const  {myName, myAge} = useContext(BioContext);
    const Navigate = useNavigate();

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <h1 className='text-2xl'>Hello, Context API, my name is {myName} and i am {myAge} years old MAN.</h1>

        <div className='w-screen flex justify-between items-center px-20 mt-10'>
            <div className='w-50 h-17 rounded-2xl bg-gray-200 text-black flex flex-col justify-center items-center'>
                <p>useCallback page</p>
                <button 
                    className='w-40 h-10 mx-5 rounded-2xl text-white bg-indigo-500 hover:bg-hover-700 space-x-2 flex justify-center items-center cursor-pointer'
                    onClick={() => Navigate("/callback")}
                >
                    <FaCaretLeft />
                    Prev page
                </button>
            </div>
        </div>
    </div>
  )
}

export default Content