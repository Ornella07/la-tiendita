import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { collection, addDoc, updateDoc, doc, getDoc, DocumentReference} from 'firebase/firestore'
import {
    FormControl,
    FormLabel,
    Form,

  } from '@chakra-ui/react'

const Checkout = () => {
    const { cart,  clearCart, totalQuantity, total  } = useContext(CartContext)

    const [ nombre,setNombre] = useState('')
    const [ apellido, setApellido] = useState('')
    const [ telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [ emailConfirmacion, setEmailConfirmacion] = useState('')
    const [ error, setError] = useState('')
    const [orderId, setOrderId] = useState('')


    const manejadorFormulario = (e) =>{
        e.preventDefault()
        if(!nombre  || !apellido || !telefono || !email || !emailConfirmacion){
            setError('Por Favor, complete todos los campos')
            return
        }
        if(email !== emailConfirmacion){
            setError('Email no coincide')
            return
        }
        const orden = {
            items: cart.map((producto) => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total, 
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        }
        Promise.all(
            orden.items.map(async(productoOrden) => {
                const productoRef = doc(db,'tiendita', productoOrden.id);
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock;

                await updateDoc(produ, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=> {
            addDoc(collection(db,'orden'), orden)
            .then((docRef.id))
            vaciarCarrito();
        })
        .catch((error) => {
            console.log('Error al actualizar el stock',error)
            setError('Se produjo un error al actualizar el stock, ¡Intente Nuevamente!')
        })
    }
    return (
        <div className="checkout">
          <h2>Checkout</h2>
          <Form onSubmit={manejadorFormulario} className="formulario">
            {cart.map((producto) => (
              <div key={producto.id}>
                <p>
                  {producto.item.nombre} x {producto.cantidad}
                </p>
                <p>Precio $ {producto.item.Precio} </p>
                <hr />
              </div>
            ))}
            <div>
              <p>Total : {total}</p>
            </div>
            <hr />
            <FormGroup controlId="nombre">
              <Input>Nombre:</Input>
              <FormControl
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </FormGroup>
    
            <Form controlId="apellido">
              <FormLabel>Apellido:</FormLabel>
              <FormControl
                type="text"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </Form>
    
            <Form controlId="telefono">
              <FormLabel>Teléfono:</FormLabel>
              <FormControl
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Form>
    
            <Form controlId="email">
              <FormLabel>E-mail:</FormLabel>
              <FormControl
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form>
    
            <Form controlId="emailConfirmacion">
              <FormLabel>Confirma e-mail:</FormLabel>
              <FormControl
                type="email"
                value={emailConfirmacion}
                onChange={(e) => setEmailConfirmacion(e.target.value)}
              />
            </Form>

            {error && <Alert variant="danger">{error}</Alert>}

        <Button className="ultimoBoton" variant="primary" type="submit">
        Finalizar Compra
        </Button>
        </Form>
        {orderId && (
        <strong className="ordenId">
        ¡Gracias por su compra! El número de orden es {orderId}. <hr /> Recibira un mail en su cuenta {email} con la orden de pago
        </strong>
        )}
        </div>
);
}
export default Checkout;