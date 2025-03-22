import React, { useCallback, useState, memo } from 'react'; 

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
        </div>
    )
}

export default Callback;