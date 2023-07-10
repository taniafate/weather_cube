import styles from './DataError.module.scss';

export const DataError = () => {
  return (
    <div className={styles.dataError}>
      <p className={styles.dataErrorText}>Something went wrong...</p>
    </div>
  );
};
