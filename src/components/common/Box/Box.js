import * as THREE from 'three';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { useSpring, animated } from '@react-spring/three';
import { useLoader } from '@react-three/fiber';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Box.module.scss';

const Component = ({args, position, image, redirect}) => {
  const texture = useLoader(THREE.TextureLoader, image);
  const [hovered, setHovered] = useState(false);
  //const [active, setActive] = useState(false);
  const props = useSpring({
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  return (
    <animated.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={redirect}
      castShadow
      scale={props.scale}
      position={position}
      className={styles.pointer}
    >
      <sphereGeometry attach="geometry" args={args} />
      <animated.meshPhysicalMaterial attach="material"  map={texture}/>
    </animated.mesh>
  );
};

Component.propTypes = {
  image: PropTypes.string,
  color: PropTypes.string, 
  pointer: PropTypes.string, 
  scale: PropTypes.array,
  args: PropTypes.array,
  position: PropTypes.array,
  redirect: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Box,
  // Container as Box,
  Component as BoxComponent,
};
