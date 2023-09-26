import { useState } from "react";
// import "./ItemCount.css";
// import Swal from "sweetalert2";

import { Stack, Box, Button } from "@chakra-ui/react";


const ItemCount = () => {

    const [contador, setContador] = useState(0)

    return ( 
        <>
            <Stack direction={['column','row']} spacing='24px'>
                <Box w='40px' h='40px'>
                    <Button size='xs' onClick={() => setContador(contador - 1)}>
                        -
                    </Button>
                </Box>
                <Box w='40px' h='40px'>
                    <p>{contador}</p>
                </Box>
                <Box  w='40px' h='40px'>
                <Button size='xs' onClick={() => setContador(contador + 1)}>
                        +
                    </Button>
                
                </Box>
                <Box>
                    <button onClick={()=> alert(`Cantidad agregada ${contador}`)} >Agregar al Carrito</button>
                </Box>
            </Stack>
        
        </>
    )
    
}
export default ItemCount