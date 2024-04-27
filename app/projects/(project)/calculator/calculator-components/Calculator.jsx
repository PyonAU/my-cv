import { useState } from 'react';
import Display from './Display';
import NumberButtons from './NumberButtons';
import OperatorButtons from './OperatorButtons';
import ClearButton from './ClearButton';
import BackButton from './BackButton';
import EqualButton from './EqualButton';
import HistoryDisplay from './HistoryDisplay';
import styles from './Calculator.module.css';

const Calculator = () => {
  // State
  const [isClicked, setIsClicked] = useState(false);
  const [width, setWidth] = useState('400px');
  const [visibility, setVisibility] = useState('hidden');

  const handleHistory = () => {
    setIsClicked((prevState) => !prevState);
    setWidth(width === '400px' ? '800px' : '400px');
    setVisibility(visibility === 'hidden' ? 'visible' : 'hidden');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.calculator} style={{ width }}>
          {/* Wrap Display & Buttons */}
          <div className={styles.wrapper}>
            <Display handleHistory={handleHistory} />
            {/* Buttons */}
            <div className={styles.calculatorButtons}>
              <OperatorButtons buttonValue="+" />
              <OperatorButtons buttonValue="-" />
              <OperatorButtons buttonValue="x" />
              <OperatorButtons buttonValue="÷" />
              <NumberButtons buttonValue="7" />
              <NumberButtons buttonValue="8" />
              <NumberButtons buttonValue="9" />
              <BackButton />
              <NumberButtons buttonValue="4" />
              <NumberButtons buttonValue="5" />
              <NumberButtons buttonValue="6" />
              <NumberButtons buttonValue="1" />
              <NumberButtons buttonValue="2" />
              <NumberButtons buttonValue="3" />
              <NumberButtons buttonValue="." />
              <NumberButtons buttonValue="0" />
              <ClearButton />
              <EqualButton />
            </div>
          </div>

          {/* History Display */}
          <div className={styles.wrapper}>
            <HistoryDisplay isClicked={isClicked} visibility={visibility} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
