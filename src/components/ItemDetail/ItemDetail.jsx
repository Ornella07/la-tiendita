
import React, { useContext, useState } from "react";
import {Card, CardBody,Image, Heading, Text, CardHeader, Center, ButtonGroup} from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './ItemDetail.css'


// const ItemDetail = ({ id, Titulo, Precio, Imagen, Description, stock }) => {
   
//     const [quantityAdd, setQuantityAdd] = useState(0);
//     const { addItem } = useContext(CartContext);
  
//     const manejadorCantidad = (quantityAdd) => {
//         setQuantityAdd(quantityAdd);
//       const item = { id, nombre, precio };
//       addItem(item, quantityAdd);
//     };
  
//     return (
//       <div className='contenedorItem tarjeta'>
//         <h2> {Titulo} </h2>
//         <h3>Precio: ${Precio} </h3>
//         <p> Descripción: {Description}</p>
//         <img src={Imagen} alt={Titulo} />
//         {quantityAdd > 0 ? (
//           <>
//             <Link to="/cart" className="btn btn-primary">
//               Terminar compra
//             </Link>
//             <Link to="/" className="btn btn-secondary">
//               Ver más productos
//             </Link>
//           </>
//         ) : (
//           <>
//             <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
//             <Link to="/" className="btn btn-secondary">
//               Ver más productos
//             </Link>
//           </>
//         )}
//       </div>
//     );
//   };
  

const ItemDetail = ({ productos, stock }) => {
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

