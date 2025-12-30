export default function Articles() {
  const articles = [
    {
      title: 'Building Production-Ready AI Agents with LangGraph',
      excerpt: 'A deep dive into architecting multi-agent systems that scale in production environments. Learn how to handle state management, error recovery, and deployment strategies.',
      date: 'Dec 2025',
      readTime: '8 min',
      url: 'https://medium.com/@kasimoluwasegun/building-production-ready-ai-agents-with-langgraph-d28ee040fd56',
      views: '12K',
    },
    {
      title: 'Optimizing Spring Boot Microservices for High Traffic',
      excerpt: 'Techniques for handling 100k+ requests per minute with efficient caching and database strategies. Real-world patterns from production systems.',
      date: 'Dec 2024',
      readTime: '6 min',
      url: 'https://medium.com/@kasimoluwasegun/optimizing-spring-boot-microservices-for-high-traffic-lessons-from-production-727ef8d1862b',
      views: '2.5K',
    },
    {
      title: 'Choosing the Right Vector Database for Your AI Application: A Comprehensive Guide',
      excerpt: 'Comparative analysis of Pinecone, Weaviate, and ChromaDB for different use cases. Performance benchmarks and implementation guides.',
      date: 'Sep 2025',
      readTime: '5 min',
      url: 'https://medium.com/@kasimoluwasegun/choosing-the-right-vector-database-for-your-ai-application-a-comprehensive-guide-671cef7eab1e',
      views: '15K',
    },
    {
      title: 'Pair Programming with Generative AI: A Modern Approach to Software Development',
      excerpt: 'A concise look at how developers can collaborate with generative AI as a pair programmer to write cleaner code, move faster, and improve software quality in modern development workflows.',
      date: 'Apr 2025',
      readTime: '7 min',
      url: 'https://medium.com/@kasimoluwasegun/pair-programming-with-generative-ai-a-modern-approach-to-software-development-ff0adc69d68d',
      views: '2K',
    },
    {
      title: 'FastAPI Best Practices for Production APIs',
      excerpt: 'Build robust, high-performance APIs with FastAPI. Covers authentication, validation, async patterns, and deployment on cloud platforms.',
      date: 'Dec 2025',
      readTime: '7 min',
      url: 'https://medium.com/@kasimoluwasegun/fastapi-best-practices-for-production-apis-924676d5d134',
      views: '9K',
    },
    {
      title: 'Understanding React Server Components',
      excerpt: 'A practical guide to React Server Components and how they change the way we build modern web applications. Includes migration strategies.',
      date: 'Jan 2026',
      readTime: '5 min',
      url: 'https://medium.com/@kasimoluwasegun/understanding-react-server-components-a-comprehensive-guide-36c8e4cef1cd',
      views: '11K',
    },
    
  ]

  return (
    <section id="articles" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 block group hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/10 border border-white/5 hover:border-cyan-400/30 flex flex-col"
            >
              {/* Header with date and read time */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">
                  {article.date}
                </span>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {article.views}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {article.excerpt}
              </p>

              {/* Read More */}
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium pt-4 border-t border-white/5 group-hover:gap-3 transition-all">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                <span>Read on Medium</span>
                <svg
                  className="w-4 h-4 ml-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
