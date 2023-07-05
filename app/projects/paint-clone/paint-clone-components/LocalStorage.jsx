import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import styles from './LocalStorage.module.css';

const LocalStorage = () => {
  return (
    <>
      {/* Save to Local Storage */}
      <div className={styles.tool}>
        <FontAwesomeIcon
          className={styles.localStorageIcon}
          icon={faDownload}
          title="Save to Local Storage"
        />
      </div>

      {/* Load from Local Storage */}
      <div className={styles.tool}>
        <FontAwesomeIcon
          className={styles.localStorageIcon}
          icon={faUpload}
          title="Load from Local Storage"
        />
      </div>

      {/* Clear Local Storage */}
      <div className={styles.tool}>
        <FontAwesomeIcon
          className={styles.localStorageIcon}
          icon={faTrashCan}
          title="Clear Local Storage"
        />
      </div>
    </>
  );
};

export default LocalStorage;
