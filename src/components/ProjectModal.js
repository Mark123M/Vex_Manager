import React, {useState, useEffect, useContext} from "react";
import {
  Flex,
  Button,
  Text,
  Input,
  FormLabel,
  IconButton

} from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import '@fontsource/roboto'
import '@fontsource/open-sans'

import { UserContext } from "../UserContext";

export default function ProjectModal({project}) {
    const [modalDisplay, setModalDisplay] = useState(true)
    return(
        <Flex 
            flexDirection = 'column' 
            w = '100%' 
            h = '100%' 
            position = 'fixed' 
            bg = 'rgba(0, 0, 0, 0.5)' 
            zIndex='10' 
            justifyContent='center' 
            alignItems = 'center'
           
            display = {modalDisplay?'flex':'none'}
        >
            <Flex borderRadius = '10px' bg = '#EFEFEF' w = '800px' h = '600px'>
                <CloseButton size = 'lg' ml = 'auto' mt = {2} mr = {2}  onClick={()=>setModalDisplay(!modalDisplay)}/>
            </Flex>
            
        </Flex> 
        

    )
}