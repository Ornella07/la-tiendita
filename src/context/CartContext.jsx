import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0 //modificacion
})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    console.log(cart)

    const addItem = (item, quantity)=>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev,{...item, quantity}])
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito correctamente'
              });
        }else{
            console.error('El producto ya esta agregardo')
        }
    }
    const removeItem = (itemId)=>{
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
        Swal.fire({
            icon: 'warning',
            title: 'Producto Eliminado'
          });
    }
    const clearCart = () => {
        setCart([])
        Swal.fire({
            icon: 'warning',
            title: 'Carrito Vacio'
          });

    }
    const isInCart= (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }
    const total = cart.reduce((acc, item)=> acc += item.quantity * item.Precio, 0)
    
    const totalQuantity = cart.reduce((acc, item) => acc += item.quantity, 0)
    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )

}











