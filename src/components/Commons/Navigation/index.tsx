import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';
import styles from './Navigation.module.scss';

export const NavigationHome = () => {
  return (
    <nav className={styles.navigationBlock}>
      <ul>
        <Link to={routes.HOME} className={styles.navigationS}>Home</Link>
        <Link to={routes.FAVOURITES} className={styles.navigation}>Favourites</Link>
      </ul>
    </nav>
  )
}

export const NavigationFav = () => {
  return (
    <nav className={styles.navigationBlock}>
      <ul>
        <Link to={routes.HOME} className={styles.navigation}>Home</Link>
        <Link to={routes.FAVOURITES} className={styles.navigationS}>Favourites</Link>
      </ul>
    </nav>
  )
}
