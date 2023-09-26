
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(
      CartContext
    );
  
    if (cantidadTotal === 0) {
      return (
        <div className="carrito">
          <h2>No hay productos en el carrito</h2>
          <Link to="/" className="btn btn-primary"> Ver productos </Link>
        </div>
      );
    }
  
    return (
      <div className="carrito">
        {carrito.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
        <h3>Total: $ {total}</h3>
        <h3>Cantidad total: {cantidadTotal}</h3>
        <button className="btn btn-danger" onClick={() => vaciarCarrito()}>
          Vaciar Carrito
        </button>
        <hr />
        <Link to="/checkout" className="btn btn-primary botonFinal">
          Finaliza Tu Compra
        </Link>
      </div>
    );
  };

// const Cart = () => {
//     const {cart } = useContext(CartContext)

//     return(
//         <>
//         {cart.length > 0 ?
//             // cart.map((p)=>{
//             //     return(

//             //     )
//             // })
//             <Form />
//             : 
//                 <Button colorScheme="teal" variant='solid'>
//                     <Link to={'/'}>Regresar a la tienda</Link>
//                     </Button>
    
    
//         }

//         </>
//         )
//     }


export default Cart