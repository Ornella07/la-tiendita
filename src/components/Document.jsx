import { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { useParams } from "react-router-dom";

const Document = () => {

    const { id } = useParams()
    const [ product, setProduct] = useState([])
    console.log(product)

    useEffect(() => {
        const db = getFirestore()
        const oneItem = doc(db, "tiendita", `${ id }`)
        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()){
                const docs = snapshot.data()
                setProduct(docs)
            }
        })
    }, [])



    return(
        <div>
            <h3>Productos</h3>
            {
                <div>
                    <h4>Producto: {product.Titulo}</h4>
                    <h4>Precio: {product.Precio}</h4>
                    <h3>Descripcion: {product.Descripcion}</h3>
                </div>
            }
        </div>
    )
}

export default Document