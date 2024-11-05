import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css"
import { OrbitControls } from '@react-three/drei'
import Cylinder from './Cylinder'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const App = () => {
  return <Canvas flat camera={{fov:35}}>
    {/* use "drei three js" for orbit controls */}
    <OrbitControls /> 
    <ambientLight intensity={1.5} />
    <Cylinder />
    <EffectComposer>
    <Bloom
      mipmapBlur={true}
      intensity={10.0}
      luminanceThreshold={0}
      luminanceSmoothing={0}
    />
    </EffectComposer>

  </Canvas>
}

export default App