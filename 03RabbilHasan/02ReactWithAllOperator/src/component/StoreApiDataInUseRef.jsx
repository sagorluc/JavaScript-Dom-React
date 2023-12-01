import {useRef} from 'react'

const StoreApiDataInUseRef = () => {

    const ApiData = useRef(null)
    const showApiData = useRef()

    const fetchData = async ()=> {
       const response = await fetch('https://dummyjson.com/products/1') // call the api
       ApiData.current = await response.json() // store json data in useRef
    } 

    const showData = () => {
        showApiData.current.innerText = JSON.stringify(ApiData.current) // convert json data into text
    }

    return (
        <div className='container'>
            <p ref={showApiData}></p>
            <button onClick={fetchData}>Call/Fatch Api</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default StoreApiDataInUseRef;