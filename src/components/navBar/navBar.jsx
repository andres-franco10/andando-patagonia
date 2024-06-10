import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Flex,
    Heading,
    Image,
    Link as ChakraLink
  } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { FaChevronDown } from "react-icons/fa";
import logo from "../../assets/images/andando-logo.jpg"



const NavBar = () => {
    return (
        
        <Flex 
        h={'10vh'} 
        w={'100%'} 
        justify={'space-between'} 
        align={'center'} 
        backgroundColor={'#55868C'}
        >
                <Heading>
                    <ChakraLink as={Link} width={'16%'} to='/'>
                        <Image w={'16%'} src={logo} alt='logo'/>
                    </ChakraLink>
                </Heading>
                <Menu>
                    <MenuButton as={Button} w={'35%'} rightIcon={<FaChevronDown />}>
                    Categorías
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to='/categorias/Trekkings'>Trekkings
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to ='/categorias/Ascensos'>Ascensos
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/categorias/Travesias'>Travesias
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/categorias/Escalada'>Escalada
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Link to="/cart"><CartWidget/></Link>
                
                </Flex>
    )

}

export default NavBar 