import { useContext } from "react"
import { CartContext } from "../../context/CartContext";


const CartItem = ({item, cantidad}) => {
    const {removeItem} = useContext(CartContext);

  return (
    <div>
        <h4>{item.Titulo}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.Precio}</p>
        <button className="btn btn-warning" onClick={() => removeItem(item)}> Eliminar </button>
        <hr />
    </div>
  )
}



export default CartItem