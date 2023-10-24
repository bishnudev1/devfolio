import React, {useState, useEffect} from 'react'
import { Container, VStack, Stack ,Button, Input, Image, Heading, Text,HStack } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TradingImg from '../Assets/Images/trading.svg';
import TradingImg2 from '../Assets/Images/trading2.svg';
import TradingImg3 from '../Assets/Images/trading3.svg';
import {SiGmail, SiFacebook, SiInstagram} from 'react-icons/si';
import { collection, addDoc, } from "firebase/firestore";
import { db ,fetchPost } from '../db/firebase.js';
import { toast } from 'react-toastify';



const Trading = () => {



    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    const [contactData, setContactData] = useState(false);


    const submitFormHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if(!name || !email || !number){
                toast("Enter all fields...");
            }
            else{

                const resp = await fetchPost(email);

                if(resp){
                    if(resp["isSent"] === true){
                        console.log(contactData);
                        setContactData(false);
                        toast("You've already submitted the form. Wait till you get back to you 🥳");
                        return;
                    }
                }
                const docRef = await addDoc(collection(db, "tradContacts"), {
                    "name": name,
                    "email": email,
                    "number": number,
                    "isSent":true,
                    "createdAt": Date.now()  
                  });
                  console.log("Document written with ID: ", docRef.id);
                  setContactData(true);
                  toast("Thanks! We'll get back to you soon 🥳");
            }
          } catch (e) {
            console.error("Error adding document: ", e);
            setContactData(false);
            toast("Oops! some error occured. Try reaching me through my social media below 🥺");
          }
        
        console.log("Form has submitted...");
      }

  return (
    <div className='tradingContainer'>
        <Container maxW={"container.xl"} py={"12"} px={["5","20"]}>


       
        <Carousel transitionTime={1} useKeyboardArrows={true} showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoop={true}>
            
        <Image id='trading-img-graphics' src={TradingImg} boxSize={"2xs"} objectFit={"contain"}/>
        <Image id='trading-img-graphics' src={TradingImg3} boxSize={"2xs"} objectFit={"contain"}/>
        <Image id='trading-img-graphics' src={TradingImg2} boxSize={"2xs"} objectFit={"contain"}/>
        </Carousel>
        <Text m={"10"} fontFamily={"revert"} mb={"10"} fontSize={"lg"} textAlign={"left"}>Beside a Student, Photographer and Software Engineer, I am passionate Stock Trader and earning my secondary income sitting at home. And you don't believe that Trading becomes so much easy nowadays that you can make 5000-10000 INR monthly very easily with just perfect guidance. So if you want to get into Stock Market then just fill up the form below and let's connect together.😎</Text>
        <Stack justifyContent={["center", "space-around"]} spacing={["0","10"]} alignItems={"center"} direction={["column", "row"]}>
       
        <VStack  direction={["column", "row"]}>
            {
                contactData === true ? <Text textAlign={"center"}>Thanks for submitting the form. We'll contact you soon 🤩</Text> :                 <VStack   height={"100%"} spacing={"6"} width={"100%"} justifyContent={["center", "space-evenly"]} alignItems={"center"}>
            <Input value={name} onChange={(e) => setName(e.target.value)} style={{"color":"black"}} width={"100%"} type='text' placeholder='Enter your name...' />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} style={{"color":"black"}} width={"100%"} type='email' placeholder='Enter your email...' />
            <Input value={number} onChange={(e) => setNumber(e.target.value)} style={{"color":"black"}} width={"100%"} type='number'  placeholder='Enter your number...' />
            <Button onClick={submitFormHandler} variant={"outline"}>Submit</Button>
                </VStack>
            }
            <VStack justifyContent={"center"} alignItems={"center"}>
                <Text mb={'5'} fontSize={"lg"} fontFamily={"cursive"}>OR</Text>
                <HStack justifyContent={"space-evenly"}
                alignItems={"center"}
                spacing={"10"}
                >
                <a href="mailto:bishnudevkhutia20@gmail.com" target='_blank' rel="noreferrer"><SiGmail color='wheat' size={"40"} /></a>
                
                <a href="https://www.facebook.com/bishnudev.khutia.90/" target='_blank' rel="noreferrer"><SiFacebook color='skyblue' size={"40"}/></a>
                
                <a href="https://www.instagram.com/bishnudev_ig/" target='_blank' rel="noreferrer"><SiInstagram color='pink' size={"40"}/></a>
                </HStack>
            </VStack>
            <Text pt={"10"} fontFamily={"revert"} mb={"10"} size={"md"} textAlign={"center"}>PS: You don't need any Computer or Laptop! Only a Mobile will does The Job.</Text>
        </VStack>
        </Stack>
        </Container>
        </div>
  )
}

export default Trading