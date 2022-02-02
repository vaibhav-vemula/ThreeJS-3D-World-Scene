import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Text,
  Html,
  Billboard,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef, useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
// import { random } from "lodash";

const CloudModel = () => {
  const [model, set] = useState();
  useEffect(() => void new GLTFLoader().load("./assets/cloud.glb", set), []);

  // const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  // var position = [random(-70, 70), 50, random(20, 100)];
  const position = [40, 40, -40];
  return model ? (
    <primitive object={model.scene} scale={0.3} position={position} />
  ) : null;
};
const CloudModel2 = () => {
  const [model, set] = useState();
  useEffect(() => void new GLTFLoader().load("./assets/cloud.glb", set), []);

  // const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  // var position = [random(-70, 70), 50, random(20, 100)];
  const position = [-40, 35, -40];
  return model ? (
    <primitive object={model.scene} scale={0.3} position={position} />
  ) : null;
};
const CloudModel3 = () => {
  const [model, set] = useState();
  useEffect(() => void new GLTFLoader().load("./assets/cloud.glb", set), []);
  // const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  // var position = [random(-70, 70), 50, random(20, 100)];
  const position = [-90, 25, 10];
  return model ? (
    <primitive object={model.scene} scale={0.3} position={position} />
  ) : null;
};
const CloudModel4 = () => {
  const [model, set] = useState();
  useEffect(() => void new GLTFLoader().load("./assets/cloud.glb", set), []);

  // const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  // var position = [random(-70, 70), 50, random(20, 100)];
  const position = [-50, 35, 80];
  return model ? (
    <primitive object={model.scene} scale={0.3} position={position} />
  ) : null;
};

const CloudModel5 = () => {
  const [model, set] = useState();
  useEffect(() => void new GLTFLoader().load("./assets/cloud.glb", set), []);

  // const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  // var position = [random(-70, 70), 50, random(20, 100)];
  const position = [60, 35, 80];
  return model ? (
    <primitive object={model.scene} scale={0.3} position={position} />
  ) : null;
};

// function Marker({ children, ...props }) {
//   // This holds the visible state
//   const [hidden, set] = useState();
//   return (
//     <Html
//       transform
//       occlude
//       // The <Html> component can tell us when something is occluded (or not)
//       onOcclude={set}
//       // We just interpolate the visible state into css opacity and transforms
//       style={{
//         transition: "all 0.2s",
//         opacity: hidden ? 0 : 1,
//         transform: `scale(${hidden ? 1 : 1})`,
//       }}
//       {...props}
//     >
//       {children}
//     </Html>
//   );
// }
function Model(props) {
  const [dod, setDod] = useState(false);

  const group = useRef();
  const { nodes, materials } = useGLTF("./assets/model.glb");
  useFrame(() => {
    group.current.rotation.y += 0.003;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <CloudModel />
      <CloudModel2 />
      <CloudModel3 />
      <CloudModel4 />
      <CloudModel5 />
      <mesh
        geometry={nodes.City_building_004.geometry}
        material={nodes.City_building_004.material}
      />
      <mesh
        onClick={(e) => {
          console.log("Building 1");
        }}
        onPointerEnter={(e) => {
          document.body.style.cursor = 'pointer'
          setDod(true);
        }}
        onPointerLeave={(e) => {
          setDod(false);
        }}
        geometry={nodes.City_building_001.geometry}
        material={nodes.City_building_001.material}
      >
        {/* <Billboard
            follow={true}
            lockX={false}
            lockY={false}
            lockZ={false} 
          >
            <Text fontSize={5}>I'm a billboard</Text>
          </Billboard>
          <Marker rotation={[0, Math.PI / 2, 0]} position={[0, 10, 0]}>
            
            <FaMapMarkerAlt style={{ color: 'orange' }} />
          </Marker> */}
      </mesh>

      <mesh
        geometry={nodes.City_building_007.geometry}
        material={nodes.City_building_007.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_008.geometry}
        material={nodes.City_building_008.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.Line002.geometry}
        material={materials["20___Defaulta"]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials["20___Default"]}
      >
        {dod ? (
          <meshBasicMaterial color="rgb(60, 60, 255)" />
        ) : (
          <meshBasicMaterial color="rgb(50,255,0)" />
        )}
      </mesh>
      <mesh
        geometry={nodes.City_building_010.geometry}
        material={nodes.City_building_010.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_011.geometry}
        material={nodes.City_building_011.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_013.geometry}
        material={nodes.City_building_013.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_014.geometry}
        material={nodes.City_building_014.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_016.geometry}
        material={nodes.City_building_016.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_017.geometry}
        material={nodes.City_building_017.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_022.geometry}
        material={nodes.City_building_022.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_023.geometry}
        material={nodes.City_building_023.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_024.geometry}
        material={nodes.City_building_024.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        geometry={nodes.City_building_026.geometry}
        material={nodes.City_building_026.material}
      >
        <meshBasicMaterial color="rgb(217, 217, 217)" />
      </mesh>
      <mesh
        onPointerEnter={(e) => {
          document.body.style.cursor = 'pointer'
          setDod(true);
        }}
        onPointerLeave={(e) => {
          setDod(false);
        }}
        onClick={(e) => {
          console.log("Building 2");
        }}
        geometry={nodes.City_building_028.geometry}
        material={nodes.City_building_028.material}
      />
      <mesh
        geometry={nodes.Object010.geometry}
        material={materials["21___Default"]}
      />
      <mesh
        onClick={(e) => {
          console.log("Building 3");
        }}
        onPointerEnter={(e) => {
          document.body.style.cursor = 'pointer'
          setDod(true);
        }}
        onPointerLeave={(e) => {
          setDod(false);
        }}
        geometry={nodes.City_building_030.geometry}
        material={nodes.City_building_030.material}
      />
      <mesh
        onClick={(e) => {
          console.log("Building 4");
        }}
        onPointerEnter={(e) => {
          document.body.style.cursor = 'pointer'
          setDod(true);
        }}
        onPointerLeave={(e) => {
          setDod(false);
        }}
        geometry={nodes.City_building_031.geometry}
        material={nodes.City_building_031.material}
      />
      <mesh
        geometry={nodes.City_building_032.geometry}
        material={nodes.City_building_032.material}
      />
      <mesh
        geometry={nodes.City_building_033.geometry}
        material={nodes.City_building_033.material}
      />
      <mesh
        geometry={nodes.City_building_034.geometry}
        material={nodes.City_building_034.material}
      />
      <mesh
        geometry={nodes.City_building_035.geometry}
        material={nodes.City_building_035.material}
      />
      <mesh
        geometry={nodes.City_building_036.geometry}
        material={nodes.City_building_036.material}
      />
      <mesh
        geometry={nodes.City_building_037.geometry}
        material={nodes.City_building_037.material}
      />
      <mesh
        geometry={nodes.City_building_038.geometry}
        material={nodes.City_building_038.material}
      />
      <mesh
        onClick={(e) => {
          console.log("Building 3");
        }}
        onPointerEnter={(e) => {
          document.body.style.cursor = 'pointer'
          setDod(true);
        }}
        onPointerLeave={(e) => {
          setDod(false);
        }}
        geometry={nodes.City_building_039.geometry}
        material={nodes.City_building_039.material}
      />
      <mesh
        onClick={(e) => {
          console.log("Building 4");
        }}
        onPointerEnter={(e) => {
          document.body.style.cursor = 'pointer'
          setDod(true);
        }}
        onPointerLeave={(e) => {
          setDod(false);
        }}
        geometry={nodes.City_building_040.geometry}
        material={nodes.City_building_040.material}
      />
      <mesh
        onClick={(e) => {
          console.log("Building 5");
        }}
        onPointerEnter={(e) => {
          document.body.style.cursor = 'pointer'
          setDod(true);
        }}
        onPointerLeave={(e) => {
          setDod(false);
        }}
        geometry={nodes.City_building_041.geometry}
        material={nodes.City_building_041.material}
      />
    </group>
  );
}

export default function SceneModel() {
  // const n = 5;
  return (
    <Canvas
      camera={{ position: [60, 50, 30] }}
      rotation={[0, Math.PI, Math.PI]}
    >
      <ambientLight intensity={1.2} />
      <Suspense fallback={null}>
        <group>
          <Model />
        </group>
        <OrbitControls
          minDistance={40}
          maxDistance={150}
          // enableRotate={true}
          maxPolarAngle={Math.PI / 2.5}
          minPolarAngle={Math.PI / 6}
        />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload("./assets/model.glb");
