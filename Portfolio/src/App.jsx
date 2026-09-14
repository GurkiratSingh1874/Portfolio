import About from "./components/About"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills"



function App() {
  return (
    <div className="relative bg-[#080c18] min-h-screen w-full overflow-hidden text-slate-100 selection:bg-indigo-600 selection:text-white bg-grid-pattern">
      {/* Ambient background glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 md:w-[600px] h-96 md:h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-5%] w-80 md:w-[500px] h-80 md:h-[500px] bg-purple-600/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[65%] left-[-5%] w-80 md:w-[500px] h-80 md:h-[500px] bg-blue-600/12 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App
