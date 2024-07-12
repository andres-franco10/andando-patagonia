import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Card, CardBody, Text, Image, Stack, Heading, Divider, CardFooter, Center, Flex, Button } from '@chakra-ui/react';
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ nombre, stock, descripcion, img, precio, id }) => {
    const [ cantidad, setCantidad ] = useState(0)
    const {addItem} = useContext(Context)

    const onAdd = (quantity) => {
        const item = {
            id,
            nombre,
            precio,
            img
        }
        addItem (item, quantity)
        toast(`Agregaste ${nombre} para ${quantity} persona/s al carrito`)
        setCantidad(quantity)

    }

    return (
            <Center>
                <Card align ='center' maxW='800'>
                    <CardBody>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Image
                        src={img}
                        alt={nombre}
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading textAlign = 'center' size='lg'>{nombre}</Heading>
                        <Text>
                            {descripcion}
                        </Text>
                        <Text color='green.600' fontSize='2xl'>
                            ${precio}
                        </Text>
                        </Stack>
                        </Flex>
                    </CardBody>
                    <Divider />
                    <CardFooter> 

                        {
                            cantidad > 0 ?
                            <Flex gap={'2'}>
                                <Button _hover={{ bg: 'green.600', color: '#fff' }} colorScheme='green' >
                                    <Link to = '/cart'>Ir al carrito</Link>
                                </Button>
                                <Button _hover={{ bg: 'green.600', color: '#fff' }}  colorScheme='green'>
                                    <Link to = '/'>Seguir comprando</Link>
                                </Button>
                            </Flex>
                                :
                            <ItemCount  stock={stock} valorInicial={1} onAdd={onAdd}/>
                            
                        }
                    </CardFooter>  
                    <ToastContainer />   
                </Card>
            </Center>
        
    )
}

export default ItemDetail