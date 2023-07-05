import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';
import styles from './Bucket.module.css';

const Bucket = () => {
  return (
    <div className={`${styles.bucket} ${styles.tool}`}>
      <FontAwesomeIcon
        className={styles.bucketIcon}
        icon={faFillDrip}
        title="Background Color"
      />
      <input className={styles.labelStyle} />
    </div>
  );
};

export default Bucket;
