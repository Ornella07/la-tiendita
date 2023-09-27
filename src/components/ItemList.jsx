import React from "react"
import Item from './Item' 
import { Flex } from "@chakra-ui/react"


//React.memo
//alamance informacion que ya ha sido mostrada en alguna oportunidad



const ItemList = ({ productos }) => {
    return (
        <Flex
            flexWrap='wrap'
            justifyContent='space-around'
            alignItems='center'
            gap={4}>
            {productos.map((producto) => {
                return <Item {...producto} key={producto.Id} />;
            })}
        </Flex>
            )
}
export default ItemList


