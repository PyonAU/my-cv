import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';
import styles from './Brush.module.css';

const Brush = ({
  handleBrushEraserIcons,
  brushIcon,
  brushColor,
  handleBrushPicker,
  isBrushBarClicked,
  handleColorCode,
  handleInputHexCode,
  handleSliderChange,
  sliderSize,
}) => {
  const brushIconColor = brushIcon ? 'black' : 'white';

  const brushHexCode = brushColor.toUpperCase();

  return (
    <div className={`${styles.brush} ${styles.tool}`}>
      <FontAwesomeIcon
        className={styles.brushIcon}
        icon={faBrush}
        id="brush"
        title="Brush"
        onClick={() => handleBrushEraserIcons('Brush')}
        style={{ color: brushIconColor }}
      />
      <input
        className={styles.labelStyle}
        type="text"
        id="hex-code"
        value={brushHexCode}
        style={{ backgroundColor: brushColor }}
        onClick={handleBrushPicker}
        onChange={(event) => handleInputHexCode(event, 'Brush')}
      />
      <div className={styles.colorPalette}>
        {isBrushBarClicked && (
          <SketchPicker color={brushColor} onChange={handleColorCode} />
        )}
      </div>
      <span className={styles.size} title="Brush Size" id="brush-size">
        {sliderSize < 10 ? `0${sliderSize}` : sliderSize}
      </span>
      <input
        type="range"
        min="1"
        max="50"
        id="brush-slider"
        className={styles.slider}
        defaultValue="10"
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Brush;
