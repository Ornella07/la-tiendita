// import React from "react"
import { Divider, Flex, Box } from '@chakra-ui/react'


const CartWidget = () =>{
    return (
        <div>
            <Flex>
                <Box>
                <span className="material-symbols-outlined">Shopping_cart</span>
                </Box>
                <Divider />
                <Box>
                <p>13</p>
                </Box>
            </Flex>
        </div>
    )
}
export default CartWidget 