import React, { useCallback } from 'react';
import { useState } from 'react';
import GenerateRandomNum from './GenerateRandomNum';

const LearnUseCallback07 = () => {

    const [curNum, setNum] = useState(0)
    const [random, setRamdon] = useState(0)

    const incrementNum = () => {
        setNum((prevNum) => prevNum + 1);
      };
      
      const decrementNum = () => {
        setNum((prevNum) => prevNum - 1);
      };
      

    // const generateRandom = () => {
    //     const random = Math.floor(Math.random() * 100) + 1
    //     return setRamdon(random)
    // }

    const generateRandom = useCallback(() => {
        const random = Math.floor(Math.random() * 100) + 1
        return setRamdon(random)
    }, [random])


    return (
        <div>
            <GenerateRandomNum rendomNumber={random} GenerateRandomNum={generateRandom}/>
            <h1>Increment Number: {curNum}</h1>
            <button onClick={incrementNum}>Increment Click</button>
            <button onClick={decrementNum}>Decrement Click</button>
            <button onClick={generateRandom}>Generate Random Number</button>
        </div>
    );
};

export default LearnUseCallback07;