import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    cantidadTotal: 0 //modificacion
})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    // const [ quantity, setQuantity] = useState(0)
    // const [quantityTot, setQuantityTot] = useState(0)
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

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )

}