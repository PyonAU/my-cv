import Brush from './/Brush';
import Bucket from './Bucket';
import styles from './Paint.module.css';

const Paint = () => {
  return (
    <div className={styles.topBar}>
      <Brush />
      <Bucket />
    </div>
  )
}

export default Paint;