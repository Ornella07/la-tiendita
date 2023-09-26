import React from "react"
import { useState, useEffect } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import { Flex } from "@chakra-ui/react"


const ItemDetailContainer = () => {
    
    const [producto, setProductos] = useState([]);
    console.log(producto)
    const {id} = useParams()

    useEffect(()=>{
        const db = getFirestore()

        const oneItem = doc(db, "tiendita", `${id}`)
        console.log(oneItem)
        getDoc(oneItem).then((snapshot) => {
            if(snapshot.exists()){
                const docs = snapshot.data()
                setProductos(docs)
            }
        })
    },[])

    // const filteredProducts = productos.filter((producto) => producto.id == id)
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






//     const productos = [
//         {
//             id:1,
//             titulo: 'Blue Moon',
//             imagen: './src/images/5.png',
//             precio: 1200,
//             descripcion: '0,33cl.',
//             description:'Notas frutales de naranja con un ligero aroma picante de trigo.',
//             stock: 16,
//             categoria: 'Rubia'

//         },

//         {
//             id:2,
//             titulo: 'Franziskaner Dunkel',
//             imagen: './src/images/7.png',
//             precio: 1500,
//             descripcion: '0,50cl.',
//             description:'Franziskaner Hefe-Weissbier Dunkel tiene una espuma de cerveza exuberante de color crema e inspira con su color ámbar oscuro con una fuerte turbidez de levadura.' ,
//             stock: 2,
//             categoria: 'Red'

//         },
//         {
//             id:3,
//             titulo: 'Franziskaner Naturtrub',
//             imagen: './src/images/8.png',
//             precio: 1500,
//             descripcion: '0,50cl.',
//             description:'Cerveza de trigo dorado cobrizo con opalescencia turbia de levadura despliega un aroma aromático con fruta armoniosa en la que los plátanos y los cítricos te saludan.' ,
//             stock: 21,
//             categoria: 'Rubia'
//         },{
//             id:4,
//             titulo: 'Franziskaner sin alcohol ',
//             imagen: './src/images/9.png',
//             precio: 1500,
//             descripcion: '0,50cl.',
//             description:'Franziskaner sin alcohol es una cerveza de trigo natural y elegante protagonista de Baviera con una exuberante espuma blanca',
//             stock: 20,
//             categoria: 'Rubia'
//         },{
//             id:5,
//             titulo: 'Franziskaner Kristallklar',
//             imagen: './src/images/10.png',
//             precio: 1500,
//             descripcion: '0,50cl.',
//             description:'Franziskaner Kristallklar pertenece a una especialidad de cerveza de trigo de alta fermentación. Su una espuma blanca como la nieve impresiona por su color amarillo claro cristalino, que se crea al filtrar la levadura después del proceso de fermentación.',
//             stock: 16,
//             categoria: 'Rubia'
//         },{
//             id:6,
//             titulo: 'Chimay Triple Blanca',
//             imagen: './src/images/11.png',
//             precio: 2000,
//             descripcion: '0,33cl.',
//             description:'La Chimay Triple, de color dorado, combina el dulzor y amargor en un equilibrio insólito.',
//             stock: 13,
//             categoria: 'Rubia'
//         },{
//             id:7,
//             titulo: 'Chimay Azul',
//             imagen: './src/images/12.png',
//             precio: 2000,
//             descripcion: '0,33cl.',
//             description:'Ante todo, se distingue por su carácter de cerveza fuerte. El aroma de levadura fresca asociado a un ligero tono floral rosáceo es particularmente agradable.',
//             stock: 5,
//             categoria: 'Roja'
//         },{
//             id:8,
//             titulo: 'Chimay Roja',
//             imagen: './src/images/13.png',
//             precio: 2000,
//             descripcion: '0,33cl.',
//             description:'Este cerveza oscura, de color rojo cobrizo, desprende un aroma ligero y complejo así como matices afrutados y notas a albaricoque. Su espuma es densa y untuosa. La Chimay Roja destaca por su sabor sedoso con un ligero toque de amargor.',
//             stock: 7,
//             categoria: 'Roja'
//         },{
//             id:9,
//             titulo: 'Ocho Reales Porter',
//             imagen: './src/images/17.png',
//             precio: 1500,
//             descripcion: '0,355l',
//             description:'Cerveza Artesanal, color obscuro intenso. Mezcla de variedades americanas y europeas dando un grado de amargor medio con aroma moderadamente intenso y placentero y un sabor moderado.',
//             stock: 19,
//             categoria: 'Negra'
//         },{
//             id:10,
//             titulo: 'Ocho Reales Lager clara',
//             imagen: './src/images/18.png',
//             precio: 1500,
//             descripcion: '0,355l',
//             description:'Cerveza Artesanal, color oro obscuro. Mezcla de variedades europeas dando un grado de amargor medio bajo con aroma muy fino e intenso, y un sabor sutil.',
//             stock: 15,
//             categoria: 'Rubia'
//         },{
//             id:11,
//             titulo: 'Ocho Reales Ale',
//             imagen: './src/images/19.png',
//             precio: 1500,
//             descripcion: '0,355l',
//             description:'Cerveza Artesanal, color obscuro intenso. Mezcla de variedades americanas y europeas dando un grado de amargor medio con aroma moderadamente intenso y placentero y un sabor moderado.',
//             stock: 22,
//             categoria: 'Roja'
//         },{
//             id:12,
//             titulo: 'Leffe Blonde',
//             imagen: './src/images/20.png',
//             precio: 1300,
//             descripcion: ' 0,33cl.',
//             description:'Leffe Blonde tiene una graduación alcohólica del 6,6%. Servirlo idealmente a 5-6 ° en su copa cáliz que permite liberar todos sus aromas.',
//             stock: 20,
//             categoria: 'Rubia'
//         },{
//             id:13,
//             titulo: 'Leffe Brune',
//             imagen: './src/images/21.png',
//             precio: 1300,
//             descripcion: ' 0,33cl.',
//             description:'Leffe Brune tiene una graduación alcohólica del 6,5%. Servirlo idealmente a 5-6 ° en su copa en forma de cáliz que permite liberar todos sus aromas.',
//             stock: 5,
//             categoria: 'Roja'
//         },{
//             id:14,
//             titulo: 'Guinness Special Export',
//             imagen: './src/images/22.png',
//             precio: 1500,
//             descripcion: '0,33cl.',
//             description:'Encargada por el aventurero cervecero John Martin en 1944, la cerveza negra Guinness Special Export tiene un potente sabor apropiado para su cervecería belga. El 8 % de alcohol le confiere un cuerpo intenso. Su generoso sabor malteado se combina con una cebada tostada ahumada. El regaliz y el caramelo de dulce de leche juegan un papel de apoyo junto a las melazas, una pizca de vainilla y matices de bayas. Una cerveza negra irlandesa con un lado continental.',
//             stock: 10,
//             categoria: 'C'
//         },{
//             id:15,
//             titulo: 'Negra Modelo',
//             imagen: './src/images/23.png',
//             precio: 1300,
//             descripcion: '0,355l.',
//             description:'Una lager de cuerpo medio, con maltas caramelo tostadas lentamente, elaborada para comprobar que una cerveza negra puede ofrecer un sabor a la vez pleno y refrescante.',
//             stock: 20,
//             categoria: 'Negra'
//         },{
//             id:16,
//             titulo: 'Pacifico Clara',
//             imagen: './src/images/25.png',
//             precio: 1250,
//             descripcion: '0,355l.',
//             description:'Cerveza Pacífico Clara, más conocida como Pacífico, es una cerveza mexicana estilo pilsner',
//             stock: 20,
//             categoria: 'Rubia'
//         },{
//             id:17,
//             titulo: 'Triple Secret des Moines ',
//             imagen: './src/images/26.png',
//             precio: 1450,
//             descripcion: '0.33cl.',
//             description:'La Triple Secret des Moines Brune nos ofrece un vestido marrón caoba brillante coronado con una espuma espesa con un tono beige claro. Revela una paleta aromática sutil y compleja: En nariz encontramos notas maltosas: caramelo, café y chocolate. El dryhopping con lúpulos rigurosamente seleccionados por nuestro maestro cervecero, le aporta ligeras notas de frutas cítricas que se combinan a la perfección con las notas de chocolate de las maltas. En boca, el ataque es dulce y el amargor moderado. Los sabores maltosos con notas de caramelo y chocolate aportan una agradable longitud en boca. La refermentación en botella con su levadura especialmente seleccionada le da brillo y tipicidad.',
//             stock: 20,
//             categoria: 'A'
//         }
// ]

//     const getProductos = new Promise ((resolve, reject ) => {
//         if(productos.length > 0){
//             setTimeout(() => {
//                 resolve(productos)
//             },2000)
//         }else{
//             reject(new Error ('No hay datos'))
//         }
//     })
    
//     getProductos
//     .then((res) => {
//     })
//     .catch((error => {
//         console.log(error)
//     }))
