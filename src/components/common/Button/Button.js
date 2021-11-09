import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.module.scss';

export const Button = ({className, src, title}) => <a className={clsx(className, styles.root, styles.btn)} href={src}>{title}</a>;

Component.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
};
