import { useState } from "react";
// import "./ItemCount.css";
// import Swal from "sweetalert2";

import { Stack, Box, Button } from "@chakra-ui/react";



const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuatity] = useState( initial )
    const increment = () =>{
        if(quantity < stock){
            setQuatity(quantity + 1)
        }
    }
        const decrement = () => {
            if(quantity > 1){
                setQuatity( quantity - 1)
            }
        }
    
        return ( 
            <>
                <Stack direction={['column','row']} spacing='24px'>
                    <Box w='40px' h='40px'>
                        <button size='xs' onClick={decrement}>
                            -
                        </button>
                    </Box>
                    <Box w='40px' h='40px'>
                       <h4>{quantity}</h4>
                    </Box>
                    <Box  w='40px' h='40px'>
                    <button size='xs' onClick={increment}>
                            +
                        </button>
                    
                    </Box>
                    <Box>
                        <button onClick={() => onAdd(quantity)}  > Agregar al Carrito </button>
                    </Box>
                </Stack>
            
            </>
        )
        
    }
export default ItemCount