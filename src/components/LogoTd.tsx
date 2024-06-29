/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/meta.glb -o src/components/Logo3d.jsx -k -K -r -s public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LogoTd(props) {
  const logo = useGLTF('./models/meta.glb')
  return (
    <primitive object={logo.scene} scale={9} position={[0, -25, 0]} rotation={[0, 0, 0]}/>
  )
}

useGLTF.preload('./models/meta.glb')
