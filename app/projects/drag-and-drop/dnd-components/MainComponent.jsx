import KanbanColumn from './KanbanColumn';
import { channels } from '@app/projects/lib/drop-and-drag/kanbanLists';

import styles from './MainComponent.module.css';

const MainComponent = () => {
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
              ></KanbanColumn>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MainComponent;
