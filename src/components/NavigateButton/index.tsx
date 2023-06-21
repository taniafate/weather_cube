import styles from './NavigateButton.module.scss';

type TNavigateButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const NavigateButton = ({ onClick }: TNavigateButtonProps) => {
  return (
  <button className = {styles.navigateButton} onClick={onClick}>
    Back To Home
  </button>
  )
};
