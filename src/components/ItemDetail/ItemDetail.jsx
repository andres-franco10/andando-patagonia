import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardBody, Text } from '@chakra-ui/react';

const ItemDetail = ({ nombre, stock, descripcion }) => {

    const onAdd = (quantity) => {
        toast(`Agregaste ${quantity} unidades`)

    }

    return (
        <Card>
            <CardBody>
                <Text>{nombre}</Text>
                <Text>{descripcion}</Text>
                <ItemCount stock={stock} valorInicial={1} onAdd={onAdd}/>
                <ToastContainer />
            </CardBody>
        </Card>
    )
}

export default ItemDetail