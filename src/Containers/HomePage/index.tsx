import React, { useEffect, useState } from 'react';
import { ForecastList } from '../../components/ForecastList';
import styles from './HomePage.module.scss';
import { ReactComponent as PicSmall } from '../../assets/cloudSmall.svg';
import { ReactComponent as PicBig } from '../../assets/cloudBig.svg';
import { HeaderHome } from '../../components/Commons/Header';
import { PictureCard } from '../../components/PictureCard';
import { useDebounce } from '../../hooks/debounce';
import { useGetCityQuery } from '../../store/query/weatherApi';
import { Button } from '../../components/Commons/Button';
import { ReactComponent as SearchIcon } from '../../assets/SearchIcon.svg';

export const HomePage = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const undo = useDebounce(search);

  const { data, isLoading, isError } = useGetCityQuery(undo, {
    skip: undo.length < 3,
  });

  useEffect(() => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    setDropdown(undo.length > 3 && data?.length! > 0)
  }, [undo, data])

  const clickHandler = (city: string) => {
    setSearch(city);
    setDropdown(false);
  };
  return (
    <>
    <div className={styles.homePageWrapper}>
      <HeaderHome />
        <div className={styles.weatherBlock}>
          <div className={styles.WrapperCards}>
            <PictureCard />
            {isError && <p>Something is wrong</p>}
      {isLoading && <p>Loading...</p>}
      <div className={styles.wrapperSearch}>
        <form className={styles.searchBox}>
          <input
          type='text'
          autoFocus={true}
          className={styles.searchInput}
          placeholder="Search for a city..."
          value={search}
          onChange={e => { setSearch(e.target.value); }}
          />
          <Button><SearchIcon className={styles.searchIcon} /></Button>
        </form>
        {dropdown && <ul className={styles.searchDropdown}>
          { isLoading && <p className={styles.searchDropdownLoad}>Loading...</p> }
          { data?.map(city => (
            <li
              key={city.id}
              onClick={() => { clickHandler(city.name) }}
              className={styles.searchDropdownItem}
            >{ city.name }, { city.country }</li>
          )) }
        </ul> }
      </div>
          </div>
          <ForecastList />
        </div>
      </div>
      <PicSmall className={styles.picSmall}/>
      <PicBig className={styles.picBig}/>
    </>
  );
};
