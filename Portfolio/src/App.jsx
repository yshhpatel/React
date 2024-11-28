// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import './App.css'
import About from './Components/About'
import CardSlider from './Components/CardSlider'
import Contact from './Components/Contact'
import { Element } from 'react-scroll'



export default function App() {
 
  return (
    <>
   
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <CardSlider />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  )
}
