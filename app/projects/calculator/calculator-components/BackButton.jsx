import { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import { IconButton } from '@mui/material';
import { Backspace } from '@mui/icons-material';
import styles from './BackButton.module.css';

const BackButton = () => {
  const { handleBackButton } = useContext(NumberContext);

  return (
    <button
      type="button"
      className={styles.backButton}
      onClick={handleBackButton}
    >
      <IconButton className={styles.history} title="history">
        <Backspace fontSize="medium" style={{ color: 'white' }} />
      </IconButton>
    </button>
  );
};

export default BackButton;
