import SceneModel from "./SceneModel";

export default function App() {
  return (
    <div className="App">
      <SceneModel />
    </div>
  );
}

// import { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { Environment } from '@react-three/drei'


// export default function App() {
//   return (
//     <div className="App">
//       <Canvas>
//         <Suspense fallback={null}>
//           <SceneModel />
//           <Environment preset="sunset" background />
//         </Suspense>
//       </Canvas>
//     </div>
//   )
// }
