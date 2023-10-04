import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"
import {collection, getDocs,  getFirestore } from 'firebase/firestore'
import { useState, useEffect } from "react"
import Loading from '../Loading/Loading'

    const ItemListContainer = () => {
        const db = getFirestore()
        const [productos, setProductos] = useState([])
        const {Categoria} = useParams() //Filtrad
        const [loading, setLoading] = useState(false)

    useEffect(()=> {
    setLoading(true)
        const itemCollection = collection(db, 'tiendita')
    getDocs(itemCollection).then((snapshot) => {
       const docs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
       setProductos(docs)
    })
    },[])
    const mostrarProductos = new Promise((resolve,reject) => {
        if(productos.length > 0){
                           setTimeout(()=> {
                    setLoading(false)
                    resolve(productos)
            },1500)
        }else{
            reject('No hay productos')
        }
    })
        if(loading){
            return(
                <Loading/>
            )
        }
    mostrarProductos
    .then((resultado) => {
        console.log(resultado)
    }) 
    .catch((error) => {
        console.error(error)
    })
    const filtradoProductos = productos.filter((producto) => producto.Categoria === Categoria)
        return(
            <> 
                {Categoria  ? <ItemList productos={filtradoProductos}/> : <ItemList productos={productos}/>}
            </>
        )
}
    export  default ItemListContainer
