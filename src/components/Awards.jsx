export default function Awards() {
  const awards = [
    {
      title: 'Thinkathon Hackathon Winner',
      organization: 'Thinkathon 2026',
      date: 'December 2026',
      description: 'First place winner for developing an innovative AI-powered solution that demonstrated exceptional technical execution and real-world impact. Competed against 50+ teams to deliver a production-ready prototype in 48 hours.',
      achievement: '1st Place',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Best Technical Innovation',
      organization: 'Tech Summit 2025',
      date: 'March 2025',
      description: 'Recognized for pioneering work in distributed AI systems architecture. The solution reduced inference latency by 70% while maintaining 99.9% uptime across multiple regions.',
      achievement: 'Innovation Award',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="awards" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 border border-white/5 hover:border-cyan-400/30"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative">
                {/* Icon and Achievement Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-400/20 group-hover:scale-110 transition-transform">
                    {award.icon}
                  </div>
                  <span className="px-3 py-1 text-xs font-bold rounded-lg bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 border border-cyan-400/30">
                    {award.achievement}
                  </span>
                </div>

                {/* Title and Organization */}
                <h3 className="text-2xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                  {award.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-cyan-400 font-medium">{award.organization}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-400 text-sm">{award.date}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
