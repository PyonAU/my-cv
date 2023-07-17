import styles from './FunctionButtons.module.css';

const FunctionButtons = ({ buttonValue }) => {
  return (
    <button type="button" className={styles.operator}>
      {buttonValue}
    </button>
  );
};

export default FunctionButtons;
