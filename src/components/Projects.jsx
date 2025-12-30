export default function Projects() {
  const projects = [
    {
      name: 'Financial Analysis Agent',
      description: 'An AI-powered financial analysis agent built with LangGraph and FastAPI, providing GPT-4–driven insights, secure database queries, and real-time streaming via REST and WebSockets.',
      tags: [
        'Python',
        'FastAPI',
        'LangGraph',
        'LangChain',
        'GPT-4',
        'Pydantic'
      ],
      github: 'https://github.com/pearch001/Financial-Analysis-Agent.git',
      live: null,
    },
    {
      name: 'SyncPay Admin Dashboard',
      description: 'A modern, AI-powered admin dashboard for managing offline transactions with real-time analytics, interactive visualizations, and natural language insights.',
      tags: [
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'AI',
        'Data Visualization',
        'Real-time Analytics'
      ],
      github: 'https://github.com/pearch001/SyncPay-Dashboard.git',
      live: 'https://syncpay-red.vercel.app',
    },
    {
      name: 'RAG Document Assistant',
      description: 'Retrieval-augmented generation system for intelligent document querying using embeddings and semantic search.',
      tags: ['Python', 'LangChain', 'ChromaDB', 'OpenAI'],
      github: 'https://github.com/pearch001/RAG-Document-Assistant.git'
    },
    {
      name: 'DevOpsGPT',
      description: 'An AI-powered Spring Boot application that assists with DevOps and cloud tasks using intelligent chat, retrieval-augmented generation (RAG), and stateful conversations.',
      tags: [
        'Java',
        'Spring AI',
        'RAG',
        'DevOps',
        'LLM'
      ],
      github: 'https://github.com/pearch001/DevopsGpt.git',
      live: 'https://devopsgpt-ui.vercel.app',
    },
    {
      name: 'Distributed Task Queue',
      description: 'High-performance task queue system built with Python and Redis, supporting scheduled jobs, retries, and priority queues.',
      tags: ['Python', 'Redis', 'Celery', 'Docker'],
      github: 'https://github.com/pearch001/Distributed-Task-Queue.git',
      live: null,
    },
    {
      name: 'ML Fraud Detection API',
      description: 'Real-time fraud detection system using ML models to analyze transaction patterns, with feature engineering, model versioning, and A/B testing capabilities.',
      tags: ['Python', 'FastAPI', 'scikit-learn', 'MLflow', 'PostgreSQL', 'Redis'],
      github: 'https://github.com/pearch001/Fraud-Detection-API.git',
      live: null,
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 border border-white/5 hover:border-cyan-400/30 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-1">
                    {project.name}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-5 h-5 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/30 text-slate-300 hover:text-cyan-400 transition-all text-sm font-medium group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Code</span>
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400/10 to-blue-500/10 hover:from-cyan-400/20 hover:to-blue-500/20 border border-cyan-400/30 text-cyan-400 hover:text-cyan-300 transition-all text-sm font-medium group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
