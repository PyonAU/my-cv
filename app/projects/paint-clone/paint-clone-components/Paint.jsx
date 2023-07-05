import Brush from './/Brush';
import Bucket from './Bucket';
import Eraser from './Eraser';
import styles from './Paint.module.css';

const Paint = () => {
  return (
    <div className={styles.topBar}>
      <Brush />
      <Bucket />
      <Eraser />
    </div>
  )
}

export default Paint;