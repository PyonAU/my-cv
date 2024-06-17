import { spockRockGameInfo, playRules } from '../../../lib/gameInfo';
import styles from './Header.module.css';
import HelpButton from '../../../../../components/HelpButton';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Rock Paper Scissors Lizard Spock</h1>
        <HelpButton
          infoText={spockRockGameInfo}
          instructions={playRules}
          orderedList={false}
          autoHeight={true}
        />
      </div>
    </>
  );
};

export default Header;
