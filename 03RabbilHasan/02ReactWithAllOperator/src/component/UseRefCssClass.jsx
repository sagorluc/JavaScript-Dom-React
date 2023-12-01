import {useRef} from 'react'


const UseRefCssClass = () => {

    const changeColor = useRef()

    const change = () => {
        changeColor.current.classList.remove('text-danger')
        changeColor.current.classList.add('text-success')
    }

    return (
        <div className='container'>
            <h1 className='text-danger' ref={changeColor}>Click to change this text color</h1>
           <button onClick={change}>Click</button> 
        </div>
    );
};

export default UseRefCssClass;