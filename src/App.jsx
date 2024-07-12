
import './App.css'
import NavBar from './components/navBar/navBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import PageNotFound from './components/PageNotFound/PageNotFound.jsx'


function App() {
  return (
    

    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path="/" element= {<ItemListContainer/>} />
          <Route path="/categorias/:categoryId" element= {<ItemListContainer />}/>
          <Route path="/producto/:productId" element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} ></Route>
          <Route path="*" element={<PageNotFound/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter> 
      </CartContextProvider>
    </ChakraProvider>
    
  )
}

export default App
