import PlayPause from './PlayPause';
import Volume from './Volume';
import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
  return (
    <div className={styles.player}>
      {/* Show Controls */}
      <div className={styles.showControls}>
        {/* Control Container */}
        <div className={styles.controlsContainer}>
          <p>Progress Bar</p>
          {/* Control Group */}
          <div className={styles.controlGroup}>
            {/* Left Controls */}
            <div className={styles.leftControls}>
              <PlayPause />
              <Volume />
            </div>

            {/* Right Controls */}
            <div className={styles.rightControls}>
              <p>Playback Speed</p>
              <p>Time Duration</p>
              <p>Full Screen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
