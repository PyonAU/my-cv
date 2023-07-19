import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import styles from './HistoryDisplay.module.css';

const HistoryDisplay = ({ isClicked, visibility }) => {
  return (
    <>
      <div className={styles.historyDisplay} hidden={!isClicked}>
        <div className={styles.item}>
          <h5 className={styles.calculation}>
            1 + 2 =<span className={styles.result}>3</span>
          </h5>
        </div>
      </div>

      {/* Delete History */}
      <div className={styles.historyFooter}>
        <IconButton title="delete" className={styles.deleteIcon}>
          <Delete
            fontSize="large"
            sx={{ color: 'rgb(90, 83, 92)', visibility: visibility }}
          />
        </IconButton>
      </div>
    </>
  );
};

export default HistoryDisplay;
