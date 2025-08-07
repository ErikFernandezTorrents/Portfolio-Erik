import Navbar from '../../components/NavBar'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Skills from '../../components/Skills'
import Experience from '../../components/Experience'

export default function Home() {
  return (
    <main className="bg-gradient-to-tr from-slate-900 to-slate-600 text-white">
      <Navbar />
      <div className="pt-20"> {/* espacio para navbar fijo */}
        <Hero />
        <About />
        <Experience />
        <Skills />
      </div>
    </main>
  )
}
