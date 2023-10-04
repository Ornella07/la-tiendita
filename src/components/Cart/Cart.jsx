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
              <button onClick={() => clearCart() } className='Button' > Limpiar Carrito </button>
              <Link to='/Checkout' className="Button">Finalizar Compra</Link>
              <h3 className="total">Total: ${total}</h3>
          </div>
              
        </div>
      )
}
export default Cart

