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
import ProjectModal from "../components/ProjectModal";

import { UserContext } from "../UserContext";
import axios from 'axios'


export default function Projects() { 
  const [projects, setProjects] = useState([''])
    

  const{value: user, setValue: setUser} = useContext(UserContext)
  const [modalDisplay, setModalDisplay] = useState(false)
  const [reload, setReload] = useState(true)

  useEffect(()=>{
    const getAllProjects = async() =>{
        const res = await axios.get('http://localhost:3001/api/posts/project')
        console.log(res.data)
        setProjects(res.data)
    }
    getAllProjects()
  }, [modalDisplay, reload])

 
 
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
        
        <Wrap spacing = "15px" mt={10} justify = "center" >
          {projects.map((p)=>( //mapping the data of each post into a Post component
            <ProjectCard key = {p._id} project = {p} setReload = {setReload} reload = {reload}/>
          ))} 
        </Wrap>
        

        
        
    </Flex>
  );
}
