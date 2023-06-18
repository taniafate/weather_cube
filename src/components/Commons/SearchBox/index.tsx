import { ChangeEvent } from 'react';
import { SearchButton } from '../SearchButton';
import { ReactComponent as SearchIcon } from '../../../assets/SearchIcon.svg';
import styles from './SearchBox.module.scss';

export type TSearchProps = {
  search: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (text: string) => void;
};

type FormFields = {
  cityname: HTMLInputElement;
}

export const SearchBox = ({ search, onInputChange, onSubmit }: TSearchProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    event.stopPropagation();
    const text = event.currentTarget.cityname.value;

    if (text.trim()) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };
  return (
    <div className={styles.searchBox}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type='text'
          className={styles.searchInput}
          placeholder="Search for a city..."
          value={search}
          name='cityname'
          onChange={onInputChange}
        />
        <SearchButton><SearchIcon className={styles.searchIcon} /></SearchButton>
      </form>
    </div>
  )
};
