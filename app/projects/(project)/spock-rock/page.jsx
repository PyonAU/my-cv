'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Result from './spock-rock-components/Result';
import {
  startConfetti,
  stopConfetti,
  removeConfetti,
} from '../../lib/spock-rock-game/confetti';
import styles from './SpockRockGame.module.css';

const DynamicHeader = dynamic(() => import('./spock-rock-components/Header'), {
  ssr: false,
});

const DynamicPlayer = dynamic(() => import('./spock-rock-components/Player'), {
  ssr: false,
});

const DynamicReset = dynamic(() => import('./spock-rock-components/Reset'), {
  ssr: false,
});

const gameLogic = {
  Rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
  Paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
  Scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
  Lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
  Spock: { name: 'Spock', defeats: ['Rock', 'Scissors'] },
};

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
  const [gameResult, setGameResult] = useState('');

  // Destructuring
  const { playerScore, computerScore } = score;
  const { playerChoice, computerChoice } = isSelected;

  const handlePlayerClick = (choice) => {
    stopConfetti();
    removeConfetti();

    const computerChoiceNumber = Math.random();
    let computer = 'Paper';
    if (computerChoiceNumber < 0.2) {
      computer = 'Rock';
    } else if (computerChoiceNumber <= 0.4) {
      computer = 'Paper';
    } else if (computerChoiceNumber <= 0.6) {
      computer = 'Scissors';
    } else if (computerChoiceNumber <= 0.8) {
      computer = 'Lizard';
    } else {
      computer = 'Spock';
    }

    setIsSelected({
      ...isSelected,
      playerChoice: choice,
      computerChoice: computer,
    });
  };

  useEffect(() => {
    if (playerChoice && computerChoice) {
      if (playerChoice === computerChoice) {
        setGameResult("It's a tie.");
      } else {
        const game = gameLogic[playerChoice];
        if (game.defeats.indexOf(computerChoice) > -1) {
          setGameResult('You win!');
          startConfetti();
          setScore({ ...score, playerScore: playerScore + 1 });
        } else {
          setGameResult('You lose...');
          setScore({ ...score, computerScore: computerScore + 1 });
        }
      }
    }
  }, [isSelected]);

  const handleReset = () => {
    setScore({
      playerScore: 0,
      computerScore: 0,
    });
    setIsSelected({
      playerChoice: '',
      computerChoice: '',
    });
    setGameResult('');
    stopConfetti();
    removeConfetti();
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
          }
        `}
      </style>
      <div className={styles.outerContainer}>
        <div className={styles.gameContainer}>
          <DynamicHeader />
          <DynamicPlayer
            name="You"
            score={playerScore}
            choice={playerChoice}
            handlePlayerClick={handlePlayerClick}
          />
          <DynamicPlayer
            name="Computer"
            score={computerScore}
            choice={computerChoice}
          />
          <DynamicReset handleReset={handleReset} />
          <Result gameResult={gameResult} />
        </div>
      </div>
    </>
  );
};

export default SpockRockGame;
