import { getHourNumber, getWindDirection } from '../../helpers';
import { TCityCardType } from '../../types';
import { CityCardSkeletonDetails } from '../CityCardSkeletonDetails';
import styles from './CityCard.module.scss';

export const CityCard = ({ city }: { city: TCityCardType }) => {
  return (
    <div className={styles.cityCard}>
      <div className={styles.cityCardHead}>
        <div className={styles.cityCardTitle}>
          <h2 className={styles.cityCardTitleName}>{city.name}</h2>
          <span className={styles.cityCardTitleCountry}>{city.sys.country}</span>
        </div>
        <div className={styles.cityCardTime}>
          {`${getHourNumber(new Date(city.dt * 1000).getHours())}:${getHourNumber(new Date(city.dt * 1000).getMinutes())}`}
        </div>
      </div>
      <div className={styles.cityCardTemp}>
        <div><h1 className={styles.cityCardTempMain}>{Math.round(city.main.temp)}<sup>°</sup>C</h1></div>
        <div className={styles.cityCardTempSec}><span>{`Feels like ${Math.round(city.main.feels_like)}`}<sup>°</sup>C</span></div>
      </div>
      <div className={styles.cityCardDetails}>
        <CityCardSkeletonDetails
          icon={'wind'}
          info={`${Math.round(city.wind.speed)} km/h,
            ${getWindDirection(Math.round(city.wind.deg))}`}
        />
        <CityCardSkeletonDetails
          icon={'humidity'}
          info={`${city.main.humidity} %`}
        />
        <CityCardSkeletonDetails
          icon={'pressure'}
          info={`${city.main.pressure} hPa`}
        />
      </div>
    </div>
  )
};
