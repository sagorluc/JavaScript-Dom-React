import { useEffect, useState } from "react";

const UseEffectFetchApi = () => {

    const [data, setData] = useState()
    const depandancy_array = [] // optional
    const effect = ()=>{

        // promise style to fetch api data/ call api data

        fetch('https://dummyjson.com/products/1') // fetch/ call the api
            .then(res => res.json()) // convert to json
            .then(json => setData(json)) // json data set in useState()

    }

    useEffect( effect, depandancy_array) // take two perametter 1. effect 2. dependancy array
    

    return (
        <div className="container">

        <h1>Promise style to fetch / coll the api data</h1>
            {JSON.stringify(data)} 

        </div>
    );
};

export default UseEffectFetchApi;