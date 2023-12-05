import React, { useState } from 'react';


const LearnConditionalRendering09 = () => {

    let status = false

    const [isLogin, setLogin] = useState(true)

    return (

        <div>
            {!status && <h1>sagor ahmed</h1>}

            {
                isLogin ? 
                (<>
                 <h1>Dashboard</h1>
                 <button onClick={()=> {setLogin(false)}}>Logout</button>
                </>)
                :
                (<> 
                 <h1>Loged Out</h1>
                 <button onClick={ ()=> {setLogin(true)}}>Login</button>
                </>)
            }
        </div>
    );
};

export default LearnConditionalRendering09;