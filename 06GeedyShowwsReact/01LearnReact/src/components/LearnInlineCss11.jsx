import React from 'react';

const LearnInlineCss11 = () => {

    const buttonStyle = {

        color: 'blue',
        fontSize : 20 ,
        border: 'solid black',
        backgroundColor: 'orange',   
    }

    return (
        <div>
            <h1 style={{'color': 'red', 'fontSize': 30}}>How to use inline css in react</h1>
            <button style={buttonStyle}>Inline Style</button>
            <button style={{...buttonStyle, ...{'color': 'red', 'fontSize': 30}}}>Inline Style Combine</button>
        </div>
    );
};

export default LearnInlineCss11;