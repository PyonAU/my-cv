import styles from './OperatorButtons.module.css';

const OperatorButtons = ({ buttonValue }) => {
  return (
    <button type="button" className={styles.operator}>
      {buttonValue}
    </button>
  );
};

export default OperatorButtons;
