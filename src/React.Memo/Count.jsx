import React from 'react'; 
import { useRef } from 'react';

const Count = () => {

    const renderCount = useRef(0); 

    return (
        <div className="mt-5">
            <p>Need not to re-render this component : {renderCount.current++} time(s)</p>
        </div>
    )
}

export default React.memo(Count);