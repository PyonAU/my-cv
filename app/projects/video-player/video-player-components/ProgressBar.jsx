import { PrettoSlider } from './PrettoSlider';
import styles from './ProgressBar.module.css';

const ProgressBar = ({
  played,
  handleSeekChange,
  handleSeekMouseUp,
  handleSeekMouseDown,
}) => {
  return (
    <div className={styles.progressRange} title="Seek">
      <PrettoSlider
        min={0}
        max={100}
        value={played * 100}
        onChange={handleSeekChange}
        onMouseDown={handleSeekMouseDown}
        onChangeCommitted={handleSeekMouseUp}
      />
    </div>
  );
};

export default ProgressBar;
