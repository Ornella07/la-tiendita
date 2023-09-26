
import { Link } from "react-router-dom";
import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"


const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext);
 
    return (
        <div className='widgetCarrito'>
            <Link to="/cart">
            <span className="material-symbols-outlined">Shopping_cart</span>
            {
                cantidadTotal > 0 && <strong className='cantidad'>{cantidadTotal}</strong>
            }
            </Link>
        </div>
    )
}

    export default CartWidget;
