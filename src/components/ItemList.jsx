import React from "react"
import Item from './Item'
import { Flex } from "@chakra-ui/react"



const ItemList = ({ productos }) => {
    console.log(productos)
    return(
        <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" gap={1}>
             {
                
                productos.map((producto)=>{
                    return <Item {...producto}  key={producto.id} />
                                        
                })
    
            }
        </Flex>
            )
}
export default ItemList


