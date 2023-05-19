import React from 'react';
import { Button } from '../Button';
import styles from './SearchBox.module.scss';
import { ReactComponent as SearchIcon } from '../../../assets/SearchIcon.svg';

export function SearchBox() {
  return (
      <form className={styles.searchBox}>
        <input />
        <Button><SearchIcon className={styles.searchIcon} /></Button>
      </form>
  )
}
