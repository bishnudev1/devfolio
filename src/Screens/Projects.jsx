import React from 'react'
import { Button, Text, Heading, Stack, VStack, Image, Container, HStack } from '@chakra-ui/react';
import Web from '../Assets/Images/Web Development Images/image1.svg';

const Project = () => {
    return <VStack
    className='project'
   w={'3xs'}

    justifyContent={"center"} alignItems={["center", "flex-start"]}>
        <Image src={Web} objectFit={'contain'} boxSize={"60"} />
        <Heading size={"sm"} textAlign={["center","left"]} children="React Portfolio" />
        <Text
        textAlign={["center","left"]}>A customizable and  minimal React portfolio for Software Engineers</Text>
        <HStack alignItems={["center","flex-start"]}>
            <Button variant={"outline"} colorScheme='purple'>Check</Button>
            <Button variant={"ghost"} colorScheme='purple'>Fork</Button>
        </HStack>
    </VStack>
}

const Projects = () => {
    return (
        <Container
            overflowX={"auto"}
            minH={"95vh"}
            width={"100%"}
            maxW={"container.lg"} paddingY={"16"}>
            <Heading textAlign={"center"} children="My Projects"/>
            <Stack mt={["10","10"]} flexWrap={"wrap"} alignItems={["center", "flex-start"]} justifyContent={["flex-start", "space-between"]} direction={["column", "row"]}>
                <Project />
                <Project />
                <Project />
            </Stack>
        </Container>
    )
}

export default Projects