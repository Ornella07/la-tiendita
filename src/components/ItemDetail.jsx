import React, { useContext } from "react";
import {Card, CardBody, CardFooter,Image, Heading, Text, CardHeader, Center, ButtonGroup, Divider, Stack} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from "react-router-dom";
import CartContext from "../context/CartContext";
import { useState, useEffect } from "react"


const ItemDetail = ({ productos }) => {
    const [producto, setProductos] = useState([]);
    console.log(producto)
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore()

        const oneItem = doc(db, "tiendita", `${id}`)
        console.log(oneItem)
        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()){
                const docs = snapshot.data()
                setProductos(docs)
            }
        })
    },[])
    // const { addItem } = useContext(CartContext)
    // function handleAddItem(quantity){
    //     addItem(filteredProduct[0], quantity)
    // }
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

