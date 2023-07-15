import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import styles from './PlayPause.module.css';

const PlayPause = ({ handlePlayPause, playing }) => {
  return (
    <div className={styles.playControls}>
      <FontAwesomeIcon
        className={styles.backward}
        icon={faBackward}
        title="Rewind"
      />
      <FontAwesomeIcon
        className={styles.play}
        icon={playing ? faPause : faPlay}
        title={playing ? 'Pause' : 'Play'}
        onClick={handlePlayPause}
      />
      <FontAwesomeIcon
        className={styles.forward}
        icon={faForward}
        title="Fast Forward"
      />
    </div>
  );
};

export default PlayPause;
