import React from 'react';

const LearnLiftingStateUp03 = (props) => {

    // data send from child to parent and this is the child component
    const handleClick3 = (event) => {
        event.preventDefault()
        const dt = 'I am from child component to parent component'
        props.any(dt)
    }

    return (
        <div>
            <button onClick={handleClick3}>Click</button>
        </div>
    );
};

export default LearnLiftingStateUp03;