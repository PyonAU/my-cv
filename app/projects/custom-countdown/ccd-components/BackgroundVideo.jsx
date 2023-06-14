import styles from './BackgroundVideo.module.css';

const BackgroundVideo = () => {
  return (
    <div>
      <video className={`${styles.videoBackground} ${styles.video}`} loop muted autoPlay>
        <source src="/video/Clock.mp4"></source>
      </video>
      <div className={styles.videoOverlay}></div>
    </div>
  );
};

export default BackgroundVideo;
