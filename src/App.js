import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <About />
    <Projects />
    <Resume />
    <Contact />
    </div>
  );
}

export default App;
