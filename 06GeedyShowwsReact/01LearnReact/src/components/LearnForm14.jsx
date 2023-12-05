import React, { useState } from 'react';

const LearnForm14 = () => {

    // handle form one by one
    const [firstname, setFirstname] = useState(' ')
    const [lastname, setLastname] = useState(' ')

    const handlefirstname = (event) => {
        event.preventDefault()
        setFirstname(event.target.value)
    }

    const handlelastname = (event) => {
        event.preventDefault()
        setLastname(event.target.value)
    }

    // handle form at once
    const [formData, setFormData] = useState({
        myfirstname: '',
        mylastname : '',
    })

    const handleChange = (event) => {
        event.preventDefault()
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('api data submited', formData)
    }

    return (
        <div className='container'>
            <h1>Handle form one by one</h1><br />
            <form action="" >
                First Name: <input type="text" name="firstname" value={firstname} onChange={handlefirstname}/><br /><br />
                Last Name: <input type="text" name="lastname" value={lastname} onChange={handlelastname}/>
            </form>

            <h1>Handle form at once</h1><br />
            <form action="" onSubmit={handleSubmit}>
                First Name: <input type="text" name="myfirstname" value={formData.myfirstname} onChange={handleChange}/><br /><br />
                Last Name: <input type="text" name="mylastname" value={formData.mylastname} onChange={handleChange}/><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LearnForm14;