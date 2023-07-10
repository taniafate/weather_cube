import { NavLink } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';
import styles from './Navigation.module.scss';

const setActive = ({ isActive }: { isActive: boolean }): string => isActive ? styles.navigationActive : styles.navigation;

export const Navigation = () => {
  return (
    <>
      <nav className={styles.navigationBlock}>
        <ul>
          <NavLink to={routes.HOME} className={setActive}>Home</NavLink>
          <NavLink to={routes.ABOUT} className={setActive}>About</NavLink>
        </ul>
      </nav>
    </>
  )
};
