import React, {useState, useEffect, useContext} from "react";
import {
  Flex,
  Button,
  Text,
  Input,
  FormLabel,
  IconButton,
  Textarea

} from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import '@fontsource/roboto'
import '@fontsource/open-sans'


import { UserContext } from "../UserContext";
import axios from 'axios'

export default function ProjectModal({project, setModalDisplay}) {
    const[name, setName] = useState("")
    const[desc, setDesc] = useState("")
    const[image, setImage] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const res = await axios.post('http://localhost:3001/api/posts/project', {
            userId: "urmom",
            name: name,
            description: desc,
            image: "penis.png",
            robots: []
        })
        setName('')
        setDesc('')
        setModalDisplay(false)
    }
   // console.log
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
            <Flex borderRadius = '10px' bg = 'white' w = '470px' h = '550px' flexDirection = 'column'>
                <CloseButton onClick={()=>setModalDisplay(false)} size = 'lg' ml = 'auto' mt = {2} mr = {2}  variant = 'link'></CloseButton>
                <Text mt = '-20px' ml = {10}fontSize = '3xl' fontWeight = '600' fontFamily = {`Roboto,"san-serif"`}> {`<new project>`}</Text>
                <Flex ml = {10} mt = {4}>
                    <form onSubmit={handleSubmit}>
                        <FormLabel fontSize = 'sm'>Name:</FormLabel>
                        <Input mt = '-5px' w = '400px' borderStyle = 'solid' borderColor = 'blackAlpha.300' borderWidth = '1px' placeholder="Name of your project" onChange = {(e)=>setName(e.target.value)} value = {name}/>
                        <FormLabel fontSize = 'sm' mt = {5}>Description:</FormLabel>
                        <Textarea mt = '-5px' placeholder='Write a description' resize='none' w = '400px' h = '190px' value = {desc} onChange = {(e)=>setDesc(e.target.value)}/>
                        <FormLabel fontSize = 'sm' mt = {5}>Image:</FormLabel>
                        <Input type='file' w = '400px'></Input>
                        <Flex ml = 'auto'>
                            <Button type = 'submit' ml = 'auto' mt = {3} colorScheme = 'red'>Create</Button>
                        </Flex>
                    </form>

                </Flex>

                

            </Flex>
            
        </Flex> 
    )
  }