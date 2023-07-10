import { ChangeEvent } from 'react';
import { SearchButton } from '../SearchButton';
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
          placeholder='For example, Newtonhill'
          value={search}
          name='cityname'
          onChange={onInputChange}
          pattern='[a-zA-Z]+$'
        />
        <SearchButton />
      </form>
    </div>
  )
};
