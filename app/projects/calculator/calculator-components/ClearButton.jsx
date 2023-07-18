import { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import styles from './ClearButton.module.css';

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" className={styles.clear} onClick={handleClearValue}>
      C
    </button>
  );
};

export default ClearButton;
