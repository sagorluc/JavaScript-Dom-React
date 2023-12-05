import React from 'react';
import useCustomCounter from './../hooks/useCustomCounter';

const LearnCustomState = () => {

    const {count, increment} = useCustomCounter()

    return (
        <div>
            <h1>Increment: {count}</h1>
            <button onClick={increment}>Custom Count</button>
        </div>
    );
};

export default LearnCustomState;