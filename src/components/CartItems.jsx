import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const CartItem = ({producto, cantidad}) => {
    const {removeItem} = useContext(CartContext);

  return (
    <div>
        <h4>{producto.Titulos}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${producto.Precio}</p>
        <button className="btn btn-warning" onClick={() => removeItem(producto.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem