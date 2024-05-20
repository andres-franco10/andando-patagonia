import CartWidget from "../CartWidget/CartWidget"
import { Button, ButtonGroup, Heading } from '@chakra-ui/react'


const NavBar = () => {
    return (
        <nav>
            <center>
                <Heading>Andando Patagonia</Heading>
                <ButtonGroup>
                    <Button colorScheme="green">Trekkings</Button>
                    <Button colorScheme="blue">Ascensos</Button>
                    <Button colorScheme="red">Travesias</Button>
                </ButtonGroup>
                <CartWidget/>
            </center>
        </nav>
    )

}

export default NavBar 