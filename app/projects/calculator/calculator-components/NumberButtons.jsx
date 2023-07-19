import { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import styles from './NumberButtons.module.css';

const NumberButtons = ({ buttonValue }) => {
  const { handleDisplayValue } = useContext(NumberContext);
  return (
    <>
      <button
        className={styles.calculatorButton}
        onClick={() => handleDisplayValue(buttonValue)}
      >
        {buttonValue}
      </button>
    </>
  );
};

export default NumberButtons;
