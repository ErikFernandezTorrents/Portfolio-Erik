'use client'


export default function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full bg-/80 backdrop-blur z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-lg dark:text-white">Erik.dev</div>
        <ul className="flex gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
          <li><a href="#hero" className="text-white hover:text-[#FFD482]">Inicio</a></li>
          <li><a href="#about" className="text-white hover:text-[#FFD482]">Sobre mí</a></li>
          <li><a href="#experience" className="text-white hover:text-[#FFD482]">Experiencia</a></li>
          <li><a href="#skills" className="text-white hover:text-[#FFD482]">Skills</a></li>
        </ul>
      </div>
    </nav>
  )
}
