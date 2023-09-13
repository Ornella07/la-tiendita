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
            <Box p='4'>
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
                        <Link to={`/categoria/${'A'}`}>
                            Birrita A
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={`/categoria/${'B'}`}>
                            Birrita B
                        </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to={`/categoria/${'C'}`}>
                            Birrita C
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={`/categoria/${'D'}`}>
                            Birrita D
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