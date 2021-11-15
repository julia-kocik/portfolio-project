import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Footer.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.mediaBox}>
      <span><a href='https://github.com/julia-kocik' target='_blank'>GitHub</a></span>
      <span><a href='https://www.linkedin.com/in/julia-kocik-942221216/' target='_blank'>LinkedIn</a></span>
    </div>
    <div className={styles.spanBox}>
      <span>- move around</span>
      <span>- zoom in/out</span>
      <span>- pick a planet</span>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Footer,
  Component as FooterComponent,
};
