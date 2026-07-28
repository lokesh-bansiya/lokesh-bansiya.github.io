import "./App.css";
import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
import { AboutMe } from "./Pages/AboutMe";
import { Skills } from "./Pages/Skills";
import { Projects } from "./Pages/Projects";
import { GitHubActivity } from "./Pages/GitHubActivity";
import { Contact } from "./Pages/Contact";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HomePage />
        <AboutMe />
        <Skills />
        <Projects />
        <GitHubActivity />
        <Contact />
      </main>
      <a
        href="https://wa.me/919993977820"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lokesh on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;
