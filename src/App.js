import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from "./Pages/Navbar";
import { Projects } from './Pages/Projects';
import { AboutMe } from "./Pages/AboutMe"
import { Skills } from './Pages/Skills';
import { Calendar } from './GitHub/Calendar';
import { Stats } from './GitHub/Stats';
import { Contact } from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <AboutMe/>
      <Skills/>
      <Stats/>
      <Calendar/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
