import React from 'react';
import PropTypes from 'prop-types';
import { Canvas} from '@react-three/fiber';
import { Box } from '../../common/Box/Box';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <Canvas
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
      <Box/>
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
