import { IconButton } from '@mui/material';
import { ManageHistory } from '@mui/icons-material';
import styles from './Display.module.css';

const Display = () => {
  return (
    <div className={styles.calculatorDisplay}>
      <div className={styles.historyContainer}>
        <IconButton title="history">
          <ManageHistory fontSize="small" style={{ color: 'white' }} />
        </IconButton>
      </div>
      <h1 className={styles.displayNumber}>0</h1>
    </div>
  );
};

export default Display;
