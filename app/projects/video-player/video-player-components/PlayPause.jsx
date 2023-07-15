import { IconButton } from '@mui/material';
import { FastRewind } from '@mui/icons-material';
import { FastForwardSharp } from '@mui/icons-material';
import { PlayArrowSharp } from '@mui/icons-material';
import { PauseSharp } from '@mui/icons-material';
import styles from './PlayPause.module.css';

const PlayPause = ({
  handlePlayPause,
  playing,
  handleRewind,
  handleFastForward,
}) => {
  return (
    <div className={styles.playControls}>
      <IconButton
        className={styles.backward}
        title="rewind"
        onClick={handleRewind}
      >
        <FastRewind fontSize="large" style={{ color: 'white' }} />
      </IconButton>

      <IconButton
        className={styles.play}
        title={playing ? 'Pause' : 'Play'}
        onClick={handlePlayPause}
      >
        {playing ? (
          <PauseSharp fontSize="large" style={{ color: 'white' }} />
        ) : (
          <PlayArrowSharp fontSize="large" style={{ color: 'white' }} />
        )}
      </IconButton>

      <IconButton
        className={styles.forward}
        title="Fast Forward"
        onClick={handleFastForward}
      >
        <FastForwardSharp fontSize="large" style={{ color: 'white' }} />
      </IconButton>
    </div>
  );
};

export default PlayPause;
