
import Demo from './Demo';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


// function/ stateless component of react 

const App = () => {
  return (
    <div>
      <h1>Hello I Am Learning React !</h1>
      <br />

      <button style={
        {
          color: 'blue',
          fontSize: '25px',
          
        }
      }>Submit</button>

      <button onClick={() => alert('Hello')}>Alert</button>
      <br />
      < Demo/> {/* call the component from the demo.jsx */}
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;