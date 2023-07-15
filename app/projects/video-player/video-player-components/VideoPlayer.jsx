// import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ProgressBar from './ProgressBar';
import PlayPause from './PlayPause';
import Volume from './Volume';
import PlaybackSpeed from './PlaybackSpeed';
import TimeDuration from './TimeDuration';
import Fullscreen from './Fullscreen';
import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  });

  return (
    <div className={styles.player}>
      {isClient ? (
        <ReactPlayer
          width="100%"
          height="auto"
          url="https://pixabay.com/videos/download/video-41758_source.mp4?attachment"
        />
      ) : (
        'Loading...'
      )}

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
