import { useState } from "react";
import React from 'react';

const useCustomCounter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
       setCount( (prevNum) => prevNum+1)
    }

    return {
        count, increment
    } 
};

export default useCustomCounter;