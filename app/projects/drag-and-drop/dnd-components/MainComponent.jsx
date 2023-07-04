import { useState, useCallback } from 'react';
import update from 'immutability-helper';
import KanbanColumn from './KanbanColumn';
import KanbanItem from './KanbanItem';
import EditableElement from './EditableElement';
import {
  channels,
  tasksList,
} from '@app/projects/lib/drop-and-drag/kanbanLists';

import styles from './MainComponent.module.css';

const MainComponent = () => {
  // State
  const [tasks, setTasks] = useState(tasksList);
  const [updateText, setUpdateText] = useState({
    id: 0,
    text: '',
    status: '',
  });

  const updateTasksList = useCallback(
    (id, status) => {
      let task = tasks.find((task) => task._id === id);
      const taskIndex = tasks.indexOf(task);
      task = { ...task, status };

      let newTasks = update(tasks, {
        [taskIndex]: { $set: task },
      });

      setTasks(newTasks);
    },
    [tasks]
  );

  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const processChange = debounce(function handleChange(event, id, status) {
    setUpdateText({ id, text: event, status });
  }, 250);

  const handleFocusOut = () => {
    setTasks((prevState) => {
      if (updateText.text === '') {
        return prevState.filter(({ _id }) => _id !== updateText.id);
      }

      const findItem = prevState.find(({ _id }) => _id === updateText.id);

      findItem.title = updateText.text;

      return prevState;
    });
  };

  return (
    <>
      {/* <Container> */}
      <div className={`${styles.dragContainer} ${styles.customScroll}`}>
        <ul className={styles.dragList}>
          {channels.map(({ label, style }) => {
            return (
              <KanbanColumn
                key={label}
                status={label}
                style={style}
                setTasks={setTasks}
                updateTasksList={updateTasksList}
              >
                {tasks
                  .filter((task) => task.status === label)
                  .map((task) => (
                    <KanbanItem
                      key={task._id}
                      id={task._id}
                      tasks={tasks}
                      label={label}
                    >
                      <EditableElement
                        onChange={(event) =>
                          processChange(event, task._id, label)
                        }
                      >
                        <li className={styles.dragItem} onBlur={handleFocusOut}>
                          {task.title}
                        </li>
                      </EditableElement>
                    </KanbanItem>
                  ))}
              </KanbanColumn>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MainComponent;
