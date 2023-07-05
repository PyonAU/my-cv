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

  // Destructuring
  const { brushIcon, eraserIcon } = isIconClicked;

  const handleBrushEraserIcons = (value) => {
    if (value === 'Brush') {
      setIsIconClicked({ brushIcon: true, eraserIcon: false });
    } else {
      setIsIconClicked({ brushIcon: false, eraserIcon: true });
    }
  };

  return (
    <div className={styles.topBar}>
      <ActiveDisplay />
      <Brush
        handleBrushEraserIcons={handleBrushEraserIcons}
        brushIcon={brushIcon}
      />
      <Bucket />
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
