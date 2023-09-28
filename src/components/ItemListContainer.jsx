// import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {collection, getDocs,  getFirestore, query, where } from 'firebase/firestore'
import { useState, useEffect } from "react"

    const ItemListContainer = () => {
        const db = getFirestore()
        const [productos, setProductos] = useState([])

        const {id} = useParams()

        const [loading, setLoading] = useState(true)
        

    useEffect(()=> {
        setLoading(true)
        // const itemCollection = collection(db, 'tiendita')
        const itemCollection = id
                ? query(collection(db,'tiendita'), where('categoria', '==', id))
                : collection(db, 'tiendita')
                

        getDocs(itemCollection)
        .then(response => {
            const nuevosProd = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
            setProductos(nuevosProd)
        })
        .catch(error => console.log(error))
    }, [id])
        // .finally(() => {
        //     setLoading(false)
        // }, [id])

        return(
            <> 
            <ItemList productos={productos} />
            </>
        )
}
    export  default ItemListContainer

