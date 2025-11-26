/**
 * Opdracht 09 - Tailwind CSS
 * Student: Thayron Bernabela
 * Softwaredeveloper Jaar 2 - Techniek College Rotterdam
 * Workcation card + dark mode (volgt systeeminstelling)
 */

import workcationImage from './assets/workcation.jpg'

function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center px-4">
      
      <main className="max-w-xl w-full">
        {/* Logo + titel */}
        <header className="mb-6 flex items-center gap-3">
          <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-indigo-500 text-white shadow-md">
            <span className="text-xl">🏝️</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Workcation
          </h1>
        </header>

        {/* Foto */}
        <div className="mb-8">
          <img
            src={workcationImage}
            alt="Woman working at the beach"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Content */}
        <section className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl px-8 py-8 shadow-lg">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4 leading-tight">
            You can work from anywhere.
            <span className="text-indigo-500"> Take advantage of it.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-8">
            Workcation helps you find work-friendly rentals in beautiful locations
            so you can enjoy some nice weather even when you're not on vacation.
          </p>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-8 py-3 text-xs font-semibold tracking-widest uppercase text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-600 transition"
          >
            Book your escape
          </button>
        </section>
      </main>

    </div>
  )
}

export default App
