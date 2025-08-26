import React from 'react'
import './index.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Experience from './pages/Experience'
import GlobalLoader from './components/GlobalLoader'


const App = () => {
  return (
    <div className='bg-black  text-white w-full min-h-screen '>
      <GlobalLoader />
     
      <Hero />
      <About />
      <Projects />
      <Clients />
       <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
