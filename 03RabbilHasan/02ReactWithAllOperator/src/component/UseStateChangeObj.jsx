import {useState} from 'react'

const UseStateChangeObj = () => {

    var myObj = {
        name : 'sagor ahmed',
        city : 'tangail',
        div : 'Dhaka',
        email : 'mdsagorluc@gmail.com'

    }

    const [obj, setObj] = useState(myObj)

    const change = () => {

        setObj(
            // {
            //     // name: 'jakir',
            //     // city: 'Mirjapur',
            //     // div: 'Gazipur',
            //     // email : 'jakir@gmail.com'
            // }

            (prev) => ({...prev, name: 'jakir uzzaman'}) // for spacific value change use spread operator
        )
    }

    return (
        <div className='container'>
            <h1>{obj.name}</h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseStateChangeObj;