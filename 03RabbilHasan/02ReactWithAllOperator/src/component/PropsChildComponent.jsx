

const PropsChildComponent = (props) => {
    return (
        <div className="container">
            <h1>{props.title}</h1>  {/* Send this data form parent and read_only data */} 
            <h1>{props.desc}</h1>  {/* Send this data form parent and read_only data */} 
        </div>
    );
};

export default PropsChildComponent;