import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { ChakraProvider, theme, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher'
import Trading from './Screens/Trading'
import Homepage from './Screens/Homepage'
import app from './db/firebase.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  if(app === null){
    console.log("Firebase has not connected yet or failed to connect");
    return <>
      <Text>Server has crashed...</Text>
    </>
    
  }

  console.log("Firebase has connected...");
  


  return (
    <ChakraProvider theme={theme}>
    <ColorModeSwitcher />
    <BrowserRouter>
    <ToastContainer />
     <Routes>
      <Route path='/' element= {<Homepage/>}/>
      <Route path='/earn-with-me' element={<Trading />} /> 
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
  )

}

export default App