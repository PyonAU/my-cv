'use client';

import { useState, useEffect } from 'react';
import Header from './spock-rock-components/Header';
import Player from './spock-rock-components/Player';
import Result from './spock-rock-components/Result';
import { startConfetti, stopConfetti, removeConfetti } from '../lib/spock-rock-game/confetti';
import styles from './SpockRockGame.module.css';

const gameLogic = {
  Rock: { name: 'Rock', defeats: ['Scissors', 'Lizard'] },
  Paper: { name: 'Paper', defeats: ['Rock', 'Spock'] },
  Scissors: { name: 'Scissors', defeats: ['Paper', 'Lizard'] },
  Lizard: { name: 'Lizard', defeats: ['Paper', 'Spock'] },
  Spock: { name: 'Spock', defeats: ['Scissors', 'Rock'] },
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
        setGameResult('It\'s a tie.');
      } else {
        const game = gameLogic[playerChoice];
        if (game.defeats.indexOf(computerChoice) > -1) {
          setGameResult('You win!');
          startConfetti();
          setScore({ ...score, playerScore: playerScore + 1 });
        } else {
          setGameResult('You lose...');
          setScore({ ...score, computerScore: computerScore + 1});
        }
      }
    }
 
  }, [isSelected]);

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
        <Result 
          gameResult={gameResult}
        />
      </div>
    </>
  );
};

export default SpockRockGame;
