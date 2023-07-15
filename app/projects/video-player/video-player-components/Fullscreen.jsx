import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import styles from './Fullscreen.module.css';

const Fullscreen = ({ toggleFullScreen }) => {
  return (
    <div className={styles.fullscreen}>
      <FontAwesomeIcon
        className={styles.expand}
        icon={faExpand}
        title="Fullscreen"
        onClick={toggleFullScreen}
      />
    </div>
  );
};

export default Fullscreen;
