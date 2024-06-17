import { mathGameInfo, mathGameInstructions } from '../../../lib/gameInfo';
import HelpButton from '../../../../../components/HelpButton';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <h1>Math Sprint Game</h1>
      <HelpButton
        infoText={mathGameInfo}
        instructions={mathGameInstructions}
        orderedList={true}
        autoHeight={false}
      />
    </div>
  );
}

export default Header;
