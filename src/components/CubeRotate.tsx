
import React, { StrictMode, useMemo, useRef, useState, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Stats, OrbitControls, Environment, Html, PresentationControls } from '@react-three/drei'
import { useControls, button } from 'leva'
import TWEEN from '@tweenjs/tween.js'
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js'
import NeuralNetwork from './NeuralNetwork'

function Buttons({ cubeGroup }) {
    const rotationGroup = useRef()

    // useControls('Cube', {
    //     'Left CW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, 1)
    //     }),
    //     'Left CCW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, -1)
    //     }),
    //     'Right CW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, -1)
    //     }),
    //     'Right CCW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, 1)
    //     }),
    //     'Back CW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, 1)
    //     }),
    //     'Back CCW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, -1)
    //     }),
    //     'Front CW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, -1)
    //     }),
    //     'Front CCW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, 1)
    //     }),
    //     'Top CW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, -1)
    //     }),
    //     'Top CCW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, 1)
    //     }),
    //     'Bottom CW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, 1)
    //     }),
    //     'Bottom CCW': button(() => {
    //         rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, -1)
    //     })
    // })
    const LeftCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, 1)
        console.log("hello")
    }
    const LeftCCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'x', -0.5, -1)
    }
    const RightCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, -1)
    }
    const RightCCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'x', 0.5, 1)
    }
    const BackCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, 1)
    }
    const BackCCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'z', -0.5, -1)
    }
    const FrontCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, -1)
    }
    const FrontCCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'z', 0.5, 1)
    }
    const TopCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, -1)
    }
    const TopCCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'y', 0.5, 1)
    }
    const BottomCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, 1)
    }
    const BottomCCW = () => {
        rotate(cubeGroup.current, rotationGroup.current, 'y', -0.5, -1)
    }
    return (
        <>
            <group ref={rotationGroup} />
            <Html occlude className='flex flex-col items-center justify-evenly w-full gap-1 z-10' position={[4, 2.4, 0]} style={{ zIndex: 10 }}>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => LeftCW()}>Left CW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => LeftCCW()}>Left CCW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => RightCW()}>Right CW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => RightCCW()}>Right CCW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => BackCW()}>Back CW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => BackCCW()}>Back CCW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => FrontCW()}>Front CW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => FrontCCW()}>Front CCW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => TopCW()}>Top CW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => TopCCW()}>Top CCW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => BottomCW()}>Bottom CW</button>
                <button className="w-48 py-2 border-[1px] rounded-lg bg-muted/50 hover:bg-green-400 transition-all duration-150 z-10" onClick={() => BottomCCW()}>Bottom CCW</button>
            </Html>

        </>
    )
}

function Cube() {
    const ref = useRef()

    const roundedBoxGeometry = useMemo(() => {
        return new RoundedBoxGeometry(1, 1, 1, 3, 0.1)
    }, [])

    useFrame(() => {
        TWEEN.update()
    })

    return (
        <>
            <group ref={ref} position={[0, 0, 0]}>
                {[...Array(3).keys()].map((x) =>
                    [...Array(3).keys()].map((y) =>
                        [...Array(3).keys()].map((z) => (
                            <Cubelet key={x + y * 3 + z * 9} position={[x - 1, y - 1, z - 1]} geometry={roundedBoxGeometry} />
                        ))
                    )
                )}
            </group>
            <Buttons cubeGroup={ref} />
        </>
    )
}

const colorSides = [
    [0, 1, 'darkorange'],
    [0, -1, 'red'],
    [1, 1, 'white'],
    [1, -1, 'yellow'],
    [2, 1, 'green'],
    [2, -1, 'blue']
]

function Cubelet({ position, geometry }) {
    return (
        <>
            <mesh position={position} geometry={geometry}>
                {[...Array(6).keys()].map((i) => (
                    <meshStandardMaterial
                        key={i}
                        attach={`material-${i}`}
                        color={position[colorSides[i][0]] === colorSides[i][1] ? colorSides[i][2] : `black`}
                    />
                ))}
            </mesh>
        </>
    )
}

function resetCubeGroup(cubeGroup, rotationGroup) {
    rotationGroup.children
        .slice()
        .reverse()
        .forEach(function (c) {
            cubeGroup.attach(c)
        })
    rotationGroup.quaternion.set(0, 0, 0, 1)
}

function attachToRotationGroup(cubeGroup, rotationGroup, axis, limit) {
    cubeGroup.children
        .slice()
        .reverse()
        .filter(function (c) {
            return limit < 0 ? c.position[axis] < limit : c.position[axis] > limit
        })
        .forEach(function (c) {
            rotationGroup.attach(c)
        })
}

function animateRotationGroup(rotationGroup, axis, multiplier) {
    new TWEEN.Tween(rotationGroup.rotation)
        .to(
            {
                [axis]: rotationGroup.rotation[axis] + (Math.PI / 2) * multiplier
            },
            250
        )
        .easing(TWEEN.Easing.Cubic.InOut)
        .start()
}

function rotate(cubeGroup, rotationGroup, axis, limit, multiplier) {
    if (!TWEEN.getAll().length) {
        resetCubeGroup(cubeGroup, rotationGroup)
        attachToRotationGroup(cubeGroup, rotationGroup, axis, limit)
        animateRotationGroup(rotationGroup, axis, multiplier)
    }
}


export default function CubeRotate() {
    return (
        <div className='w-screen h-screen'>
            <Canvas camera={{ position: [3, 3, 6] }} className='z-10'>
                <Suspense>
                    <Environment preset="forest" />
                </Suspense>
                <PresentationControls F


                    polar={[- 0, 0]}
                    azimuth={[0, 0]}
                    config={{ mass: 2, tension: 400 }}
                    snap={{ mass: 4, tension: 400 }}
                >
                    <Cube />
                    
                    <OrbitControls target={[0, 0, 0]} enableZoom={false} />
                    {/* <NeuralNetwork /> */}
                </PresentationControls>
                {/* <Stats /> */}
            </Canvas>

        </div>
    )
}
