import React, {useState, useEffect, useContext} from "react";
import {
  Flex,
  Button,
  Text,
  Wrap,
  CloseButton
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import ProjectCard from "../components/ProjectCard";
//import ProjectModal from "../components/ProjectModal";

import { UserContext } from "../UserContext";


function ProjectModal({project, setModalDisplay}) {

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
      >
          <Flex borderRadius = '10px' bg = '#EFEFEF' w = '800px' h = '600px'>
              <CloseButton onClick={()=>setModalDisplay(false)} size = 'lg' ml = 'auto' mt = {2} mr = {2}  variant = 'link'></CloseButton>
          </Flex>
          
      </Flex> 
      

  )
}

export default function Projects() { 
  
  const{value: user, setValue: setUser} = useContext(UserContext)
  const [modalDisplay, setModalDisplay] = useState(false)

  useEffect(()=>{
    //redirect to login if they dont have user
  })
 
  return (
    <Flex flexDir= 'column'>
        <Flex display = {modalDisplay? 'flex':'none'}>
          <ProjectModal setModalDisplay={setModalDisplay}/>
        </Flex>
        
        <Navbar/>
        <Flex>
          <Text fontSize='4xl' fontWeight='500' color = 'gray.600' ml = {12} mt = '90px'>
            {`<Team name>'s Projects:`}
          </Text>
          <Button mt = '100px' colorScheme = 'red' ml = '40px' mr = '100px' onClick={()=>setModalDisplay(true)} >+ new project</Button>
        </Flex>
        
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
