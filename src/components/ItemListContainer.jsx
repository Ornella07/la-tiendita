// import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {collection, getDocs,  getFirestore, query, where } from 'firebase/firestore'
import { useState, useEffect } from "react"

    const ItemListContainer = () => {
        const db = getFirestore()
        const [productos, setProductos] = useState([])
        const {id} = useParams()
        

    useEffect(()=> {
        
        const productos = id ? query(collection (db,'tiendita'), where ("id", "==", id)) : collection(db, "tiendita")

        getDocs(productos)
        .then(res => {
            const nuevosProd = res.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProductos(nuevosProd)
        })
        .catch(error => console.log(error))
    }, [id])
        return(
            <> 
            <ItemList productos={productos} />
            </>
        )
}
    export  default ItemListContainer

