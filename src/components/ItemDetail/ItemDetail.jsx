import React, { useContext, useState } from "react";
import {Card, CardBody,Image, Heading, Text, CardHeader, Center, ButtonGroup} from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import Loading from '../Loading/Loading'

const ItemDetail = ({ productos }) => {
    <Loading/>
    const [quantityAdd, setQuantityAdd] = useState(0)
    const {addItem} = useContext(CartContext)
        const handleOnAdd = (quantity)=>{ 
        setQuantityAdd(quantity)
            const item = { ...productos }
            addItem(item, quantity)    
    }
    return (
                        <div className="contenedorItem">
                            <Center p='1rem' > 
                                <Card >
                                    <CardHeader >
                                        <Heading size='md' textAlign='center' color="gray.500">{productos.Titulo}</Heading>
                                    </CardHeader>
                                    <CardBody  className="cardbody"> 
                                        <Image className="cardImagen" boxSize='300px'
                                                objectFit='cover'
                                                w={'200px'}
                                                src={productos.Imagen}
                                        />
                                        <Text><b>Categoria:</b> {productos.Categoria}</Text>
                                        <Text><b>Precio: $</b> {productos.Precio}</Text>
                                        <Text><b>Stock: </b> {productos.stock}</Text>
                                    </CardBody>
                                    <Text className="descripcion" as="" justifyContent={'space-around'}>Descripcion: {productos.Description}</Text>
                                    <ButtonGroup className="buttonCar">
                                        {
                                            <ItemCount initial={1} stock={productos.stock} addItem={handleOnAdd} /> 
                                        }
                                        <div className="botoncito">
                                            <Link to="/" className="botoncito1 " >
                                                    Ver más productos
                                            </Link>
                                            <Link to='/cart' className="botoncito2">
                                                Finalizar Compra
                                            </Link>
                                        </div>
                                        
                                    </ButtonGroup>
                                </Card>
                                </Center>
                            </div>
        )
}
export default React.memo(ItemDetail)