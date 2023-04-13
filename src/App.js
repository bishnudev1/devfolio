import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Home from './Screens/Home'
import Footer from './Screens/Footer'
import About from './Screens/About'
import Projects from './Screens/Projects'
import Skills from './Screens/Skills'
import Works from './Screens/Works'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Works />
      <Footer />
    </ChakraProvider>
  )
}

export default App