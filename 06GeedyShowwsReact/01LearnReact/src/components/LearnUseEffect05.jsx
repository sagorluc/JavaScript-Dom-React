import React from 'react';
import { useState, useEffect } from 'react';

const LearnUseEffect05 = () => {
    const number = 5
    const [curNum, setNum] = useState(number)  // initial value is (n))

    const [curRandom, setRandom] = useState()

    const random_number = (event) => {
        event.preventDefault()
        const random_num = Math.floor(Math.random() * 100) + 1
        setRandom(random_num)
        return random_num
    }

    // useEffect is takeing two perametter one is funtion and other is dependencies array

    //Ex-1 useEffect it's called each time when component is mounted/refresh and re-render
    useEffect(() => {
        console.log('useEffect called!')
    })

    //Ex-2 useEffect it's runs once when component is mounted/refresh ([] means no dependencies)
    useEffect(()=>{
        console.log("useEffect called with no depandencies")
    }, [])

    //Ex-3 useEffect it's runs when the component is mounted/refresh and whenever dependence changes
    useEffect(()=>{
        console.log("useEffect called with depandencies changes") // connect component 

        return () => {
            console.log('component will unmounted!') // disconnect component
        }
    }, [curNum]) // curNum change er shathe shathe useEffect call hobe


    return (
        <div>
            <h1>Learn React Hook useEffect()</h1>
            <h1>Current Number: {curNum}</h1>
            <h1>After set number in useState</h1>
            <button onClick={()=> setNum(curNum+1)}>Increment Number</button>
            <button onClick={()=> setNum(curNum-1)}>Decrement Number</button>

            <h1>Generate Random Number: {curRandom}</h1>
            <button onClick={random_number}>Random Number</button>
        </div>
    );
};

export default LearnUseEffect05;