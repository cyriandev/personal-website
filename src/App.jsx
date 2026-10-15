import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WaveBackground from './components/WaveBackground'
import LoadsheddingPrivacy from './components/LoadsheddingPrivacy'
import KasiLingoPrivacy from './components/KasiLingoPrivacy'

function Home() {
  return (
    <div className="container">
      <WaveBackground />
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loadshedding/privacy" element={<LoadsheddingPrivacy />} />
      <Route path="/kasi-lingo/privacy" element={<KasiLingoPrivacy />} />
    </Routes>
  )
}

export default App
