import { Flex } from "@chakra-ui/react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";

import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const ref = useRef()
  const { nodes} = useGLTF('/Gear.gltf')

  // Animate model
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 10
    ref.current.rotation.x = Math.cos(t / 4) / 4
    ref.current.rotation.y = Math.sin(t /3) * 0.8
    ref.current.position.y = (1 + Math.sin(t * 1.5)) /15
  })

  return (
    <group {...props} dispose={null} scale = {0.022} ref = {ref}>
      <mesh receiveShadow castShadow geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} material-color = {'#48BB78'} />
    </group>
  )
}

export default function Gear() {
  return (
    <Flex h = '1000px' bg = 'white'>
    <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity = {0.5}/>
       
        <Suspense fallback={null}>
            <Model />
            <Environment preset="sunset" />
            <ContactShadows position={[0, -0.8, 0]} opacity={0.50} scale={10} blur={1.5} far={0.2} />
        </Suspense>
        <OrbitControls enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
    </Canvas>
    </Flex>
  );
}
