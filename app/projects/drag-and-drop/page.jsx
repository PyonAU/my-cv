'use client';

import MainComponent from './dnd-components/MainComponent';
import styles from './dragAndDrop.module.css';

const DragAndDropPage = () => {
  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
          :root {
            --column-1: #a2622d;
            --column-2: #1b6161;
            --column-3: #248224;
            --column-4: #a22d22;
          }

          body {
            background: url(/images/trees.jpg);
            background-size: cover;
            background-position: 50% 60%;
            background-attachment: fixed;
            color: white;
            font-family: Quicksand, sans-serif;
            overflow-y: hidden;
          }
        `}
      </style>

      <h1 className={styles.mainTitle}>Kanban Board</h1>
      <MainComponent />
    </>
  );
};

export default DragAndDropPage;

/* Trees Image - Pexels: https://www.pexels.com/photo/photo-of-trees-in-forest-3801030/ */
