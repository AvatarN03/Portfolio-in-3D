import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experiences from './sections/Experiences'

export default function App() {
  return (
    <main className='max-w-7xl mx-auto scroll-smooth'>
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      {/* <Clients />
      <Experiences /> */}
      <Contact />
      <Footer />
    </main>
  )
}
