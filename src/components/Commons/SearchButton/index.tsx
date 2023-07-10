import styles from './SearchButton.module.scss';
import { ReactComponent as SearchIcon } from '../../../assets/icons/SearchIcon.svg';

type TSearchButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SearchButton = ({ onClick }: TSearchButtonProps) => {
  return (
  <button className = {styles.button} onClick={onClick}>
    <SearchIcon className={styles.searchIcon} />
  </button>
  )
};
