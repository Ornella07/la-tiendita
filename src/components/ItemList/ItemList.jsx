import React from "react"
import Item from '../Item/Item'
import { Flex } from "@chakra-ui/react"
import Loading from "../Loading/Loading"

const ItemList = ({ productos }) => { 
    <Loading/>
    return ( 
               <Flex
            flexWrap='wrap'
            justifyContent='space-around'
            alignItems='center'
            gap={4}>
            {productos.map((productos) => {
                return <Item {...productos} key={productos.id} />
            })}
            
        </Flex>
            )
}

export default ItemList



