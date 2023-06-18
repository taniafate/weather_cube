import { ReactNode } from 'react';
import styles from './Header.module.scss';

type THeaderProps = {
  children: ReactNode;
}

export const Header = ({ children }: THeaderProps) => {
  return (
    <header className={styles.header}>
      { children }
    </header>
  );
};
