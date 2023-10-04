import React, { isValidElement } from "react"
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { Flex } from "@chakra-ui/react"
import Loading from "../Loading/Loading"


const ItemDetailContainer = () => {
    const [producto, setProductos] = useState({});
    const [loading, setLoading] = useState(false)//modifica
    const {id} = useParams()
    useEffect(()=>{
        const db = getFirestore()
        const oneItem = doc(db, "tiendita", id)
               
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
        .finally(() => setLoading(false))//modifica
    },[id])
        if(loading){
            return(
                <Loading/> 
            )
        }
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
