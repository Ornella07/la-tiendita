import React from "react"
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { Flex } from "@chakra-ui/react"


const ItemDetailContainer = () => {
    
    const [producto, setProductos] = useState({});
    console.log(producto)
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore()

        const oneItem = doc(db, "tiendita", id)
        console.log(oneItem)
        getDoc(oneItem).
            then((snapshot) => {
            if(snapshot.exists()){
                const docs = snapshot.data()
                setProductos({id, ...docs})
            }
        })
        .catch((error) =>{
            console.log('Error al obtener Productos:', error) 
        })
    },[id])

  
    return(
        <Flex 
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        gap={4}
        >
            <ItemDetail productos={producto} />
        </Flex>
    )
}

export default ItemDetailContainer



