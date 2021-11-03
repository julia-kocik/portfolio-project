import React, {Suspense} from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Box } from '../../common/Box/Box';
//import { Plane } from '../../layout/Plane/Plane';
//import {Link} from 'react-router-dom';
import mercury from '../../../images/mercury.jpg';
import venus from '../../../images/venus.jpg';
import globe from '../../../images/globe.jpg';
import mars from '../../../images/mars.jpg';
import jupiter from '../../../images/jupiter.jpg';
import saturn from '../../../images/saturn.jpg';
import uran from '../../../images/uran.jpg';
import neptun from '../../../images/neptun.jpg';



import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';
/*
  const [position, setPosition] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPosition(true);
    }, 200);
  }, []);
*/

const Component = ({className}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <Canvas
        camera={{ position: [-3, 4, 10], fov: 60}}
        className={styles.canvas}
      >
        <ambientLight intensity={1} />
        <directionalLight   
          position={[-50, 50, 0]} 
          intensity={7} 
          castShadow 
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}/>
        <spotLight position={[-50, 50, 0]} penumbra={1} castShadow />
        <OrbitControls autoRotate autoRotateSpeed={0.3} enablePan={true} enableZoom={true} enableRotate={true} />
        <Suspense fallback={null}>
          <Box args={[0.5, 100, 100]} position={[-10, -3, 0]} image={mercury} redirect={() => window.appHistory.push('/project')}/>
        </Suspense>
        <Suspense fallback={null}>
          <Box args={[0.4, 100, 100]} position={[-6, 1, 0]} image={venus}/>
        </Suspense>
        <Suspense fallback={null}>
          <Box args={[0.7, 100, 100]} position={[-1.5, 0, 4]} image={globe}/>
        </Suspense>
        <Suspense fallback={null}>
          <Box args={[0.7, 100, 100]} position={[0, 0, -5]} image={mars}/>
        </Suspense>
        <Suspense fallback={null}>
          <Box args={[4, 100, 100]} position={[20, 1, -30]} image={jupiter}/>
        </Suspense>
        <Suspense fallback={null}>
          <Box args={[1, 100, 100]} position={[15, -4, 0]} image={saturn}/>
        </Suspense>
        <Suspense fallback={null}>
          <Box args={[1, 100, 100]} position={[22, 1, -3]} image={uran}/>
        </Suspense>
        <Suspense fallback={null}>
          <Box args={[1, 100, 100]} position={[26, 5, -3]} image={neptun}/>
        </Suspense>
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={6000} // Amount of stars (default=5000)
          factor={5} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        />
        {/*
        <Suspense fallback={null}>
          <Plane/>
        </Suspense>
        */}
      </Canvas>
    </div>
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
