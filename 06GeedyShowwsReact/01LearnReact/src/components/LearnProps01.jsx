import React from 'react';

// const LearnProps01 = (props) => {
//     return (
//         <div>
//             <h1>Name: {props.name}</h1>
//             <h1>Email: {props.email}</h1>
//             <h1>Roll: {props.myRoll}</h1>

//         </div>
//     );
// };

// export default LearnProps01;


const LearnProps01 = ({name, email, myRoll}) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
            <h1>Roll: {myRoll}</h1>

        </div>
    );
};

export default LearnProps01;