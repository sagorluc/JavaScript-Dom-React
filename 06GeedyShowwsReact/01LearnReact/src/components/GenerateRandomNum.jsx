import React from 'react';
import { memo } from 'react';

// memo is higher order component (HOC) that the memoizes the rendering of a functional component
// it prevent a function component from re-rendering if it's props/property haven't change
// it's partculary useful when you have components that are rendering with the same props but don't need to update when those props change


const GenerateRandomNum = memo(({rendomNumber, GenerateRandomNum}) => {

    console.log('Generate Random number component rendered')

    return (
        <div>
            <h1>Random Number: {rendomNumber}</h1>
            <button onClick={GenerateRandomNum}>Generate Random Number</button>
        </div>
    );

  }
);

export default GenerateRandomNum;