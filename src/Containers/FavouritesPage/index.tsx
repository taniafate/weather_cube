import React from 'react';
import { HeaderFav } from '../../components/Commons/Header';
import styles from './FavouritesPage.module.scss';

export const FavouritesPage = () => {
  return (
    <div className={styles.favouritesPageWrapper}>
      <HeaderFav />
      <div className={styles.favBlock}></div>
    </div>
  )
};
