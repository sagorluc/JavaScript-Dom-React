

const PropsObjectPass = (props) => {
    return (
        <div className="container">
           <ul>
                {/* get object data from parent  */}
                
                <li><b>Id:</b> {props.item['id']}</li>
                <li><b>Name:</b> {props.item['name']}</li>
                <li><b>Father's Name:</b> {props.item['fatherName']}</li>
                <li><b>Mother's Name:</b> {props.item['motherName']}</li>
                <li><b>City:</b> {props.item['city']}</li>
                <li><b>Post:</b> {props.item['post']}</li>
           </ul>
        </div>
    );
};

export default PropsObjectPass;