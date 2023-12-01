

const SwitchCase = () => {

    let status = false
    return (
        <div className="container">
            {(
                () => {
                    switch(status){
                        case true:
                            return <button>LogOut SwitchCase</button>
                        case false:
                            return <button>LogIn SwitchCase</button>
                        default:
                            return null;
                    }
                }
            ) ()}
            
        </div>
    );
};

export default SwitchCase;