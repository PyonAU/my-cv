import { IconButton } from '@mui/material';
import { VolumeUp } from '@mui/icons-material';
import { VolumeOff } from '@mui/icons-material';
import Slider from '@mui/material/Slider';
import styles from './Volume.module.css';

const Volume = ({
  handleMute,
  muted,
  volume,
  handleVolumeChange,
  handleVolumeSeekUp,
}) => {
  return (
    <div className={styles.volume}>
      <div className={styles.volumeIcon}>
        <IconButton
          className={styles.volumeIcons}
          title={muted ? 'Mute' : 'Volume'}
          onClick={handleMute}
        >
          {muted ? (
            <VolumeOff fontSize="large" style={{ color: 'white' }} />
          ) : (
            <VolumeUp fontSize="large" style={{ color: 'white' }} />
          )}
        </IconButton>
      </div>

      <div className={styles.volumeRange}>
        <Slider
          min={0}
          max={100}
          volume={volume * 100}
          onChange={handleVolumeChange}
          onChangeCommitted={handleVolumeSeekUp}
        />
      </div>
    </div>
  );
};

export default Volume;
