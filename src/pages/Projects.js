import React, {useState, useEffect} from "react";
import {
  Flex,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"

export default function Projects() {  
  return (
    <Flex flexDir= 'column'>
        <Navbar/>
        <Link to = '/gear'>
            <Button variant = 'outline' colorScheme='teal'>Gear</Button>
        </Link>

        <Link to = '/robot'>
            <Button variant = 'outline' colorScheme='teal'>Robot</Button>
        </Link>
        <Link to = '/Upload'>
            <Button variant = 'outline' colorScheme='teal'>Upload</Button>
        </Link>
        
    </Flex>
  );
}
