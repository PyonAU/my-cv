import styles from './ActiveToolDisplay.module.css';

const ActiveToolDisplay = ({ brushIcon }) => {
  return (
    <div>
      <span className={styles.activeTool} title="Active Tool">
        {brushIcon ? 'Brush' : 'Eraser'}
      </span>
    </div>
  );
};

export default ActiveToolDisplay;
