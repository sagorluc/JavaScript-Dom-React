
import ConditionalRendering from './component/ConditionalRendering';
import SwitchCase from './component/SwitchCase';
import TernaryOperator from './component/TernaryOperator';
import PropsChildComponent from './component/PropsChildComponent';
import PropsObjectPass from './component/PropsObjectPass';
import PassFunction from './component/PassFunction';
import EventFormSubmit from './component/EventFormSubmit';
import ReactHookUseRef from './component/ReactHookUseRef';
import UseRefSetAttribute from './component/UseRefSetAttribute';
import InputElemUseRef from './component/InputElemUseRef';
import UseRefCssClass from './component/UseRefCssClass';
import StoreApiDataInUseRef from './component/StoreApiDataInUseRef';
import UseStateReactHook from './component/UseStateReactHook';
import UseStateChangeObj from './component/UseStateChangeObj';
import UseStateToDoList from './component/UseStateToDoList';
import UseStateManageForm from './component/UseStateManageForm';
import UseEffectFetchApi from './component/UseEffectFetchApi';
import UseEffectAsyncAwait from './component/UseEffectAsyncAwait';
import HomePage from './pages/HomePage.jsx';
import LinkToOtherPage from './component/LinkToOtherPage';





const App = () => {

  let marks = 80;
  let cities = ['Dhaka', 'Tangail', 'New Yourk', 'London', 'Paris', 'Amsterdam'];

  const items = {
    id: "01",
    name: "Md. Sagor Ali",
    'fatherName': 'Md. Shahjahan Miah',
    'motherName': 'Mst. Bimala Begum',
    'city': 'Tangail',
    'post': 'Binnafair'
  }

  let BtnClick = ()=> {
    alert('Hello Guys')
  }

  return (
    <div className='text-center'>
      {/* short hand if else in jsx */}

      {
        marks >= 80?
        <h1>Brilient Result</h1>
        :
        <h1>Average Result</h1>
      }


      {/* Immediately invoked function in jsx */}

      {(() => {

        if(marks >= 80 && marks <= 100){
          return <h3>You got A+</h3>
        }
        else if(marks >= 70 && marks <= 79){
          return "You got A-"
        }
        else{
          return "You got Average Marks"
        }

      })()}

       {/* Looping system in jsx use map */}

       <ul>
          {
            cities.map((item, index) => {
              return <li key={index.toString()}>{item}</li>
            })

          }
        </ul>

      {/* Conditional Rendering in jsx if else */}
        <ConditionalRendering/> <br />

      {/* Conditional Rendering in jsx switch case */}
        <SwitchCase/> <br />

      {/* Ternary Operator in jsx  */}
      <TernaryOperator/> <br />

      {/* Passing props/Properties from parent jsx to child jsx */}
      <PropsChildComponent title="Learn React" desc="Pass data from parent" /><br />

      {/* Passing Object to the child component */}
      <PropsObjectPass item={items}/><br />

      {/* Passing props/properties function to the child jsx  */}
       <PassFunction childBtnFunc={BtnClick}/><br />

       {/* Event set to prevent page reload */}
       < EventFormSubmit /><br />

       {/* React Hook UseRef() method to manipulate DOM */}
       <ReactHookUseRef/><br />

       {/* Change attribute by react hook useRef() method */}
       <UseRefSetAttribute /><br />

       {/* Input useRef method */}
       <InputElemUseRef /><br />

       {/* User bootstrap css to useRef method */}
       <UseRefCssClass /><br />

       {/* Caching/store the api data in the useRef  */}
       <StoreApiDataInUseRef /><br />

       {/* React Hook useState() method to change number */}
       <UseStateReactHook/><br />

       {/* Change Objet by useState method */}
       <UseStateChangeObj/><br />

       {/* Todo list useState method and sprade operator */}
       <UseStateToDoList /><br />

       {/* Manage form use UseState method */}
       <UseStateManageForm/><br />

       {/* Promise style to fetch/ call api data */}
       <UseEffectFetchApi/><br />

       {/* Async and Await style to fetch / call api data */}
       <UseEffectAsyncAwait/><br />

       {/* Browser Router with React Router DOM  */}
       <HomePage/>

       {/* Link to the other pages */}
       <LinkToOtherPage/>





    </div>


  );
};

export default App;