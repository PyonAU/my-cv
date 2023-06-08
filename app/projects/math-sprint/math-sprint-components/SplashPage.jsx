import styles from './SplashPage.module.css';
import cx from 'classnames';

const questionsRadioInput = [10, 25, 50, 99];

const SplashPage = ({
  selectQuestionAmount,
  questionCount,
  startRound,
  isStarted,
  bestScoreArray
}) => {
  const selectedContainer = cx(styles.radioContainer, {
    [styles.selectedLabel]: true,
  });

  return (
    <div className={styles.card} hidden={isStarted}>
      <form onClick={selectQuestionAmount}>
        {questionsRadioInput.map((number) => {
          return (
            <div className={styles.selectionContainer} key={number}>
              {/* Questions Radio Input */}
              <div
                className={
                  questionCount === number
                    ? selectedContainer
                    : styles.radioContainer
                }
              >
                <label
                  className={styles.question}
                  htmlFor={`value-${number}`}
                >{`${number} Questions`}</label>
                <input
                  type="radio"
                  name="questions"
                  value={number}
                  id={`value-${number}`}
                  className={styles.questionAmount}
                />
                <span className={styles.bestScore}>
                  <span>Best Score</span>
                  {bestScoreArray.map((score,i) => {
                    if (score.questions === number) {
                     return <span className={styles.bestScoreValue} key={`questions${i}`}>
                        {score.bestScore}
                      </span>;
                    }
                  })}
                </span>
              </div>
            </div>
          );
        })}
        {/* Start Button */}
        <div className={styles.selectionFooter}>
          <button className={styles.start} type="submit" onClick={startRound}>
            Start Round
          </button>
        </div>
      </form>
    </div>
  );
};

export default SplashPage;
