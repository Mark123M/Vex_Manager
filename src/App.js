import React, {useState, useEffect} from "react";
import {
  ChakraProvider, CSSReset, propNames,
} from "@chakra-ui/react";

import Gear from "./assets/models/Gear"
import Robot from "./assets/models/Robot"
import { ColorModeSwitcher } from "./ColorModeSwitcher";

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
            <Route path="/gear" element = {<Gear />}></Route>
            <Route path="/robot" element = {<Robot />}></Route>
          </Routes>
        </HashRouter>
      </ChakraProvider>
    </UserContext.Provider>
  );
}

export default App;