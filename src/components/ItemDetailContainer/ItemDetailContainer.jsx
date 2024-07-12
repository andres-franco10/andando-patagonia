import { Box, Flex } from "@chakra-ui/react"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { SyncLoader } from 'react-spinners'
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../config/firebase.js"

const ItemDetailContainer = () => {
    const [producto , setProducto] = useState ({})
    const [loading , setLoading] = useState(true)
    const { productId } = useParams()
    

    useEffect(() => {

        const getData = async () => {
            const queryRef = doc(db, 'productos', productId)

            const response =await getDoc(queryRef)

            const newItem = {
                ...response.data(),
                id: response.id
            }

            setProducto(newItem)
            setLoading(false)
        }

        getData()

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
