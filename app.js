import React from "https://unpkg.com/react@18/umd/react.development.js";
import ReactDOM from "https://unpkg.com/react-dom@18/umd/react-dom.development.js";
const { motion } = window['framer-motion'];

const App = () => {
  return (
    React.createElement('main', { className: 'min-h-screen flex items-center justify-center p-6' },
      React.createElement('div', { className: 'max-w-4xl w-full bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur rounded-2xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6' },
        // Left column
        React.createElement(motion.div, { initial: { opacity:0, y:20 }, animate: { opacity:1, y:0 }, transition: { delay:0.1 }, className: 'md:col-span-1 flex flex-col items-center text-center p-4' },
          // Avatar (SVG stylized)
          React.createElement('div', { className: 'w-36 h-36 rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-500 flex items-center justify-center text-4xl font-bold shadow-lg' },
            'RM'
          ),
          React.createElement('h1', { className: 'mt-4 text-2xl font-semibold' }, 'Rafael Manzano'),
          React.createElement('p', { className: 'text-sm text-gray-300 mt-2' }, 'Desarrollador Senior de Android'),
          React.createElement('a', { href: './CV-Rafael-Manzano.pdf', download: true, className: 'mt-4 inline-block px-4 py-2 rounded-lg border border-gray-700 hover:bg-white/5' }, 'Descargar CV')
        ),
        // Right column (main content)
        React.createElement('section', { className: 'md:col-span-2 p-4' },
          React.createElement(motion.div, { initial: { opacity:0 }, animate: { opacity:1 }, transition: { delay:0.2 } },
            React.createElement('h2', { className: 'text-xl font-semibold mb-2' }, 'Sobre mí'),
            React.createElement('p', { className: 'text-gray-300 leading-relaxed' }, 'Hola, soy Rafael, Desarrollador Senior de Android con casi 5 años de experiencia. Me especializo en aplicaciones nativas usando Kotlin, siguiendo patrones como MVVM y desarrollando soluciones para Android TV con Leanback.'),
            React.createElement('div', { className: 'mt-6' },
              React.createElement('h3', { className: 'text-lg font-medium mb-2' }, 'Experiencia'),
              React.createElement('ul', { className: 'space-y-3 text-gray-300' },
                React.createElement('li', null, React.createElement('strong', null, 'KnowMadMood'), ' — Desarrollador Senior de Android (Ago 2022 - Presente)'),
                React.createElement('li', null, React.createElement('strong', null, 'Pleuxs Tech'), ' — Desarrollador de Android (Mar 2022 - Ago 2022)'),
                React.createElement('li', null, React.createElement('strong', null, 'Alten'), ' — Desarrollador de Android (Jun 2020 - Mar 2022)')
              )
            ),
            React.createElement('div', { className: 'mt-6' },
              React.createElement('h3', { className: 'text-lg font-medium mb-2' }, 'Habilidades'),
              React.createElement('div', { className: 'flex flex-wrap gap-2' },
                ['Kotlin','Java','MVVM','Android Studio','Leanback (Android TV)','Git','Testing','Scrum'].map((s) =>
                  React.createElement('span', { key:s, className: 'px-3 py-1 rounded-full bg-white/5 text-sm' }, s)
                )
              )
            ),
            React.createElement('div', { className: 'mt-6' },
              React.createElement('h3', { className: 'text-lg font-medium mb-2' }, 'Contacto'),
              React.createElement('p', { className: 'text-gray-300' }, 'Email: ',
                React.createElement('a', { href: 'mailto:rafamanzanomedina@gmail.com', className: 'underline text-indigo-300' }, 'rafamanzanomedina@gmail.com')),
              React.createElement('p', { className: 'text-gray-300 mt-1' }, 'LinkedIn: ',
                React.createElement('a', { href: 'https://www.linkedin.com/in/rafaelmanzanomedina', target: '_blank', className: 'underline text-indigo-300' }, 'linkedin.com/in/rafaelmanzanomedina'))
            )
          )
        )
      )
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
