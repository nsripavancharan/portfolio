import { useState } from "react";
import "./App.css";
import "./index.css";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";

// Sections
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { EducationExperience } from "./components/sections/EducationExperience";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Certification } from "./components/sections/Certification";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        {/* Navbar and Mobile Menu */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* ---- Page Sections ---- */}
        <Home />
        <About />
        <EducationExperience />
        <Skills />
        <Projects />
        <Certification /> 
        <Contact />
      </div>
    </>
  );
}

export default App;
