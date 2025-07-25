/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Mathew_Lee_Griffiths1 (https://sketchfab.com/Mathew_Lee_Griffiths1)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/pc-keyboard-e1f5e43da2f047369b303eec3e245c02
Title: PC keyboard
*/

import { useGLTF } from "@react-three/drei";

const Keyboard = (props) => {
  const { nodes, materials } = useGLTF("/models/keyboard.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.57}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[-6.299, 7.771, 2.176]}
            rotation={[1.571, 0, 2.233]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.text001__0.geometry}
              material={materials.under_key_light__0}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.text001__0_1.geometry}
              material={materials.under_key_light__0}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keyboard001_Plastic_01_0.geometry}
            material={materials.Plastic_01}
            position={[-8.695, 7.092, 2.759]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.keys002_Plastic_Base_01_0.geometry}
            material={materials.Plastic_Base_01}
            position={[-8.551, 7.443, 2.754]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.under_key_light__0.geometry}
            material={materials.under_key_light__0}
            position={[-8.625, 6.993, 2.758]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane__0.geometry}
            material={materials.under_key_light__0}
            position={[4.239, 7.114, -0.556]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/keyboard.glb");

export default Keyboard;
