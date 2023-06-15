'use client';

import { useEffect, useState } from 'react';
import styles from './JokeTeller.module.css';

const JokeTellerPage = () => {
  // State
  const [newJoke, setNewJoke] = useState('');

  const handlePlayJoke = () => {
    const fetchJokes = async () => {
      const response = await fetch(`/api/joke-teller`);
      const data = await response.json();

      if (data.setup) {
        setNewJoke(`${data.setup} ... ${data.delivery}`);
      } else {
        setNewJoke(data.joke);
      }
    };

    fetchJokes();
  };

  console.log('newJoke:', newJoke);

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
        <button className={styles.jokeButton} onClick={handlePlayJoke}>
          Tell Me A Joke
        </button>
        <audio controls></audio>
      </div>
    </>
  );
};

export default JokeTellerPage;
