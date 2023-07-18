import Display from './Display';
import NumberButtons from './NumberButtons';
import OperatorButtons from './OperatorButtons';
import ClearButton from './ClearButton';
import BackButton from './BackButton';
import EqualButton from './EqualButton';
import styles from './Calculator.module.css';

const Calculator = () => {
  return (
    <>
      <div className={styles.calculator}>
        {/* Wrap Display & Buttons */}
        <div className={styles.wrapper}>
          <Display />
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
      </div>
    </>
  );
};

export default Calculator;
