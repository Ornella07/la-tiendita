import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import './Item.css'


const Item = ({ id, Titulo, Precio, Imagen, Descripcion}) => {

    return (
        
        <div className='cardProducto card'>
            <img className='imgProducto' src={Imagen} alt={Titulo} width={'350px'} />
            <h3 > {Titulo}</h3>
            <p><b>Precio: $</b>{Precio}</p>
            <p><b>Descripcion:</b> {Descripcion}</p>
            <Button as={Link} to={`/item/${id}`} m={'35px'}>
                <span className='button-detalle'>Ver Detalles</span>
            </Button>
        </div>
    )
}


export default Item;
