import React from 'react'
import { Box, Text, Heading, Button, Container, Stack, VStack, HStack } from '@chakra-ui/react';
import { DiGithub } from 'react-icons/di';
import {TiSocialInstagramCircular, TiSocialFacebookCircular} from 'react-icons/ti';

const Footer = () => {
    return (
        <Box minH={"10vh"} p={"4"}>
            <Stack justifyContent={["center","space-around"]} direction={["column", "row"]}>
                <HStack spacing={["2","10"]} fontSize={"50"} justifyContent={"center"}>
                    <DiGithub />
                    <TiSocialInstagramCircular />
                    <TiSocialFacebookCircular />
                </HStack>
                <VStack justifyContent={"center"}>
                <Heading fontFamily={"monospace"} size={"sm"} textAlign={["center"]} children="Made with 💖 by Bishnudev Khutia" />
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer