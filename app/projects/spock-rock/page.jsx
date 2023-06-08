'use client';

import { useState, useEffect } from 'react';
import Header from './spock-rock-components/Header';
import Player from './spock-rock-components/Player';
import styles from './SpockRockGame.module.css';

const SpockRockGame = () => {
  // State
  const [score, setScore] = useState({
    playerScore: 0,
    computerScore: 0,
  });

  // Destructuring
  const { playerScore, computerScore } = score;

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
        <Player name="You" score={playerScore} />
        <Player name="Computer" score={playerScore} />
      </div>
    </>
  );
};

export default SpockRockGame;
