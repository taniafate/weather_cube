import styles from './SocialMediaButton.module.scss';

type TSocialMediaButtonProps = {
  children: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SocialMediaButton = ({ children, onClick }: TSocialMediaButtonProps) => {
  return (
  <button className = {styles.mediaButton} onClick={onClick}>
    <div className={styles.socialMediaTitle}>Github</div>
    {children}
  </button>
  )
};
