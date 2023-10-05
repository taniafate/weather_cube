import { Header } from '../../components/Commons/Header';
import { Logo } from '../../components/Commons/Logo';
import { Navigation } from '../../components/Commons/Navigation';
import { SocialMedia } from '../../components/Commons/SocialMedia';
import styles from './AboutPage.module.scss';
import { ReactComponent as PicUpAbout } from '../../assets/img/PicUpAbout.svg';
import { ReactComponent as PicDownAbout } from '../../assets/img/PicDownAbout.svg';

const AboutPage = () => {
  return (
    <div className={styles.aboutPageWrapper}>
      <div className={styles.headerWrapper}>
        <Header>
          <Navigation />
          <Logo />
        </Header>
        <SocialMedia />
      </div>
      <div className={styles.aboutBlock}>
        <div className={styles.aboutBlockText}>
          <p className={styles.aboutBlockParts}>The application WEATHER.CUBE was created as part of a diploma project on the Professional Web Development course (advanced level).</p>
          <p className={styles.aboutBlockParts}>The type of stack used in this application consists of frontend technology:</p>
          <p className={styles.aboutBlockParts}>React, React Router DOM, Redux Toolkit (RTK Query), OpenWeatherMap API, TypeScript, SCSS.</p>
          <p className={styles.aboutBlockParts}>The design of the application was also developed by the author of this project using Figma
            (photo by Anthony DELANOIX on Unsplash).
          </p>
          <p className={styles.aboutBlockDetails}>Weather data provided by openweathermap.org</p>
        </div>
        <PicUpAbout className={styles.aboutBlockPicUp} />
        <PicDownAbout className={styles.aboutBlockPicDown} />
      </div>
    </div>
  )
};

export default AboutPage;
