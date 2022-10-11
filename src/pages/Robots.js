import React, {useState, useEffect, useContext} from "react";
import {
  Flex,
  Button,
  Text,
  Wrap
} from "@chakra-ui/react";
import { Link , useParams} from "react-router-dom";
import Navbar from "../components/Navbar"
import RobotCard from "../components/RobotCard";

import { UserContext } from "../UserContext";
import axios from "axios";

export default function Robots() { 
  const[robots, setRobots] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    //redirect to login if they dont have user
    const getRobots = async()=>{
      const res = await axios.get(`http://localhost:3001/api/posts/project/${id}`)
      setRobots(res.data.robots)
      console.log(res.data.robots)
    }
    getRobots()
  }, [id])

  const{value: user, setValue: setUser} = useContext(UserContext)

  return (
    <Flex 
      flexDir= 'column'
      key ={window.location.href}
    >
        <Navbar/>
        <Flex>
          <Text fontSize='4xl' fontWeight='500' color = 'gray.600' ml = {12} mt = '90px'>
            {`<Project name>'s Bots:`}
          </Text>
          <Button mt = '100px' colorScheme = 'blue' ml = '40px' mr = '100px'>+ new bot</Button>
        </Flex>
        
        <Wrap spacing = "15px" mt={10} justify = "center" >
          {robots.map((r)=>( //mapping the data of each post into a Post component
            <RobotCard key = {r.botName} robot = {r}/>
          ))} 
          
        </Wrap>
        

        
        
    </Flex>
  );
}
