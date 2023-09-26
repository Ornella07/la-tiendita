import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
// import './Item.css';


const Item = ({ id, titulo, precio, imagen, descripcion }) => {
    return (
        <div className='cardProducto card'>
            <img className='imgProducto' src={imagen} alt={titulo} />
            <h3> {titulo}</h3>
            <p>Precio: ${precio}</p>
            <p>Descripcion: ${descripcion}</p>
            <Button className='button' as={Link} to={`/item/${id}`} variant="secondary">
                Ver Detalles
            </Button>
        </div>
    );
};


export default Item;
