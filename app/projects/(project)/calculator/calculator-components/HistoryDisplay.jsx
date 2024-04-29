import { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import styles from './HistoryDisplay.module.css';

const HistoryDisplay = ({ isClicked, visibility }) => {
  const { historyArray, handleDeleteHistory } = useContext(NumberContext);

  return (
    <>
      <div className={styles.historyDisplay} hidden={!isClicked}>
        {historyArray.map(
          ({ firstValue, operatorValue, secondValue, calculation }, i) => {
            return (
              <div className={styles.item} key={i}>
                <h5 className={styles.calculation}>
                  {`${firstValue} ${operatorValue} ${secondValue} = `}
                  <span className={styles.result}>{calculation}</span>
                </h5>
              </div>
            );
          }
        )}
      </div>

      {/* Delete History */}
      <div className={styles.historyFooter} onClick={handleDeleteHistory}>
        <IconButton title="Delete" className={styles.deleteIcon}>
          <DeleteForever
            fontSize="large"
            sx={{ color: 'rgb(90, 83, 92)', visibility: visibility }}
          />
        </IconButton>
      </div>
    </>
  );
};

export default HistoryDisplay;
