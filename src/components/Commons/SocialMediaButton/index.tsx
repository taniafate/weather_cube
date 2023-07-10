import styles from './SocialMediaButton.module.scss';
import { ReactComponent as SocialMediaIcon } from '../../../assets/icons/Open.svg';

type TSocialMediaButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SocialMediaButton = ({ onClick }: TSocialMediaButtonProps) => {
  return (
  <button className = {styles.mediaButton} onClick={onClick}>
    <span className={styles.socialMediaTitle}>Github</span>
    <SocialMediaIcon className={styles.mediaIcon} />
  </button>
  )
};
