import { ChangeEvent, useEffect, useState } from 'react';
import { ForecastItem } from '../../components/ForecastItem';
import styles from './HomePage.module.scss';
import { ReactComponent as Pic } from '../../assets/cloudBig.svg';
import { Header } from '../../components/Commons/Header';
import { PictureCard } from '../../components/PictureCard';
import { SearchBox } from '../../components/Commons/SearchBox';
import { useGetCityQuery, useLazyGetCityWeatherQuery, useLazyGetForecastQuery } from '../../store/query/weatherApi';
import { CityCard } from '../../components/CityCard';
import { useDebounce } from '../../hooks/useDebounce';
import { Dropdown } from '../../components/Commons/Dropdown';
import { defaultCard } from '../../mock';
import { Navigation } from '../../components/Commons/Navigation';
import { Logo } from '../../components/Commons/Logo';

export const HomePage = () => {
  const [search, setSearch] = useState<string>('');
  const [dropdown, setDropdown] = useState(false);
  const undo = useDebounce(search);

  const { data, isError } = useGetCityQuery(undo, {
    skip: undo.length < 1,
  });

  const [fetchWeather, { data: weather, isError: isWeatherError }] = useLazyGetCityWeatherQuery();
  const [fetchForecast, { data: forecast, isError: isForecastError }] = useLazyGetForecastQuery();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    setDropdown(undo.length > 1 && data?.length! > 0)
  }, [undo, data])

  const clickHandler = (city: string) => {
    setSearch(city);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (cityname: string) => {
    if (!cityname) return
    void fetchWeather(cityname);
    void fetchForecast(cityname);
    setDropdown(false);
  };

  return (
    <>
      <div className={styles.homePageWrapper}>
        <div className={styles.headerWrapper}>
          <Header>
            <Navigation />
            <Logo />
          </Header>
          <div className={styles.searchBox}>
            <SearchBox
              search={search}
              onInputChange={onInputChange}
              onSubmit={onSubmit}
            />
            {dropdown && data?.map(item => <Dropdown city={item} onClick={clickHandler} key={item.id}/>)}
          </div>
        </div>
        { isError && <div className={styles.dataError}>
            <p className={styles.dataErrorText}>Something went wrong...</p>
          </div>
        }
        { isWeatherError && <div className={styles.weatherError}>
            <p className={styles.weatherErrorText}>Something went wrong with weather...</p>
          </div>
        }
        { isForecastError && <div className={styles.forecastError}>
            <p className={styles.forecastErrorText}>Something went wrong with forecast...</p>
          </div>
        }
        <div className={styles.weatherBlock}>
          <div className={styles.WrapperCards}>
            { weather ? <CityCard city={weather} key={weather.id}/> : <CityCard city={defaultCard} key={defaultCard.id}/>}
            <PictureCard />
          </div>
          <div className={styles.forecastBox}>
            <div className={styles.forecastTitle}>Forecast</div>
            <div className={styles.forecastList}>
              { forecast ? <ForecastItem forecast={forecast} key={forecast.city.id}/> : <div className={styles.defaultForecast}/>}
            </div>
          </div>
        </div>
        <Pic className={styles.picLeft} /><Pic className={styles.picRight} />
      </div>
    </>
  );
};
