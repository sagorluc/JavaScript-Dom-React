import {useRef} from 'react'


const InputElemUseRef = () => {

    let firstName, lastName = useRef();

    let change = () => {
        let fName = firstName.value // catch the value of input
        let lName = lastName.value // catch the value of input
        firstName.innerText = fName
        lastName.innerText = lName

        alert(fName + ' ' + lName)
    }

    return (
        <div className='container'>
           <input ref={(a)=>{firstName=a}} type="text" placeholder='Enter First Name..' /> 
           <input ref={(b)=>{lastName=b}} type="text" placeholder='Enter Last Name..' /> 
            
           <button onClick={change}>Click</button>
        </div>
    );
};

export default InputElemUseRef;