import React from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Box } from '../../common/Box/Box';
//import { Plane } from '../../layout/Plane/Plane';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <Canvas
      camera={{ position: [0, 3, 8] }}
      className={styles.canvas}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Box args={[1, 1, 1]} position={[0, 1, -5]}/>
      <Box args={[1, 1, 1]} position={[0, 1, 2]}/>
      <Box args={[1, 1, 1]} position={[-4, 1, 0]}/>
      <Box args={[1, 1, 1]} position={[4, 1, 0]}/>
      <Stars
        radius={100} // Radius of the inner sphere (default=100)
        depth={50} // Depth of area where stars should fit (default=50)
        count={5000} // Amount of stars (default=5000)
        factor={4} // Size factor (default=4)
        saturation={0} // Saturation 0-1 (default=0)
        fade // Faded dots (default=false)
      />
      {/*
      <Suspense fallback={null}>
        <Plane />
      </Suspense>
      */}
    </Canvas>
  </div>
);

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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
