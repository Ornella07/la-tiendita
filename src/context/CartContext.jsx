import {useState, createContext} from 'react'

export const CartContext = createContext(null)

const CartProvider = ({children}) => {

    const[cart, setCart] = useState([])

    const comi = 'Buena Clase de React con Omar, usando Context!'

    


    return(
        <CartContext.Provider value={{cart, setCart, comi}}>
            
            {children}


        </CartContext.Provider>
    )
}


export default CartProvider