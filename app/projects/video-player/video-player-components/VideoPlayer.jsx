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

  const handleProgress = (changeState) => {
    if (!seeking) {
      setController({ ...controller, ...changeState });
    }
  };

  // Seek a particular time of the video
  const handleSeekChange = (e, newValue) => {
    setController({ ...controller, played: parseFloat(newValue / 100) });
  };

  // This function gets triggered when the mousedown event is activated
  const handleSeekMouseDown = (e) => {
    setController({ ...controller, seeking: true });
  };

  // This function gets triggered when the mouseup event is activated
  const handleSeekMouseUp = (e, newValue) => {
    setController({ ...controller, seeking: false });
    playerRef.current.seekTo(newValue / 100);
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
          handleProgress={handleProgress}
        />
      ) : (
        'Loading...'
      )}

      {/* Show Controls */}
      <div className={styles.showControls}>
        {/* Control Container */}
        <div className={styles.controlsContainer}>
          <ProgressBar
            played={played}
            handleSeekChange={handleSeekChange}
            handleSeekMouseUp={handleSeekMouseUp}
            handleSeekMouseDown={handleSeekMouseDown}
          />
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
