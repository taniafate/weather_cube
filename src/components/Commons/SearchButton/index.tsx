import styles from './SearchButton.module.scss';

type TSearchButtonProps = {
  children: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const SearchButton = ({ children, onClick }: TSearchButtonProps) => {
  return (
  <button className = {styles.button} onClick={onClick}>
    {children}
  </button>
  )
};
