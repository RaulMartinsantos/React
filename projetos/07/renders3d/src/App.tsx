import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  const cubeRef = useRef();
  const [color, setColor] = useState("#8b5cf6");
  const [hovered, setHoverd] = useState(false);

  const colors = [
    "#8b5cf6",
    "#ef4444",
    "#22c55e",
    "#eab308",
    "#06b6d4",
    "#ec4899",
  ];

  function handleClick() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setColor(randomColor);
  }

  return (
    <mesh ref={cubeRef} onClick={handleClick}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} />
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
            >
              <ambientLight intensity={1} />
              <directionalLight position={[5, 5, 5]} intensity={2} />
              <Cube />
              <OrbitControls />
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
