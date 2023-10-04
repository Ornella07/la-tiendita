import React from "react";
import { Spinner } from "@chakra-ui/react";
import './Loading.css'
const Loading = () => {
    return(
        <div className="Spinner">
            <Spinner
            thickness='3px'
            speed='0.60s'
            bgGradient="linear(to-l, rgb(90, 86, 86), #DF9169)"
            size='xl'
            m='350px'
            w='200px'
            h='200px'
            alignItems='center'
            textAlign='center'
            alignContent='center'
            />
        </div>
    )
}
export default Loading