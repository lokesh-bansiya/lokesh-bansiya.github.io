import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from "./Pages/Navbar";
import { Projects } from './Pages/Projects';
import { AboutMe } from "./Pages/AboutMe";
import { Skills } from './Pages/Skills';
import { Calendar } from './GitHub/Calendar';
import { Stats } from './GitHub/Stats';
import { Contact } from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section>
        <Stats />
        <Calendar />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <a
        href="https://wa.me/+919993977820"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;
