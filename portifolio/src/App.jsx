import Navbar from "./components/Navbar";
import About from "./components/About";
import SkillSets from "./components/SkillSets";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import HeroTyping from "./components/HeroTyping";

function App() {
  

  return (
   <div>
    <Navbar />
    <HeroTyping />
    <About />
    <SkillSets />
    <Projects />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
