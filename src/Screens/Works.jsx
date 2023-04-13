import { VStack, Heading, Text, HStack, Box } from '@chakra-ui/react'
import React from 'react'
import { SiCanva, SiFigma, SiFirebase, SiFlutter, SiGraphql, SiMicrosoftexcel, SiMongodb, SiNodeDotJs, SiYoutube } from 'react-icons/si'


const Work = ({ name, role, duration, techStack, description }) => {

    const techStacks = [
        {
            icon1: <SiCanva color='skyblue' />,
            icon2: <SiYoutube color='red' />,
            icon3: <SiMicrosoftexcel color='green' />


        },
        {
            icon1: <SiNodeDotJs color='skyblue' />,
            icon2: <SiMongodb color='red' />,
            icon3: <SiGraphql color='green' />
        },
        {
            icon1: <SiFlutter color='skyblue' />,
            icon2: <SiYoutube color='red' />,
            icon3: <SiMicrosoftexcel color='green' />
        }
    ];

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
        <Box>
            <Heading py={"10"} textAlign={"center"} children="My Works 🤓" />
            <VStack px={["4", "6"]} w={"100%"} spacing={"8"} justifyContent={["center", "space-between"]}>
                <Work
                    name={"Givemefive AI"}
                    duration={"Dec 21 - Feb 22"}
                    role={"Content Creation Internship"}
                    techStack={[<SiCanva color='skyblue' />,
                    <SiYoutube color='red' />,
                    <SiMicrosoftexcel color='green' />]}
                    description={"Made more than 30+ lectures regarding Basic Science & Programming on Canva, edited them and deployed them in Youtube and Duonut official website."}
                />
                <Work
                    name={"Arowdox Pvt. Ltd."}
                    duration={"Oct 22 - Nov 22"}
                    role={"Backend Developer Internship"}
                    techStack={[<SiNodeDotJs color='skyblue' />,
                    <SiMongodb color='red' />,
                    <SiGraphql color='green' />]}
                    description={"Created a fully optimize and scallable user and product API using Node JS, Express JS, Mongoose and GraphQL. Later deployed it to Amazon Web Services."}
                />
                <Work
                    name={"Merkos 302"}
                    duration={"Dec 22 - Present"}
                    role={"Frontend Developer Internship"}
                    techStack={[<SiFlutter color='skyblue' />,
                    <SiFirebase color='red' />,
                    <SiFigma color='green' />]}
                    description={"Created a fully responsive edtech platform for their upcoming startup with Flutter and Firebase. Currently working the state management part of it and will work on the API in future."}
                />
            </VStack>
        </Box>
    )
}

export default Works