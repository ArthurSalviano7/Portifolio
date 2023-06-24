import AboutMe from "./components/AboutMe.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Technologies from "./components/Technologies.jsx"
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Projects />
      <Technologies />
      <Contact />
    </div>
    
  );
}

export default App;
