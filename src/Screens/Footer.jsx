import React from 'react'
import { Box, Heading,VStack } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box minH={"10vh"} p={"4"}>
            <VStack justifyContent={"center"}>
                <Heading fontFamily={"monospace"} size={"sm"} textAlign={["center"]} children="Made with 💖 by Bishnudev Khutia" />
            </VStack>
        </Box>
    )
}

export default Footer