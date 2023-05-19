import React from 'react';
import { NavigationFav, NavigationHome } from '../Navigation';
import styles from './Header.module.scss';

export const HeaderHome = () => {
  return (
    <header className={styles.header}>
      <NavigationHome />
      <div className={styles.logo}><span className={styles.logoName}>WEATHER.CUBE</span></div>
    </header>
  );
};

export const HeaderFav = () => {
  return (
    <header className={styles.header}>
      <NavigationFav />
      <div className={styles.logo}><span className={styles.logoName}>WEATHER.CUBE</span></div>
    </header>
  );
};
