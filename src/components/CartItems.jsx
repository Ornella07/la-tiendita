import { useContext } from "react"
import { CarritoContext } from "./context/CarritoContext"


const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <h4>{item.Titulos}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: ${item.Precio}</p>
        <button className="btn btn-warning" onClick={() => eliminarProducto(item.id)}>Eliminar</button>
        <hr />
    </div>
  )
}

export default CartItem