import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Collection = () => {
    const [products, setProduct] = useState([])
    const {id} = useParams()
    useEffect(()=> {
        const db = getFirestore()
        const itemsCollection = collection(db, 'Tiendita',`${id}`)
        getDocs(itemsCollection).then((snapshot)=> {
            const docs = snapshot.docs.map((doc)=> doc.data)
            setProduct(docs)
        })
    }, [])


    return(
        <div>
            <h1>Collection</h1>
            {
                products.map((p)=> (
                    <div key={p.nombre}>
                        <h4>producto: {p.nombre}</h4>
                        <h5>categoria: {p.categoria}</h5>
                        <h6>precio: {p.precio}</h6>
                    </div>
                ))
            }
        </div>
    )
}
export default Collection