import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { nanoid } from 'nanoid';
import EditableElement from './EditableElement';
import { labelsMap } from '@app/projects/lib/drop-and-drag/kanbanLists';
import styles from './KanbanColumn.module.css';
import cx from 'classnames';

const KanbanColumn = ({
  children,
  status,
  style,
  setTasks,
  updateTasksList,
}) => {
  // Style
  const column = cx(styles.dragColumn, styles[style]);
  const btn = cx(styles.addBtn, styles.solid);

  // State
  const [showForm, setShowForm] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [, drop] = useDrop({
    accept: 'card',
    drop: (item) => updateTasksList(item.id, status),
  });

  const handleShowInputBox = () => {
    setShowForm(true);
  };

  const handleUserInput = (event) => {
    setUserInput(event);
  };

  console.log('userInput:', userInput);

  const handleAddNewItem = () => {
    const addNewItem = {
      _id: nanoid(),
      title: userInput,
      status: status,
    };

    setTasks((prevState) => [...prevState, addNewItem]);
    setShowForm(false);
    setUserInput('');
  };

  return (
    <li className={column} ref={drop}>
      <span className={styles.header}>
        <h1 className={styles.status}>{labelsMap[status]}</h1>
      </span>
      {children}

      {/* Add Button Group */}
      {!showForm ? (
        <div className={styles.addBtnWrapper}>
          <div className={styles.addBtn} onClick={handleShowInputBox}>
            <span className={styles.plusSign}>+</span>
            <span>Add Item</span>
          </div>
        </div>
      ) : (
        <div>
          <div className={btn} onClick={handleAddNewItem}>
            <span>Save Item</span>
          </div>

          <div className={styles.addContainer}>
            <EditableElement onChange={handleUserInput}>
              <div className={styles.addItem}></div>
            </EditableElement>
          </div>
        </div>
      )}
    </li>
  );
};

export default KanbanColumn;
