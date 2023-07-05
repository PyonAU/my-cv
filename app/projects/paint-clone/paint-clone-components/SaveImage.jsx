import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardDrive } from '@fortawesome/free-solid-svg-icons';
import styles from './SaveImage.module.css';

const SaveImage = () => {
  return (
    <div className={styles.tool}>
      <FontAwesomeIcon
        className={styles.saveIcon}
        icon={faHardDrive}
        title="Save Image File"
      />
    </div>
  );
};

export default SaveImage;
