import { useContext } from "react"
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItems'
import { Link } from 'react-router-dom';
import './Cart.css'


const Cart = () => {

      const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

      if(totalQuantity === 0){
        return (
          <div className="carrito-vacio">
            <h1>No hay productos en el carrito</h1>
            <Link to='/'  className="but"> Birritas </Link>
          </div>
        )
      }
     
    
      return (
        <div>
          { cart.map((item => <CartItem key={item.id} {...item}/> ))}
          <div className="container">
            <h3 className="total">Total: ${total}</h3>
              <button onClick={() => clearCart() } className='Button' > Limpiar Carrito </button>
              <Link to='/Checkout'>Finalizar Compra</Link>
              </div>
              
        </div>
      )
}

export default Cart














// const {cart,addItem,removeItem, clearCart, isInCart } = useContext(
//   CartContext
// );

// if (addItem === 0) {
//   return (
//     <div className="carrito">
//       <h2>No hay productos en el carrito</h2>
//       <Link to="/" className="btn btn-primary"> Ver productos </Link>
//     </div>
//   );
// }

// return (
//   <div className="carrito">
//     {cart.map((producto) => (
//       <CartItem key={producto.id} {...producto} />
//     ))}
//     {/* <h3>Total: $ {total}</h3> */}
//     {/* <h3>Cantidad total: {cantidadTotal}</h3> */}
//     <button className="btn btn-danger" onClick={() => clearCart()}>
//       Vaciar Carrito
//     </button>
//     <hr />
//     <Link to="/checkout" className="btn btn-primary botonFinal">
//       Finaliza Tu Compra
//     </Link>
//   </div>
// );
// };
