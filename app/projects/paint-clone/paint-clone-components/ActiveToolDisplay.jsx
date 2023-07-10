import styles from './ActiveToolDisplay.module.css';

const ActiveToolDisplay = ({ brushIcon, isCleared, save, load, clear }) => {
  const tool = brushIcon ? 'Brush' : 'Eraser';

  let text;
  if (save) {
    text = 'Canvas Saved';
  } else if (load) {
    text = 'Canvas Loaded';
  } else if (clear) {
    text = 'Local Storage Cleared';
  } else if (isCleared) {
    text = 'Canvas Cleared';
  }

  return (
    <div>
      <span className={styles.activeTool} title="Active Tool">
        {save || load || clear || isCleared ? text : tool}
      </span>
    </div>
  );
};

export default ActiveToolDisplay;
