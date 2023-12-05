import React from 'react';
import { useState, useMemo } from 'react';

const LearnUseMemo06 = () => {
    const number = 5
    const [curNum, setNum] = useState(number)  // initial value is (n))

    const [curRandom, setRandom] = useState(0)

    const random_number = (event) => {
        event.preventDefault()
        const random_num = Math.floor(Math.random() * 100) + 1
        setRandom(random_num)
        return random_num
    }

    const isTen = () => {
        console.log('isCount called')
        if(curNum == 10){
            return "Yes"
        }else{
            return "No"
        }
    }

    // useMemo() takeing two perameter one is function and another is dependencies array
    const isTenMemo = useMemo(() => {
        console.log('isCount called')
        if(curNum == 10){
            return "Yes"
        }else{
            return "No"
        }
    }, [curNum])
    

    return (
        <div>
            <h1>Learn React Hook useMemo()</h1>
            <h1>Current Number: {curNum} {isTen()}</h1>
            <h1>{curNum} qual to 10 ?-- {isTenMemo}</h1>
            <h1>After set number in useState</h1>
            <button onClick={()=> setNum(curNum+1)}>Increment Number</button>
            <button onClick={()=> setNum(curNum-1)}>Decrement Number</button>

            <h1>Generate Random Number: {curRandom}</h1>
            <button onClick={random_number}>Random Number</button>
            
        </div>
    );
};

export default LearnUseMemo06;