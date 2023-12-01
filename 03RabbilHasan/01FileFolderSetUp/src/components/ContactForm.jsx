const ContactForm = () => {
    return (
        <div>
            <form action="">
            <input type="text" name="firstName" id="" placeholder="Enter the first name.." /><br />
            <input type="text" name="LastName" id="" placeholder="Enter the last name.." /><br />
            <input type="text" name="email" id="" placeholder="Enter your email.." /><br />
            <label htmlFor="">Choose Option: </label>
            <select name="options" id="options">
                <option value="male">Male</option>
                <option value="female">FeMale</option>
                <option value="other">Others</option>
            </select><br />
            <button>Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;