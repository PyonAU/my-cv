'use client';

import { useState } from 'react';
import styles from './JokeTeller.module.css';

const JokeTellerPage = () => {
  // State
  const [isDisabled, setIsDisabled] = useState(false);

  const handlePlayJoke = () => {
    const fetchVoice = async () => {
      const response = await fetch(`/api/joke-teller`);
      const audioSrc = await response.text();
      
      const audio = new Audio();
      audio.src = audioSrc;
      audio.addEventListener('ended', () => setIsDisabled(false));
      audio.load();
      audio.play();
    };

    fetchVoice();
    setIsDisabled(true);
  };

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
        <button
          className={styles.jokeButton}
          onClick={handlePlayJoke}
          disabled={isDisabled}
        >
          Tell Me A Joke
        </button>
        <audio controls hidden></audio>
      </div>
    </>
  );
};

export default JokeTellerPage;

/*
References:
https://oxylabs.io/blog/nodejs-fetch-api
http://corpus.hubwiz.com/2/node.js/21558763.html
*/
