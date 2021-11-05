import React, {Suspense, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Box } from '../../common/Box/Box';
import { Sun } from '../../common/Sun/Sun';
//import { Plane } from '../../layout/Plane/Plane';
import { getProjects } from '../../../redux/actions/projectActions';
import { connect } from 'react-redux';

import clsx from 'clsx';
import styles from './Homepage.module.scss';

/*
  const [position, setPosition] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPosition(true);
    }, 200);
  }, []);
*/

import mercury from '../../../images/mercury.jpg';
import venus from '../../../images/venus.jpg';
import globe from '../../../images/globe.jpg';
import mars from '../../../images/mars.jpg';
import jupiter from '../../../images/jupiter.jpg';
import saturn from '../../../images/saturn.jpg';
import uran from '../../../images/uran.jpg';
import neptun from '../../../images/neptun.jpg';


const Component = ({className, getProjects, projects, loading, error}) => {
  useEffect(() => {
    window.scrollTo(0,0);
    getProjects();
  }, [getProjects]);
  return (
    <div className={clsx(className, styles.root)}>
      {(loading || loading === undefined) ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Canvas
          camera={{ position: [0, 0, 10]}}
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
          <OrbitControls autoRotate autoRotateSpeed={0.4} enablePan={true} enableZoom={true} enableRotate={true} />
          <Suspense fallback={null}>
            <Sun args={[300, 100, 100]} position={[-700, -1, 5]} image='https://i.postimg.cc/pTPs2p2L/sun.jpg'/>
          </Suspense>
          {/*
          <Suspense fallback={null}>
            {projects.map((item) => (
              <Box key={item._id} args={item.args} position={item.position} image={item.image} redirect={() => window.appHistory.push(`/project/${item._id}`)}/>
            ))}
          </Suspense>
            */}
          <Suspense fallback={null}>
            <Box args={[0.3, 100, 100]} position={[-7, -1, 5]} image={mercury} redirect={() => window.appHistory.push('/project')}/>
          </Suspense>
          <Suspense fallback={null}>
            <Box args={[0.3, 100, 100]} position={[-5, 0, 5]} image={venus}/>
          </Suspense>
          <Suspense fallback={null}>
            <Box args={[0.6, 100, 100]} position={[-2, -1, 5]} image={globe}/>
          </Suspense>
          <Suspense fallback={null}>
            <Box args={[0.5, 100, 100]} position={[0, 1, 5]} image={mars}/>
          </Suspense>
          <Suspense fallback={null}>
            <Box args={[1.2, 100, 100]} position={[3, 2, 3]} image={jupiter}/>
          </Suspense>
          <Suspense fallback={null}>
            <Box args={[0.7, 100, 100]} position={[9, -1, 5]} image={saturn}/>
          </Suspense>
          <Suspense fallback={null}>
            <Box args={[1, 100, 100]} position={[14, 4, 3]} image={uran}/>
          </Suspense>
          <Suspense fallback={null}>
            <Box args={[1, 100, 100]} position={[16, 6, 5]} image={neptun}/>
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
      )};
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  getProjects: PropTypes.func, 
  projects: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

const mapStateToProps = state => ({
  loading: state.projectsRequest.loading,
  error: state.projectsRequest.error,
  projects: state.projectsRequest.projects,
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
