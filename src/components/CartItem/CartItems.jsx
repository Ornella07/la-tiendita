import { useContext } from "react"
import { Image } from "@chakra-ui/react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'
import Loading from "../Loading/Loading"
const CartItem = ({Titulo, Imagen, id, quantity, Precio}) => {
    const {removeItem} = useContext(CartContext);
<Loading />
  return (
    <div className="contenedorItem1">
        <h4 className="titulo">{Titulo}</h4>
        <Image className="cardImagen" boxSize='200px'
          objectFit='cover'
          w={'100px'}
          src={Imagen}
        />
        <p>Cantidad: {quantity}</p>
        <p>Precio: ${Precio}</p>
        <button className="btn" onClick={() => removeItem(id)}> Eliminar </button>
        <hr />
    </div>
  )
}
export default CartItem


