import { Box, Link as ChakraLink } from "@chakra-ui/react";
import { BsBackpack3 } from "react-icons/bs";
import {React, useContext} from 'react'
import { Link } from "react-router-dom";
import Context from "../../context/CartContext";


const CartWidget = () => {

    const { getQuantity } = useContext(Context)

    return (
        <Box justify={'center'} align ={'center'}>
        <ChakraLink as={Link} to='/cart' ><BsBackpack3 color={'#203500'} /></ChakraLink>
        <span>{ getQuantity() > 0 && getQuantity() }</span>
        </Box>
    )
}

export default CartWidget