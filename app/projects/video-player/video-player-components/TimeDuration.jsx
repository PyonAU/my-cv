import styles from './TimeDuration.module.css';

const TimeDuration = () => {
  return (
    <div className={styles.time}>
      <span className={styles.timeElapsed}>0:02 / </span>
      <span className={styles.timeDuration}>0:22</span>
    </div>
  );
};

export default TimeDuration;
