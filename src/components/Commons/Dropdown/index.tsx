import { TCityType } from '../../../utils/types';
import styles from './Dropdown.module.scss';

type TDropdownProps = {
  city: TCityType;
  onClick: (name: string) => void;
}

export const Dropdown = ({ onClick, city }: TDropdownProps) => {
  return (
    <ul className={styles.searchDropdown}>
      <li className={styles.searchDropdownItem} key={city.id}>
        <button
          className={styles.searchDropdownButton}
          onClick={() => { onClick(city.name); }}
      >
          {city.name}, {city.country}
        </button>
      </li>
    </ul>
  )
};
