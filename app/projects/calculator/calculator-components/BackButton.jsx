import { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import BackspaceIcon from '@mui/icons-material/Backspace';
import styles from './BackButton.module.css';

const BackButton = () => {
  const { handleBackButton } = useContext(NumberContext);

  return (
    <button
      type="button"
      title="Backspace"
      className={styles.backButton}
      onClick={handleBackButton}
    >
      <BackspaceIcon fontSize="medium" style={{ color: 'white' }} />
    </button>
  );
};

export default BackButton;
