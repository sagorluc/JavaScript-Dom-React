
const ConditionButton = (status) => {

    let styles = {
        color: 'blue',
        fontSize: 12
    }
    
    if(status){
        return <button style={styles}>LogOut ifelse</button>
    }
    else{
        return <button style={styles}>LogIn ifelse</button>
    }
}


const ConditionalRendering = () => {


    return (
        <div>
            {/* <ConditionButton/> */}
            {ConditionButton(true)}
        </div>
    )


    // let status = true

    // if(status == true){
    //     return (
    //         <div>
    //             <button >LogOut</button>
    //         </div>
    //     );
    // }else{
    //     return (
    //         <div>
    //            <button >LogIn</button> 
    //         </div>
    //     );
    // }
};

export default ConditionalRendering;