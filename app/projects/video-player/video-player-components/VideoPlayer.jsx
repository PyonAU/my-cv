// import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import ProgressBar from './ProgressBar';
import PlayPause from './PlayPause';
import Volume from './Volume';
import PlaybackSpeed from './PlaybackSpeed';
import TimeDuration from './TimeDuration';
import Fullscreen from './Fullscreen';
import styles from './VideoPlayer.module.css';

const VideoPlayer = () => {
  // State
  const [isClient, setIsClient] = useState(false);
  const [controller, setController] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false,
  });

  // Destructuring state value
  const { playing, muted, volume, playbackRate, played, seeking } = controller;

  // Ref
  const playerRef = useRef(null);

  // Prevent from SSR
  useEffect(() => {
    setIsClient(true);
  });

  // Toggle between the state
  const handlePlayPause = () => {
    setController((prevState) => ({
      ...controller,
      playing: !prevState.playing,
    }));
  };

  const handleRewind = () => {
    // Rewind 2s back
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 2);
  };

  const handleFastForward = () => {
    // Rewind 2s forward
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 2);
  };

  return (
    <div className={styles.player}>
      {isClient ? (
        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="auto"
          url="https://pixabay.com/videos/download/video-41758_source.mp4?attachment"
          playing={playing}
          muted={muted}
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
              <PlayPause
                handlePlayPause={handlePlayPause}
                playing={playing}
                handleRewind={handleRewind}
                handleFastForward={handleFastForward}
              />
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
