"use client"
import { StrictMode, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model } from './Man'

export default function Home() {
  // const vid = useRef()
  // useEffect(() => {
  //   navigator.mediaDevices.getUserMedia({video:true}).then((stream) => {
  //     vid.current.srcObject = stream;
  //     vid.current.play();
  //   })
  // }, [])
  

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
        </Canvas>
      </StrictMode>
      {/* <video ref={vid}  /> */}
    </section>
  )
}
