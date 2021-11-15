import * as THREE from 'three';
import React from 'react';
import PropTypes from 'prop-types';
import { useLoader } from '@react-three/fiber';


const Component = ({args, position, image}) => {
  const texture = useLoader(THREE.TextureLoader, image);
  return (
    <mesh
      receiveShadow 
      position={position}
    >
      <sphereGeometry attach="geometry" args={args} />
      <meshPhysicalMaterial attach="material"  map={texture}/>
    </mesh>
  );
};

Component.propTypes = {
  image: PropTypes.string,
  args: PropTypes.array,
  position: PropTypes.array,
};

export {
  Component as Sun,
  Component as SunComponent,
};
