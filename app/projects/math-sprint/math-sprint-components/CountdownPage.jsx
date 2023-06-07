import styles from './CountdownPage.module.css';

function CountdownPage({ isStarted, text, isPlaying }) {

  return (
    <div className={styles.card} hidden={text === 'GO!' ? isPlaying : !isStarted}>
      <h1 className={styles.countdown}>{text}</h1>
    </div>
  );
}

export default CountdownPage;
