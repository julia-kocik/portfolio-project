import * as THREE from 'three';
import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from '@react-spring/three';
import { useFrame, useLoader } from '@react-three/fiber';


const Component = ({args, position, image, redirect}) => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y -= 0.01));
  const texture = useLoader(THREE.TextureLoader, image);
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });
  return (
    <animated.mesh
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={redirect}
      receiveShadow 
      scale={props.scale}
      position={position}
    >
      <sphereGeometry attach="geometry" args={args} />
      <animated.meshPhysicalMaterial attach="material"  map={texture}/>
    </animated.mesh>
  );
};

Component.propTypes = {
  image: PropTypes.string,
  pointer: PropTypes.string, 
  scale: PropTypes.array,
  args: PropTypes.array,
  position: PropTypes.array,
  redirect: PropTypes.func,
};

export {
  Component as Box,
  Component as BoxComponent,
};
