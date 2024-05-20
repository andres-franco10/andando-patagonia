
import './App.css'
import NavBar from './components/navBar/navBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    

    <ChakraProvider>
      <box>
      <NavBar/> 
      <ItemListContainer  greeting={'Bienvenidos'}/>
      </box>
    </ChakraProvider>
  )
}

export default App
