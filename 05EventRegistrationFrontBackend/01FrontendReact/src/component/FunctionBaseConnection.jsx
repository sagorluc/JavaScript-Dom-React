import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true


const FunctionBaseConnection = () => {
    const arr = []
    const [data, setData] = useState([])

    const effect1 = () => {
            
        fetch(`${import.meta.env.VITE_API_URL}`) // coll api
            .then( 
                (response) => {
                    response.json() // convert to json
                })
            .then(
                (json) => {
                    setData(json)
                })
            .catch( (error) => {
                console.log('Error fetching data', error)
            })
            
    }

    useEffect(effect1, arr)

    return (
        <div>
            <h1>Promise method with React Hook useEffect() and useState(for set data)</h1>
            {
                JSON.stringify(data)
                // (() => {
                //     return data.map((value, index) => (
                //       <div key={index}>
                //         <div>
                //           Serial= {index + 1}
                //           <p><b>Full Name:</b> {value.eventOwnerName}</p>
                //           <p><b>Email:</b> {value.eventTitle}</p>
                //           <p><b>Phone Number:</b> {value.eventDate}</p>
                //         </div>
                //       </div>
                //     ));
                //   })()
            }
        </div>
    );
};

export default FunctionBaseConnection;