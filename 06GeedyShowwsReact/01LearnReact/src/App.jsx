import LearnProps01 from "./components/LearnProps01"
import LearnEvent02 from './components/LearnEvent02';
import LearnLiftingStateUp03 from './components/LearnLiftingStateUp03';
import LearnuseState04 from './components/LearnuseState04';
import LearnUseEffect05 from './components/LearnUseEffect05';
import LearnUseMemo06 from "./components/LearnUseMemo06";
import LearnUseCallback07 from "./components/LearnUseCallback07";
import LearnCustomState from './components/LearnCustomState';
import LearnConditionalRendering09 from './components/LearnConditionalRendering09';
import LearnMap10 from './components/LearnMap10';
import LearnInlineCss11 from './components/LearnInlineCss11';
import LearnExtranalCss12 from './components/LearnExtranalCss12';
import LearnPicture13 from './components/LearnPicture13';
import LearnForm14 from './components/LearnForm14';
import LearnENV15 from './components/LearnENV15';

function App() {

    let val = 101

    const getData = (data) => {
          console.log(data)
    }

  return (
    < div className="text-center">
      {/* sent data from parent to child by props or property */}
      <LearnProps01 name='sagor ahmed' email='mdsagorluc@gmail.com' myRoll={val}/>

      {/* get data form child to parent */}
      <LearnLiftingStateUp03 any={getData}/>

      {/* handle event with augument and without argument */}
      <LearnEvent02/>

      {/* Learn state / Reack Hook useState() */}
      <LearnuseState04/>

      {/* Learn state/ React Hook useEffect() */}
      <LearnUseEffect05/>

      {/* Learn State/ React Hook useMemo() */}
      <LearnUseMemo06/>

      {/* Learn state/ React Hook memo and callBack */}
      <LearnUseCallback07/>

      {/* Create React Custom Hook useState */}
      <LearnCustomState/>

      {/* Learn React Conditional Rendering */}
      <LearnConditionalRendering09/>

      {/* Learn Map and how to use map in react */}
      <LearnMap10/>

      {/* Learn Inline css in React */}
      <LearnInlineCss11/>

      {/* Learn Extranal css in React */}
      <LearnExtranalCss12/>

      {/* Learn how to import picture  */}
      <LearnPicture13/>


      {/* Learn Form in react */}
      <LearnForm14/>

      {/* Learn environmental variable ENV */}
      <LearnENV15/>


    </div>
  )
}

export default App
