import styles from './SkeletonDetails.module.scss';
import { ReactComponent as Humidity } from '../../assets/Humidity.svg';
import { ReactComponent as Pressure } from '../../assets/Pressure.svg';
import { ReactComponent as Wind } from '../../assets/Wind.svg';

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
