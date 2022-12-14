import React, {useState, useEffect} from "react";
import {
  ChakraProvider, CSSReset, propNames,
} from "@chakra-ui/react";

import Gear from "./components/models/Gear"
import Robot from "./components/models/Robot"
import Home from "./pages/Home"
import Upload from "./pages/Upload";
import Projects from "./pages/Projects"
import Robots from "./pages/Robots";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
//doing this for commits

import {
  HashRouter, //using hashrouter for client side routing
  Routes,
  Route,
} from "react-router-dom";

import { UserContext } from "./UserContext";


function App() {
  const[user, setUser] = useState(null)
  
  return (
    <UserContext.Provider value = {{value: user, setValue: setUser}}>
      <ChakraProvider>
        <ColorModeSwitcher/>
        <HashRouter>
          <Routes>
            <Route path="/" element = {<Projects />}></Route>
            <Route path = "/robots" element = {<Robots/>}></Route>
            <Route path="/gear" element = {<Gear />}></Route>
            <Route path="/project/:id" element = {<Robots />}></Route>
            <Route path="/projects" element = {<Projects />}></Route>
            <Route path="/upload" element = {<Upload />}></Route>
          </Routes>
        </HashRouter>
      </ChakraProvider>
    </UserContext.Provider>
  );
}

export default App;