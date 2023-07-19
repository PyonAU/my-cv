import { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { IconButton } from '@mui/material';
import { ManageHistory } from '@mui/icons-material';
import styles from './Display.module.css';

const Display = () => {
  const { number, storedNumber } = useContext(NumberContext);
  return (
    <div className={styles.calculatorDisplay}>
      <div className={styles.historyContainer}>
        <IconButton title="history">
          <ManageHistory fontSize="small" style={{ color: 'white' }} />
        </IconButton>
      </div>
      <h1 className={styles.displayNumber}>
        {!number && !storedNumber ? '0' : number || storedNumber}
      </h1>
    </div>
  );
};

export default Display;
