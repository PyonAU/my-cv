import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
// import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Volume.module.css';

const Volume = () => {
  return (
    <div className={styles.volume}>
      <div className={styles.volumeIcon}>
      <FontAwesomeIcon className={styles.volumeIcons} icon={faVolumeHigh} title="Volume" />
      </div>
        
      <div className={styles.volumeRange}>
        <p>Slider</p>
      </div>
    </div>
  )
}

export default Volume;