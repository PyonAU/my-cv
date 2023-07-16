import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import ProgressBar from './ProgressBar';
import PlaybackSpeed from './PlaybackSpeed';
import TimeDuration from './TimeDuration';
import screenfull from 'screenfull';
import styles from './VideoPlayer.module.css';

const DynamicPlayPause = dynamic(() => import('./PlayPause'), {
  ssr: false,
});

const DynamicVolume = dynamic(() => import('./Volume'), {
  ssr: false,
});

const DynamicFullscreen = dynamic(() => import('./Fullscreen'), {
  ssr: false,
});

const format = (seconds) => {
  if (isNaN(seconds)) {
    return '00:00';
  }

  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  }
  return `${mm}:${ss}`;
};

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
  const [timeDisplayFormat, setTimeDisplayFormat] = useState('normal');

  // Destructuring state value
  const { playing, muted, volume, playbackRate, played, seeking } = controller;

  // Ref
  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);

  // Prevent from SSR
  useEffect(() => {
    setIsClient(true);
  });

  const currentTime = playerRef.current
    ? playerRef.current.getCurrentTime()
    : '00:00';
  const duration = playerRef.current
    ? playerRef.current.getDuration()
    : '00:00';

  const elapsedTime =
    timeDisplayFormat === 'normal'
      ? format(currentTime)
      : `-${format(duration - currentTime)}`;
  const totalDuration = format(duration);

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

  // Switch between counting up or down
  const handleChangeDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat === 'normal' ? 'remaining' : 'normal'
    );
  };

  // Toggle the mute button
  const handleMute = () => {
    setController((prevState) => ({ ...controller, muted: !prevState.muted }));
  };

  // Keeping the values of the volume and mute properties
  const handleVolumeChange = (e, newValue) => {
    setController({
      ...controller,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handleVolumeSeekUp = (e, newValue) => {
    setController({
      ...controller,
      volume: parseFloat(newValue / 100),
      muted: newValue === 0 ? true : false,
    });
  };

  const handlePlaybackRateChange = (rate) => {
    setController({ ...controller, playbackRate: rate });
  };

  const handleEnded = () => {
    setController({ ...controller, playing: false });
  };

  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current);
  };

  return (
    <div ref={playerContainerRef} className={styles.player}>
      {isClient ? (
        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="auto"
          url="https://pixabay.com/videos/download/video-41758_source.mp4?attachment"
          playing={playing}
          muted={muted}
          volume={volume}
          playbackRate={playbackRate}
          onProgress={handleProgress}
          onEnded={handleEnded}
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
              <DynamicPlayPause
                handlePlayPause={handlePlayPause}
                playing={playing}
                handleRewind={handleRewind}
                handleFastForward={handleFastForward}
              />
              <DynamicVolume
                handleMute={handleMute}
                muted={muted}
                volume={volume}
                handleVolumeChange={handleVolumeChange}
                handleVolumeSeekUp={handleVolumeSeekUp}
              />
            </div>

            {/* Right Controls */}
            <div className={styles.rightControls}>
              <PlaybackSpeed
                handlePlaybackRateChange={handlePlaybackRateChange}
              />
              <TimeDuration
                elapsedTime={elapsedTime}
                totalDuration={totalDuration}
                handleChangeDisplayFormat={handleChangeDisplayFormat}
              />
              <DynamicFullscreen toggleFullScreen={toggleFullScreen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
