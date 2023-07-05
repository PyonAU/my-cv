import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import styles from './Brush.module.css';

const Brush = ({ handleBrushEraserIcons, brushIcon }) => {
  const brushIconColor = brushIcon ? 'black' : 'white';

  return (
    <div className={`${styles.brush} ${styles.tool}`}>
      <FontAwesomeIcon
        className={styles.brushIcon}
        icon={faBrush}
        title="Brush"
        onClick={() => handleBrushEraserIcons('Brush')}
        style={{ color: brushIconColor }}
      />
      <input className={styles.labelStyle} type="text" />
      <span className={styles.size} title="Brush Size">
        10
      </span>
      <input
        type="range"
        min="1"
        max="50"
        className={styles.slider}
        defaultValue="10"
      />
    </div>
  );
};

export default Brush;
