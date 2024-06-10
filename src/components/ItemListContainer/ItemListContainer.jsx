import { Flex, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { SyncLoader } from 'react-spinners'


const ItemListContainer = ({title}) => {
  const [ products, setProducts ] = useState({})
  const {categoryId} = useParams()
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setLoading(true)

    const dataProductos = categoryId ? getProductsByCategory(categoryId) :  getProducts()

    dataProductos
    .then((data) => setProducts(data))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))  
  },[categoryId])


  return (
    <Flex direction={'column'} justify={'center'} align={'center'}> 
      <Heading color={'#FCD7B6'} mt={10}>{title}</Heading>
      {
        loading ? <SyncLoader color="#36d7b7" /> : <ItemList products={products} />
      }
      
      
    </Flex>
  )
}

export default ItemListContainer