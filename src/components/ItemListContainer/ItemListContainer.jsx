import { Box, Heading } from "@chakra-ui/react"

const ItemListContainer = ({greeting}) => {
    return (
        <center>
            <Box><Heading>{greeting}</Heading></Box>
        </center>    
    )
}

export default ItemListContainer