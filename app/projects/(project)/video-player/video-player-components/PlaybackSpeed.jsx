import styles from './PlaybackSpeed.module.css';

const speed = [
  {
    label: '0.5 x',
    value: '0.5',
  },
  {
    label: '0.75 x',
    value: '0.75',
  },
  {
    label: '1 x',
    value: '1',
  },
  {
    label: '1.5 x',
    value: '1.5',
  },
  {
    label: '2 x',
    value: '2',
  },
];

const PlaybackSpeed = ({ handlePlaybackRateChange }) => {
  return (
    <div className={styles.speed} title="Playback Speed">
      <select
        defaultValue="1"
        className={styles.selects}
        onClick={(event) =>
          handlePlaybackRateChange(Number(event.target.value))
        }
      >
        {speed.map(({ label, value }) => (
          <option key={value} value={value} className={styles.options}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlaybackSpeed;
