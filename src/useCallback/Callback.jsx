import React, { useCallback, useState, memo } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { FaCaretLeft } from 'react-icons/fa6';
import { FaCaretRight } from 'react-icons/fa6';

const Button = memo(({ onClick, children }) => {

    console.log(`Rendering button : ${children}`);

    return (
        <button
            className={`text-black mb-4 py-2 px-5 cursor-pointer ${children === 'Increment' ? "bg-green-400" : "bg-red-400"}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
})

const Callback = () => {

    const [ count, setCount ] = useState(0);
    const Navigate = useNavigate();

    // const increment = () => {
    //     console.log("increment button clicked...");
    //     setCount((count) => count + 1);
    // }

    // const decrement = () => {
    //     console.log("decrement button clicked...");
    //     setCount((prevCount) => prevCount - 1);
    // }

    // const reset = () => {
    //     console.log("reset button clicked...");
    //     setCount(0);
    // }

    const increment = useCallback(() => {
        console.log("increment button clicked...");
        setCount((count) => count + 1);
    }, [])

    const decrement = useCallback(() => {
        console.log("decrement button clicked...");
        setCount((prevCount) => prevCount - 1);
    }, [])

    const reset = useCallback(() => {
        console.log("reset button clicked...");
        setCount(0);
    }, [])

    return (
        <div className='w-screen h-screen bg-black flex flex-col justify-center items-center gap-2'>
            <h1 className='text-8xl text-white'>{count}</h1>
            <Button
                className='w-50 h-15 bg-indigo-500 text-white text-2xl rounded-2xl hover:bg-indigo-700 cursor-pointer'
                onClick={increment}
            >
                Increment
            </Button>
            <Button
                className='w-50 h-15 bg-indigo-500 text-white text-2xl rounded-2xl hover:bg-indigo-700 cursor-pointer'
                onClick={decrement}
            >
                Decrement
            </Button>
            <Button
                className='w-50 h-15 bg-red-500 text-white text-2xl rounded-2xl hover:bg-red-700 cursor-pointer'
                onClick={reset}
            >
                Reset
            </Button>

            <div className='w-screen flex justify-between items-center px-20 mt-10'>
                <div className='w-50 h-17 rounded-2xl bg-gray-200 text-black flex flex-col justify-center items-center'>
                    <p>useMemo page</p>
                    <button 
                        className='w-40 h-10 mx-5 rounded-2xl text-white bg-indigo-500 hover:bg-hover-700 space-x-2 flex justify-center items-center cursor-pointer'
                        onClick={() => Navigate("/reactmemo")}
                    >
                        <FaCaretLeft />
                        Prev page
                    </button>
                </div>
                <div className='w-50 h-17 rounded-2xl bg-gray-200 text-black flex flex-col justify-center items-center'>
                    <p>ContextAPI page</p>
                    <button 
                        className='w-40 h-10 mx-5 rounded-2xl text-white bg-indigo-500 hover:bg-indigo-700 flex justify-center items-center space-x-2 cursor-pointer'
                        onClick={() => Navigate("/context")}
                    >
                        Next page
                        <FaCaretRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Callback;