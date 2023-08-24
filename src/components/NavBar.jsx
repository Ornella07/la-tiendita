// import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Box, 
    Spacer
    
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
        <Flex>
            <Box p='4' bg='gray.50'>
                <h3>La Tiendita</h3>
            </Box>
            <Spacer />
            <Box p='4' bg='gray.50'>
            <Menu>
                    <MenuButton>
                    Categorias
                    </MenuButton>
                    <MenuList>
                    <MenuItem>Categoria 1</MenuItem>
                    <MenuItem>Categoria 2</MenuItem>
                    <MenuItem>Categoria 3</MenuItem>

                </MenuList>
            </Menu>
            </Box>
            <Spacer />
            <Box p='4' bg='gray.50'>
            <CartWidget/>
            </Box>
            </Flex>
        
        </div>
    )
}
export default NavBar