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
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
        <Flex bg='gray.700' alignItems={'center'} justifyContent={'space-between'}>
            <Box p='3'>
                <Link to={"/"}>
                    <img src='./src/images/birrita.png' />
                </Link>
            </Box>
            <Spacer />
            <Box  p='4' m='2' fontSize={19} color={'grey'}>
            <Menu>
                    <MenuButton>
                    Birritas
                    </MenuButton>
                    <MenuList>
                    <MenuItem>
                        <Link to={`/categoria/${'Roja'}`}>
                            Roja
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={`/categoria/${'Rubia'}`}>
                            Rubia
                        </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to={`/categoria/${'Negra'}`}>
                            Negra
                        </Link>
                    </MenuItem>

                </MenuList>
            </Menu>
            </Box>
            <Spacer />

            <Box p='4' m='2' fontSize={20}  color={'grey'}>
                <Link to={'/cart'}>
                    <CartWidget/>
                </Link>
            </Box>

            </Flex>
        
        </div>
    )
}
export default NavBar