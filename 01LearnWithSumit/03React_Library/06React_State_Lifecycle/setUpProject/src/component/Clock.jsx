import React from 'react'
import ReactDOM from 'react-dom'

// class way component
class Clock1 extends React.Component { // inherit to react component

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    };

    // life cycle event
    componentDidMount(){
       this.clockTimer = setInterval(() => {
            this.trick()
        }, 1000);
    };

    // life cycle event
    componentWillUnmount(){
        clearInterval(this.clockTimer)
    }


    trick(){
        this.setState({date: new Date(), });
    }

    render(){

        return (<h1 className='heading' >

                <h3>Time is {this.state.date.toLocaleTimeString(this.props.local)} </h3>

                </h1> );
    };

};

export default Clock1;