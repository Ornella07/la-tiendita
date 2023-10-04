import { Link } from "react-router-dom";
import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { totalQuantity} = useContext(CartContext);
    
    return (
        <div className='widgetCarrito'>
            <Link to="/cart" style={{display: totalQuantity > 0 ? 'block' :'none'}}>
            <span className="material-symbols-outlined">Shopping_cart</span>
            {
                totalQuantity > 0 && <strong className='cantidad'>{ totalQuantity}</strong>
            }
            </Link>
        </div>
    )
}
export default CartWidget

