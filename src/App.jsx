import React from 'react'
import { motion } from 'framer-motion'
import Contact from './components/Contact'
import CV from './assets/CV-Rafael-Manzano.pdf'

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur rounded-3xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }} className="md:col-span-1 flex flex-col items-center text-center p-4">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-500 flex items-center justify-center text-4xl font-bold shadow-lg">
            RM
          </div>
          <h1 className="mt-4 text-2xl font-semibold">Rafael Manzano</h1>
          <p className="text-sm text-gray-300 mt-2">Desarrollador Senior de Android</p>
          <a href={CV} download className="mt-4 inline-block px-4 py-2 rounded-lg border border-gray-700 hover:bg-white/5">Descargar CV</a>
        </motion.div>

        <section className="md:col-span-2 p-4">
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }}>
            <h2 className="text-xl font-semibold mb-2">Sobre mí</h2>
            <p className="text-gray-300 leading-relaxed">Hola, soy Rafael, Desarrollador Senior de Android con casi 5 años de experiencia. Me especializo en aplicaciones nativas usando Kotlin, siguiendo patrones como MVVM y desarrollando soluciones para Android TV con Leanback.</p>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Experiencia</h3>
              <ul className="space-y-3 text-gray-300">
                <li><strong>KnowMadMood</strong> — Desarrollador Senior de Android (Ago 2022 - Presente)</li>
                <li><strong>Pleuxs Tech</strong> — Desarrollador de Android (Mar 2022 - Ago 2022)</li>
                <li><strong>Alten</strong> — Desarrollador de Android (Jun 2020 - Mar 2022)</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Habilidades</h3>
              <div className="flex flex-wrap gap-2">
                <span key='Kotlin' className='px-3 py-1 rounded-full bg-white/5 text-sm'>Kotlin</span>,
                <span key='Java' className='px-3 py-1 rounded-full bg-white/5 text-sm'>Java</span>,
                <span key='MVVM' className='px-3 py-1 rounded-full bg-white/5 text-sm'>MVVM</span>,
                <span key='Android Studio' className='px-3 py-1 rounded-full bg-white/5 text-sm'>Android Studio</span>,
                <span key='Leanback (Android TV)' className='px-3 py-1 rounded-full bg-white/5 text-sm'>Leanback (Android TV)</span>,
                <span key='Git' className='px-3 py-1 rounded-full bg-white/5 text-sm'>Git</span>,
                <span key='Testing' className='px-3 py-1 rounded-full bg-white/5 text-sm'>Testing</span>,
                <span key='Scrum' className='px-3 py-1 rounded-full bg-white/5 text-sm'>Scrum</span>
              </div>
            </div>
          </motion.div>
        </section>

        <Contact />
      </div>
    </div>
  )
}

