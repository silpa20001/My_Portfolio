import logo from './logo.svg';
import './App.css';
import Navbar from './JsFiles/Navbar';
import Footer from './JsFiles/Footer';
import Myself from './JsFiles/Myself';
import Skills from './JsFiles/Skills';
import About from './JsFiles/About';
import Certifications from './JsFiles/Certifications';
import ContactMe from './JsFiles/ContactMe';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Myself />
     <Skills />
     <About />
     <Certifications />
     <ContactMe />
     <Footer />
    </div>
  );
}

export default App;
