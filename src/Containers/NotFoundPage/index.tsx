import { useNavigate } from 'react-router-dom';
import { NavigateButton } from '../../components/Commons/NavigateButton';
import styles from './NotFoundPage.module.scss';
import { ReactComponent as Pic404 } from '../../assets/img/Pic404.svg';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const backToHome = () => { navigate('/'); };
  return (
    <div className={styles.wrapperNotFoundPage}>
      <div className={styles.notFoundPage}>
        <h1 className={styles.notFoundPageTitle}>404</h1>
        <p className={styles.notFoundPageSpan}>Oops.. Page Not Found</p>
        <NavigateButton onClick={backToHome} />
        <Pic404 className={styles.notFoundPagePic} />
      </div>
    </div>
  )
};

export default NotFoundPage;
