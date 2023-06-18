import { getHourNumber, getMonthName, getWeeklyDay } from '../../helpers';
import { TForecastType, TForecastItemType } from '../../types';
import styles from './ForecastItem.module.scss';

export const ForecastItem = ({ forecast }: { forecast: TForecastType }) => {
  const forecastList = forecast.list.slice(0, 5);
  return (
    <>
      { forecastList.map((day: TForecastItemType, index: number) => (
      <div key={index} className={styles.forecastItem}>
        <div className={styles.forecastItemDay}>{`${new Date(day.dt * 1000).getDate()} ${getMonthName(new Date(day.dt * 1000).getMonth())}`}</div>
        <div className={styles.forecastItemDate}>{getWeeklyDay(new Date(day.dt * 1000).getDay())}</div>
        <div className={styles.forecastItemTemp}>{Math.round(day.main.temp)}<sup>°</sup>C</div>
        <div className={styles.forecastItemFeels}>{`${getHourNumber(new Date(day.dt * 1000).getHours())}:${new Date(day.dt * 1000).getMinutes()}0`}</div>
      </div>
      ))}
    </>
  );
};
