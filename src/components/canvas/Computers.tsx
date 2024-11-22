import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import * as THREE from "three";

type ComputerProps = {
  isMobile?: boolean;
};

const Computers: React.FC<ComputerProps> = ({ isMobile }) => {
  const modelRef = useRef<THREE.Group>(null); // Referință pentru model
  const programmer = useGLTF("/lost_programmer/scene.gltf");

  // Rotire continuă automat
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Ajustează viteza rotirii (mai mic = mai lent)
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={50} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        ref={modelRef} // Atașăm referința la model
        object={programmer.scene}
        scale={isMobile ? 1 : 1.5}
        position={isMobile ? [0, -0.5, 0] : [-3, -1.25, -1.5]}
        rotation={[0, -4, 3]} // Rotirea inițială (opțional)
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Fără OrbitControls, pentru a elimina interacțiunea cu mouse-ul */}
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
