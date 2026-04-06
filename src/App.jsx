import { useEffect } from 'react'
import { useScrollAnimation } from './hooks/useScrollAnimation'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Academics from './components/Academics'
import Experience from './components/Experience'
import Projects from './components/Projects'
import AIAgents from './components/AIAgents'
import Competitions from './components/Competitions'
import Moments from './components/Moments'
import Resume from './components/Resume'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useScrollAnimation()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Experience />
        <Projects />
        <AIAgents />
        <Competitions />
        <Moments />
        <Resume />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
