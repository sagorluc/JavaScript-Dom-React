

const EventFormSubmit = () => {

    const anyEvent = (event) => {
        event.preventDefault()  /* to prevent the page reload */

        alert('Are you sure! you want to submit the form!')
    }

    return (
        <div className="container">
            <form action="" onSubmit={anyEvent}>
                <input type="text" placeholder="Enter your name..." />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EventFormSubmit;