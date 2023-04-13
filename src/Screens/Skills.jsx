import React from 'react';
import { Box, Heading, VStack, HStack } from '@chakra-ui/react';
import { DiGithub, DiHeroku, DiLinux, DiReact, DiWindows } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { DiFirebase } from 'react-icons/di';
import { DiPython } from 'react-icons/di';
import { DiJavascript } from 'react-icons/di';
import { DiDart } from 'react-icons/di';
import { DiJava } from 'react-icons/di';
import { DiAws } from 'react-icons/di';
import { DiDocker } from 'react-icons/di';
import { DiMysql } from 'react-icons/di';
import { GrNode } from 'react-icons/gr';
import { SiCanva, SiFigma } from 'react-icons/si';
import { SiAndroidstudio } from 'react-icons/si';

const Skills = () => {
    return (
        <Box>
            <Heading textAlign={"center"} children="My Expertise 👨‍💻" />
            <VStack mt={["12", "20"]} spacing={"8"}>
                <HStack fontSize={["5xl","8xl"]}>
                    <DiReact />
                    <DiMongodb />
                    <GrNode />
                    <DiFirebase />
                    <DiMysql />
                    <DiAws />
                </HStack>
                <HStack fontSize={["5xl","7xl"]}>
                    <DiDart />
                    <SiAndroidstudio />
                    <DiJava />
                    <DiPython />
                    <DiJavascript />
                    <DiDocker />
                </HStack>
                <HStack fontSize={["5xl","6xl"]}>
                    <DiGithub />
                    <DiLinux />
                    <DiWindows />
                    <SiCanva />
                    <SiFigma />
                    <DiHeroku />
                </HStack>
            </VStack>
        </Box>
    )
}

export default Skills