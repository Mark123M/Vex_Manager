import React, {useState, useEffect} from "react";
import {
  Flex,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Home() {  
  return (
    <Flex>
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
