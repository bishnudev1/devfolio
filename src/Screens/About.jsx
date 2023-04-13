import React from 'react'
import { Button, Text, Heading, Stack, VStack, Image, Container } from '@chakra-ui/react';

const About = () => {
  return (
        <VStack mt={["10","0"]} px={["10","56"]} py={"16"} spacing={"8"} w={'100%'} justifyContent={"center"} alignItems={"center"}>
            <Heading children="Call me Excel 😇"/>
            <Text pt={"5"} fontFamily={"serif"} textAlign={["center","left"]} fontSize={"xl"}>I am a hardcore technology lover since my childhood. I've been a Math-Physics student in my high school. Currenly I'm pursing my Bachelor of Technology degree in Computer Science & Engineering from CEM, Kolaghat. I got taste my first programming language in my 10th standard and it was Python. Since then I am trying to learn new technologies and building projects. Recently I have switched to Open Source Community to explore more variety of techs. I will be more happy if you call me a problem solver rather than just a developer :)</Text>
        </VStack>
  )
}

export default About