import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandBackFist } from '@fortawesome/free-regular-svg-icons';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { faHandScissors } from '@fortawesome/free-regular-svg-icons';
import { faHandLizard } from '@fortawesome/free-regular-svg-icons';
import { faHandSpock } from '@fortawesome/free-regular-svg-icons';

import styles from './Player.module.css';
import cx from 'classnames';

function Player({ name, score, handlePlayerClick, choice }) {
  const playerColor = name === 'Computer' ? styles.red : styles.purple;
  const playerSelected = name === 'Computer' ? '' : styles.selectable;

  const playerIcon = cx(playerSelected, playerColor, styles.playerIcon, 'far');
  console.log('handlePlayerClick:', handlePlayerClick);
  // const handleRock = handlePlayerClick("Rock");

  return (
    <div className={styles.playerContainer}>
      <h2 className={styles.marginBottom}>
        {name} - <span>{score}</span>
        <span className={playerColor}></span>
      </h2>
      <FontAwesomeIcon
        icon={faHandBackFist}
        className={`${playerIcon} ${choice === 'Rock' ? styles.selected : ''}`}
        title="Rock"
        onClick={() => handlePlayerClick("Rock")}
      />
      <FontAwesomeIcon
        icon={faHand}
        className={`${playerIcon} ${choice === 'Paper' ? styles.selected : ''}`}
        title="Paper"
        onClick={() => handlePlayerClick("Paper")}
      />
      <FontAwesomeIcon
        icon={faHandScissors}
        className={`${playerIcon} ${
          choice === 'Scissors' ? styles.selected : ''
        }`}
        title="Scissors"
        onClick={() => handlePlayerClick("Scissors")}
      />
      <FontAwesomeIcon
        icon={faHandLizard}
        className={`${playerIcon} ${
          choice === 'Lizard' ? styles.selected : ''
        }`}
        title="Lizard"
        onClick={() => handlePlayerClick("Lizard")}
      />
      <FontAwesomeIcon
        icon={faHandSpock}
        className={`${playerIcon} ${choice === 'Spock' ? styles.selected : ''}`}
        title="Spock"
        onClick={() => handlePlayerClick("Spock")}
      />
    </div>
  );
}

export default Player;
