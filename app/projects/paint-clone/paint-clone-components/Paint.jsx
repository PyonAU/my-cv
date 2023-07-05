import Brush from './/Brush';
import Bucket from './Bucket';
import Eraser from './Eraser';
import Clear from './Clear';
import styles from './Paint.module.css';

const Paint = () => {
  return (
    <div className={styles.topBar}>
      <Brush />
      <Bucket />
      <Eraser />
      <Clear />
    </div>
  );
};

export default Paint;
