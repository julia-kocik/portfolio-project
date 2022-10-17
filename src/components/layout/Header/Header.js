import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.leftBox}>
      <h2>Junior JavaScript Developer</h2>
      <h2>Julia Kocik</h2>
    </div>
    <div className={styles.rightBox}>
      <Link to="/home" className={styles.link}>
        <FontAwesomeIcon className={styles.icon} icon={faHome} />
      </Link>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
