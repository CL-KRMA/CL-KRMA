import About from "@/components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"

export default function Home() {
    return <div>
        <Header />
         <div className="home">
      <h1>👋 Salut, je suis <strong>Cheick</strong></h1>
      <p>
        <strong>Ingénieur DevOps</strong> passionné par la création de solutions 
        digitales modernes. Mon objectif: transformer vos idées en expériences 
        web performantes et évolutives.
      </p>
    </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
    
}