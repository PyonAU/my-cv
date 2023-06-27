import { labelsMap } from "@app/projects/lib/drop-and-drag/kanbanLists";
import styles from './KanbanColumn.module.css';
import cx from "classnames";

const KanbanColumn = ({ status, style }) => {
    // Style
    const column = cx(styles.dragColumn, styles[style]);

  return (
    <li className={column}>
      <span className={styles.header}>
        <h1>{labelsMap[status]}</h1>
      </span>
    </li>
  );
};

export default KanbanColumn;
