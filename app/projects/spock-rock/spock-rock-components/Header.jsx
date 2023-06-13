import { useState } from 'react';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const playRules = [
  'Rock defeats Scissors and Lizard',
  'Paper defeats Rock and Spock',
  'Scissors defeats Paper and Lizard',
  'Lizard defeats Paper and Spock',
  'Spock defeats Rock and Scissors',
];

const Header = () => {
  // State
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Rock Paper Scissors Lizard Spock</h1>
        <div
          className={styles.iconContainer}
          onClick={() => setIsClicked(true)}
        >
          <FontAwesomeIcon
            icon={faCircleInfo}
            title="How to play?"
            className={styles.infoIcon}
          />
        </div>

        {isClicked ? (
          <div className={styles.popupContainer}>
            {playRules.map((rule, i) => {
              return (
                <ul key={i}>
                  <li className={styles.infoTexts}>
                    {rule}
                  </li>
                </ul>
              );
            })}
            <button className={styles.okButton} onClick={() => setIsClicked(false)}>OK</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
