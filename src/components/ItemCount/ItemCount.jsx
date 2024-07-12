import React, { useState } from 'react'
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'



const ItemCount = ({stock, valorInicial, onAdd}) => {
    const [ count, setCount ] = useState(valorInicial)
  
    const incrementar = () => {
        count < stock && setCount(count + 1)
    }

    const decrementar = () => {
        count > 1 && setCount(count - 1)
    }

  return (
    <Flex gap='2'>
        <Button colorScheme='green'onClick={decrementar}>-</Button>
        {count}
        <Button colorScheme='green' onClick={incrementar}>+</Button>
        <Button bg={'green.500'} _hover={{ bg: 'green.600', color: '#fff' }} onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  )
}

export default ItemCount