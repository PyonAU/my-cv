import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import styles from './Fullscreen.module.css';

const Fullscreen = () => {
  return (
    <div className={styles.fullscreen}>
      <FontAwesomeIcon
        className={styles.expand}
        icon={faExpand}
        title="Fullscreen"
      />
    </div>
  );
};

export default Fullscreen;
