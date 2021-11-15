import * as THREE from 'three';
import React from 'react';
import PropTypes from 'prop-types';
import {useLoader } from '@react-three/fiber';


const Component = ({args, position, image}) => {
  const texture = useLoader(THREE.TextureLoader, image);
  return (
    <mesh
      receiveShadow 
      rotation={[1, 0, 0]}
      position={position}
    >
      <ringGeometry attach="geometry" args={args} />
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
  Component as Ring,
  Component as RingComponent,
};
