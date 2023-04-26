import { ChakraProvider, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import About from './Screens/About'
import Home from './Screens/Home'
import Skills from './Screens/Skills'
import Projects from './Screens/Projects'
import Works from './Screens/Works'
import Contact from './Screens/Contact'
import Footer from './Screens/Footer'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Works />
      <Contact />
      <Footer />
    </ChakraProvider>
  )
}

export default App