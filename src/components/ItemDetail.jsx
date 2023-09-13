import React from "react";
import {Card, CardBody, CardFooter,Stack,Image,Divider, ButtonGroup, Heading, Text, CardHeader, Center, Grid} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {

    const { id } = useParams()
    
    const filteredProducts = productos.filter((producto) => producto.id == id)

    return (
        <div>
            {filteredProducts.map((producto) => {
            // {productos.map((p) => {
                return (
                    <div key={producto.id}>
                        
                        <Center p='1rem' > 
                        <Card>
                            <CardHeader>
                                <Heading size='md' >{producto.titulo}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image
                                    src={producto.imagen}
                                    alt={producto.descripcion}
                                    borderRadius='lg'                                
                                />
                                <Text>{producto.descripcion}</Text>
                                <Text>{producto.categoria}</Text>
                            </CardBody>
                            <CardFooter>
                                <ItemCount />
                            </CardFooter>
                        </Card>
                        </Center>
                        
                    </div>
                )
            })}

        </div>
    )
}

export default React.memo(ItemDetail)