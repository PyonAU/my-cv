import ProgressBar from './ProgressBar';
import PlayPause from './PlayPause';
import Volume from './Volume';
import PlaybackSpeed from './PlaybackSpeed';
import TimeDuration from './TimeDuration';
import Fullscreen from './Fullscreen';
import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
  return (
    <div className={styles.player}>
      {/* Show Controls */}
      <div className={styles.showControls}>
        {/* Control Container */}
        <div className={styles.controlsContainer}>
          <ProgressBar />
          {/* Control Group */}
          <div className={styles.controlGroup}>
            {/* Left Controls */}
            <div className={styles.leftControls}>
              <PlayPause />
              <Volume />
            </div>

            {/* Right Controls */}
            <div className={styles.rightControls}>
              <PlaybackSpeed />
              <TimeDuration />
              <Fullscreen />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
