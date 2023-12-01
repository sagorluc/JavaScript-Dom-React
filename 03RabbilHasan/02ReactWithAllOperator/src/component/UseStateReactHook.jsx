import {useState} from 'react'

const UseStateReactHook = () => {

    let initialState = 0
    let [number, setNumber] = useState(initialState) // database e data change hole autometic user interface eo change hobe

    // const changeNumber = () => {
    //     setNumber(number+1)
    // }

    return (
        <div className='container'>
            <h1>Number: {number}</h1>
            <button onClick={()=>{setNumber(number+1)}}>Click++</button>
            <button onClick={()=>{setNumber(number-1)}}>Click--</button>

            {/* <button onClick={changeNumber}>Click++</button> */}
        </div>
    );
};

export default UseStateReactHook;