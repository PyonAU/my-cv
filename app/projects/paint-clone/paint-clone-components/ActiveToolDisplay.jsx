import styles from './ActiveToolDisplay.module.css';

const ActiveToolDisplay = () => {
  return (
    <div>
      <span className={styles.activeTool} title="Active Tool">
        Brush
      </span>
    </div>
  );
};

export default ActiveToolDisplay;
