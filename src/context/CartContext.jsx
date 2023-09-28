import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0
})


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [ quantity, setQuantity] = useState(0)
    const [quantityTot, setQuantityTot] = useState(0)
    console.log(cart)

    const addItem = (item, cantidad) => {
        const productoExistente = cart.find(prod => prod.item === item.id)
        if(!productoExistente){
            setCart (prev => [...prev,{item, cantidad}])
            setQuantityTot (prev => prev + cantidad)
            setQuantity (prev => prev +(item.precio * cantidad))
        }
        else {
            const cartActualizado = cart.map(prod => {
                if(prod.item.id === item.id){
                    return {...prod, cantidad:prod.cantidad + cantidad}
                }else {
                    return prod
                }
            })
            setCart (cartActualizado)
            setQuantityTot(prev => prev + cantidad)
            setQuantity(prev+(item.precio * cantidad))
        }
    }
    const removeItem =(id) => {
        const productoEliminado = cart.find (prod => prod.item.id === id)
        const cartActualizado = cart.filter (prod => prod.item.id !== id)

        setCart(cartActualizado)
        setQuantityTot (prev => prev-productoEliminado.cantidad)
        setQuantity(prev => prev -(productoEliminado.item.precio * productoEliminado.cantidad))
    }
    const clearCart = () =>{
        setCart([])
        setQuantityTot(0)
        setQuantity(0)
    }
    return (
        <CartContext.Provider value={(cart,addItem,removeItem,clearCart,quantity, quantityTot)}>
                    {children}
        </CartContext.Provider>
            )
}





// export const CartProvider = ({children}) => {
//     const [cart, setCart] = useState([])
//     console.log(cart)

//     const addItem = (item, quantity) => {
//         if(!isInCart(item.id)){
//             setCart(prev =>[...prev,{...item, quantity}])
//         }else{
//             console.log('El producto fue agregado')
//         }
//     }
//     const removeItem = (itemId) =>{
//         const cartUpdated = cart.filter(producto => producto.id !== itemId)
//         setCart(cartUpdated)
//     }
//     const clearCart = () => {
//         setCart([])
//     }
//     const isInCart = (itemId) => {
//         return cart.some(producto =>producto.id === itemId)
//     }

//     return (
//         <CartContext.Provider value={(cart,addItem,removeItem,clearCart)}>
//             {children}
//         </CartContext.Provider>
//     )
//     }

























// import { useState, createContext } from  'react'

// //Creo un nuevo contexto
// export const CartContext = createContext ({
//   carrito: [],
//   total: 0,
//   cantidadTotal: 0
//   })
  
  
//   export const CarritoProvider = ({children}) => {
//       const [carrito, setCarrito] = useState([]);
//       const [total, setTotal]= useState(0);
//       const [cantidadTotal, setCantidadTotal]= useState(0);
  
//   console.log (carrito);
  
//       const agregarProducto = (item, cantidad) => {
//           const productoExistente = carrito.find(prod => prod.item.id === item.id)
//           if (!productoExistente){
//               setCarrito (prev => [...prev,{item, cantidad}]);
//               setCantidadTotal (prev => prev + cantidad);
//               setTotal (prev => prev+ (item.precio * cantidad))
  
//           } else {
//               const carritoActualizado = carrito.map (prod => {
//                   if (prod.item.id ===item.id) {
//                       return {...prod, cantidad:prod.cantidad + cantidad};
//                   } else{
//                       return prod;
//                   }
//               });
//               setCarrito (carritoActualizado);
//               setCantidadTotal (prev => prev + cantidad);
//               setTotal (prev+(item.precio * cantidad));
//           }
//       }
  
//       const eliminarProducto =(id) => {
//           const productoEliminado =carrito.find (prod => prod.item.id === id);
//           const carritoActualizado =carrito.filter (prod=> prod.item.id !== id);
          
//           setCarrito(carritoActualizado);
//           setCantidadTotal (prev=> prev-productoEliminado.cantidad)
//           setTotal (prev=> prev - (productoEliminado.item.precio * productoEliminado.cantidad));
  
//       }
//       const vaciarCarrito =() => {
//           setCarrito([]);
//           setCantidadTotal(0);
//           setTotal(0);
//       }
//       return (
//           <CartContext.Provider value={{carrito, agregarProducto, eliminarProducto,vaciarCarrito, total, cantidadTotal}}>
//             {children}
//           </CartContext.Provider>
//       )
// }

// export default CarritoProvider
