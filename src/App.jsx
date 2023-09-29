import { BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import Cart from "./components/Cart/Cart"
import { CartProvider } from "./context/CartContext"
// import Checkout from './components/Checkout'


// import Form from "./components/Forms"


const App = () => {
  
 
  return (

    <>
      
    {/* <Form/> */}

        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>              
              <Route path='/cart' element={<Cart />} />
              <Route exact path="/" element={<ItemListContainer />}/>
              <Route path="/categoria/:Categoria" element={<ItemListContainer />}/> 
              <Route exact path="/item/:id" element={<ItemDetailContainer/> } />
              {/* <Route path='/checkout'element={<Checkout />} /> */}

            </Routes>   
            </CartProvider >
      </BrowserRouter>
          
    </> 
  



  

)
}

export default App












