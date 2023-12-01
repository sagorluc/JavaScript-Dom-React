import {useRef} from 'react';

const UseRefSetAttribute = () => {

    const use = useRef();

    const change = () => {
        use.current.src = 'https://placehold.co/600x400?text=Hello+World'
        use.current.setAttribute('width', '250px')
        use.current.setAttribute('height', '200px')
    }

    return (
        <div className='container'>
            <img ref={use} src="https://placehold.co/600x400" alt="Placeholder Image" />
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseRefSetAttribute;