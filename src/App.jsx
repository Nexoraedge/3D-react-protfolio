import React from 'react'
import './index.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Experience from './pages/Experience'
 


const App = () => {
  return (
    <div className='bg-black  text-white w-full min-h-screen '>
      
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
