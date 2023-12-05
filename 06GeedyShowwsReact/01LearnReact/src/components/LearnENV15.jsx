import React from 'react';

const LearnENV15 = () => {
    return (
        <div>
            <h1>Environmental veriable</h1>
            {import.meta.env.API_URL} <br />
            {import.meta.env.API_KEY} 
        </div>
    );
};

export default LearnENV15;