'use client';

import { useState } from 'react';
import Paint from './paint-clone-components/Paint';
import useWindowSize from '../hooks/useWindowSize';
import styles from './PaintClone.module.css';

const PaintClonePage = () => {
  const [width, setWidth] = useState();
  const [windowWidth] = useWindowSize(() => {
    setWidth(window.innerWidth);
  });

  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

          html body {
            background-color: #ffffff;
            font-family: Oswald, sans-serif;
            overflow: hidden;
          }
        `}
      </style>
      {width > 800 || width === undefined ? (
        <Paint />
      ) : (
        <div className={styles.mobileMessage}>
          <h2>Please use application on larger screen</h2>
        </div>
      )}
    </>
  );
};

export default PaintClonePage;
