import { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import Backspace from '@mui/icons-material/DeleteForever';
import styles from './BackButton.module.css';

const BackButton = () => {
  const { handleBackButton } = useContext(NumberContext);

  return (
    <button
      type="button"
      className={styles.backButton}
      onClick={handleBackButton}
    >
      <Backspace title="Go Back" fontSize="medium" style={{ color: 'white' }} />
    </button>
  );
};

export default BackButton;
