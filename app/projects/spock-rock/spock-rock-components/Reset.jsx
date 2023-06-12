import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import styles from './Reset.module.css';

const Reset = ({ handleReset }) => {
  return (
    <FontAwesomeIcon
    icon={faRotate}
    className={styles.resetIcon}
    title="Reset"
    onClick={handleReset}
  />
  );
}

export default Reset