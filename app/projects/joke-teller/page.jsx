'use client';

import styles from './JokeTeller.module.css';

const JokeTellerPage = () => {
  return (
    <>
      <style jsx global>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
          body {
            background: #45badd;
          }
        `}
      </style>
      <div className={styles.container}>
        <button className={styles.jokeButton}>Tell Me A Joke</button>
        <audio controls></audio>
      </div>
    </>
  );
};

export default JokeTellerPage;
