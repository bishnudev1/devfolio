import { Container, Heading, VStack, Text, Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
import { connectData } from '../Data/data'

const Contact = () => {
    return (
        <Container minH={"20vh"} maxW={"container.lg"} py={"16"}>
            <Heading mb={"20"} textAlign={"center"}>Let's Connect 🫡</Heading>
            <VStack spacing={"8"}>
                <HStack>
                    <a href={connectData.linkedinUrl} target='_blank' rel="noreferrer">
                        <Button colorScheme='blue' variant={'solid'} size={["sm", "lg"]}><span style={{ marginRight: '0.4em' }}>Linked</span><SiLinkedin /></Button>
                    </a>
                    <a href={connectData.instagramUrl} target='_blank' rel="noreferrer">
                        <Button colorScheme='blue' variant={'solid'} size={["sm", "lg"]}><span style={{ marginRight: '0.4em' }}>Instagram</span><SiInstagram /></Button>
                    </a>
                    <a href={connectData.githubUrl} target='_blank' rel="noreferrer">
                        <Button colorScheme='blue' variant={'solid'} size={["sm", "lg"]}><span style={{ marginRight: '0.4em' }}>Github</span><SiGithub /></Button>
                    </a>
                </HStack>
                <Text textAlign={["center", "left"]} fontSize={"lg"}>I love connecting with different people. So feel free to message me even you don't have any topic. See Yaa !</Text>
            </VStack>
        </Container>
    )
}

export default Contact
