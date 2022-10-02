import React, {useState, useEffect, useContext} from "react";
import {
  Flex,
  Button,
  Text,
  Icon,
  Box
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import '@fontsource/roboto'
import '@fontsource/open-sans'
import {GoKebabVertical} from 'react-icons/go'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import ProjectModal from "./ProjectModal";

import { UserContext } from "../UserContext";

export default function ProjectCard({project}) {
    const[showMenu, setShowMenu] = useState(false)
    const[modalDisplay, setModalDisplay] = useState(true)

    //console.log(showMenu)
    //const handleEditProject = () =>{
    //    setModalDisplay(true)
    //}
    
    return(
        <Flex flexDirection = 'column'>
           
            <Flex borderRadius = '10px 10px 0px 0px' bg = '#EFEFEF' w = '330px' h = '250px'>
                <Flex w = '100%'  mr = {2} mt = {3} ml = 'auto'>
                    <Text ml = 'auto' mr = {1} mt = '-2px' fontSize='sm' color = 'blackAlpha.600' mb = '-100px' cursor = 'pointer' onMouseEnter = {()=>setShowMenu(true)} onMouseLeave = {()=>setShowMenu(false)}>Menu</Text>
                    <Icon color = 'blackAlpha.600' as = {IoIosArrowDropdownCircle} w = {5} h = {5} cursor = 'pointer' onMouseEnter = {()=>setShowMenu(true)} onMouseLeave = {()=>setShowMenu(false)} ></Icon> 
                </Flex>

                <Flex 
                    flexDirection = 'column' 
                    position = 'fixed' 
                    w = '120px' 
                    h = '120px' 
                    bg = 'white' 
                    ml = '210px' 
                    mt = '30px' 
                    display = {showMenu?'flex':'none'} 
                    onMouseEnter = {()=>setShowMenu(true)} 
                    onMouseLeave = {()=>setShowMenu(false)} 
                    borderStyle = {'solid solid solid solid'} 
                    borderWidth = {2} 
                    borderColor = 'gray.300'
                >
                    <Button variant = 'link' size = 'sm' mt = {2}>Add bot</Button>
                    <Button variant = 'link' size = 'sm' mt = {2}>Edit</Button>
                    <Button variant = 'link' size = 'sm' mt = {2}>Delete</Button>
                    <Button variant = 'link' size = 'sm' mt = {2}>Duplicate</Button>
                </Flex>
            </Flex>

            <Flex  bg = '#EA5959' w = '330px' h = '250px' flexDirection = 'column'>
                <Text  fontWeight = '600' fontSize = '1.75rem' ml = {4} mt = {3} color = 'white' fontFamily={`"Roboto", sans-serif`}> {project.name}</Text>  
                
                <Text fontWeight = '300' fontSize = 'md' mr = {4} ml = {4} mt = {2} color = 'white' fontFamily={`"Open sans", sans-serif`}>
                    {project.description}
                </Text>


                <Flex flexDirection = 'column' mt = 'auto'>
                    <Text fontWeight = '500' fontSize = 'xs' mr = {4} ml = {4} mt = {2} color = 'white' fontFamily={`"Open sans", sans-serif`}>
                        Total parts used: 678
                    </Text>
                    <Flex>
                        <Text fontWeight = '500' fontSize = 'xs' mr = {4} ml = {4} mb = {2} color = 'white' fontFamily={`"Open sans", sans-serif`}>
                            Builds: 12
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