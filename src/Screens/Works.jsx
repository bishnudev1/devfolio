import { VStack, Heading, Text, HStack, Box } from '@chakra-ui/react'
import React from 'react'
import { SiCanva, SiFigma, SiFirebase, SiFlutter, SiGraphql, SiMicrosoftexcel, SiMongodb, SiNodeDotJs, SiYoutube } from 'react-icons/si'

import { worksData } from '../Data/data'


const Work = ({ name, role, duration, techStack, description }) => {

    return <VStack
        className='work'
        w={["100%", "4xl"]}
        spacing={"4"} alignItems={["center", "flex-start"]}>
        <Heading fontFamily={"body"} size={"lg"}>{name}</Heading>
        <HStack>
            <Text fontStyle={"initial"} fontSize={["sm", "xl"]}>{role}</Text>
            <Text color={'rosybrown'} fontSize={["sm", "xl"]}>[ {duration} ]</Text>
        </HStack>
        <HStack justifyContent={"space-evenly"} w={"100%"} fontSize={"30"}>
            {techStack.map((icon, index) => (
                <span key={index} style={{ color: icon.props.color }}>
                    {icon}
                </span>
            ))}
        </HStack>
        <Text fontFamily={"sans-serif"} textAlign={["center", "left"]}>{description}</Text>
    </VStack>
}

const Works = () => {

    return (
        <Box >
            <Heading mb={"4"} py={"10"} textAlign={"center"} children="My Works 🤓" />
            <VStack px={["4", "6"]} w={"100%"} spacing={"8"} justifyContent={["center", "space-between"]}>
                <Work
                    name={worksData.project1.name}
                    duration={worksData.project1.duration}
                    role={worksData.project1.role}
                    techStack={worksData.project1.techStack}
                    description={worksData.project1.description}
                />
                <Work
                    name={worksData.project2.name}
                    duration={worksData.project2.duration}
                    role={worksData.project2.role}
                    techStack={worksData.project2.techStack}
                    description={worksData.project2.description}
                />
                <Work
                    name={worksData.project3.name}
                    duration={worksData.project3.duration}
                    role={worksData.project3.role}
                    techStack={worksData.project3.techStack}
                    description={worksData.project3.description}
                />
            </VStack>
        </Box>
    )
}

export default Works