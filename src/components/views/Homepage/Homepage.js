import React, {Suspense, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Box } from '../../common/Box/Box';
import { Sun } from '../../common/Sun/Sun';
import { Ring} from '../../common/Ring/Ring';
import { getProjects } from '../../../redux/actions/projectActions';
import { connect } from 'react-redux';
import clsx from 'clsx';
import styles from './Homepage.module.scss';

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
            <Sun args={[500, 100, 100]} position={[-1000, -1, 5]} image='images/sun.jpg'/>
          </Suspense>
          <Suspense fallback={null}>
            <Ring args={[1, 2, 100]} position={[9, -1, 5]} image='images/neptune.jpg'/>
          </Suspense>
          <Suspense fallback={null}>
            {projects.map((item) => (
              <Box key={item._id} args={item.args} position={item.position} image={item.image} redirect={() => window.appHistory.push(`/project/${item._id}`)}/>
            ))}
          </Suspense>
          <Stars
            radius={400} 
            depth={100} 
            count={4000} 
            factor={15} 
            saturation={0.2} 
            fade 
          />
        </Canvas>
      )};
    </div>
  );
};

Component.propTypes = {
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
  Container as Homepage,
  Component as HomepageComponent,
};
