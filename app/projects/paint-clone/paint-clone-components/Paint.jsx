import { useState } from 'react';
import ActiveDisplay from './ActiveToolDisplay';
import Brush from './/Brush';
import Bucket from './Bucket';
import Eraser from './Eraser';
import Clear from './Clear';
import LocalStorage from './LocalStorage';
import SaveImage from './SaveImage';
import styles from './Paint.module.css';

const Paint = () => {
  // State
  const [isIconClicked, setIsIconClicked] = useState({
    brushIcon: true,
    eraserIcon: false,
  });
  const [colorHexCode, setColorHexCode] = useState({
    brushColor: '#A51DAB',
    bucketColor: '#FFFFFF',
  });
  const [isBrushBarClicked, setIsBrushBarClicked] = useState(false);
  const [isBucketBarClicked, setIsBucketBarClicked] = useState(false);
  const [sliderSize, setSliderSize] = useState(10);

  // Destructuring
  const { brushIcon, eraserIcon } = isIconClicked;
  const { brushColor, bucketColor } = colorHexCode;

  const handleBrushEraserIcons = (value) => {
    if (value === 'Brush') {
      setIsIconClicked({ brushIcon: true, eraserIcon: false });
    } else {
      setIsIconClicked({ brushIcon: false, eraserIcon: true });
    }
  };

  const handleBrushPicker = () => {
    setIsBrushBarClicked((prev) => !prev);
    setIsBucketBarClicked(false);
  };

  const handleBucketPicker = () => {
    setIsBrushBarClicked(false);
    setIsBucketBarClicked((prev) => !prev);
  };

  const handleColorCode = (event) => {
    if (isBrushBarClicked) {
      setColorHexCode({ ...colorHexCode, brushColor: event.hex });
    } else {
      setColorHexCode({ ...colorHexCode, bucketColor: event.hex });
    }
  };

  const handleInputHexCode = (event, value) => {
    if (value === 'Brush') {
      setColorHexCode({ ...colorHexCode, brushColor: event.target.value });
    } else {
      setColorHexCode({ ...colorHexCode, bucketColor: event.target.value });
    }
  };

  const handleSliderChange = (event) => {
    setSliderSize(event.target.valueAsNumber);
  };

  return (
    <div className={styles.topBar}>
      <ActiveDisplay brushIcon={brushIcon} />
      <Brush
        handleBrushEraserIcons={handleBrushEraserIcons}
        brushIcon={brushIcon}
        brushColor={brushColor}
        handleBrushPicker={handleBrushPicker}
        isBrushBarClicked={isBrushBarClicked}
        handleColorCode={handleColorCode}
        handleInputHexCode={handleInputHexCode}
        handleSliderChange={handleSliderChange}
        sliderSize={sliderSize}
      />
      <Bucket
        bucketColor={bucketColor}
        handleBucketPicker={handleBucketPicker}
        isBucketBarClicked={isBucketBarClicked}
        handleColorCode={handleColorCode}
        handleInputHexCode={handleInputHexCode}
      />
      <Eraser
        handleBrushEraserIcons={handleBrushEraserIcons}
        eraserIcon={eraserIcon}
      />
      <Clear />
      <LocalStorage />
      <SaveImage />
    </div>
  );
};

export default Paint;
