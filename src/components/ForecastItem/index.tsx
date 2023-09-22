import { getHourNumber, getMonthName, getWeeklyDay } from '../../utils/helpers';
import { TForecastType, TForecastItemType } from '../../utils/types';
import styles from './ForecastItem.module.scss';
import { motion } from "framer-motion";

export const ForecastItem = ({ forecast }: { forecast: TForecastType }) => {
  const forecastList = forecast.list.slice(0, 5);
  return (
    <>
      { forecastList.map((day: TForecastItemType, index: number) => (
      <motion.div
        key={index}
        className={styles.forecastItem}
        whileHover={{
          scale: 1.06,
          transition: {
            type: "spring",
            duration: 0.2
          },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        <div className={styles.forecastItemDay}>{`${new Date(day.dt * 1000).getDate()} ${getMonthName(new Date(day.dt * 1000).getMonth())}`}</div>
        <div className={styles.forecastItemDate}>{getWeeklyDay(new Date(day.dt * 1000).getDay())}</div>
        <div className={styles.forecastItemTemp}>{Math.round(day.main.temp)}<sup>°</sup>C</div>
        <div className={styles.forecastItemTime}>{`${getHourNumber(new Date(day.dt * 1000).getHours())}:${new Date(day.dt * 1000).getMinutes()}0`}</div>
      </motion.div>
      ))}
    </>
  );
};
