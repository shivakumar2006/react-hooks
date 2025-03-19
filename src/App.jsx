import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import State from "./useState/State";
import Reference from './useRefs/Reference';
import Effect from './useEffect/Effect';
import Reducer from "./useReducer/Reducer";
import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<State />}/>
            <Route path="/ref" element={<Reference />} />
            <Route path="/effect" element={<Effect />} />
            <Route path='/reducer' element={<Reducer />}/>
        </Routes>
    )
}

export default App;