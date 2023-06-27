import { labelsMap } from '@app/projects/lib/drop-and-drag/kanbanLists';
import styles from './KanbanColumn.module.css';
import cx from 'classnames';

const KanbanColumn = ({ status, style }) => {
  // Style
  const column = cx(styles.dragColumn, styles[style]);

  return (
    <li className={column}>
      <span className={styles.header}>
        <h1>{labelsMap[status]}</h1>
      </span>

      {/* Add Button Group */}
      <div className={styles.addBtnWrapper}>
        <div className={styles.addBtn}>
          <span className={styles.plusSign}>+</span>
          <span>Add Item</span>
        </div>
      </div>
    </li>
  );
};

export default KanbanColumn;
