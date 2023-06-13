import { useState, useEffect } from 'react';
import styles from './Input.module.css';

// Set Date Input Min with Today's Date so that a user cannot select past dates
const today = new Date().toISOString().split('T')[0];

// Variables
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let distance = 0;
let countdownTimer;

const Input = () => {
  // State
  const [userInput, setUserInput] = useState({
    title: '',
    date: '',
  });
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput({
      title: event.target[0].value,
      date: event.target[1].value,
    });
  };

  // Calculate days, hours, minutes and seconds
  const calculateTimeLeft = () => {
    if (userInput.date) {
      // Get the current time
      const currentTime = new Date().getTime();
      console.log('currentTime:', currentTime);

      // Get the user input time
      const userInputTime = new Date(userInput.date).getTime();
      console.log('userInputTime:', userInputTime);

      // Get the time remaining until the countdown date
      distance = userInputTime - currentTime;

      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      // Set the setTime state to each new time
      setTime({ days: days, hours: hours, minutes: minutes, seconds: seconds });

      // Save to localStorage
      localStorage.setItem('countdown', JSON.stringify(userInput));
    }
  };

  useEffect(() => {
    countdownTimer = setInterval(() => calculateTimeLeft(), second);
  }, [userInput]);

  const handleReset = () => {
    clearInterval(countdownTimer);
    setUserInput({
      title: '',
      date: '',
    });
    setTime({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    distance = 0;
    localStorage.removeItem('countdown');
  };

  // Clear interval when countdown ends
  useEffect(() => {
    if (distance < 0) {
      clearInterval(countdownTimer);
    }
  });

  // Restore Previous Countdown
  useEffect(() => {
    // Get countdown from localStorage if available
    if (localStorage.getItem('countdown')) {
      setUserInput(JSON.parse(localStorage.getItem('countdown')));
    }
  }, []);

  return (
    <div>
      {/* Container */}
      <div className={styles.container}>
        {/* Input */}
        <div
          className={styles.inputContainer}
          hidden={userInput.date !== '' ? true : false}
        >
          <h1 className={styles.mainTitle}>Create a Custom Countdown!</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.labels} htmlFor="title">
              Title
            </label>
            <input
              className={styles.inputField}
              type="text"
              placeholder="What are you counting down to?"
            />
            <label className={styles.labels} htmlFor="date-picker">
              Select a Date
            </label>
            <input className={styles.inputField} type="date" min={today} />
            <button className={styles.buttons} type="submit">
              Submit
            </button>
          </form>
        </div>

        {/* Countdown */}
        <div
          className={styles.countdown}
          hidden={userInput.date === '' || distance < 0 ? true : false}
        >
          <h1 className={styles.mainTitle}>{userInput.title}</h1>
          <ul className={styles.timer}>
            {Object.entries(time).map(([key, value], i) => {
              return (
                <li className={styles.dateAndTime} key={i}>
                  <span>{value}</span>
                  {key}
                </li>
              );
            })}
          </ul>
          <button className={styles.buttons} onClick={handleReset}>
            Reset
          </button>
        </div>

        {/* Complete */}
        <div className={styles.complete} hidden={distance >= 0 ? true : false}>
          <h1 className={styles.completeTitle}>Countdown Complete!</h1>
          <h1
            className={styles.mainTitle}
          >{`${userInput.title} finished on ${userInput.date}`}</h1>
          <button className={styles.buttons} onClick={handleReset}>
            New Countdown
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
