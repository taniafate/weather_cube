import styles from './CityCardSkeletonDetails.module.scss';
import { ReactComponent as Humidity } from '../../assets/icons/Humidity.svg';
import { ReactComponent as Pressure } from '../../assets/icons/Pressure.svg';
import { ReactComponent as Wind } from '../../assets/icons/Wind.svg';

type TSkeletonProps = {
  icon: 'wind' | 'humidity' | 'pressure'
  info: string | JSX.Element
}

const icons = {
  wind: Wind,
  humidity: Humidity,
  pressure: Pressure,
}

export const CityCardSkeletonDetails = ({ icon, info }: TSkeletonProps) => {
  const Icon = icons[icon];
  return (
    <div className={styles.skeleton}>
      <Icon className={styles.skeletonIcon} />
      <div className={styles.skeletonInfo}>{info}</div>
    </div>
  );
};
