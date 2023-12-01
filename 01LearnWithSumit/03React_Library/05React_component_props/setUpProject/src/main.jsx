import React from 'react' // element toiri kora
import ReactDOM from 'react-dom' // render kora 

// functional way component
// function Clock({local})
// {  return (<h1 className='heading' >

//     <h3>Time is {new Date().toLocaleTimeString(local)} </h3>

//     </h1> );
// }

// ReactDOM.render(Clock(), document.getElementById('root'));
// ReactDOM.render(< Clock local="bn-BD"/>, document.getElementById('root'));


// class way component
class Clock1 extends React.Component { // inherit to react component

    render(){

        return (<h1 className='heading' >

                <h3>Time is {new Date().toLocaleTimeString(this.props.local)} </h3>

                </h1> );
    };

};

// const ClockComponent = new Clock1(); // if inherite react component then no need to make class object
// ReactDOM.render(ClockComponent.print(), document.getElementById('root'));

ReactDOM.render(< Clock1 local='bn-BD' />, document.getElementById('root'));
 


