import { Html, useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'

const Target = (props) => {
  const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/publc/models/target-stand/model.gltf');
  const targetRef = useRef();
  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Target