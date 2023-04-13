import React from 'react'
import { Button, Text, Heading, Stack, VStack, Image } from '@chakra-ui/react';
import Profile from '../Assets/Images/Profile.jpg';
import './home.css';

const Home = () => {
    return (
        <section className='portfolio'>
            <div className="container">
                <Stack mt={["10","0"]} spacing={["16", "56"]} height={"100%"} justifyContent={["center", "space-around"]} alignItems={"center"} direction={["column", "row"]}>
                    <VStack width="full" spacing={"8"} alignItems={["center", "flex-start"]} justifyContent={["center", "flex-start"]}>
                        <Heading size={"2xl"} textAlign={["center", "left"]} children="<>Hello, World !</>" />
                        <Text fontFamily={'cursive'} textAlign={["center", "left"]} fontSize={"xl"}>Myself Bishnudev Khutia. A CSE Scholer & Fullstack Developer from India. Currently working as a SDE Intern at Merkos.</Text>
                        <Button size={"lg"} variant={"solid"} colorScheme='purple'>My Resume</Button>
                    </VStack>
                    <Image id='vetor-graphics' src={Profile} boxSize={"md"} objectFit={"contain"} />
                </Stack>
            </div>
        </section>
    )
}

export default Home