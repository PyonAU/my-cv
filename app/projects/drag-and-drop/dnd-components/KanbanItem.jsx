import styles from './KanbanItem.module.css';

const KanbanItem = ({ children }) => {
  return (
    <div>
      <ul className={styles.dragItemList}>
        {children}
      </ul>
    </div>
  )
}

export default KanbanItem;