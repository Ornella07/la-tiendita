import React  from "react"
import {useContext} from 'react'
import { CartContext } from '../context/CartContext'


const ComponenteA = () => {
    const {cart, setCart, comi} = useContext(CartContext)

    return (
        <>
        <h1>{comi}</h1>
        </>
    )
}

export default ComponenteA