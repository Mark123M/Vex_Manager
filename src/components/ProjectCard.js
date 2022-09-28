import React, {useState, useEffect, useContext} from "react";
import {
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import '@fontsource/roboto'
import '@fontsource/open-sans'

import { UserContext } from "../UserContext";

export default function ProjectCard({project}) {
    return(
        <Flex flexDirection = 'column'>
            <Flex borderRadius = '10px 10px 0px 0px' bg = '#EFEFEF' w = '330px' h = '250px'>
            
            </Flex>
            <Flex  bg = '#EA5959' w = '330px' h = '250px' flexDirection = 'column'>
                <Text fontWeight = '600' fontSize = '2xl' ml = {4} mt = {3} color = 'white' fontFamily={`"Roboto", sans-serif`}> {`Bot name:`}</Text>
                <Text fontWeight = '300' fontSize = 'md' mr = {4} ml = {4} mt = {2} color = 'white' fontFamily={`"Open sans", sans-serif`}>
                    This is a square bot made by ay jackson. It was built for the Tower Takeover challenge. It took 3 monthes to design and build.
                </Text>


                <Flex flexDirection = 'column' mt = 'auto'>
                    <Text fontWeight = '500' fontSize = 'xs' mr = {4} ml = {4} mt = {2} color = 'white' fontFamily={`"Open sans", sans-serif`}>
                        Total parts used: 678
                    </Text>
                    <Flex>
                        <Text fontWeight = '500' fontSize = 'xs' mr = {4} ml = {4} mb = {2} color = 'white' fontFamily={`"Open sans", sans-serif`}>
                            Versions: 12
                        </Text>
                        <Text fontWeight = '600' fontSize = 'xs' mr = {4} mb = {2} color = '#8c3232' fontFamily={`"Open sans", sans-serif`} ml = 'auto'>
                            Last edited: 9/28/2022
                        </Text>
                    </Flex>
                    
                    
                </Flex>
                
            </Flex>
        </Flex> 
        

    )
}