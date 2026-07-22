import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import SocialRail from './components/SocialRail'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="min-h-screen bg-paper">
      <ScrollProgress />
      <Navbar />
      <SocialRail />
      <main className="overflow-x-clip">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
