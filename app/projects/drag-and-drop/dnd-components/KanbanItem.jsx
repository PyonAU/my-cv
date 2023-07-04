import { useDrag } from 'react-dnd';
import styles from './KanbanItem.module.css';

const KanbanItem = ({ children, id }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'card',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={drag} style={{ opacity }}>
      <ul className={styles.dragItemList}>{children}</ul>
    </div>
  );
};

export default KanbanItem;
