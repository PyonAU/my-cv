import { IconButton } from '@mui/material';
import { Fullscreen } from '@mui/icons-material';
import styles from './Fullscreen.module.css';

const FullScreen = ({ toggleFullScreen }) => {
  return (
    <div className={styles.fullscreen}>
      <IconButton className={styles.expand} onClick={toggleFullScreen}>
        <Fullscreen fontSize="large" />
      </IconButton>
    </div>
  );
};

export default FullScreen;
