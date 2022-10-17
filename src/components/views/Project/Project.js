import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getProjectDetails } from '../../../redux/actions/projectActions';
import {Button } from '../../common/Button/Button';


import styles from './Project.module.scss';

const Component = ({className, getProject, project, loading, error}) => {
  const [show, setShow] = useState(false);
  const effects = [styles.project];
  useEffect(() => {
    window.scrollTo(0,0);
    setTimeout(() => setShow(true), 500);
    getProject();
  }, [getProject]);
  if(show) {
    effects.push(styles.show);
  }
  return (
    <div className={clsx(className, styles.root)}>
      {(loading || loading === undefined) ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className={effects.join(' ')}>
          <div className={styles.projectLeft}>
            <h1 className={styles.titleProject}>{project.title}</h1>
          </div>
          <div className={styles.projectRight}>
            <div className={styles.content}>
              <h2 className={styles.stackProjects}>Stack: {project.stack}</h2>
            </div>
            <div className={styles.links}>
              <Button src={project.demo} title="Live" className={styles.btnProjects}/>          
              <Button src={project.github} title="GitHub" className={styles.btnProjects}/> 
            </div>         
          </div>
        </div>
      )}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  getProject: PropTypes.func, 
  project: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

const mapStateToProps = state => ({
  project: state.projectRequest.project,
  loading: state.projectRequest.loading,
  error: state.projectRequest.error,
});

const mapDispatchToProps = (dispatch, props) => ({
  getProject: () => dispatch(getProjectDetails(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Project,
  Component as ProjectComponent,
};