import Brush from './/Brush';
import styles from './Paint.module.css';

const Paint = () => {
  return (
    <div className={styles.topBar}>
      <Brush />
    </div>
  )
}

export default Paint;