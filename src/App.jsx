import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Skills from './pages/Skills.jsx'
import Career from './pages/Career.jsx'
import Projects from './pages/Projects.jsx'
import HellMetz from './pages/HellMetz.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <main className="page" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competences" element={<Skills />} />
          <Route path="/parcours" element={<Career />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/hellmetz" element={<HellMetz />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
