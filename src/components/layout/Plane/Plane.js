import * as THREE from 'three';
import React from 'react';
import PropTypes from 'prop-types';
import { useLoader } from '@react-three/fiber';
import img from './ground.jpg';

//import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

//import styles from './Plane.module.scss';

const Component = () =>  {
  const texture = useLoader(THREE.TextureLoader, img);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Plane,
  // Container as Plane,
  Component as PlaneComponent,
};
