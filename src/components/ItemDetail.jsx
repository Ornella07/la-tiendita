import React, { useState } from "react";
import {Card, CardBody,Image, Heading, Text, CardHeader, Center, ButtonGroup,} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom";


const ItemDetail = ({productos,stock}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)
    
    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
        // const productos= {
        //     Titulo,Precio
        // }
        // addItem(productos, quantity)
    }
        return (
                <div>
                    <Center p='1rem' > 
                        <Card>
                            <CardHeader>
                                <Heading size='md' textAlign='center' color="gray.500">{productos.Titulo}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image  boxSize='300px'
                                        objectFit='cover'
                                        src={productos.Imagen}
                                />
                                <Text as="" justifyContent={'space-between'}>Descripcion: {productos.Descripcion}</Text>
                                <Text  >Categoria: {productos.Categoria}</Text>
                                <Text  >Precio: $ {productos.Precio}</Text>
                                <Text>Stock:{stock}</Text>
                            </CardBody>
                            <ButtonGroup>
                                {
                                    quantityAdded > 0 ? (
                                        <Link to='/cart' className='Option'>Terminar Compra</Link>
                                    ) : (
                                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} /> 
                                    )
                                }
                            </ButtonGroup>
                        </Card>
                        </Center>
                    </div>

    )
}
export default React.memo(ItemDetail)


