import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './Clear.module.css';

const Clear = ({ handleClearDrawing }) => {
  return (
    <div className={styles.tool}>
      <FontAwesomeIcon
        className={styles.clearIcon}
        icon={faRotateLeft}
        title="Clear"
        onClick={handleClearDrawing}
      />
    </div>
  );
};

export default Clear;
