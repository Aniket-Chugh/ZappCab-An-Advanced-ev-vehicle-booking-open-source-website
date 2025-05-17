// ModelViewer.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('/model.glb');
  return <primitive object={gltf.scene} scale={1.5} />;
};

const ModelViewer = () => {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 90 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
