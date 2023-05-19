import React from 'react';
import { cityCardType } from '../../types';
import styles from './CityCard.module.scss';

export const CityCard = ({ fd }: { fd: cityCardType }) => {
  return (
    <div className={styles.cityCard}>
      <div className={styles.cityCardTitle}>
        <span>{fd.name}, {fd.sys.country}</span>
        <span>DataTime</span>
      </div>
      <div className={styles.cityCardTemp}>
        <div><span>{fd.main.temp}<sup>o</sup></span></div>
        <div><span>{fd.main.feels_like}<sup>o</sup></span></div>
      </div>
      <div className={styles.cityCardDetails}>
        <div>{fd.wind.speed}, {fd.wind.deg}</div>
        <div>{fd.main.humidity}</div>
        <div>{fd.main.pressure}</div>
      </div>
    </div>
  )
};
