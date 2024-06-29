/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon, RocketIcon } from "@radix-ui/react-icons";
import { Canvas } from "@react-three/fiber";
import { CameraControls, ContactShadows, Environment, Html, KeyboardControls, OrbitControls, PresentationControls, useGLTF, useProgress } from '@react-three/drei';
import { Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, spring, mirrorEasing } from "framer-motion";
import { LogoTd } from "./LogoTd";
import NeuralNetwork from "./NeuralNetwork";
import { Stage } from "@react-three/drei";
import { Glitch, EffectComposer, Vignette } from "@react-three/postprocessing";
import { GlitchMode, BlendFunction } from 'postprocessing'
import Loading from "./Loading";
export const Hero = () => {

  const ref = useRef();
  const light = useRef();
  return (
    <>
      <div className="w-screen h-screen">
        <Canvas camera={{
          position: [0, 0, 150], fov: 100,
          near: 10,

        }}>
          <NeuralNetwork />
        </Canvas>
      </div>
      <div className="absolute top-0 left-0 w-screen h-screen  z-30">
        <div className="container h-full flex flex-col-reverse lg:flex-row items-center justify-center  gap-10">
          <div className="lg:w-3/6 text-center lg:text-start space-y-6 flex flex-col lg:justify-start lg:items-start items-center justify-center w-full">
            <main className="text-5xl md:text-6xl font-bold ">
              <AnimatePresence mode="sync">
                <motion.div
                  initial={{
                    x: -1200,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 1,
                    // ease: [0.22, 1, 0.36, 1],
                  }}
                  className="z-20"
                >

                  <motion.h1 className="inline">
                    Beyond the{" "}
                    <span className="inline bg-gradient-to-r from-[#71affffb]  to-[#00ff80] text-transparent bg-clip-text">
                      Dots
                    </span>


                  </motion.h1>
                </motion.div>
                <motion.div
                  initial={{
                    x: -1200,
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.25,
                    duration: 1.25,
                    // ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <motion.p className="text-xl text-muted-foreground mt-5">
                    Connecting Insights for Unparalleled Outcomes.
                  </motion.p>

                </motion.div>
              </AnimatePresence>
              {" "}

              {/* <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Beyond the Dots
            </span>{" "}

          </h2> */}
            </main>

            <AnimatePresence mode="sync">
              <motion.div
                initial={{
                  x: -1200,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 1.5,
                  duration: 1.5,
                  // ease: [0.22, 1, 0.36, 1],
                }}
              >

                <Link to="/contact-us" className='group flex w-48  bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none text-white text-xl uppercase font-semibold  shadow-md rounded-full py-2 px-4'>
                  <div className="flex sm:flex-cols-12 gap-2 flex-row items-center">
                    <div className="col-span-1">

                      <RocketIcon className="w-10 transition-all duration-300 group-hover:translate-x-3 " />

                    </div>
                    <div className="col-span-2 font-poppins transition-all duration-300 group-hover:translate-x-1">Let's Talk</div>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>








          </div>

          {/* Hero cards sections */}
          <div className="lg:w-3/6 w-full h-[400px] z-10 lg:h-full">
            {/* <HeroCards /> */}
            <Suspense fallback={<Loading />}>

              <Canvas
                camera={{
                  position: [0, 0, 150], fov: 100,
                  near: 10,

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
                  cameraPositionSet={[2, 0, 2]}

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
                      offset={0.1}
                      darkness={1.5}
                      blendFunction={BlendFunction.MULTIPLY}

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
                  <LogoTd castShadow />z
                  {/* <NeuralNetwork /> */}
                </PresentationControls>
              </Canvas>
            </Suspense>
          </div>
        </div>
        {/* Shadow effect */}
        <div className="shadow"></div>
      </div >
    </>
  );
};
