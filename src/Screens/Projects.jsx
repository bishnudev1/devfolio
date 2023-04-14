import React from 'react'
import { Button, Text, Heading, Stack, VStack, Image, Container, HStack } from '@chakra-ui/react';
import { projectData } from '../Data/data';

const Project = ({ name, desc, image, checkUrl, forkUrl }) => {
    return <VStack
        className='project'
        w={'3xs'}
        alignItems={["center", "flex-start"]} justifyContent={"center"}>
        <Image src={image} objectFit={'contain'} boxSize={"60"} />
        <Heading size={"sm"} textAlign={["center", "left"]} children={name} />
        <Text
            textAlign={["center", "left"]}>{desc}</Text>
        <HStack alignItems={["center", "flex-start"]}>
            <a href={checkUrl} target='_blank'><Button variant={"outline"} colorScheme='purple'>Check</Button></a>
            <a href={forkUrl} target='_blank'><Button variant={"ghost"} colorScheme='purple'>Fork</Button></a>
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
            <Heading textAlign={"center"} children="My Projects 🤖" />
            <Stack mt={["10", "10"]} flexWrap={"wrap"} alignItems={["center", "flex-start"]} justifyContent={["flex-start", "space-between"]} direction={["column", "row"]}>
                {
                    projectData.map((item, index) => {
                        return <Project key={index} name={item.name} desc={item.desc} image={item.image} checkUrl={item.checkUrl} forkUrl={item.forkUrl} />
                    })
                }
            </Stack>
        </Container>
    )
}

export default Projects