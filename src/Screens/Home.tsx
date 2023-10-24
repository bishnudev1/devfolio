import { Button, Text, Heading, Stack, VStack, Image } from '@chakra-ui/react';
import './home.css';
import { homeData } from '../Data/data';

const Home = () => {
    return (
        <section className='portfolio'>
            <div className="container">
                <Stack mt={["10", "0"]} spacing={["16", "56"]} height={"100%"} justifyContent={["center", "space-around"]} alignItems={"center"} direction={["column", "row"]}>
                    <VStack width="full" spacing={"8"} alignItems={["center", "flex-start"]} justifyContent={["center", "flex-start"]}>
                        <Heading size={"2xl"} textAlign={["center", "left"]} children="<>Hello, World !</>" />
                        <Text fontFamily={'body'} textAlign={["center", "left"]} fontSize={"xl"}>{homeData.intro}</Text>
                        <a href="https://drive.google.com/file/d/1_RlkGYripzWR4WyTQyHNgJF9LZeOSrlU/view?usp=sharing" target='_blank' rel="noreferrer" download='true'><Button size={"lg"} variant={"solid"} colorScheme='purple'>My Resume</Button></a>
                    </VStack>
                    <Image id='vetor-graphics' src={homeData.dp} boxSize={"md"} objectFit={"contain"} />
                </Stack>
            </div>
        </section>
    )
}

export default Home