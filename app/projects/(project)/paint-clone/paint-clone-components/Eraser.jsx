import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import styles from './Eraser.module.css';

const Eraser = ({ handleBrushEraserIcons, eraserIcon }) => {
  const eraserIconColor = eraserIcon ? 'black' : 'white';

  return (
    <div className={styles.tool}>
      <FontAwesomeIcon
        className={styles.eraserIcon}
        icon={faEraser}
        title="Eraser"
        onClick={() => handleBrushEraserIcons('eraser')}
        style={{ color: eraserIconColor }}
      />
    </div>
  );
};

export default Eraser;
