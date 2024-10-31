
import React from 'react'
import Header from './components/header'
import Firstsection from './components/intro'
import Project from './components/project'
import Contact from './components/contact'
import About from './components/about'
const page = () => {
  return (
    <div>
      <Header />
    <Firstsection />
      <Project /> 
      <About />
      <Contact />
      
    </div>
  )
}

export default page


