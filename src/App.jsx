import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import State from "./useState/State";
import Reference from './useRefs/Reference';
import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<State />}/>
            <Route path="/ref" element={<Reference />} />
        </Routes>
    )
}

export default App;