
import Contact from "./components/Contact"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/NavBar"
import ValueSection from "./components/ValueSection"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <main>
        <HeroSection/>
        <ValueSection/>
      <Contact />
      </main>
      
      </div>
  )
}

export default App