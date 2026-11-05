import * as THREE from "three";
import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

function Cube() {
  const cubeRef = useRef();
  const [color, setColor] = useState("#8b5cf6");
  const [hovered, setHovered] = useState(false);

  const colors = [
    "#8b5cf6",
    "#ef4444",
    "#22c55e",
    "#eab308",
    "#06b6d4",
    "#ec4899",
  ];

  useFrame((state, delta) => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.y += delta * 0.8;
    cubeRef.current.rotation.x += delta * 0.3;

    const targetScale = hovered ? 1.2 : 1;

    cubeRef.current.scale.x +=
      (targetScale - cubeRef.current.scale.x) * 10 * delta;

    cubeRef.current.scale.y +=
      (targetScale - cubeRef.current.scale.x) * 10 * delta;

    cubeRef.current.scale.z +=
      (targetScale - cubeRef.current.scale.x) * 10 * delta;
  });

  function handleClick() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }

  function handlePointerOver() {
    setHovered(true);
    document.body.style.cursor = "grab";
  }

  function handlePointerOut() {
    setHovered(false);
    document.body.style.cursor = "auto";
  }

  function handlePointerDown() {
    document.body.style.cursor = "grabbing";
  }

  function handlePointerUp() {
    document.body.style.cursor = "grab";
  }

  return (
    <mesh
      ref={cubeRef}
      castShadow
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <boxGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial
        color={color}
        roughness={0.05}
        metalness={0}
        transmission={0.5}
        thickness={100}
        ior={1.5}
        transparent
      />
    </mesh>
  );
}

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="flex w-screen justify-center py-10 border-b border-white/20 shrink-0">
        <h1>Testes para renders em 3D e animações!</h1>
      </header>

      <div className="flex mx-auto max-w-[1500px] border-x border-white/20 w-full flex-1 min-h-0">
        <main className="flex-1 min-h-0 overflow-y-auto m-2 md:m-4 lg:m-8">
          <div className="h-full w-full flex justify-center items-center">
            <Canvas
              className="w-[400px] h-[400px]"
              camera={{ position: [4, 3, 5], fov: 50 }}
              shadows
            >
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
              <Cube />
              <planeGeometry args={[20, 20]} />
              <shaderMaterial opacity={0.3} />
              <OrbitControls />
              <Environment preset="studio" />
            </Canvas>

            <p className="text-center flex items-center w-[400px] h-[300px] mr-20">
              Clique no cubo para mudar de cor
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quod impedit possimus dolorum velit ipsa deleniti! Perspiciatis sint
            ut porro neque laboriosam error officia. Illum recusandae aliquid
            saepe adipisci temporibus.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quod impedit possimus dolorum velit ipsa deleniti! Perspiciatis sint
            ut porro neque laboriosam error officia. Illum recusandae aliquid
            saepe adipisci temporibus.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quod impedit possimus dolorum velit ipsa deleniti! Perspiciatis sint
            ut porro neque laboriosam error officia. Illum recusandae aliquid
            saepe adipisci temporibus.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quod impedit possimus dolorum velit ipsa deleniti! Perspiciatis sint
            ut porro neque laboriosam error officia. Illum recusandae aliquid
            saepe adipisci temporibus.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quod impedit possimus dolorum velit ipsa deleniti! Perspiciatis sint
            ut porro neque laboriosam error officia. Illum recusandae aliquid
            saepe adipisci temporibus.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quod impedit possimus dolorum velit ipsa deleniti! Perspiciatis sint
            ut porro neque laboriosam error officia. Illum recusandae aliquid
            saepe adipisci temporibus.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quod impedit possimus dolorum velit ipsa deleniti! Perspiciatis sint
            ut porro neque laboriosam error officia. Illum recusandae aliquid
            saepe adipisci temporibus.
          </p>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quod impedit possimus dolorum velit ipsa deleniti! Perspiciatis sint
            ut porro neque laboriosam error officia. Illum recusandae aliquid
            saepe adipisci temporibus.
          </p>
        </main>
      </div>

      <footer className="flex w-screen justify-center border-t border-white/20 py-15 shrink-0">
        <a
          className="hover:text-violet-950 transition ease-linear"
          href="https://github.com/RaulMartinsantos"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
export default App;
