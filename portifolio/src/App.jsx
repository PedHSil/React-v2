import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import SkillSets from "./components/SkillSets";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import HeroTyping from "./components/HeroTyping";
import Curiosities from "./pages/Curiosities";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Landingpage */}
        <Route
          path="/"
          element={
            <>
              <HeroTyping />
              <About />
              <SkillSets />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Nova Página */}
        <Route path="/curiosidades" element={<Curiosities />} />
      </Routes>
    </>
  );
}

export default App;
