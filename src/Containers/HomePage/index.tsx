import { ChangeEvent, useEffect, useState } from 'react';
import { ForecastItem } from '../../components/ForecastItem';
import styles from './HomePage.module.scss';
import { ReactComponent as Pic } from '../../assets/img/Pic.svg';
import { Header } from '../../components/Commons/Header';
import { PictureCard } from '../../components/PictureCard';
import { SearchBox } from '../../components/Commons/SearchBox';
import { useGetCityQuery, useLazyGetCityWeatherQuery, useLazyGetForecastQuery } from '../../store/query/weatherApi';
import { CityCard } from '../../components/CityCard';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { Dropdown } from '../../components/Commons/Dropdown';
import { defaultCard } from '../../utils/mock';
import { Navigation } from '../../components/Commons/Navigation';
import { Logo } from '../../components/Commons/Logo';
import { DataError } from '../../components/Commons/DataError';

const HomePage = () => {
  const [search, setSearch] = useState<string>('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);

  const { data, isError } = useGetCityQuery(debounced, {
    skip: debounced.length < 1,
    refetchOnFocus: true
  });

  const [fetchWeather, { data: weather }] = useLazyGetCityWeatherQuery();
  const [fetchForecast, { data: forecast }] = useLazyGetForecastQuery();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    setDropdown(debounced.length > 1 && data?.length! > 0)
  }, [debounced, data])

  const clickHandler = (city: string) => {
    setSearch(city);
    setDropdown(false);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.charAt(0).toUpperCase() + e.target.value.substring(1));
  };

  const onSubmit = (cityname: string) => {
    if (!cityname) return
    void fetchWeather(cityname);
    void fetchForecast(cityname);
  };

  return (
    <>
      <div className={styles.homePageWrapper}>
        <div className={styles.headerWrapper}>
          <Header>
            <Navigation />
            <Logo />
          </Header>
          <div className={styles.searchBlock}>
            <SearchBox
              search={search}
              onInputChange={onInputChange}
              onSubmit={onSubmit}
            />
            {dropdown && data?.map(item => <Dropdown city={item} onClick={clickHandler} key={item.id}/>)}
          </div>
        </div>
        { isError && <DataError /> }
        <div className={styles.weatherBlock}>
          <div className={styles.WrapperCards}>
            { weather ? <CityCard city={weather} key={weather.id}/> : <CityCard city={defaultCard} key={defaultCard.id}/>}
            <PictureCard />
          </div>
          <div className={styles.forecastBox}>
            <div className={styles.forecastTitle}>Forecast</div>
            <ul className={styles.forecastList}>
              { forecast ? <ForecastItem forecast={forecast} key={forecast.city.id}/> : <div className={styles.defaultForecast}/>}
            </ul>
          </div>
        </div>
        <Pic className={styles.picLeft} /><Pic className={styles.picRight} />
      </div>
    </>
  );
};

export default HomePage;
