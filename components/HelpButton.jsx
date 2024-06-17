import { useState } from 'react';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from '@mui/material/Tooltip';
import styles from './HelpButton.module.css';

const HelpButton = ({ infoText, instructions, orderedList, autoHeight }) => {
  const [isClicked, setIsClicked] = useState(false);

  const infoContainerSetting = autoHeight
    ? styles.infoContainerAutoHeight
    : styles.infoContainer;

  return (
    <>
      <Tooltip title="How to use?">
        <HelpIcon
          className={styles.helpIcon}
          onClick={() => setIsClicked((prev) => !prev)}
        />
      </Tooltip>

      {isClicked ? (
        <div className={infoContainerSetting}>
          <p>{infoText}</p>
          {orderedList ? (
            <ol>
              {instructions.map((instruction, i) => {
                return <li key={i}>{instruction}</li>;
              })}
            </ol>
          ) : (
            <ul>
              {instructions.map((instruction, i) => {
                return <li key={i}>{instruction}</li>;
              })}
            </ul>
          )}

          <button
            className={styles.okButton}
            onClick={() => setIsClicked(false)}
          >
            OK
          </button>
        </div>
      ) : null}
    </>
  );
};

export default HelpButton;
