import styles from './Input.module.css';

const Input = () => {
  return (
    <div>
      {/* Container */}
      <div className={styles.container}>
        {/* Input */}
        <div className={styles.inputContainer}>
          <h1 className={styles.bigTitle}>Create a Custom Countdown!</h1>
          <form className={styles.form}>
            <label className={styles.labels} htmlFor="title">Title</label>
            <input className={styles.inputField} type="text" placeholder="What are you counting down to?" />
            <label className={styles.labels} htmlFor="date-picker">Select a Date</label>
            <input className={styles.inputField} type="date" />
            <button className={styles.submitButton} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;