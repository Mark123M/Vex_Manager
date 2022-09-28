import { Flex, Input, Button, Text, Image} from "@chakra-ui/react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense, useRef } from "react";
import { useState, useEffect } from "react";
import axios from 'axios'

const Scene = () => {
  const ref = useRef()
  const materials = useLoader(MTLLoader, "/parts/Clawbot.mtl");
  const obj = useLoader(OBJLoader, "https://mark123-uploads.s3.ca-central-1.amazonaws.com/1663360794096.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 10
    ref.current.rotation.x = Math.cos(t / 4) / 4
    ref.current.rotation.y = Math.sin(t /3) * 0.8
    ref.current.position.y = (1 + Math.sin(t * 1.5)) /15
  })


  console.log(obj);
  return <primitive ref = {ref} object={obj} scale = {0.025} />;
};

export default function Upload() {
    const [model, setModel] = useState(null)
    const [inputKey, setInputKey] = useState(0)

    useEffect(()=>{
      
    }, [])

    const handleModelChange = (e) =>{
      if(e.target.files[0].size > 110000000){
        alert("Model is too big. (>100mb)");
        setInputKey(inputKey+1)
      }
      else{
        setModel(e.target.files[0])
      }
    }
    console.log(model)

    const uploadModel = async (e) =>{
      e.preventDefault()
      console.log(model)

      const formData = new FormData();
      formData.append('model', model)

      axios.post('http://localhost:3001/api/posts/model', formData, { headers: {'Content-Type': 'multipart/form-data'}})
      .then((res)=>{
        console.log(res)
      })
    } 

  return (
    <Flex h = '1000px' bg = 'white' flexDirection = 'column'>
        
        <Flex 
          flexDirection = "column"  
          borderRadius= "10px" 
          ml = {4}
          alignSelf = "center"
        >

        
          <Flex mt = {3}>
              <form onSubmit={uploadModel}>
                  <Input key = {inputKey} onChange = {(e)=>handleModelChange(e)} variant = "outline" type="file" name="model" width = "300px" pt = "3px"/>
                  <Button type = "submit" variant = "outline" colorScheme = "green" size = "sm" ml = {2}>Submit</Button>
              </form>
          </Flex>
        </Flex>
        
        {/*<Image src = '/image/00c4e5cc35ad84a16400011415b1e446'></Image>*/}

        <Flex bg = 'white' h = '1000px'>
          <Canvas>
            <ambientLight intensity = {0.5}/>
            <Suspense fallback={null}>
                <Scene />
                <Environment preset="sunset" />
                <ContactShadows position={[0, -0.8, 0]} opacity={0.50} scale={10} blur={1.5} far={0.2} />
            </Suspense>
            <OrbitControls enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
          </Canvas>
        </Flex>
    </Flex>
  );
}
