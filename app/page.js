"use client";
import { StrictMode, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Reflector, useTexture } from "@react-three/drei";
import { Model } from "./Man";

export default function Home() {
  function Ground() {
    const [floor] = useTexture(["/SurfaceImperfections003_1K_var1.jpg"]);
    return (
      <Reflector
        position={[0, -0.399, 0]}
        blur={[400, 100]}
        resolution={512}
        args={[10, 10]}
        mirror={0.9}
        mixBlur={10}
        mixStrength={0.8}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        {(Material, props) => (
          <Material
            color="#a0a0a0"
            metalness={0.5}
            roughnessMap={floor}
            {...props}
          />
        )}
      </Reflector>
    );
  }
  return (
    <section className="bg-black">
      <StrictMode>
        <Canvas camera={{ position: [0, 0.4, 1] }} id="canvas">
          <Suspense
            fallback={
              <Html className="fallback">
                <h1>Loading Please Wait</h1>
              </Html>
            }
          >
            <Model />
            <OrbitControls 
                  minAzimuthAngle={-Math.PI / 4}
                  maxAzimuthAngle={Math.PI / 4}
                  minPolarAngle={Math.PI / 6}
                  maxPolarAngle={Math.PI - Math.PI /2}
                  enableZoom={false}
                  enablePan={false}
            />
            <ambientLight intensity={1} />
            <Ground />
            <directionalLight
              intensity={0.1}
              position={[0, 1, 0.5]}
            ></directionalLight>
          </Suspense>
        </Canvas>
      </StrictMode>
      {/* <video ref={vid}  /> */}
    </section>
  );
}
