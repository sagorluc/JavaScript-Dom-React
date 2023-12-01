// console.log(React);
// console.log(ReactDOM);

const domContainer = document.querySelector('#root');

// const myEelement = React.createElement('div', null, "hellow World")
// const myEelement = React.createElement('div', null, [

//     React.createElement('p', null, 'Hello World in the p elem!'),
//     React.createElement('h2', null, 'Hello World in the h2 elem!'),
//     React.createElement('span', null, 'Hello World in the span elem!'),
    
// ]);

const Increment = () => {
    const [counter, setCounter] = React.useState(0);

    return (
    
        <div>
          <h1 id="display">{ counter }</h1>
          <div>
            <button id="button" onClick={() => setCounter(counter + 1)}>Increment +</button>
          </div>
        </div>
 
    );
};


ReactDOM.render(
                <div className="container">
                    < Increment />
                    < Increment />
                    < Increment />
                </div>, 
                domContainer
);