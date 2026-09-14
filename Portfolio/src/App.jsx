import About from "./components/About"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills"



function App() {
  return (
    <div className='bg-[#171d32] min-h-screen w-full overflow-hidden text-slate-100 selection:bg-indigo-600 selection:text-white'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App
