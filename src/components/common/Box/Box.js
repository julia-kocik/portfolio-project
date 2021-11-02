import React, {useState} from 'react';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
import { useSpring, animated } from '@react-spring/three';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

//import styles from './Box.module.scss';

const Component = ({args, position}) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'gray',
  });

  return (
    <animated.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      castShadow
      scale={props.scale}
      position={position}
    >
      <boxBufferGeometry attach="geometry" args={args} />
      <animated.meshPhysicalMaterial attach="material" color={props.color}/>
    </animated.mesh>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string, 
  scale: PropTypes.array,
  args: PropTypes.array,
  position: PropTypes.array,
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
