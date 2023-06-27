'use client';

import styles from './dragAndDrop.module.css';

const DragAndDropPage = () => {
  return (
    <>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");

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
    </>
  );
};

export default DragAndDropPage;

/* Trees Image - Pexels: https://www.pexels.com/photo/photo-of-trees-in-forest-3801030/ */
