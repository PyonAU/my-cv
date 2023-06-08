'use client';

import Header from './spock-rock-components/Header';
import styles from './SpockRockGame.module.css';

const SpockRockGame = () => {
  return (
    <>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

          body {
            margin: 0;
            min-height: 100vh;
            background: rgb(255, 229, 233);
            font-family: 'Nunito', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
      <div className={styles.gameContainer}>
        <Header />
      </div>
    </>
  );
};

export default SpockRockGame;
