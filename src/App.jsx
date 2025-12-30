import LoadingScreen from './components/LoadingScreen'
import ScrollReveal from './components/ScrollReveal'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Awards from './components/Awards'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <LoadingScreen />
      <div className="relative">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Navigation */}
        <Navigation />

        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Articles />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <Awards />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Contact />
          </ScrollReveal>
        </div>
      </div>
    </>
  )
}

export default App
