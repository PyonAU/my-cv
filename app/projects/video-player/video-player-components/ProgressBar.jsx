import { PrettoSlider } from './PrettoSlider';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={styles.progressRange} title="Seek">
      <PrettoSlider min={0} max={100} defaultValue={20} />
    </div>
  );
};

export default ProgressBar;
