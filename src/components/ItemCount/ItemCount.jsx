import { useState } from "react";
import "./ItemCount.css";
import { Stack, Box,  Button } from "@chakra-ui/react";
import React from "react";



const ItemCount = ({stock, initial, addItem}) => {

    const [quantity, setQuantity] = useState( initial )

    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
        const decrement = () => {
            if(quantity > 1){
            setQuantity( quantity - 1)
            }
        }
    
        return ( 
            <>
                <Stack direction={['column','row']} spacing='24px' className="buttons">
                    <Box w='50px' h='40px'>
                        <button className="button-2"  onClick={decrement}>
                            -
                        </button>
                    </Box>
                    <Box w='40px' h='40px'>
                       <h4 className="button-3">{quantity}</h4>
                    </Box>
                    <Box  w='50px' h='40px'>
                    <button  className="button-2" onClick={increment}>
                            +
                        </button>
                    
                    </Box>
                    <Box >
                    <Button className='botoni' variant='dark' onClick={() => addItem(quantity)}>Agregar al Carrito</Button>
                    </Box>
                </Stack>
            
            </>
        )
        
    }

export default ItemCount