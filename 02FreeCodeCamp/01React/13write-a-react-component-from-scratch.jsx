// Change code below this line
class MyComponent extends React.Component{

  // constructor must use for the class ES6
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>My First React Component!</h1>
      </div>
    )
  }
}

ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'))