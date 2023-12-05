import React, { useEffect } from 'react';
import { useState } from 'react';

const LearnuseState04 = () => {
    const number = 5
    const [curNum, setNum] = useState(number)  // initial value is (n))

    const [curRandom, setRandom] = useState(0)

    const random_number = (event) => {
        event.preventDefault()
        const random_num = Math.floor(Math.random() * 100) + 1
        setRandom(random_num)
        return random_num
    }

    return (
        <div>
            <h1>Learn React Hook useState()</h1>
            <h1>Current Number: {curNum}</h1>
            <h1>After set number in useState</h1>
            <button onClick={()=> setNum(curNum+1)}>Increment Number</button>
            <button onClick={()=> setNum(curNum-1)}>Decrement Number</button>

            <h1>Generate Random Number: {curRandom}</h1>
            <button onClick={random_number}>Random Number</button>
        </div>
    );
};

export default LearnuseState04;