// import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

    const ItemListContainer = () => {

        const {categoria} = useParams()
        
        console.log(categoria)

        const productos = [
            {
                id:1,
                titulo: 'Blue Moon',
                imagen: './src/images/5.png',
                precio: 1200,
                descripcion: '0,33cl.',
                stock: 16,
                categoria: 'A'
    
            },
    
            {
                id:2,
                titulo: 'Franziskaner Dunkel',
                imagen: './src/images/7.png',
                precio: 1500,
                descripcion: '0,50cl.',
                stock: 2,
                categoria: 'D'
    
            },
            {
                id:3,
                titulo: 'Franziskaner Naturtrub',
                imagen: './src/images/8.png',
                precio: 1500,
                descripcion: '0,50cl.',
                stock: 21,
                categoria: 'D'
            },{
                id:4,
                titulo: 'Franziskaner sin alcohol ',
                imagen: './src/images/9.png',
                precio: 1500,
                descripcion: '0,50cl.',
                stock: 20,
                categoria: 'A'
            },{
                id:5,
                titulo: 'Franziskaner Kristallklar',
                imagen: './src/images/10.png',
                precio: 1500,
                descripcion: '0,50cl.',
                stock: 16,
                categoria: 'D'
            },{
                id:6,
                titulo: 'Chimay Triple Blanca',
                imagen: './src/images/11.png',
                precio: 2000,
                descripcion: '0,33cl.',
                stock: 13,
                categoria: 'B'
            },{
                id:7,
                titulo: 'Chimay Azul',
                imagen: './src/images/12.png',
                precio: 2000,
                descripcion: '0,33cl.',
                stock: 5,
                categoria: 'A'
            },{
                id:8,
                titulo: 'Chimay Roja',
                imagen: './src/images/13.png',
                precio: 2000,
                descripcion: '0,33cl.',
                stock: 7,
                categoria: 'B'
            },{
                id:9,
                titulo: 'Ocho Reales Porter',
                imagen: './src/images/17.png',
                precio: 1500,
                descripcion: '0,355l',
                stock: 19,
                categoria: 'A'
            },{
                id:10,
                titulo: 'Ocho Reales Lager clara',
                imagen: './src/images/18.png',
                precio: 1500,
                descripcion: '0,355l',
                stock: 15,
                categoria: 'B'
            },{
                id:11,
                titulo: 'Ocho Reales Ale',
                imagen: './src/images/19.png',
                precio: 1500,
                descripcion: '0,355l',
                stock: 22,
                categoria: 'B'
            },{
                id:12,
                titulo: 'Leffe Blonde',
                imagen: './src/images/20.png',
                precio: 1300,
                descripcion: ' 0,33cl.',
                stock: 20,
                categoria: 'C'
            },{
                id:13,
                titulo: 'Leffe Brune',
                imagen: './src/images/21.png',
                precio: 1300,
                descripcion: ' 0,33cl.',
                stock: 5,
                categoria: 'C'
            },{
                id:14,
                titulo: 'Guinness Special Export',
                imagen: './src/images/22.png',
                precio: 1500,
                descripcion: '0,33cl.',
                stock: 10,
                categoria: 'C'
            },{
                id:15,
                titulo: 'Negra Modelo',
                imagen: './src/images/23.png',
                precio: 1300,
                descripcion: '0,355l.',
                stock: 20,
                categoria: 'C'
            },{
                id:16,
                titulo: 'Pacifico Clara',
                imagen: './src/images/25.png',
                precio: 1250,
                descripcion: '0,355l.',
                stock: 20,
                categoria: 'A'
            },{
                id:17,
                titulo: 'Triple Secret des Moines ',
                imagen: './src/images/26.png',
                precio: 1450,
                descripcion: '0.33cl.',
                stock: 20,
                categoria: 'A'
            }
    ]
    console.log(productos)
    
        
        const  getProductos = new Promise((resolve, reject) => {
            if(productos.length > 0){
                setTimeout(() => {
                    resolve(productos)
                }, 2000)
            }else{
                reject(new Error('No hay datos'))
            }
        })

        
        getProductos
        .then((res) => {

        })
        .catch((error) => {
            console.log(error)
        })
        
        const filteredProducts = productos.filter((producto) => producto.categoria === categoria)

        return(
            <>
            {
                categoria ? <ItemList productos={filteredProducts} /> : <ItemList productos={productos} />
            }
            </>
        )
    
}


export  default ItemListContainer