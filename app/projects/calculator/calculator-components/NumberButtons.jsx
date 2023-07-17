import styles from './NumberButtons.module.css';

const NumberButtons = ({ buttonValue }) => {
  return (
    <>
      <button className={styles.calculatorButton}>{buttonValue}</button>
    </>
  );
};

export default NumberButtons;
