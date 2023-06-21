import { useNavigate } from 'react-router-dom';
import { NavigateButton } from '../../components/Commons/NavigateButton';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const backToHome = () => { navigate('/'); };
  return (
    <div className={styles.wrapperNotFoundPage}>
      <div className={styles.notFoundPage}>
        <NavigateButton onClick={backToHome} />
      </div>
    </div>
  )
};

export default NotFoundPage;
