

const TernaryOperator = () => {
    let status = true
    let a = 3, b=5, c=4, d=4;
   
    return (
        <div className="container">
            {
                status?
                <button>LogOut TernaryOperator</button>
                :
                <button>LogIn TernaryOperator</button>
            }

            {/* Logical && 
                Use Immediately Invoked funcition
            */}

           {( 
            () => {
                if(a==b && c==d){
                    return <button>LogOut Logical &&</button>
                }else{
                    return <button>LogIn Logical &&</button>
                }
            }
           ) ()}
        </div>

         
        


    );
};

export default TernaryOperator;