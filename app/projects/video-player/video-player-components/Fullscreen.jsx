import { IconButton } from '@mui/material';
import { Fullscreen } from '@mui/icons-material';
import styles from './Fullscreen.module.css';

const FullScreen = ({ toggleFullScreen }) => {
  return (
    <div>
      <IconButton className={styles.expand} onClick={toggleFullScreen}>
        <Fullscreen fontSize="large" className={styles.fullscreen} />
      </IconButton>
    </div>
  );
};

export default FullScreen;
