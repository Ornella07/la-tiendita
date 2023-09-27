import React, { useContext } from "react";
import {Card, CardBody,Image, Heading, Text, CardHeader, Center, ButtonGroup, Divider, Stack} from '@chakra-ui/react'
import ItemCount from './ItemCount'
// import { useParams } from "react-router-dom";
// import CartContext from "../context/CartContext";
// import { useState, useEffect } from "react"
// import {doc, getDoc, getFirestore} from 'firebase/firestore'



const ItemDetail = ({ productos }) => {
    
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
                                        // borderRadius='lg' 
                                />
                                <Text as="" justifyContent={'space-between'}>Descripcion: {productos.Descripcion}</Text>
                                <Text  >Categoria: {productos.Categoria}</Text>
                               
                                <Text  >Precio: $ {productos.Precio}</Text>
                            </CardBody>
                            <ButtonGroup>
                                <ItemCount handleAdd={handleAddItem} />            
                            </ButtonGroup>
                            
                        </Card>
                        </Center>
                   
                    </div>

    )
}
export default React.memo(ItemDetail)


export default React.memo(ItemDetail)

