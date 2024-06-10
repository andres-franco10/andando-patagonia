import { Box } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { SyncLoader } from 'react-spinners'

const ItemDetailContainer = () => {
    const [producto , setProducto] = useState ({})
    const [loading , setLoading] = useState(true)
    const { productId } = useParams()
    

    useEffect(() => {

        getProductById(productId)
        .then((data) => setProducto(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))

    },[])


    return (
        <>
        {
            loading ?
            <SyncLoader color="#36d7b7" /> 
            :
            <ItemDetail {...producto} />
          }
        </>
    )
}

export default ItemDetailContainer
