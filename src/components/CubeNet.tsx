import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import NeuralNetworkCube from './NeuralNetworkCube'
import { EffectComposer, Glitch, Vignette } from '@react-three/postprocessing'
import { OrbitControls, PresentationControls } from '@react-three/drei'
import { GlitchMode,BlendFunction } from 'postprocessing'
export default function CubeNet() {
    
  const ref = useRef();
  const light = useRef();
    return (
        <>
            <div className='w-screen h-screen'>
                <Canvas
                    camera={{
                        position: [0, 5, 50], fov: 75,
                        near: 1,

                    }}
                    shadows
                    className="z-10 "
                ><OrbitControls
                        ref={ref}
                        autoRotate
                        autoRotateSpeed={1}
                        enableDamping={false}
                        dampingFactor={0.25}
                        enablePan={true}
                        enableZoom={false}
                        zoomSpeed={1.2}
                        maxPolarAngle={Math.PI / 2.2}
                        minPolarAngle={Math.PI / 2}
                        keyPanSpeed={0.1}
                        maxDistance={50}
                        minDistance={1}
                        cameraPositionSet={[2, 5, 2]}

                    />
                    <PresentationControls


                        polar={[- 0, 0]}
                        azimuth={[0, 0]}
                        config={{ mass: 2, tension: 400 }}
                        snap={{ mass: 4, tension: 400 }}
                    >
                        <EffectComposer>
                            <Glitch delay={[1.5, 3.5]} // min and max glitch delay
                                duration={[0.6, 1.0]} // min and max glitch duration
                                strength={[0.3, 1.0]} // min and max glitch strength
                                mode={GlitchMode.SPORADIC} // glitch mode
                                active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                                ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                            />
                            <Vignette
                                offset={0.3}
                                darkness={1}
                                blendFunction={BlendFunction.NORMAL}
                            />
                        </EffectComposer>
                        <directionalLight
                            ref={light}
                            castShadow
                            position={[-8, 70, 100]}
                            intensity={Math.PI * 1}
                        />
                        <directionalLight
                            ref={light}
                            castShadow
                            position={[8, 70, -100]}
                            intensity={Math.PI * 1}
                        />

                        <directionalLight
                            ref={light}
                            castShadow
                            position={[-8, -70, -100]}
                            intensity={Math.PI * 1}
                        />
                        <directionalLight
                            ref={light}
                            castShadow
                            position={[8, 70, 100]}
                            intensity={Math.PI * 1}
                        />
                        <ambientLight intensity={Math.PI * 0.5} />
                        
                        
                    </PresentationControls>
                </Canvas>
            </div>
        </>
    )
}
