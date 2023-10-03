import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { collection, addDoc} from 'firebase/firestore'
import './Checkout.css'
import { Link } from 'react-router-dom'




const Checkout = () => {

 
  const { cart,  clearCart, totalQuantity, total  } = useContext(CartContext)
  
  const [user, setUser] = useState({})
  const [validateEmail, setvalidateEmail] = useState("")
  const [orderId, setOrderId] = useState("")


  const datosComprador = (e) =>{
      setUser({
          ...user,
          [e.target.name]:e.target.value
      })
  }

  const finalizar = (e) =>{
      e.preventDefault()
      const orden = {
          user,
          item: cart,
          total: totalQuantity(),         
          fecha: serverTimestamp(),
      }
      const ventas = collection(db,'tiendita', producto.id)
      addDoc(ventas, orden)
      .then ((res)=> {
          setOrderId(res.id)
          clearCart()
      })
      .catch ((error)=>console.log(error))
  }

return (
  <div className='check'>
      {orderId !== "" 
      ? <div className='div-compfin'>
          <h3>Su compra ha sido finalizada con exito</h3>
          <h4>El id de su compra es: <span>{orderId}</span></h4>
          <Link to='/' className="btn btn-light">Seguir comprando</Link> 
          </div>
      :     <div className='div-checkout'>
      <h2 className='titulo'>Terminar Compra</h2>
      <h4 className='sub'>Por favor compltar con sus datos</h4>
      <form className='div-form' onSubmit={finalizar}>
          <div>
              <label className='form-label'>Nombre Completo</label>
              <input onChange={datosComprador} className='form-control' type="text" placeholder='Nombre' name='nombre' required/>
          </div>
          <div>
              <label className='form-label'>Numero Telefonico</label>
              <input onChange={datosComprador} className='form-control' type="tel" placeholder='Ingrese Celular' name='telefono' required/>
          </div>
          <div>
              <label className='form-label'>Direccion de email</label>
              <input onChange={datosComprador} className='form-control' type="email" placeholder='Ingrese Email' name='mail' required/>
          </div>
          <div>
              <label className='form-label' >Repita su email</label>
              <input onChange={((e)=>setvalidateEmail(e.target.value))} className='form-control' type="email" name='mail' placeholder='Repita Email' required/>
          </div>
          <button className='boton' type='submit' disabled={validateEmail !== user.mail}>Generar Orden</button>
      </form>
  </div>}
  </div>
)
}
export default Checkout;