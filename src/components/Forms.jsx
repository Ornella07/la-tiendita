import { useState } from "react"
import { Stack , Input, Button} from "@chakra-ui/react"
import { collection, addDoc, getFirestore} from "firebase/firestore"

//Importar el context 

const Form = () => {
   

    const [nombre,setNombre] = useState('')
    const [email,setEmail] = useState('')
    const [orderId, setOrderId] = useState(null)
    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" ? alert('El campo nombre esta vacio') : alert(`Bienvenido, ${nombre}`)
        email ===  "" ? alert('El campo email esta vacio') : alert(`Registrado con el email, ${email}`)

        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
    }


    const order = {
        nombre,
        email

    }
    const ordersCollection = collection(db, 'orden')

    return(
        <>
        <h1>Formulario</h1>
        <Stack spacing={5}>
        <form onSubmit={handleSubmit} >
            <Input textAlign="center"  focusBorderColor='pink.400' type="text" placeholder="Nombre" height='48px'  width='500px'  border='2px' onChange={(e)=>setNombre(e.target.value)} />
            <Input textAlign="center"  focusBorderColor='pink.400' type="Email" placeholder="Email" height='48px'  width='500px'  border='2px' onChange={(e)=>setEmail(e.target.value)} />

            <Button textAlign="center"   colorScheme='teal' size='md'  height='48px'  width='500px'  border='2px'  borderColor='green.500' type="submit"  px='8px' >Enviar</Button>
        </form>
        </Stack>

        <h3>Id de tu compra: {orderId}</h3>
        </>
    )
}

export default Form