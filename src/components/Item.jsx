import React from 'react'
import {Card, CardBody, Image, Stack,Text, Button, ButtonGroup, Heading,Divider, CardFooter} from "@chakra-ui/react"
import { Link } from 'react-router-dom'



const Item = ({ producto }) => {
    console.log(producto)

    return(
        <div>
        
            <Card maxW='sm'>
                <CardBody>
                <Image
                    src={producto.imagen}
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' as="cite">{producto.titulo}</Heading>
                    <Text as="em">
                    {producto.descripcion}
                    </Text>
                    <Text color='gray.600' fontSize='2xl' as="kbd">
                    ${producto.precio}
                    </Text>
                </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <ButtonGroup spacing='2'  >
                    <Button variant='solid' colorScheme='red' as="i" size='md'
                        height='48px'
                        width='200px'
                        textColor='gray.800'>
                    <Link to={`/item/${producto.id}`}>Detalle</Link>
                    </Button>
                </ButtonGroup>
                </CardFooter>
                <itemCount />
                </Card>
        
    </div>
    )

}

export default Item