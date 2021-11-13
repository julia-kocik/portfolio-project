import * as THREE from 'three';
import React from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import {useLoader } from '@react-three/fiber';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

//import styles from './Box.module.scss';

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
  color: PropTypes.string, 
  pointer: PropTypes.string, 
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
  Component as Ring,
  // Container as Sun,
  Component as RingComponent,
};
