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
import { useNavigate } from "react-router-dom";
import ProjectModal from "./ProjectModal";

import { UserContext } from "../UserContext";
import axios from 'axios'

export default function RobotCard({robot, setReload, reload}) {
    const[showMenu, setShowMenu] = useState(false)

    const handleEditBot = () =>{

    }
    const handleDeleteBot = async () =>{
        const res = await axios.delete(`http://localhost:3001/api/posts/bots/${robot._id}`)
        setReload(!reload)
    }
    const handleDuplicateBot = async () =>{
        const res = await axios.post('http://localhost:3001/api/posts/bots', {
            name: 'Copy of '+robot.name,
            changeLog: robot.changeLog,
            model: robot.model,
            partsCount: robot.partsCount,
            image: robot.image,
        })
        setReload(!reload)
        
    }

    return(
        <Flex 
            flexDirection = 'column'
            cursor='pointer'
        
        >
           
            <Flex borderRadius = '10px 10px 0px 0px' bg = '#EFEFEF' w = '330px' h = '220px' flexDirection = 'column'>
                <Flex w = '100%'  mr = {2} mt = {3} ml = 'auto' >
                    <Text 
                        ml = 'auto' 
                        mr = {1} 
                        mt = '-2px' 
                        fontSize='sm' 
                        color = 'blackAlpha.600' 
                        mb = '-100px' 
                        cursor = 'pointer' 
                        onMouseEnter = {()=>setShowMenu(true)} 
                        onMouseLeave = {()=>setShowMenu(false)}
                    >
                        Actions
                    </Text>
                    <Icon mr = {2} color = 'blackAlpha.600' as = {IoIosArrowDropdownCircle} w = {5} h = {5} cursor = 'pointer' onMouseEnter = {()=>setShowMenu(true)} onMouseLeave = {()=>setShowMenu(false)} ></Icon> 
                </Flex>

                <Flex 
                    flexDirection = 'column' 
                    ml = 'auto'
                    w = '120px' 
                    h = '120px' 
                    bg = 'white' 
                    mt = '1px'
                    display = {showMenu?'flex':'none'} 
                    onMouseEnter = {()=>setShowMenu(true)} 
                    onMouseLeave = {()=>setShowMenu(false)} 
                    borderStyle = {'solid solid solid solid'} 
                    borderWidth = {2} 
                    borderColor = 'gray.300'
                >
                    <Button variant = 'link' size = 'sm' mt = {2}>Add bot</Button>
                    <Button variant = 'link' size = 'sm' mt = {2} onClick = {handleEditBot}>Edit</Button>
                    <Button variant = 'link' size = 'sm' mt = {2} onClick = {handleDuplicateBot}>Duplicate</Button>
                    <Button variant = 'link' size = 'sm' mt = {2} onClick = {handleDeleteBot}>Delete</Button>
                    
                </Flex>
            </Flex>

            <Flex  bg = 'blue.400' w = '330px' h = '280px' flexDirection = 'column'>
                <Text  fontWeight = '600' fontSize = '1.75rem' ml = {4} mt = {3} color = 'white' fontFamily={`"Roboto", sans-serif`}> {robot.name}</Text>  
                
                <Text fontWeight = '300' fontSize = 'md' mr = {4} ml = {4} mt = {2} color = 'white' fontFamily={`"Open sans", sans-serif`}>
                    {robot.changeLog}
                </Text>


                <Flex flexDirection = 'column' mt = 'auto'>
                    <Flex>
                        <Text fontWeight = '500' fontSize = 'xs' mr = {4} ml = {4} mb = {2} color = 'white' fontFamily={`"Open sans", sans-serif`}>
                            Builds: 12
                        </Text>
                        <Text fontWeight = '500' fontSize = 'xs' mr = {4} mb = {2} color = 'white' fontFamily={`"Open sans", sans-serif`} ml = 'auto'>
                            Last edited: 9/28/2022
                        </Text>
                    </Flex>
                    
                    
                </Flex>
                
            </Flex>
        </Flex> 
        

    )
}