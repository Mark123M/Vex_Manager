import React, {useState, useEffect, useContext} from "react";
import {
  Flex,
  Button,
  Text,
  Wrap
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard";

import { UserContext } from "../UserContext";

export default function Projects() { 
  useEffect(()=>{
    //redirect to login if they dont have user
  })
  const{value: user, setValue: setUser} = useContext(UserContext)
  return (
    <Flex flexDir= 'column'>
        <Navbar/>
        <Text fontSize='4xl' fontWeight='500' color = 'gray.600' ml = {12} mt = '90px'>
          {`<Team name>'s Projects:`}
        </Text>
        <Wrap spacing = "15px" mt={10} justify = "center">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </Wrap>
        

        
        
    </Flex>
  );
}
