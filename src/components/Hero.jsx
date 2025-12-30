export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="glass rounded-3xl p-8 md:p-16 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="flex-shrink-0 animate-slide-in-left">
              <div className="relative group">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-2xl blur-2xl animate-pulse group-hover:bg-cyan-400/30 transition-colors"></div>
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border-2 border-cyan-400/30 shadow-2xl group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left animate-slide-in-right delay-200">
              <p className="text-sm uppercase tracking-widest text-cyan-400 mb-3 animate-fade-in delay-300">
                5+ Years Experience
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-2 text-slate-100 animate-fade-in-up delay-400">
                Kasim Segun Ebenezer
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-up delay-500">
                Software Engineer
              </h2>

              {/* Tech Stack Categories */}
              <div className="grid md:grid-cols-3 gap-4">
                {/* Backend */}
                <div className="glass rounded-xl p-4 border border-cyan-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    <h3 className="font-semibold text-slate-100">Backend</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    Java/Spring Boot<br />Python/FastAPI
                  </p>
                </div>

                {/* Frontend */}
                <div className="glass rounded-xl p-4 border border-cyan-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="font-semibold text-slate-100">Frontend</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    React<br />Tailwind CSS
                  </p>
                </div>

                {/* AI Engineering */}
                <div className="glass rounded-xl p-4 border border-cyan-400/20">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="font-semibold text-slate-100">AI Engineering</h3>
                  </div>
                  <p className="text-sm text-slate-400">
                    LangGraph, Agents<br />Vector Databases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
