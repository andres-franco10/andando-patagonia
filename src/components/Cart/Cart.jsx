import { Button, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Image,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex
  } from '@chakra-ui/react'
  import { RiDeleteBin5Line } from "react-icons/ri";
  import {Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(Context)
    if(cart.length === 0) {
        return (

            <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
                <Heading>Todavía no agregaste productos al carrito</Heading>
            <Link to='/'>Ver productos</Link>
        </Flex>
    )
    }else {

  return (
    <TableContainer padding={'15px'} >
    <Table variant='striped' colorScheme='green'>
        <Thead>
        <Tr>
            <Th></Th>
            <Th>Nombre</Th>
            <Th>Cantidad</Th>
            <Th>Precio</Th>
            <Th>Subtotal</Th>
            <Th></Th>
        </Tr>
        </Thead>
        <Tbody>
            {
                cart.map((prod) => (
                    <Tr key={prod.id}>
                        <Td><Image height={'100'} src={prod.img}></Image></Td>
                        <Td>{prod.nombre}</Td>
                        <Td>{prod.quantity}</Td>
                        <Td>${prod.precio}</Td>
                        <Td>${prod.precio * prod.quantity}</Td>
                        <Td>
                            <Button border={'1px'} onClick={()=>removeItem(prod.id)}>
                                <RiDeleteBin5Line />
                            </Button>
                        </Td>
                    </Tr>
        ))
        }
        </Tbody>
        <Tfoot>
        <Tr>
            <Th>
                <Button bg={'green.200'} _hover={{ bg: 'green.600', color: '#fff' }} onClick={() => clearCart()}>Vaciar carrito </Button>
            </Th>
            <Th><Heading>${getTotal()}</Heading></Th>
            <Th>
                <Button bg={'green.200'} _hover={{ bg: 'green.600', color: '#fff' }} >
                    <Link to='/checkout'>Finalizar compra</Link>
                </Button>
                </Th>
        </Tr>
        </Tfoot>
    </Table>
    </TableContainer>
  )
}

}

export default Cart