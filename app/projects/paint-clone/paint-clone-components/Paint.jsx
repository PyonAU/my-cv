import dynamic from 'next/dynamic';
import { useState } from 'react';
import ActiveDisplay from './ActiveToolDisplay';
import Canvas from './Canvas';
import styles from './Paint.module.css';

const DynamicBrush = dynamic(() => import('./Brush'), {
  ssr: false,
});

const DynamicBucket = dynamic(() => import('./Bucket'), {
  ssr: false,
});

const DynamicEraser = dynamic(() => import('./Eraser'), {
  ssr: false,
});

const DynamicClear = dynamic(() => import('./Clear'), {
  ssr: false,
});

const DynamicLocalStorage = dynamic(() => import('./LocalStorage'), {
  ssr: false,
});

const DynamicSaveImage = dynamic(() => import('./SaveImage'), {
  ssr: false,
});

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
  const [isCleared, setIsCleared] = useState(false);

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

  const handleClearDrawing = () => {
    setIsCleared(true);
  };

  return (
    <>
      <div className={styles.topBar}>
        <ActiveDisplay brushIcon={brushIcon} />
        <DynamicBrush
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
        <DynamicBucket
          bucketColor={bucketColor}
          handleBucketPicker={handleBucketPicker}
          isBucketBarClicked={isBucketBarClicked}
          handleColorCode={handleColorCode}
          handleInputHexCode={handleInputHexCode}
        />
        <DynamicEraser
          handleBrushEraserIcons={handleBrushEraserIcons}
          eraserIcon={eraserIcon}
        />
        <DynamicClear handleClearDrawing={handleClearDrawing} />
        <DynamicLocalStorage />
        <DynamicSaveImage />
      </div>
      {brushColor && (
        <Canvas
          bucketColor={bucketColor}
          brushIcon={brushIcon}
          sliderSize={sliderSize}
          brushColor={brushColor}
          eraserIcon={eraserIcon}
          isCleared={isCleared}
          setIsCleared={setIsCleared}
        />
      )}
    </>
  );
};

export default Paint;
