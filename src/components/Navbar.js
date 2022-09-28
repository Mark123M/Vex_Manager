import React, {useState, useEffect, useContext} from "react";
import {
  Flex,
  Button,
  Image,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Projects() { 
  const [buttonState, setButtonState] = useState('noUser')
  
  const{value: user, setValue: setUser} = useContext(UserContext)


  useEffect(()=>{

  }, [])

  return (
    <Flex
        position = 'fixed'
        height = '50px'
        width = '100%'
        bg = 'white'
        alignItems='center'
        borderStyle='none none solid none'
        borderColor = 'gray.300'
        borderWidth = '1px'
    >
        <Image src = './Logo.png' mt = '-10px' ml = '15px' maxWidth = '100px' height = '110px' objectFit = 'cover' minWidth = '50px'/>
        
        <Flex ml = 'auto'>
          <Button variant = 'link'  mr = '60px' size = 'sm'> Projects </Button>
          <Button variant = 'link' mr = '60px' size = 'sm'> Gallery </Button>
          <Button variant = 'link' mr = '60px' size = 'sm'> Related </Button>
          <Flex as = 'a' href = 'https://github.com/Mark123M/Vex_Manager'>
            <Button variant = 'link' mr = '60px' size = 'sm'> Github </Button>
          </Flex>

          <Button variant = 'solid' colorScheme = 'red' size = 'sm' mr = '10px'> Sign up </Button>
          <Text mr = '10px'>or</Text>
          <Button variant = 'outline' colorScheme = 'blue' size = 'sm' mr = {'20px'}>Sign in</Button>
        </Flex>
        
        
    </Flex>
  );
}
