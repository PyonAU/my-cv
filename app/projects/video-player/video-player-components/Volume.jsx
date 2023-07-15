import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import Slider from '@mui/material/Slider';
import styles from './Volume.module.css';

const Volume = ({ handleMute, muted }) => {
  return (
    <div className={styles.volume}>
      <div className={styles.volumeIcon}>
        <FontAwesomeIcon
          className={styles.volumeIcons}
          icon={muted ? faVolumeXmark : faVolumeHigh}
          title={muted ? 'Mute' : 'Volume'}
          onClick={handleMute}
        />
      </div>

      <div className={styles.volumeRange}>
        <Slider min={0} max={100} />
      </div>
    </div>
  );
};

export default Volume;
