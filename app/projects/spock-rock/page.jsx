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
  const [isSelected, setIsSelected] = useState({
    playerChoice: '',
    computerChoice: '',
  });

  // Destructuring
  const { playerScore, computerScore } = score;
  const { playerChoice, computerChoice } = isSelected;

  const handlePlayerClick = (event) => {
    event.preventDefault();
    const choice = event.target.textContent;
    console.log('choice:', choice);

    setIsSelected({ ...isSelected, playerChoice: choice });
  };

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
        <Player
          name="You"
          score={playerScore}
          choice={playerChoice}
          handlePlayerClick={handlePlayerClick}
        />
        <Player name="Computer" score={computerScore} choice={computerChoice} />
      </div>
    </>
  );
};

export default SpockRockGame;
