import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardDrive } from '@fortawesome/free-solid-svg-icons';
import styles from './SaveImage.module.css';

const SaveImage = ({ handleSaveImage }) => {
  return (
    <div className={styles.tool}>
      <a>
        <FontAwesomeIcon
          className={styles.saveIcon}
          icon={faHardDrive}
          title="Save Image File"
          onClick={handleSaveImage}
        />
      </a>
    </div>
  );
};

export default SaveImage;
