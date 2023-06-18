import { useNavigate } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const backToHome = () => { navigate('/weather_cube/'); };
  return (
    <div className={styles.wrapperNotFoundPage}>
      <div className={styles.notFoundPage}>
        <button onClick={backToHome} className={styles.redirectButton}>Back To Home</button>
      </div>
    </div>
  )
};

export default NotFoundPage;
