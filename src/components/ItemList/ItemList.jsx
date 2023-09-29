import React from "react"
import Item from '../Item/Item'
import { Flex } from "@chakra-ui/react"

const ItemList = ({ productos }) => { 

    console.log(productos)
    
    return (
        <Flex
            flexWrap='wrap'
            justifyContent='space-around'
            alignItems='center'
            gap={4}>
            {productos.map((productos) => {
                return <Item {...productos} key={productos.Id} />;
            })}


        </Flex>
            )
}

export default ItemList

