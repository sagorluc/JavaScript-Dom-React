import React from 'react';

const LearnMap10 = () => {

    const items = ['Banana', 'Apple', 'Orange', 'Malta', 'Pianaple']



    return (
        <div>
            <ul>
                {
                    items.map( (value, index)=> (

                        // curly bracket is not working in map. must use first braket
                        <li key={index}>{index}--{value}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default LearnMap10;