import { BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"

import CounterComponent from "./CounterComponent"
import CartContext from "./context/CartContext"
import ComponenteA  from "./components/ComponenteA"

const App = () => {

  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path="/" element={<ItemListContainer />}/>
        <Route path="/category/:categoria" element={<ItemListContainer />}/>
        <Route exact path="item/:id" element={<ItemDetailContainer/> } />

      </Routes>
    
    
    
    </BrowserRouter>
  )

}

export default App



















  {/* CartContext><ComponenteA /></CartContext> */}
