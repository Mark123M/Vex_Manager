import React, {useState, useEffect, useContext} from "react";
import {
  Flex,
  Button,
  Text,
  Wrap
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import RobotCard from "../components/RobotCard";

import { UserContext } from "../UserContext";

export default function Robots() { 
  useEffect(()=>{
    //redirect to login if they dont have user
  })
  const{value: user, setValue: setUser} = useContext(UserContext)

  const robot = {
    name: 'hello',
    changeLog: 'sdifdjdijfd'
  }

  return (
    <Flex flexDir= 'column'>
        <Navbar/>
        <Flex>
          <Text fontSize='4xl' fontWeight='500' color = 'gray.600' ml = {12} mt = '90px'>
            {`<Project name>'s Bots:`}
          </Text>
          <Button mt = '100px' colorScheme = 'blue' ml = '40px' mr = '100px'>+ new bot</Button>
        </Flex>
        
        <Wrap spacing = "15px" mt={10} justify = "center">
          <RobotCard robot = {robot}/>
          <RobotCard robot = {robot}/>
          <RobotCard robot = {robot}/>
          
        </Wrap>
        

        
        
    </Flex>
  );
}
