import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer
    
} from '@chakra-ui/react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import   '../../../src/style.css'


const NavBar = () => {
    return (
        <div>
            <Flex className='navbar'  bg='gray.700' alignItems={'center'} justifyContent={'space-between'}>
                <Box p='3'>
                    <Link to={'/'}>
                        <img src='https://firebasestorage.googleapis.com/v0/b/la-tiendita-b1add.appspot.com/o/birrita.png?alt=media&token=ded05d52-a094-41d8-98d4-a73b86973903'/>
                    </Link>
                </Box>
                <Spacer />
                <Box  p='4' m='3'>
                <Menu>
                        <MenuButton  fontSize={19} color={'grey'}>
                        Birritas
                        </MenuButton>
                        <MenuList  fontSize={18} color={'grey'}>
                        <MenuItem >
                            <Link as={NavLink} to={'/categoria/Red'}>
                                Red
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link as={NavLink} to={'/categoria/Rubia'}>
                                Rubia
                            </Link>
                        </MenuItem>
                        <MenuItem>
                        <Link as={NavLink} to={'/categoria/Porter'}>
                                Porter
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