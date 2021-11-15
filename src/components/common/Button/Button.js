import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';


export const Button = ({src, title}) => <a className={styles.root} href={src} target='_blank'>{title}</a>;


Button.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};
