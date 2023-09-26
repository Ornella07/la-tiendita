import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
// import './Item.css';


const Item = ({ id, Titulo, Precio, Imagen, Descripcion }) => {
    return (
        <div className='cardProducto card'>
            <img className='imgProducto' src={Imagen} alt={Titulo} />
            <h3> {Titulo}</h3>
            <p>Precio: ${Precio}</p>
            <p>Descripcion: ${Descripcion}</p>
            <Button className='button' as={Link} to={`/item/${id}`} variant="secondary">
                Ver Detalles
            </Button>
        </div>
    );
};


export default Item;
