'use client';

import { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import MainComponent from './dnd-components/MainComponent';
import HelpButton from '../../../../components/HelpButton';
import styles from './dragAndDrop.module.css';
import { dragAndDropInfo, dragAndDropInstructions } from '../../lib/gameInfo';

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

          @media screen and (max-width: 600px) {
            body {
              overflow-y: auto;
            }
        `}
      </style>
      <div className={styles.container}>
        <div className={styles.helpContainer}>
          <h1 className={styles.mainTitle}>Kanban Board</h1>
          <HelpButton
            infoText={dragAndDropInfo}
            instructions={dragAndDropInstructions}
            orderedList={false}
            autoHeight={true}
          />
        </div>

        <DndProvider backend={HTML5Backend}>
          <MainComponent />
        </DndProvider>
      </div>
    </>
  );
};

export default DragAndDropPage;

/* Trees Image - Pexels: https://www.pexels.com/photo/photo-of-trees-in-forest-3801030/ */
