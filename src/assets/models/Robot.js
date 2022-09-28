
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense, useRef } from "react";
import {Flex} from '@chakra-ui/react'

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
  const ref = useRef()
  const materials = useLoader(MTLLoader, "Clawbot.mtl");
  const obj = useLoader(OBJLoader, "Clawbot.obj", (loader) => {
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

export default function Robot() {
  return (
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
  );
}
