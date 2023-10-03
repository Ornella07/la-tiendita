import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loading = () => {
    return(
        <div className="Spinner">
            <Spinner
            thickness='4px'
            speed='0.65s'
            // emptyColor='gray.200'
            bgGradient="linear(to-l, rgb(90, 86, 86), #DF9169)"
            size='xl'
            m='180px'
            w='200px'
            h='200px'
            />
        </div>
    )
}
export default Loading