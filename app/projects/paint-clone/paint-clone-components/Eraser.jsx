import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import styles from './Eraser.module.css';

const Eraser = () => {
  return (
    <div className={styles.tool}>
      <FontAwesomeIcon
        className={styles.eraserIcon}
        icon={faEraser}
        title="Eraser"
      />
    </div>
  );
};

export default Eraser;
