import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0 //modificacion
})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    
    console.log(cart)

    const addItem = (item, quantity)=>{
        if(!isInCart(item.id)){
            setCart(prev => [...prev,{...item, quantity}])
        }else{
            console.error('El producto ya esta agregardo')
        }
    }
    const removeItem = (itemId)=>{
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }
    const clearCart = () => {
        setCart([])
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












