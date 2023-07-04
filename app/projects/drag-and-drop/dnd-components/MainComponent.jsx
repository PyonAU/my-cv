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

  return (
    <>
      {/* <Container> */}
      <div className={styles.dragContainer}>
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
                      <EditableElement>
                        <li className={styles.dragItem}>{task.title}</li>
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
