import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';
import styles from './Bucket.module.css';

const Bucket = ({
  bucketColor,
  handleBucketPicker,
  isBucketBarClicked,
}) => {
  return (
    <div className={`${styles.bucket} ${styles.tool}`}>
      <FontAwesomeIcon
        className={styles.bucketIcon}
        icon={faFillDrip}
        title="Background Color"
      />
      <input
        className={styles.labelStyle}
        value={bucketColor}
        style={{ backgroundColor: bucketColor }}
        onClick={handleBucketPicker}
      />
      <div className={styles.colorPalette}>
        {isBucketBarClicked && <SketchPicker color={bucketColor} />}
      </div>
    </div>
  );
};

export default Bucket;
