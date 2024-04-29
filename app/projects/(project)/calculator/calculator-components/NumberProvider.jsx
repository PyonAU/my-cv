import { useState, createContext } from 'react';

export const NumberContext = createContext();

const NumberProvider = ({ children }) => {
  // State
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [operatorType, setOperatorType] = useState('');
  const [history, setHistory] = useState({
    firstValue: '',
    operatorValue: '',
    secondValue: '',
    calculation: '',
  });
  const [historyArray, setHistoryArray] = useState([]);

  // Destructuring
  const { secondValue, calculation } = history;

  const handleDisplayValue = (num) => {
    if ((!number.includes('.') || num !== '.') && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

  const handleStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setOperatorType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
      const deleteNumber = number.slice(0, number.length - 1);
      setNumber(deleteNumber);
    }
  };

  const handleOperators = (type) => {
    if (number) {
      setOperatorType(type);
      handleStoredValue();
    }
    if (storedNumber) {
      setOperatorType(type);
    }
  };

  const calculate = () => {
    let operation;
    let input;

    if (number && storedNumber) {
      input = {
        firstValue: storedNumber,
        operatorValue: operatorType,
        secondValue: number,
      };
    } else {
      input = {
        firstValue: calculation,
        operatorValue: operatorType,
        secondValue: secondValue,
      };
    }
    switch (operatorType) {
      case '+':
        operation = (a, b) =>
          Math.round((parseFloat(a) + parseFloat(b)) * 100) / 100;
        break;
      case '-':
        operation = (a, b) =>
          Math.round((parseFloat(a) - parseFloat(b)) * 1000) / 1000;
        break;
      case '÷':
        operation = (a, b) =>
          Math.round((parseFloat(a) / parseFloat(b)) * 1000) / 1000;
        break;
      case 'x':
        operation = (a, b) =>
          Math.round(parseFloat(a) * parseFloat(b) * 1000) / 1000;
        break;
      default:
        break;
    }
    const value = operation(+input.firstValue, +input.secondValue);
    setHistory({ ...input, calculation: value });
    setHistoryArray((hist) =>
      hist.length
        ? [{ ...input, calculation: value }, ...hist]
        : [{ ...input, calculation: value }]
    );
    setStoredNumber(() => value);
    setNumber('');
  };

  const handleDeleteHistory = () => {
    setHistory({
      firstValue: '',
      operatorValue: '',
      secondValue: '',
      calculation: '',
    });
    setHistoryArray([]);
  };

  return (
    <NumberContext.Provider
      value={{
        number,
        storedNumber,
        handleDisplayValue,
        handleOperators,
        handleClearValue,
        handleBackButton,
        calculate,
        historyArray,
        handleDeleteHistory,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
