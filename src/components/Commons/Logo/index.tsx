import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logoName}>WEATHER.CUBE</span>
    </div>
  );
};
