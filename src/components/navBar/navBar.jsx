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
                    <ChakraLink as={Link} to='/'>
                        <Image height={'80px'} src={logo} alt='logo'/>
                    </ChakraLink>
                </Heading>
                <Menu>
                    <MenuButton as={Button} w={'150px'} rightIcon={<FaChevronDown />}>
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
                <CartWidget mr={'10px'}/>
                
                </Flex>
    )

}

export default NavBar 