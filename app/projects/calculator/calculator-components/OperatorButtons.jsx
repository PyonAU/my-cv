import { useContext } from 'react';
import { NumberContext } from './NumberProvider';

import styles from './OperatorButtons.module.css';

const OperatorButtons = ({ buttonValue }) => {
  const { handleOperators } = useContext(NumberContext);
  return (
    <button
      type="button"
      className={styles.operator}
      onClick={() => handleOperators(buttonValue)}
    >
      {buttonValue}
    </button>
  );
};

export default OperatorButtons;
