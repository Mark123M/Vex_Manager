import React, {useState, useEffect} from "react";
import {
  Flex,
  Button,
  Image
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Projects() {  
  return (
    <Flex
        mt = '4px'
        height = '50px'
        width = '100%'
        bg = 'white'
    >
        <Image src = './Logo.png' mt = '-35px' ml = '15px' maxWidth = '100px' height = '110px' objectFit = 'cover' minWidth = '50px'>

        </Image>
        <Button variant = 'link' ml = 'auto' mr = '60px' size = 'sm'> Projects </Button>
        <Button variant = 'link' mr = '60px' size = 'sm'> Gallery </Button>
        <Button variant = 'link' mr = '60px' size = 'sm'> Related </Button>
        <Button variant = 'link' mr = '60px' size = 'sm'> Github </Button>
        <Button variant = 'solid' colorScheme = 'red' size = 'sm' mt = {2} mr = '50px'> Sign up</Button>
        
    </Flex>
  );
}
