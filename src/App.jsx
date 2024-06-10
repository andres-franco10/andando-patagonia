
import './App.css'
import NavBar from './components/navBar/navBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ComponentWithRouteParams from './components/ComponentWIthRouteParams/ComponentWIthRouteParams.jsx'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    

    <ChakraProvider>

      <BrowserRouter>
    
        <NavBar /> 

        <Routes>
            <Route path="/" element= {<ItemListContainer  greeting={'Bienvenidos'}/>} />

            <Route path="/categorias/:categoryId" element= {<ItemListContainer greeting={'Bienvenidos'}/>}/>

            <Route path="/producto/:productId" element={<ItemDetailContainer />} />
            
            <Route path="/user/:userId" element={<ComponentWithRouteParams/>} />
            
            <Route path="*" element={<h1>404</h1>}/>
        </Routes>

      </BrowserRouter> 

    </ChakraProvider>
    
  )
}

export default App
