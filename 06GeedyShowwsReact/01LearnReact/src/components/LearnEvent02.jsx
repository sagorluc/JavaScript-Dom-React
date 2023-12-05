import React from 'react';

const LearnEvent02 = () => {

    const handleClick1 = (event) => {
        event.preventDefault()
        console.log('Hello event')
    }

    const handleClick2 = (any) => {
        console.log('Hello event', any)
    }

    return (
        <div>
            {/* Without argument */}
            <button onClick={handleClick1}>Click</button>

            {/* With argument */}
            <button onClick={(event)=>handleClick2('sagor')}>Click2</button>
        </div>
    );
};

export default LearnEvent02;