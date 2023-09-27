import { BrowserRouter, Routes, Route} from "react-router-dom"
import {useState} from 'react'
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import { CarritoProvider } from "./context/CartContext"


import Form from "./components/Forms"


const App = () => {
  
 
  return (

    <>
      
    {/* <Form/> */}

        <BrowserRouter>
        <CarritoProvider >
          <NavBar />
          <Routes>              
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path="/" element={<ItemListContainer />}/>
            <Route path="/category/:category" element={<ItemListContainer />}/> 
            <Route exact path="/item/:id" element={<ItemDetailContainer/> } />

         </Routes>   
         </CarritoProvider >
     </BrowserRouter>
          
    </> 
  



  

)
}

export default App












