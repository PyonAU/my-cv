import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandBackFist } from '@fortawesome/free-regular-svg-icons';
import { faHand } from '@fortawesome/free-regular-svg-icons';
import { faHandScissors } from '@fortawesome/free-regular-svg-icons';
import { faHandLizard } from '@fortawesome/free-regular-svg-icons';
import { faHandSpock } from '@fortawesome/free-regular-svg-icons';

import styles from './Player.module.css';
import cx from 'classnames';

function Player({ name, score }) {
  const playerColor = name === 'Computer' ? styles.red : styles.purple;
  const playerSelected = name === 'Computer' ? '' : styles.selectable;

  const playerIcon = cx(playerSelected, playerColor, styles.playerIcon, 'far');

  return (
    <div className={styles.playerContainer}>
      <h2 className={styles.marginBottom}>
        {name} - <span>{score}</span>
        <span className={playerColor}></span>
      </h2>
      <FontAwesomeIcon
        icon={faHandBackFist}
        className={playerIcon}
        title="Rock"
      />
      <FontAwesomeIcon icon={faHand} className={playerIcon} title="Paper" />
      <FontAwesomeIcon
        icon={faHandScissors}
        className={playerIcon}
        title="Scissors"
      />
      <FontAwesomeIcon
        icon={faHandLizard}
        className={playerIcon}
        title="Lizard"
      />
      <FontAwesomeIcon
        icon={faHandSpock}
        className={playerIcon}
        title="Spock"
      />
    </div>
  );
}

export default Player;
