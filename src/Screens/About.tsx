import React from 'react'
import { Text, Heading, VStack } from '@chakra-ui/react';
import { aboutData } from '../Data/data';

const About = () => {
  return (
        <VStack px={["10","56"]} py={"16"} spacing={"8"} w={'100%'} justifyContent={"center"} alignItems={"center"}>
            <Heading mb={"4"} children="Know Me 😇"/>
            <Text pt={"5"} textAlign={["center","left"]} fontFamily={"mono"} fontSize={"xl"}>{aboutData.desc}</Text>
        </VStack>
  )
}

export default About