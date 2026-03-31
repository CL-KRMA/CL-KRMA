import About from "@/components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default function Home() {
    return <div>
        <Header />
         <div className="home">
      <h1>👋 Salut, je suis <strong>Cheick L. Dev</strong></h1>
      <p>
        <strong>Développeur Fullstack</strong> passionné par la création de solutions 
        digitales modernes. Mon objectif: <em>transformer vos idées en expériences 
        web performantes et évolutives</em>.
      </p>
    </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
    
}