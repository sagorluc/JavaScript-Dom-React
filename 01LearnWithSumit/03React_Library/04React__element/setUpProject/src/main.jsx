import React from 'react' // element toiri kora
import ReactDOM from 'react-dom' // render kora 

// const elem = React.createElement('h1', null, "Hello world");

// const elem = function any(ab){
//   if (ab){
//     // return "Yes. this is " + { ab };
//     return "Yess. this is ab";
//         }else{
//     return "Not. this is not ab";
//   }
// }
// console.log(elem('sagor'));


const idx= 0;
// const elem2 = <h1 className='heading' tabIndex={idx}>this is another</h1>

// const elem2 = (<h1 className='heading' tabIndex={idx}>
//   this is another <br />

//   <span>this is in the span tag</span> <br />

//   <h3>Time is {new Date().toLocaleTimeString()} </h3>

//   <img src="" alt="" />

//   </h1>);

// console.log(elem2);

// ReactDOM.render(elem2, document.getElementById('root'));


  setInterval(() => {

    const elem2 = (<h1 className='heading' tabIndex={idx}>
     this is another <br />

    <span>this is in the span tag</span> <br />

    <h3>Time is {new Date().toLocaleTimeString()} </h3>

    <img src="" alt="" />

    </h1>);

    ReactDOM.render(elem2, document.getElementById('root'));

  }, 1000);


