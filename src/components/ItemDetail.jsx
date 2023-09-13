import React from "react";
import {Card, CardBody, CardFooter,Image, Heading, Text, CardHeader, Center} from '@chakra-ui/react'
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
                                <Heading size='md' textAlign='center'>{producto.titulo}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Image  boxSize='250px'
                                        objectFit='cover'
                                        src={producto.imagen}
                                        borderRadius='lg'               
                                />
                                <Text as="" textAlign='center'>Descripcion: {producto.description}</Text>
                                <Text  >Categoria: {producto.categoria}</Text>
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