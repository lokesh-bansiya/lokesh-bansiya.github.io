import './App.css';
import HomePage from './Pages/HomePage';
import Navbar from "./Pages/Navbar";
import { Projects } from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <Projects/>
    </div>
  );
}

export default App;
