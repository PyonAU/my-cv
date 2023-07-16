import styles from './TimeDuration.module.css';

const TimeDuration = ({
  elapsedTime,
  totalDuration,
  handleChangeDisplayFormat,
}) => {
  return (
    <div className={styles.time}>
      <span className={styles.timeElapsed} onClick={handleChangeDisplayFormat}>
        {`${elapsedTime} / `}
      </span>
      <span className={styles.timeDuration}>{totalDuration}</span>
    </div>
  );
};

export default TimeDuration;
