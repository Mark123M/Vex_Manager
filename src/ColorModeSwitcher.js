import React, {useEffect} from "react";
import { useColorMode, useColorModeValue, IconButton, color } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = props => {
  
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(()=>{
    if(colorMode==="dark"){
      toggleColorMode()
    } 
  }, [colorMode, toggleColorMode])
  //console.log(colorMode)
  return (
    <>
    </>
  );
};