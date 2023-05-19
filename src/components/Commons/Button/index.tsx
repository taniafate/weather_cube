import React from 'react';
import styles from './Button.module.scss';

interface TProps {
  children: JSX.Element;
}

export const Button = ({ children }: TProps) => (
  <button className = {styles.button}>
    {children}
  </button>
);
