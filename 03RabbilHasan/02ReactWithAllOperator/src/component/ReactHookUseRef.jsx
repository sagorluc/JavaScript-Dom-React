import React from 'react';
import { useRef } from 'react';

const ReactHookUseRef = () => {

    const getElem = document.getElementById('any') // DOM manipulate

    const useR = useRef() // this work like DOM
    let use = useRef() // this work like DOM
    
    const Change = ()=> {
        useR.current.innerText = 'Hello useRef'
        use.innerText = "another useRef";
    }

    return (
        <div className='container'>
            <h1 id="any"></h1> {/* Need to manipulate the DOM */}

            <h1 ref={useR}></h1>
            <h2 ref={(h2)=>{use=h2}}></h2>
            <button onClick={Change}>Click and See The Change</button>

        </div>
    );
};

export default ReactHookUseRef;