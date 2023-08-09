"use client"
import { StrictMode, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Reflector, useTexture } from '@react-three/drei'
import { Model } from './Man'

export default function Home() {
  // const vid = useRef()
  // useEffect(() => {
  //   navigator.mediaDevices.getUserMedia({video:true}).then((stream) => {
  //     vid.current.srcObject = stream;
  //     vid.current.play();
  //   })
  // }, [])
  
function Ground() {
  const [floor] = useTexture(['/SurfaceImperfections003_1K_var1.jpg'])
  return (
    <Reflector position={[0,-.399,0]} blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.9} mixBlur={10} mixStrength={0.8} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.5} roughnessMap={floor}  {...props} />}
    </Reflector>
  )
}
  return (
    <section className='bg-black'>
      <StrictMode>
        <Canvas camera={{ position: [0, 0, 1] } } id='canvas'>
          {/* <mesh>
            <boxGeometry  />
            <meshBasicMaterial color={0x00ff00}   wireframe />
          </mesh> */}
          <Model/>
          <OrbitControls />
          <ambientLight intensity={1}/>
          <Ground/>
          <directionalLight intensity={.1} position={[0,1,.5]} ></directionalLight>
        </Canvas>

      </StrictMode>
      {/* <video ref={vid}  /> */}
    </section>
  )
}
