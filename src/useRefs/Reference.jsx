import React, { useState } from 'react'; 
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRef } from 'react';

const Reference = () => {

    const userName = useRef(null);
    const passWord = useRef(null);

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ showPassword, setShowPassword ] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username : ", username);
        console.log("Password : ", password);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(userName.current.value, passWord.current.value);
    }

    return (
        <div className='w-screen h-screen bg-blue-950 flex flex-col justify-center items-center'>
            <form className='flex flex-col items-center'
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    placeholder='Enter username...'
                    id="userName"
                    ref={userName}
                    className='w-100 h-10 border border-none rounded text-white bg-gray-500 placeholder-white px-2'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className='relative w-100 mt-5'>
                <input 
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter password...'
                    id="passWord"
                    ref={passWord}
                    className='w-100 mr-20 h-10 border-white text-white rounded bg-gray-500 placeholder-white px-2'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer'
                >
                    {showPassword ? <FaEyeSlash/> : <FaEye />}
                </button>
                </div>

                <button 
                    type="submit"
                    className='my-10 w-50 h-10 bg-red-500 rounded text-white hover:bg-red-700 cursor-pointer'
                    onClick={handleClick}
                >
                    Submit 
                </button>
            </form>
        </div>
    )
}

export default Reference;

// import React, { useState } from 'react';
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const Reference = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault(); 
//         console.log("Username:", username);
//         console.log("Password:", password);
//     };

//     return (
//         <div className='w-screen h-screen bg-blue-950 flex flex-col justify-center items-center'>
//             <form onSubmit={handleSubmit} className="flex flex-col items-center">
//                 {/* Username Input */}
//                 <input 
//                     type='text' 
//                     placeholder='Enter username...' 
//                     className='w-72 h-10 border border-white px-5 rounded bg-gray-500 text-white placeholder-white'
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />

//                 {/* Password Input with Toggle Visibility */}
//                 <div className="relative w-72 mt-5">
//                     <input 
//                         type={showPassword ? "text" : "password"} 
//                         placeholder='Enter password...' 
//                         className='w-full h-10 border border-white px-5 rounded bg-gray-500 text-white placeholder-white'
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <button 
//                         type="button" 
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
//                     >
//                         {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </button>
//                 </div>

//                 {/* Submit Button */}
//                 <button 
//                     type="submit" 
//                     className="mt-5 w-72 h-10 bg-indigo-600 text-white rounded hover:bg-indigo-700 cursor-pointer"
//                 >
//                     Submit 
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Reference;
