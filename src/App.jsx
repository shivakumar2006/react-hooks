import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import State from "./useState/State";
import Reference from './useRefs/Reference';
import Effect from './useEffect/Effect';
import Reducer from "./useReducer/Reducer";
import Memo from "./useMemo/Memo";
import ReactMemo from './React.Memo/ReactMemo';
import Callback from './useCallback/Callback';
import Content from './ContextAPi/content';
import { BioProvider } from './ContextAPi/Context';

import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<State />}/>
            <Route path="/ref" element={<Reference />} />
            <Route path="/effect" element={<Effect />} />
            <Route path='/reducer' element={<Reducer />}/>
            <Route path="/memo" element={<Memo />} />
            <Route path='/reactmemo' element={<ReactMemo />} />
            <Route path='/callback' element={<Callback />} />
            <Route path='/context' element={<BioProvider><Content /></BioProvider>} />
        </Routes>
    )
}

export default App;