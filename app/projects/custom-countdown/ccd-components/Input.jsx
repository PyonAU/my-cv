import { useState, useEffect } from 'react';
import styles from './Input.module.css';

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const Input = () => {
  // State
  const [userInput, setUserInput] = useState('');
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Variables
  let distance = 0;
  let countdownTimer;

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput({
      title: event.target[0].value,
      date: event.target[1].value,
    });
  };

  console.log('userInput.date:', userInput.date);

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
    }
  };

  useEffect(() => {
    countdownTimer = setInterval(() => calculateTimeLeft(), second);
  }, [userInput]);

  return (
    <div>
      {/* Container */}
      <div className={styles.container}>
        {/* Input */}
        <div
          className={styles.inputContainer}
          hidden={userInput.date !== undefined ? true : false}
        >
          <h1 className={styles.bigTitle}>Create a Custom Countdown!</h1>
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
            <input className={styles.inputField} type="date" />
            <button className={styles.buttons} type="submit">
              Submit
            </button>
          </form>
        </div>

        {/* Countdown */}
        <div
          className={styles.countdown}
          hidden={userInput.date === undefined || distance < 0 ? true : false}
        >
          <h1 className={styles.bigTitle}>{userInput.title}</h1>
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
          <button className={styles.buttons}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Input;
