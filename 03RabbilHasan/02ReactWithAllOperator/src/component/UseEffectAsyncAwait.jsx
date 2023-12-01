import React from 'react';
import { useEffect, useState } from 'react';

const UseEffectAsyncAwait = () => {

    const [data, setData1] = useState()
    // const depandancy_array = [] // optional

    // async await way to fetch api use immediately invoken function (IIF)
    useEffect( () => {
        
        (async ()=>{
       
            let response = await fetch('https://dummyjson.com/products/2')
            let jsonData = await response.json()
            setData1(jsonData)
        

    })()}, [])


    // useEffect( effect1, depandancy_array) // take two perametter 1. effect 2. dependancy array


    return (
        <div className="container">
            <h1>Async await style to fetch / coll the api data</h1>
            {JSON.stringify(data)}
        </div>
    );
};

export default UseEffectAsyncAwait;