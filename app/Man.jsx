/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 man.glb 
*/
"use client"
import React, { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF('/man.glb')
  console.log(nodes    )
  let movement = 1
  let bool = true
  useFrame((_, delta) => {
    let speed = .5
    bool?movement += speed : movement -= speed
    if(Math.abs(movement) >= 50) bool = !bool
    nodes.mixamorig5LeftArm.rotation.x =(Math.PI / 180) * movement
  })
  return (
    <group {...props} dispose={null} position={[0, -.4, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.0055}>
        <primitive object={nodes.mixamorig5Hips} />
        <skinnedMesh geometry={nodes.Ch38_Body.geometry} material={materials.Ch38_body} skeleton={nodes.Ch38_Body.skeleton} />
        <skinnedMesh geometry={nodes.Ch38_Eyelashes.geometry} material={materials.Ch38_hair} skeleton={nodes.Ch38_Eyelashes.skeleton} />
        <skinnedMesh geometry={nodes.Ch38_Hair.geometry} material={materials.Ch38_hair} skeleton={nodes.Ch38_Hair.skeleton} />
        <skinnedMesh geometry={nodes.Ch38_Shirt.geometry} material={materials.Ch38_body} skeleton={nodes.Ch38_Shirt.skeleton} />
        <skinnedMesh geometry={nodes.Ch38_Shoes.geometry} material={materials.Ch38_body} skeleton={nodes.Ch38_Shoes.skeleton} />
        <skinnedMesh geometry={nodes.Ch38_Shorts.geometry} material={materials.Ch38_body} skeleton={nodes.Ch38_Shorts.skeleton} />
        <skinnedMesh geometry={nodes.Ch38_Socks.geometry} material={materials.Ch38_body} skeleton={nodes.Ch38_Socks.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/man.glb')
