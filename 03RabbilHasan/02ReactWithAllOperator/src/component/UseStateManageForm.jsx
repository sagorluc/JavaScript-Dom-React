import { useState } from "react";
import EventFormSubmit from './EventFormSubmit';

const UseStateManageForm = () => {

    const formObjData = {
        fName : '',
        lName : '',
        city  : '',
        gender : ''
    }

    const [obj, setObjData] = useState(formObjData)

    const inputOnChange = (property, value) => {
        setObjData((prev) => ({
            ...prev,
            [property]: value

        }))
    }

    const FormSubmit = (event)=> {
        event.preventDefault()
        alert(`Object \n ${JSON.stringify(obj)}`)
    }

    return (
        <div className="container">
            <form action="" onSubmit={FormSubmit}>
                <input onChange={(e)=>{inputOnChange("fName", e.target.value)}} value={obj.fName}  id="" placeholder="Enter Your First Name.."/><br />
                <input onChange={(e)=>{inputOnChange("lName", e.target.value)}} value={obj.lName}  id="" placeholder="Enter Your Last Name.."/><br />

                <select name="" id="" onChange={(e)=>{inputOnChange("city", e.target.value)}} value={obj.city}>
                    <option value="">Choose Your City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Tangail">Tangail</option>
                    <option value="Rajshahi">Rajshahi</option>
                </select>
                <br />
                <input onChange={()=>{inputOnChange("gender", 'Male')}} checked={obj.gender=='Male'} type="radio" name="gender" id=""/> Male
                <input onChange={()=>{inputOnChange("gender", 'Female')}} checked={obj.gender=='Female'} type="radio" name="gender" id="" /> Female
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UseStateManageForm;