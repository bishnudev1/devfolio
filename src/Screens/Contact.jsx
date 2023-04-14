import { Container, Heading, VStack, Text, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { connectData } from '../Data/data'

const Contact = () => {
    return (
        <Container minH={"20vh"} maxW={"container.lg"} py={"16"}>
            <Heading textAlign={"center"}>Let's Connect 🫡</Heading>
            <VStack mt={["10", "12"]} spacing={"8"}>
                <HStack>
                    <a href={connectData.linkedinUrl} target='_blank'>
                        <Button colorScheme='blue' variant={'solid'} size={["sm", "lg"]}>Linked<SiLinkedin /></Button>
                    </a>
                    <a href={connectData.instagramUrl} target='_blank'>
                        <Button colorScheme='blue' variant={'solid'} size={["sm", "lg"]}>Instagram<SiInstagram /></Button>
                    </a>
                    <a href={connectData.githubUrl} target='_blank'>
                        <Button colorScheme='blue' variant={'solid'} size={["sm", "lg"]}>Github<SiGithub /></Button>
                    </a>
                </HStack>
                <Text textAlign={["center", "left"]} fontSize={"lg"}>I love connecting with different people. So feel free to message me even you don't have any topic. See Yaa !</Text>
            </VStack>
        </Container>
    )
}

export default Contact
