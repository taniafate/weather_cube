import styles from './SocialMedia.module.scss';
import { ReactComponent as SocialMediaIcon } from '../../../assets/icons/Open.svg';
import { SocialMediaButton } from '../SocialMediaButton';

export const SocialMedia = () => {
  return (
    <div className={styles.media}>
      <a href='https://github.com/' target='_blank' className={styles.mediaLink} rel='noopener noreferrer'>
        <SocialMediaButton>
          <SocialMediaIcon />
        </SocialMediaButton>
      </a>
    </div>
  );
};
