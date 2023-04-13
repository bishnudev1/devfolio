import { VStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Works = () => {
    return (
        <VStack px={["10", "56"]} spacing={"8"} w={'100%'} justifyContent={"center"} alignItems={"center"}>
            <Heading children="My Work Experiences" />
            <Text fontSize={"md"} textAlign={"center"}>Coming soon...</Text>
        </VStack>
    )
}

export default Works