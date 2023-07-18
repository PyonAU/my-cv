import { useState, createContext } from 'react';

export const NumberContext = createContext();

const NumberProvider = ({ children }) => {
  // State
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [operatorType, setOperatorType] = useState('');

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
    setFunctionType('');
  };

  const handleBackButton = () => {
    if (number !== '') {
      const deleteNumber = number.slice(0, number.length - 1);
      setNumber(deleteNumber);
    }
  };

  return (
    <NumberContext.Provider
      value={{
        number,
        handleDisplayValue,
        handleClearValue,
        handleBackButton,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
